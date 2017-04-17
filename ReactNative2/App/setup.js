/**
 * Created by qiangxinyu on 2017/4/14.
 */


import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    StatusBar,
    BackAndroid
} from 'react-native';


import App from './App'

function setup(): ReactClass<{}> {

    //这里做一些注册第三方等App初始化需要的操作

    return Root
}

class Root extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={'default'}
                    backgroundColor={'#000000'}
                />
                <Navigator
                    initialRoute={{ component: App }}

                    style={{flex:1}}
                    renderScene={(route, navigator) => {
                                    BackAndroid.addEventListener('hardwareBackPress', function() {
                                        if(navigator == null){
                                            return false;
                                        }
                                        if(navigator.getCurrentRoutes().length === 1){
                                            return false;
                                        }
                                        navigator.pop();
                                        return true;
                                    });

                                    let Component = route.component;
                                    return <Component {...route.params} navigator={navigator}/>
                                    //  上面的route.params 是为了方便后续界面间传递参数用的
                                }}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});


module.exports = setup