'use client'

import { SubStep } from "@/types/instruction";
import Slider, { Settings } from "react-slick";
import StepContentItem from "./StepContentItem";
import { useContext, useEffect, useRef, useState } from "react";
import DotShadowRoundedContainer from "../DotShadow";
import { KitContext } from "@/providers/KitProvider";
import { Button } from "@mui/material";

interface SubStepSliderProps {
  steps: SubStep[],
}

type TPosition = "first" | 'mid' | "last" | 'alone';

const SubStepItem = ({ step, pos }: { step: SubStep, pos: TPosition }) => {
  const { goToNextSubStep, goToPrevSubStep } = useContext(KitContext);

  return (
    // <div className="py-[40px] 2xl:min-w-[700px] 2xl:max-w-[800px] xl:min-w-[300px] xl:max-w-[400px] lg:min-w-[300px] lg:max-w-[360px] w-[240px] mx-auto">
    <div className="py-[40px] w-[378px] mx-auto">
      <div className="p-[20px] flex flex-col gap-[20px] activestep bg-white">
        {
          step.title &&
          <div className="font-medium text-[16px]">{step.title}</div>
        }
        <div className="overflow-auto rounded-[12px]" style={{ height: 'calc(100vh - 450px)' }} >
          {
            step.elements.map((item, index) => (
              <StepContentItem item={item} key={index} />
            ))
          }
        </div>

        <div className="flex items-center justify-end gap-[16px] flex-wrap">
          <Button
            variant="contained"
            className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
            onClick={goToPrevSubStep}
          >
            {`Prev`}
          </Button>

          <Button
            variant="contained"
            className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
            onClick={goToNextSubStep}
          >
            {`Next`}
          </Button>
        </div>
      </div>
    </div>
  )
}

const SubStepSlider = (props: SubStepSliderProps) => {
  const { steps } = props;
  const { currentSubStepIndex, setCurrentSubStepIndex } = useContext(KitContext);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    className: "center",
    centerMode: true,
    slidesToShow: 1,
    centerPadding: "120px",
    initialSlide: 0,
    infinite: false,
    responsive: [

    ],
    beforeChange: (current: number, next: number) => {
      setCurrentSubStepIndex(next);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSubStepIndex);
    }
  }, [currentSubStepIndex, sliderRef.current]);

  return (
    // <div className="2xl:w-[1200px] xl:w-[800px] lg:w-[650px] w-[550px] mx-auto ">
    <div className="w-[680px] mx-auto ">
      {
        steps.length === 1 &&
        <div className="!flex items-center justify-center mx-auto slick-slide slick-active !float-none">
          <SubStepItem step={steps[0]} pos="alone" />
        </div>
      }
      {
        steps.length > 1 &&
        <Slider
          {...settings}
          ref={sliderRef}
        >
          {
            steps.map((step, index) => {
              let pos: TPosition = 'mid';

              if (index === steps.length - 1) pos = 'last';
              if (index === 0) pos = 'first';

              return (
                <SubStepItem step={step} key={index} pos={pos} />
              )
            })
          }
        </Slider>
      }
    </div>
  )
}

export default SubStepSlider;