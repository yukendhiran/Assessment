import '@/styles/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';



export default function App(){

    return(
        <div className='flex grow-0 font-sans'>
      <div className=' w-[588px]  bg-black  text-lg flex'>
        <div className='w-[256px] h-[88px] mt-[464px]  non-italic font-bold absolute mx-[171px] text-white text-7xl'>
				Board.        
        </div>
      </div>
      <div className=' bg-[#F5F5F5] h-screen w-[852px]'>
        <div className='absolute ml-[244px]' >
				<div className=' w-[131px] h-[44px] leading-[44px] font-sans mt-[260px] text-4xl font-bold '>
					 Sign In
				 </div> 
				 <div className='font-sansl  w-[161px] h-[19px] leading-[19.2px] text-base font-normal '>
				 	Sign in to your account
				 </div> 
				 <div className='flex  mt-[26px] space-x-[25px] font-sans font-normal text-xs text-[#858585]' >
					<div className='w-[180px] h-[30px] bg-white rounded-[10px] pl-[19px] pt-[8px] pb-[7px] pr-[19px] flex' >
						 <FontAwesomeIcon icon={faGoogle} className='w-[11.5px] h-[14px] mr-[10.5px] '  />  sign in with google
				   </div>
				 	<div className='w-[180px] h-[30px] bg-white rounded-[10px] pl-[19px] pt-[8px] pb-[7px] pr-[19px] flex' >
						 <FontAwesomeIcon icon={faApple} className='w-[11.5px] h-[14px] mr-[10.5px] ' />  sign in with apple
				   </div>				 
				 </div>
				 <div className=' w-[385px] h-[317px] bg-white mt-[25px] rounded-[20px]'>
				 	
				 	<div className='pl-[30px] pt-[30px] leading-20'>
				 		<div className='leading-10'>
				 			<label htmlFor="email" className='font-sansl h-[19px]  font-normal text-[16px] leading-[19px] text-black ' >
      						Email address
      					</label><br/>
      					<input type="email" id="email" name="email" 
      					className='bg-[#F5F5F5] w-[325px] h-[40px] rounded-[10px] placeholder-black placeholder-[16px] px-[10px] py-[15px]'
      					placeholder='johndoe@gmail.com' /> 
				 		</div>
      				
						<div className='leading-10' >
							<label htmlFor="password" className='font-sansl h-[19px]  font-normal text-[16px] leading-[19px] text-black '>
      						Password
      					</label><br/>
      					<input type="password" id="password" name="password" 
      					className='bg-[#F5F5F5] w-[325px] h-[40px] rounded-[10px] placeholder-black placeholder-[16px] px-[10px] py-[15px]'
      					placeholder='••••••••' />
						</div>
						<div className='font-sansl font-normal text-[16px] mt-[20px] text-[#346BD4]'>
							Forgot password?						
						</div>
						 		<Link href='/_dashboard'>
       							 <div className="bg-black w-[325px] h-[40px] rounded-[10px] flex text-white mt-[20px]">
         							 <span className="font-sans font-bold text-[16px] leading-[19.5px] m-auto">
												Sign In
            						</span>
        							</div>
        						</Link>
      				
      			</div>
      		</div>
				 <div className='ml-[50px] mt-[20px] w-[261px] font-sansl font-normal text-[16px] text-[#858585] h-[19px]'>
						Don’t have an account? <span className='text-[#346BD4]'>Register here</span>      			
      		</div>
        </div>
      </div>
      
	 </div>
    )
}