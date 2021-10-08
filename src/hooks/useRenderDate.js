// useRenderDate 달력의 날짜를 렌더하기 위한 함수.

import React from "react";
import { useSelector } from "react-redux";
import Date from "../components/Date";

const useRenderDate = (start, now, current) => {
    const mode = useSelector((state) => state.calendar.mode); // 완료 일정 보기(completed) / 모든 일정 보기(all)를 의미
    const schedules = useSelector((state) => state.calendar.scheduleList) || [];
    const nowFormat = now.clone().format("YYYYMMDD"); // 오늘 날짜에만 별도로 표시하기 위해 사용

    return (
        <React.Fragment>
            {
                // 7*6의 형식, Array[42]를 활용, 캘린더 생성
                [...Array(42)].map((n, idx) => {
                    let target = start.clone().add(idx, "d"); // 렌더 할 날짜
                    let today = target.clone().format("YYYYMMDD") === nowFormat; //오늘인지 확인
                    let thisMonth =
                        target.clone().format("YYYYMM") ===
                        current.clone().format("YYYYMM"); // 해당 날짜가 이번달인지 확인
                    
                    // mode 에 따라서 보여줘야 할 스케줄 필터링
                    let targetList =
                        mode === "all"
                            ? schedules.filter(
                                (schedule) =>
                                    schedule.date === parseInt(target.format("YYYYMMDD"))
                                )

                            : schedules.filter(
                                (schedule) => 
                                    schedule.date === parseInt(target.format("YYYYMMDD")) &&
                                    schedule.isCompleted === true
                                );
                    
                    return (
                        <Date
                            key={idx}
                            list={targetList}
                            today={today}
                            thisMonth={thisMonth}
                        >
                            {target.format("D")}
                        </Date>
                    );
                })
            }
        </React.Fragment>
    );
};

export default useRenderDate;