import '@/styles/globals.css'
import { faChartPie, faTicketAlt, faCalendar, faUser, faCog, faSearch, faBell, faMoneyBill, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import Card from './Card'
import Chart from './Chart'


export default function Dashboard() {
  return (
  <div>
    	<div className='bg-[#DDDDDD] scroll h-screen w-screen flex '>
    		<div className=' bg-black w-[280px] h-[944px] rounded-[30px] mt-[40px] ml-[40px]  ' >
    			<div className='mt-[60px] ml-[50px] font-sans'>
    				<div className='  font-bold text-[36px] w-[123px] h-[44px] text-white  ' >
    					Board.
    				</div>
    				<div className='text-white mt-[60px] font-bold text-[18px] '>
			   	  <FontAwesomeIcon icon={faChartPie} color="white" />
				 	<span className=' ml-[20.4px] w-[140px] h-[22px]  '>Dashboard</span>
    				</div>
    				<div className='text-white mt-[40px] font-normal text-[18px] leading=[22px] '>
			     		<FontAwesomeIcon icon={faTicketAlt} color="white" />
				 		<span className=' ml-[20.4px] w-[115px] h-[22px]  '>Transactions</span>
    				</div>
    				<div className='text-white mt-[40px] font-normal text-[18px] leading=[22px] '>
			     		<FontAwesomeIcon icon={faCalendar} color="white" />
					 	<span className=' ml-[20.4px] w-[93px] h-[22px]  '>Schedules</span>
    				</div>
    				<div className='text-white mt-[40px] font-normal text-[18px] leading=[22px]'>
			     		<FontAwesomeIcon icon={faUser} color="white" />
				 		<span className=' ml-[20.4px] w-[50px] h-[22px]  '>user</span>
    				</div>
    				<div className='text-white mt-[40px] font-normal text-[18px] leading=[22px]'>
			     		<FontAwesomeIcon icon={faCog} color="white" />
				 		<span className=' ml-[20.4px] w-[50px] h-[22px]  '>settings</span>
    				</div>
    				<div className='text-white mt-[376px] font-normal text-[14px] leading=[22px] '>Help</div>
    				<div className='text-white mt-[20px] mb-[60px] font-normal text-[14px] leading=[22px] '>Contactus</div>
    			</div>
    		</div>
    		<div className='flex-row '>
				<div className='flex'>
    			<div className='w-[138px] h-[29px] mt-[60px] ml-[60px] font-bold text-[24px]'>
					Dashboard    		
    			</div>
    			<div className='flex  mt-[60px]'>
    				<div className='relative w-[180px] h-[30px] rounded-[10px] bg-white ml-[575px] flex'>
              <input
                className='block w-full px-3 py-2 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:border-blue-500'
                type='text'
                placeholder='Search...'
              />
              <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                <FontAwesomeIcon icon={faSearch} color='#858585' />
              </div>
            </div>
    				<FontAwesomeIcon icon={faBell} color="black" className='ml-[30px] w-[18px] h-[20px] mt-[5px] ' />
    				<FontAwesomeIcon icon={faUser} color="black" className='ml-[30px] w-[18px] h-[20px] mt-[5px] mr-[47px] ' /><br/>
    			</div>
    		</div> 
			<div className='flex mt-[40px] ml-[60px] space-x-[36.84px]'>
    			<Card
				accent='#DDEFE0'
				icon={ faMoneyBill}
				title="Total Revenues"
				count="$2,129,430"    		
    			/>
    			
    			<Card
				accent='#F4ECDD'
				icon={faTicketAlt }
				title="Total Transactions"
				count="1,520"    		
    			/>
    			
    			<Card
				accent='#EFDADA'
				icon={ faThumbsUp}
				title="Total Likes"
				count="9,721"    		
    			/>
    			
    			<Card
				accent='#DEE0EF'
				icon={ faUser}
				title="Total Users"
				count="892"    		
    			/>
    			
    			
    		</div>   
    		
    		<div className=" flex ml-[30px] mt-[40px]  ">
				<Chart />    		
    		</div> 
    		
    		<div className=' flex space-x-[40px] ml-[60px] mt-[40px] '>
    			<div className=" w-[480px] h-[256px] rounded-[20px] bg-white  ">
    				<div className="flex ">
    					<div className=' mt-[30px] ml-[40px] font-sans text-[18px]  font-bold ' >
   	 					Top products 
    					</div>
    					<div>
							<select className=" text-[#858585] w-[97px] h-[15px] mt-[31px] bg-white  ml-[162px] text-[12px] font-normal font-sans ">
     							 <option value="">Select an option</option>
 								 <option value="option1">May-June 2021</option>
 								 <option value="option2">Option 2</option>
 								 <option value="option3">Option 3</option>
							</select>    				
    					</div>
    				</div> 
    				<div className='flex'  >
						<svg className="mt-[23px] ml-[54.69px]" width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
    					   	<mask id="mask0_0_281" className="mask-alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="134" height="134">
   							 <circle cx="67" cy="67" r="67" transform="rotate(180 67 67)" fill="#C4C4C4"/>
 							 </mask>
 							 <g mask="url(#mask0_0_281)">
  							  <rect x="140.634" y="139.307" width="145.941" height="145.941" transform="rotate(180 140.634 139.307)" fill="#98D89E"/>
   						 <path d="M81.5941 -3.31683L67.6634 66.3366L140.634 37.6941V-6.63367L81.5941 -3.31683Z" fill="#EE8484"/>
   						 <path d="M140.634 139.307V37.8119L68.3267 65.6733V139.307H140.634Z" fill="#F7DC7D"/>
  							</g>
						</svg>
    					<div  className='flex flex-col mt-[25px] ml-[43px] space-y-[21px]'>
							<div className=''>
								<div className='flex  items-center ' >
									<div className='rounded-full   bg-[#98D89E] w-[11px] h-[11px] ' ></div> 
									<div className='ml-[10px] w-[77px] h-[17px] font-sans font-bold text-[14px] text-black  ' >Basic Tees</div>
								</div>
								<div className=" font-sansl text-[12px] font-normal w-[24px] h-[14px] flex-wrap ml-[20px] " >55%</div>  								
							</div>	
							
							<div className=''>
								<div className='flex  items-center ' >
									<div className='rounded-full   bg-[#F6DC7D] w-[11px] h-[11px] ' ></div> 
									<div className='ml-[10px] w-[147px] h-[17px] font-sans font-bold text-[14px] text-black  ' >Custom Short Pants</div>
								</div>
								<div className=" font-sansl text-[12px] font-normal w-[24px] h-[14px] flex-wrap ml-[20px] " >31%</div>  								
							</div>	
							
							<div className=''>
								<div className='flex  items-center ' >
									<div className='rounded-full   bg-[#EE8484] w-[11px] h-[11px] ' ></div> 
									<div className='ml-[10px] w-[107px] h-[17px] font-sans font-bold text-[14px] text-black  ' >Super Hoodies</div>
								</div>
								<div className=" font-sansl text-[12px] font-normal w-[24px] h-[14px] flex-wrap ml-[20px] " >14%</div>  								
							</div>
										
    					</div>    				
    				</div>
    			
	    			
    				
    			</div>
    			<div className=" w-[480px] h-[256px] rounded-[20px] bg-white  ">
						 <div>
									<div className="flex ">
    									<div className=' mt-[30px] ml-[40px] w-[162px] h-[22px]  font-sans text-[18px]  font-bold ' >
   	 									Today’s schedule
    									</div>
    									<div className='text-[#858585] flex  mt-[31px] bg-white  ml-[196px] text-[12px] font-normal font-sans '>
    										<div className=" w-[41px] h-[15px]">See All </div>
    										<div className='ml-[6px] w-[8px] h-[5px]  ' >&gt;</div> 
    									</div>
    								</div>
    					
    							<div>
    								<div className=' w-[66px] absolute  ml-[40px] border-[3px] transform origin-top-left rotate-90 border-[#9BDD7C]  ml-[40px]   '></div> 		
    								<div className=' w-[236px] h-[17px] ml-[55px] mt-[28px] text-[14px] font-sansl font-normal  '>Meeting with suppliers from Kuta Bali</div>
    								<div className=" font-sansl text-[12px] font-normal w-[66px] text-[#999999] h-[14px] flex-wrap ml-[55px] mt-[5px] " >14.00-15.00</div>  		
    								<div className=" font-sansl text-[12px] font-normal w-[135px] text-[#999999] h-[14px] flex-wrap ml-[55px] mt-[5px] " >at Sunset Road, Kuta, Bali</div> 
    							</div>
    								
    							
    							<div>
    								<div className=' w-[66px] absolute  ml-[40px] border-[3px] transform origin-top-left rotate-90 border-[#6972C3]  ml-[40px]   '></div> 		
    								<div className=' w-[236px] h-[17px] ml-[55px] mt-[28px] text-[14px] font-sansl font-normal  '>Check operation at Giga Factory 1</div>
    								<div className=" font-sansl text-[12px] font-normal w-[66px] text-[#999999] h-[14px] flex-wrap ml-[55px] mt-[5px] " >18.00-20.00</div>  		
    								<div className=" font-sansl text-[12px] font-normal w-[135px] text-[#999999] h-[14px] flex-wrap ml-[55px] mt-[5px] " >at Central Jakarta</div> 
    							</div>	
    				 
						 </div> 
    				
    			</div>
    		</div>		
    		</div>
    		
    	</div>
    	
   </div>
  );
}