export const generateRandomData = (deviceId) => {
    const obj = {
        deviceId: deviceId,
        humidity: Math.floor(Math.random() * 10000) / 100,
        temperature: Math.floor(Math.random()*150) / 10 + 20,
        ratio0 : Math.floor(Math.random() * 10000) / 100,
        ratio1 : Math.floor(Math.random() * 10000) / 100,
        ratio2 : Math.floor(Math.random() * 10000) / 100,
        co2 :  Math.floor(Math.random() * 100) / 100, 
        waterLevel: Math.floor(Math.random() * 10000) / 100,
        pm : Math.floor(Math.random() * 10000) / 100,
        vis : Math.floor(Math.random() * 10000) / 100,
        ir : Math.floor(Math.random() * 10000) / 100,
        uv : Math.floor(Math.random() * 10000) / 100,
        pumpPeriod : Math.floor(Math.random() * 10),
        pumpFrequency: Math.floor(Math.random() * 10),
        pumpStatus : Math.round(Math.random()),
        pumpTime : Math.floor(Math.random() * 10),
        lampBrightnessWhite : Math.floor(Math.random() * 10),
        lampBrightnessYellow : Math.floor(Math.random() * 10),
        lampStatus : Math.round(Math.random()),
        fanSpeed : Math.floor(Math.random() * 10),
        fanStatus : Math.round(Math.random()),
    };

    return obj;
}