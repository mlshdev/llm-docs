> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationdashboardscene](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscene)

# CPTemplateApplicationDashboardScene (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A CarPlay scene that controls your app’s dashboard navigation window.

## Declaration

```swift
class CPTemplateApplicationDashboardScene
```

<a id="overview"></a>

## Overview

A dashboard scene manages the display of your navigation app’s dashboard window on the CarPlay Dashboard, and notifies its delegate—an object that conforms to [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md)—about scene life-cycle events. Use the dashboard controller the scene provides to supply shortcut buttons to display when there’s no active navigation session, further customizing you app’s presence on the CarPlay Dashboard.

You don’t create an instance of the dashboard scene directly. Instead, you specify the name of the class as part of the CarPlay Dashboard scene configuration that you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application(\_:configurationForConnecting:options:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29) method.

```plist
<key>CPTemplateApplicationDashboardSceneSessionRoleApplication</key>
<array> 
    <dict>
        <!-- Specify the name of the CarPlay Dashboard scene class. -->
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationDashboardScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlayDashboardSceneConfiguration</string> 
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlayDashboardSceneDelegate</string> 
    </dict>
</array>
```

## Topics

### Responding to the Dashboard Scene Life Cycle

- [delegate](cptemplateapplicationdashboardscene/delegate.md): The object that receives the dashboard scene’s life-cycle events.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.

### Accessing the Dashboard Controller

- [dashboardController](cptemplateapplicationdashboardscene/dashboardcontroller.md): The controller that manages the dashboard scene’s shortcut buttons.
- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.

### Accessing the Dashboard Window

- [dashboardWindow](cptemplateapplicationdashboardscene/dashboardwindow.md): The window that belongs to the dashboard scene.

## Relationships

### Inherits From

- [UIScene](https://developer.apple.com/documentation/uikit/uiscene)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.

# CPTemplateApplicationDashboardScene (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A CarPlay scene that controls your app’s dashboard navigation window.

## Declaration

```objectivec
@interface CPTemplateApplicationDashboardScene : UIScene
```

<a id="overview"></a>

## Overview

A dashboard scene manages the display of your navigation app’s dashboard window on the CarPlay Dashboard, and notifies its delegate—an object that conforms to [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md)—about scene life-cycle events. Use the dashboard controller the scene provides to supply shortcut buttons to display when there’s no active navigation session, further customizing you app’s presence on the CarPlay Dashboard.

You don’t create an instance of the dashboard scene directly. Instead, you specify the name of the class as part of the CarPlay Dashboard scene configuration that you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application:configurationForConnectingSceneSession:options:](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29) method.

```plist
<key>CPTemplateApplicationDashboardSceneSessionRoleApplication</key>
<array> 
    <dict>
        <!-- Specify the name of the CarPlay Dashboard scene class. -->
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationDashboardScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlayDashboardSceneConfiguration</string> 
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlayDashboardSceneDelegate</string> 
    </dict>
</array>
```

## Topics

### Responding to the Dashboard Scene Life Cycle

- [delegate](cptemplateapplicationdashboardscene/delegate.md): The object that receives the dashboard scene’s life-cycle events.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.

### Accessing the Dashboard Controller

- [dashboardController](cptemplateapplicationdashboardscene/dashboardcontroller.md): The controller that manages the dashboard scene’s shortcut buttons.
- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.

### Accessing the Dashboard Window

- [dashboardWindow](cptemplateapplicationdashboardscene/dashboardwindow.md): The window that belongs to the dashboard scene.

## Relationships

### Inherits From

- [UIScene](https://developer.apple.com/documentation/uikit/uiscene)

## See Also

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
