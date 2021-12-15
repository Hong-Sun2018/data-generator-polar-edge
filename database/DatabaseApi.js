import database from './DatabaseConfig.js';

export const insertRow = async(obj) => {
    try {
        await database.query(`INSERT INTO test_table 
        (device_id, humidity, temperature, ratio0, ratio1, ratio2, co2, water_level, pm, vis, ir, uv, pump_period, pump_frequency, 
            pump_status, pump_time, lamp_brightness_white, lamp_brightness_yellow, lamp_status, fan_speed, fan_status) 
            VALUES ('${obj.deviceId}', ${obj.humidity}, ${obj.temperature}, ${obj.ratio0}, ${obj.ratio1}, ${obj.ratio2}, 
            ${obj.co2}, ${obj.waterLevel}, ${obj.pm}, ${obj.vis}, ${obj.ir}, ${obj.uv}, ${obj.pumpPeriod}, ${obj.pumpFrequency}, 
            ${obj.pumpStatus}, ${obj.pumpTime}, ${obj.lampBrightnessWhite}, ${obj.lampBrightnessYellow}, ${obj.lampStatus}, 
            ${obj.fanSpeed}, ${obj.fanStatus})`);
    } catch (err) {
        console.log('Database Insertion Error: ', err);
    }
}