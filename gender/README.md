THE DIRECTORY CONTAINS TWO files and THREE sub-directories

-------------------------------------------------------------------------------------------------------------------------------------------

*************************************INPUT FILE**********************************************
	
Name of the File : GENDER_RATIO_DATASET
Source of the file : Calculated
Description : Contains Female-to-Total population ratio for the period 2009 to 2015 for each zone of SURAT city.
	Contains the attributes : ZoneName, Year, Month, Birth, Death, (Birth – Death),Population, Mbirth, Fbirth, Mdeath, Fdeath, Mnet, Fnet, Mpop, Fpop, Fratio
	
*********************************************************************************************

-------------------------------------------------------------------------------------------------------------------------------------------

Name of the sub-directory : birth_data
No. of files in the directory : 7

Name of the File : 	Birth_Registration_Year_2009.csv
			Birth_Registration_Year_2010.csv
			Birth_Registration_Year_2011.csv
			Birth_Registration_Year_2012.csv
			Birth_Registration_Year_2013.csv
			Birth_Registration_Year_2014.csv
			Birth_Registration_Year_2015.csv
			
Source of the files : https://surat.data.gov.in/catalog/birth-data-surat

Description :  Contains zone-wise male and female birth count for the period of 2009 to 2015.
	Contains the attributes : ZoneName, Year, Month, Male ,Female, Total

-------------------------------------------------------------------------------------------------------------------------------------------

Name of the sub-directory : death_data
No. of files in the directory : 7

Name of the File : 	Death_Registration_Year_2009.csv
			Death_Registration_Year_2010.csv
			Death_Registration_Year_2011.csv
			Death_Registration_Year_2012.csv
			Death_Registration_Year_2013.csv
			Death_Registration_Year_2014.csv
			Death_Registration_Year_2015.csv
			
Source of the files : https://surat.data.gov.in/catalog/death-data-surat

Description :  Contains zone-wise male and female death count for the period of 2009 to 2015.
	Contains the attributes : ZoneName, Year, Month, Male ,Female, Total

-------------------------------------------------------------------------------------------------------------------------------------------

Name of the sub-directory : Birth-Death
No. of files in the directory : 9

Name of the File : 	2009_birth-death.xlsx
			2010_birth-death.xlsx
			2011_birth-death.xlsx
			2012_birth-death.xlsx
			2013_birth-death.xlsx
			2014_birth-death.xlsx
			2015_birth-death.xlsx
			Combined_Birth-Death (Arranged year wise).xlsx
			Combined_Birth-Death (Arranged zone wise).xlsx
			
Source of the files : calculated from the data present in the directories birth_data and death_data.

Description :  	XXXX_birth-death.xlsx contains zone wise Birth and Death count for the year XXXX
	Contains the attributes : ZoneName, Year, Month, Birth, Death, (Birth-Death)
	
		Combined_Birth-Death (Arranged year wise).xlsx	is concatenation of the records present in the files XXXX_birth-death.xlsx and arranged according to the year.
	Contains the attributes : ZoneName, Year, Month, Birth, Death, (Birth-Death)
	
		Combined_Birth-Death (Arranged zone wise).xlsx	is concatenation of the records present in the files XXXX_birth-death.xlsx and arranged according to the zones of SURAT city..
	Contains the attributes : ZoneName, Year, Month, Birth, Death, (Birth-Death)	
	
-------------------------------------------------------------------------------------------------------------------------------------------

Name of the File : A_Census_Surat_2011_households.csv
Source of the file : https://surat.data.gov.in/catalog/census-data-surat

Description : Zone-wise population as well as male and female population of SURAT city obtained in census 2011.
	Contains the attributes : Zone,Population, Male Population, Female Population. 
	
-------------------------------------------------------------------------------------------------------------------------------------------	
