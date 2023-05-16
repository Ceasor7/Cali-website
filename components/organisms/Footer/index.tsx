import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-32 pb-16">
      <div className="flex justify-center"> {/* Added justify-center class */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`Design By CALI`}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
