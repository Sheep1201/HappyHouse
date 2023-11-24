import React, {useState} from 'react';
import {TouchableOpacity,Text, View,Image, ScrollView} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";

export default function HomeDetail ({navigation}) {
    return(
        <View style={{flex:1, backgroundColor: '#DCDCDC'}}>
            <View style={{height: '12%', flexDirection: 'row', backgroundColor: '#f1f1f1'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require('../images/backicon.png')} style={{height: '30%', width: '150%', marginLeft: 20, marginTop: 60}} />
            </TouchableOpacity>
            <Text style={{marginTop: 60,marginHorizontal: '28%', textAlign: 'center',fontWeight: 'bold', fontSize: 20, color: 'orange'}}>Chi tiết phòng</Text>
            </View>
        <ImageSlider 
        data={[
            {img: 'https://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg'},
            {img: 'https://chefjob.vn/wp-content/uploads/2020/07/little-prince-home.jpg'},
            {img: 'https://chefjob.vn/wp-content/uploads/2020/07/doi-mot-nguoi.jpg'},
            {img: 'https://motogo.vn/wp-content/uploads/2020/08/homestay-gan-ha-noi-co-be-boi-1-3.jpg'},
            ]}
        autoPlay={false}
        onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
        />
        <ScrollView>
            <View style={{padding: 20, borderRadius: 20,marginVertical: 5, marginHorizontal:5, backgroundColor: '#f1f1f1'}}>
            <Text style= {{marginHorizontal: 10, fontSize: 30, fontWeight: 'bold', color: 'orange'}}>Home 1</Text>
            <Text style= {{marginHorizontal: 10, fontSize: 20, fontWeight: 'bold', color: 'orange'}}>350.000đ/ 1 day</Text>
            <Text style= {{marginHorizontal: 10, fontSize: 18, color: 'orange', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
            </View>

            <View style={{padding: 20, borderRadius: 20,marginVertical: 5, marginHorizontal:5, backgroundColor: '#f1f1f1'}}>
            <Text style= {{marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: 'orange'}}>Thông tin</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', marginLeft: 0}}>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Tầng</Text>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>5</Text>
                    </View>
                    <View>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Phòng</Text>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>503</Text>
                    </View>
                    <View>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Diện tích</Text>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>30m2</Text>
                    </View>
                    <View>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Số Người</Text>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>4</Text>
                    </View>
                    <View>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Số xe</Text>
                        <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>4</Text>
                    </View>
                </View>
            </View>

            <View style={{padding: 20, borderRadius: 20,marginVertical: 5, marginHorizontal:5, backgroundColor: '#f1f1f1'}}>
            <Text style= {{marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: 'orange'}}>Dịch vụ</Text>
            <Text style= {{marginHorizontal: 10, fontSize: 15,color: 'orange', marginTop: 10}}>Điện: 4000đ/ 1Kwh</Text>
            <Text style= {{marginHorizontal: 10, fontSize: 15,color: 'orange', marginTop: 10}}>Nước: 25000đ/ 1m3</Text>
            <Text style= {{marginHorizontal: 10, fontSize: 15,color: 'orange', marginTop: 10}}>Mạng: 100000đ/ phòng</Text>
            <Text style= {{marginHorizontal: 10, fontSize: 15,color: 'orange', marginTop: 10}}>Vệ sinh chung: 50000đ/ người</Text>
            </View>

            <View style={{padding: 20, borderRadius: 20,marginVertical: 5, marginHorizontal:5, backgroundColor: '#f1f1f1'}}>
            <Text style= {{marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: 'orange'}}>Chi tiết</Text>
            <Text style= {{marginHorizontal: 10, fontSize: 18, marginTop: 10}}>Phần mềm lấy mã màu
    Nếu bạn muốn xác định nhanh mã màu của một điểm trên thiết kế, có nhiều phương pháp để bạn có thể lấy được mã màu này theo các chuẩn màu. Với những người thiết kế chuyên nghiệp thì việc lấy mã màu không khó, tuy nhiên những người mới thiết kế thì lại rất khó khăn, số lượng mã màu là rất nhiều và không thể nhớ hết. Vì vậy mà hiện nay có nhiều công cụ trên máy tính giúp bạn có thể xác định mã màu của một điểm nhanh chóng hơn ( Tuy nhiên nếu màn hình của bạn hiển thị màu quá kém, mã màu mà phần mềm trả về có thể bị sai lệch )

    Công cụ Pixie
    Công cụ ColorPix lấy mã màu
    Color Cop lấy mã màu
    Công cụ Just Color Picker
    liên hệ in decal
    Ngoài ra, nếu trên trình duyệt web thì bạn có thể thực hiện kiểm tra code của phần tử cần xem màu. Các bước thực hiện như sau: Rê chuột đến vị trí (điểm) cần xem mã màu chọn chuột phải Inspect (Kiểm tra) Trong Tab Style sẽ có thuộc tính color hoặc background-color Xem mã màu là gì và lưu lại để sử dụng. Ngoài ra thì bên cạnh mã màu cũng có 1 ô vuông nhỏ để bạn có thể thử thiết kế đó với nhiều màu sắc khác nhau (Click chuột trái vào ô vuông để sử dụng công cụ lấy mã màu của Chrome).</Text>
            </View>
        </ScrollView>
        </View>
    )
}
