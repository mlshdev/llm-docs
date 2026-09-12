> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscenedelegate](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate)

# CPTemplateApplicationSceneDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The methods for responding to the life cycle events of your app’s scene.

## Declaration

```swift
@MainActor protocol CPTemplateApplicationSceneDelegate : UISceneDelegate
```

## Mentioned In

- [Displaying Content in CarPlay](displaying-content-in-carplay.md)

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when the scene connects and disconnects, as well as methods for responding to certain user actions. Use your implementation to provide the appropriate behavior for when these events occur. For example, creating and setting your root template when CarPlay launches your app and connects its scene.

You don’t create instances of your scene delegate directly. Instead, you specify the name of the class as part of the CarPlay scene configuration you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application(\_:configurationForConnecting:options:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29)  method.

```plist
<key>CPTemplateApplicationSceneSessionRoleApplication</key>
<array> 
    <dict>
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlaySceneConfiguration</string>
        <!-- Specify the name of your scene delegate class. --> 
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlaySceneDelegate</string> 
    </dict>
</array>
```

## Topics

### Responding to the Scene Life Cycle

- [templateApplicationScene(\_:didConnect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene(\_:didConnect:to:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.
- [templateApplicationScene(\_:didDisconnect:from:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.

### Responding to User Actions

- [templateApplicationScene(\_:didSelect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-5rf2h.md): Tells the delegate when the user selects a maneuver while the app is in the background.
- [templateApplicationScene(\_:didSelect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-7bie0.md): Tells the delegate when the user selects a navigation alert while the app is in the background.

### Instance Methods

- [contentStyleDidChange(\_:)](cptemplateapplicationscenedelegate/contentstyledidchange%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### CarPlay Integration

- [Requesting CarPlay Entitlements](requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that controls your app’s user interface.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that provides vehicle properties and configuration for the CarPlay environment.

# CPTemplateApplicationSceneDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The methods for responding to the life cycle events of your app’s scene.

## Declaration

```objectivec
@protocol CPTemplateApplicationSceneDelegate <UISceneDelegate>
```

## Mentioned In

- [Displaying Content in CarPlay](displaying-content-in-carplay.md)

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when the scene connects and disconnects, as well as methods for responding to certain user actions. Use your implementation to provide the appropriate behavior for when these events occur. For example, creating and setting your root template when CarPlay launches your app and connects its scene.

You don’t create instances of your scene delegate directly. Instead, you specify the name of the class as part of the CarPlay scene configuration you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application:configurationForConnectingSceneSession:options:](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29)  method.

```plist
<key>CPTemplateApplicationSceneSessionRoleApplication</key>
<array> 
    <dict>
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlaySceneConfiguration</string>
        <!-- Specify the name of your scene delegate class. --> 
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlaySceneDelegate</string> 
    </dict>
</array>
```

## Topics

### Responding to the Scene Life Cycle

- [templateApplicationScene:didConnectInterfaceController:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene:didConnectInterfaceController:toWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.

### Responding to User Actions

- [templateApplicationScene:didSelectManeuver:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-5rf2h.md): Tells the delegate when the user selects a maneuver while the app is in the background.
- [templateApplicationScene:didSelectNavigationAlert:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-7bie0.md): Tells the delegate when the user selects a navigation alert while the app is in the background.

### Instance Methods

- [contentStyleDidChange:](cptemplateapplicationscenedelegate/contentstyledidchange%28__%29.md)

## Relationships

### Inherits From

- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### CarPlay Integration

- [Requesting CarPlay Entitlements](requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that controls your app’s user interface.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that provides vehicle properties and configuration for the CarPlay environment.
