import React from 'react'

import DefaultLayout from '../LayoutHoc/Default.Layout'
import Poster from '../Components/poster/Poster.Component'
import PlayFilter from '../Components/PlatFilter/PlayFilter'

const PlayPage = () => {
  return (
    <>
    <div className='container mx-auto px-5 my-10'>
      <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
        <div className='lg:w-3/4 p-4 bg-gray-200 rounded'>
          <h2 className='text-2xl font-bold mb-4'>Plays in Nagpur</h2>
          <div className='flex flex-wrap'>
            <div className='w-1/2 md:1/3 lg:3/12 my-3 flex items-center'>
              <Poster src="" title="" subtitle="" />
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default DefaultLayout(PlayPage)