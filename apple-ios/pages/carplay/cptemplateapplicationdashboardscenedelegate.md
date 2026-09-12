> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationdashboardscenedelegate](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenedelegate)

# CPTemplateApplicationDashboardSceneDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The methods for responding to the life-cycle events of your navigation app’s dashboard scene.

## Declaration

```swift
protocol CPTemplateApplicationDashboardSceneDelegate : UISceneDelegate
```

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when the scene connects and disconnects, and your implementation provides the appropriate behavior when these events occur. For example, setting the window’s root view controller when CarPlay connects your navigation app’s dashboard scene.

You don’t create instances of your dashboard scene delegate directly. Instead, you specify the name of the class as part of the CarPlay scene configuration you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application(\_:configurationForConnecting:options:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29) method.

```plist
<key>CPTemplateApplicationDashboardSceneSessionRoleApplication</key>
<array> 
    <dict>
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationDashboardScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlayDashboardSceneConfiguration</string>
        <!-- Specify the name of your dashboard scene delegate class. --> 
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlayDashboardSceneDelegate</string> 
    </dict>
</array>
```

## Topics

### Responding to the Scene Life Cycle

- [templateApplicationDashboardScene(\_:didConnect:to:)](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.
- [templateApplicationDashboardScene(\_:didDisconnect:from:)](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes the dashboard scene from your navigation app.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.

# CPTemplateApplicationDashboardSceneDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

The methods for responding to the life-cycle events of your navigation app’s dashboard scene.

## Declaration

```objectivec
@protocol CPTemplateApplicationDashboardSceneDelegate <UISceneDelegate>
```

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when the scene connects and disconnects, and your implementation provides the appropriate behavior when these events occur. For example, setting the window’s root view controller when CarPlay connects your navigation app’s dashboard scene.

You don’t create instances of your dashboard scene delegate directly. Instead, you specify the name of the class as part of the CarPlay scene configuration you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application:configurationForConnectingSceneSession:options:](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29) method.

```plist
<key>CPTemplateApplicationDashboardSceneSessionRoleApplication</key>
<array> 
    <dict>
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationDashboardScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlayDashboardSceneConfiguration</string>
        <!-- Specify the name of your dashboard scene delegate class. --> 
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlayDashboardSceneDelegate</string> 
    </dict>
</array>
```

## Topics

### Responding to the Scene Life Cycle

- [templateApplicationDashboardScene:didConnectDashboardController:toWindow:](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.
- [templateApplicationDashboardScene:didDisconnectDashboardController:fromWindow:](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes the dashboard scene from your navigation app.

## Relationships

### Inherits From

- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
