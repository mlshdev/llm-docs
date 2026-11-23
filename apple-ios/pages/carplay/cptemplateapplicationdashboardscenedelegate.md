> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenedelegate

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

### Responding to the dashboard scene life cycle

- [templateApplicationDashboardScene(\_:didConnect:to:)](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.
- [templateApplicationDashboardScene(\_:didDisconnect:from:)](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes the dashboard scene from your navigation app.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.

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

### Responding to the dashboard scene life cycle

- [templateApplicationDashboardScene:didConnectDashboardController:toWindow:](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.
- [templateApplicationDashboardScene:didDisconnectDashboardController:fromWindow:](cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes the dashboard scene from your navigation app.

## Relationships

### Inherits From

- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.
