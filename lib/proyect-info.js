import fs from 'fs';

const proyectInfo = async () => {

    let info = {
        contenidoStr: '',
        contenidoObj: {},
        size: 0
    };
    try {
        // Reading info from package.json
        info.contenidoStr = await fs.promises.readFile('package.json','utf-8');
        info.contenidoObj = JSON.parse(info.contenidoStr);
        info.size = info.contenidoStr.length;
        console.log('\n-------------------------------------------');
        console.log('info = ', info);
        console.log('-------------------------------------------\n');
        // writing info in info.txt
        await fs.promises.writeFile('info.txt', JSON.stringify(info, null, 4));
    }
    catch(error) {
        console.log('\n-------------------------------------------');
        console.log(`R/W error => ${error}`);
        console.log('-------------------------------------------\n');
    }
    return info;
}

export default proyectInfo;