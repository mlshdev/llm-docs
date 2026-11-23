> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscene

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

### Responding to the dashboard scene life cycle

- [delegate](cptemplateapplicationdashboardscene/delegate.md): The object that receives the dashboard scene’s life-cycle events.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.

### Accessing the dashboard controller

- [dashboardController](cptemplateapplicationdashboardscene/dashboardcontroller.md): The controller that manages the dashboard scene’s shortcut buttons.
- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.

### Accessing the dashboard window

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

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.

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

### Responding to the dashboard scene life cycle

- [delegate](cptemplateapplicationdashboardscene/delegate.md): The object that receives the dashboard scene’s life-cycle events.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.

### Accessing the dashboard controller

- [dashboardController](cptemplateapplicationdashboardscene/dashboardcontroller.md): The controller that manages the dashboard scene’s shortcut buttons.
- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.

### Accessing the dashboard window

- [dashboardWindow](cptemplateapplicationdashboardscene/dashboardwindow.md): The window that belongs to the dashboard scene.

## Relationships

### Inherits From

- [UIScene](https://developer.apple.com/documentation/uikit/uiscene)

## See Also

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.
