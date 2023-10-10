
import { useState } from 'react'
import { 
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,

} from '@chakra-ui/react'

function App() {
  //State / Variable
  const [gajiPokok, setGajiPokok] = useState<number>(0);
  const [tunjangan, setTunjangan] = useState<number>(0);
  const [kewajibanPokok, setKewajibanPokok] = useState<number>(0);
  const [gajiKotor, setGajiKotor] = useState<number>(0);
  const [gajiBersih, setGajiBersih] = useState<number>(0);


  //Operator
  const hitungGaji = () => {
    // Menghitung gaji kotor
    const gajiKotor = gajiPokok + tunjangan;

    // Menghitung gaji pokok (tanpa kewajiban pokok)
    // const gajiPokokBersih = gajiPokok - kewajibanPokok;

    // Menghitung gaji bersih
    const gajiBersih = gajiKotor - kewajibanPokok;

    // Memperbarui state dengan hasil perhitungan
    setGajiKotor(gajiKotor);
    setGajiBersih(gajiBersih);
  };

  return (
    <Box background={'indigo'} padding={'20px'} display={'flex'} justifyContent={'center'}>
        <Box display={'flex'} gap={'30px'}>
          <Box display={'flex'} flexDirection={'column'} width={'350px'} color={'white'} gap={'20px'}>
            <Heading my={'20px'}>Salary Calculating</Heading>
            <FormControl>
              <FormLabel>Gaji Pokok</FormLabel>
              <Input
              color={'black'} 
              type='number' 
              background={'white'} 
              value={gajiPokok} 
              onChange={(e) => setGajiPokok(parseFloat(e.target.value))}>
              </Input>
            </FormControl>
            <FormControl>
              <FormLabel>Tunjangan</FormLabel>
              <Input
              color={'black'}  
              type='number' 
              background={'white'}
              value={tunjangan}
              onChange={(e) => setTunjangan(parseFloat(e.target.value))}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Kewajiban Pokok</FormLabel>
              <Input
              color={'black'}  
              type='number' 
              background={'white'}
              value={kewajibanPokok}
              onChange={(e) => setKewajibanPokok(parseFloat(e.target.value))}
              ></Input>
            </FormControl>
            <Box display={'flex'} justifyContent={'end'}>
              <Button colorScheme='green' onClick={hitungGaji}>Hitung Gaji</Button>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'column'} width={'350px'} color={'white'} gap={'20px'}>
            <Heading my={'20px'}>Hasil</Heading>
            <Box display={'flex'} gap={'10px'}>
              <Heading as={'h3'} fontSize={'md'}>Gaji Kotor: </Heading>
              <Text>Rp. {gajiKotor.toLocaleString('id-ID')}</Text>
            </Box>
            <Box display={'flex'} gap={'10px'}>
              <Heading as={'h3'} fontSize={'md'}>Gaji Pokok: </Heading>
              <Text>Rp. {gajiPokok.toLocaleString('id-ID')}</Text>
            </Box>
            <Box display={'flex'} gap={'10px'}>
              <Heading as={'h3'} fontSize={'md'}>Gaji Bersih: </Heading>
              <Text>Rp. {gajiBersih.toLocaleString('id-ID')}</Text>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default App
