import React, { MouseEventHandler, useState } from 'react'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import randomString from 'utils/randomString'
interface Props {
  features: string[]
  buttonOnclick?: MouseEventHandler<HTMLButtonElement>
}
const PricingCard = ({
  features,
  buttonOnclick = () => {},
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>()
  return (
    <div
      className="w-full h-fit bg-light rounded-[10px] px-10 py-7 flex flex-col place-content-between border-2 border-transparent hover:border-borderLight transition-all duration-300"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center py-9">
        {features.map((feature) => (
          <Text  key={randomString(64)} value={feature} textStyle="PricingDetail" />
        ))}
      </div>
     
    </div>
  )
}

export default PricingCard
