import React from "react";
import Box from "../Box";
import Typography, { H3 } from "../Typography";

export interface ProductDescriptionProps {}

const ProductDescription: React.FC<ProductDescriptionProps> = () => {
  return (
    <Box>
      <H3 mb="1rem">Specification:</H3>
      <Typography>
        <div>
           kamera haqida malumot lar 
        </div>
      </Typography>
    </Box>
  );
};

export default ProductDescription;



// const listarray = [ 
// { 
//   text : '<table border="0" cellspacing="10" style="width:94%">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Матрица :</strong></td>\r\n\t\t\t<td>1/2.5&quot; Progressive Scan CMOS</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Разрешение :</strong></td>\r\n\t\t\t<td>8.0 MP. (UHD 4K) | 3840 (H) &times; 2160 (V)</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Объектив :</strong></td>\r\n\t\t\t<td>2.8 мм</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Угол обзора :</strong></td>\r\n\t\t\t<td>102&deg;</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Светочувствительность :</strong></td>\r\n\t\t\t<td>0.01лк. @(F2.0, AGC вкл), 0лк. с ИК</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Подсветка :</strong></td>\r\n\t\t\t<td>до 30 метров</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Улучшение изображения :</strong></td>\r\n\t\t\t<td>Аппаратный WDR 120дБ, 3D DNR, BLC, ROI</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Электронный затвор :</strong></td>\r\n\t\t\t<td>от 1/30 до 1/100000 сек. (автоматически, вручную)</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Поворот и наклон :</strong></td>\r\n\t\t\t<td>Поворот: 0 - 360&deg;, Наклон: 0 - 75&deg;, Вращение: 0 - 360&deg;</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Двухстороннее аудио :</strong></td>\r\n\t\t\t<td>Поддерживается, встроенный динамик</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Микрофон: :</strong></td>\r\n\t\t\t<td>Встроенный</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Режим День/Ночь: :</strong></td>\r\n\t\t\t<td>Механический ИК-фильтр с автопереключением</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Настройка камеры: :</strong></td>\r\n\t\t\t<td>WEB интерфейс, NVR, DVR, SADP, IVMS-4200/4500/Hik-Centra</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Кодирование видео :</strong></td>\r\n\t\t\t<td>H.264 / H.264+ / H.265 / H.265+</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Микрофон :</strong></td>\r\n\t\t\t<td>Встроенный</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Скорость передачи (битрейт) :</strong></td>\r\n\t\t\t<td>от 32 Кб/сек. до 16 Мб/сек.</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Количество потоков :</strong></td>\r\n\t\t\t<td>2 потока</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Основной поток :</strong></td>\r\n\t\t\t<td>3840 &times; 2160@12,5 к/с, 2560 &times; 1440@12,5 к/с, 1920 &times; 1080@12,5 к/с, 1280 &times; 720@12,5 к/с</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Дополнительный поток :</strong></td>\r\n\t\t\t<td>640 &times; 480@25 к/с, 640 &times; 360@25 к/с</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Облачный сервис :</strong></td>\r\n\t\t\t<td>P2P Hik-Connect</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Электропитание :</strong></td>\r\n\t\t\t<td>PoE (802.3af), DC 12V &plusmn; 25%</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Потребляемая мощность :</strong></td>\r\n\t\t\t<td>6.5 Вт. (максимально)</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Материал корпуса :</strong></td>\r\n\t\t\t<td>Алюминиевый сплав</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Класс защиты :</strong></td>\r\n\t\t\t<td>IP67/IK10</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><strong>Температура эксплуатации :</strong></td>\r\n\t\t\t<td>-30&deg;C ~ +60&deg;C</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>',
// }
// ];


