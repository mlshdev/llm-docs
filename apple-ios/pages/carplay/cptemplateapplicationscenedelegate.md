> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate

# CPTemplateApplicationSceneDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Methods for responding to  life-cycle events in your app’s scene.

## Declaration

```swift
@MainActor protocol CPTemplateApplicationSceneDelegate : UISceneDelegate
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when it connects or disconnects a scene, as well as methods for responding to specific interactions with your interface. Adopt this protocol in one of your app’s custom types and use its methods to implement the expected behaviors. Your delegate object is responsible for setting up your app’s initial interface and handling any cleanup when the scene closes.

After you adopt this protocol in a custom type, you don’t instantiate that type directly. Instead, you specify the name of that type in your app’s scene manifest along with rest of the scene information. When someone launches your app, CarPlay instantiates the scene and your delegate type using the information in the scene manifest. The following example shows the keys and values from an app’s main CarPlay scene. The `MyCarPlaySceneDelegate` string is the name of an app-specific type that implements this protocol.

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

At the start of a session, the system delivers a [CPInterfaceController](cpinterfacecontroller.md) object to your delegate’s [templateApplicationScene(\_:didConnect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) or [templateApplicationScene(\_:didConnect:to:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method. You can also retrieve this object from the scene’s [interfaceController](cptemplateapplicationscene/interfacecontroller.md) property at any time. Use this controller object to present the content for your app’s interface. If you’re creating a navigation app, you also need to present your map content using the scene’s window object.

For information about how to specify your app’s scene manifest, see [Specifying the scenes your app supports](https://developer.apple.com/documentation/uikit/specifying-the-scenes-your-app-supports).

## Topics

### Responding to scene life-cycle events

- [templateApplicationScene(\_:didConnect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene(\_:didConnect:to:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.
- [templateApplicationScene(\_:didDisconnect:from:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.

### Responding to interactions

- [templateApplicationScene(\_:didSelect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-5rf2h.md): Tells your navigation app when someone selects a maneuver while your app is in the background.
- [templateApplicationScene(\_:didSelect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-7bie0.md): Tells your navigation app that someone selected a navigation alert while your app was in the background.

### Responding to interface changes

- [contentStyleDidChange(\_:)](cptemplateapplicationscenedelegate/contentstyledidchange%28__%29.md): Tells your app that the suggested content style for this scene changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.

# CPTemplateApplicationSceneDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Methods for responding to  life-cycle events in your app’s scene.

## Declaration

```objectivec
@protocol CPTemplateApplicationSceneDelegate <UISceneDelegate>
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when it connects or disconnects a scene, as well as methods for responding to specific interactions with your interface. Adopt this protocol in one of your app’s custom types and use its methods to implement the expected behaviors. Your delegate object is responsible for setting up your app’s initial interface and handling any cleanup when the scene closes.

After you adopt this protocol in a custom type, you don’t instantiate that type directly. Instead, you specify the name of that type in your app’s scene manifest along with rest of the scene information. When someone launches your app, CarPlay instantiates the scene and your delegate type using the information in the scene manifest. The following example shows the keys and values from an app’s main CarPlay scene. The `MyCarPlaySceneDelegate` string is the name of an app-specific type that implements this protocol.

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

At the start of a session, the system delivers a [CPInterfaceController](cpinterfacecontroller.md) object to your delegate’s [templateApplicationScene:didConnectInterfaceController:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) or [templateApplicationScene:didConnectInterfaceController:toWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method. You can also retrieve this object from the scene’s [interfaceController](cptemplateapplicationscene/interfacecontroller.md) property at any time. Use this controller object to present the content for your app’s interface. If you’re creating a navigation app, you also need to present your map content using the scene’s window object.

For information about how to specify your app’s scene manifest, see [Specifying the scenes your app supports](https://developer.apple.com/documentation/uikit/specifying-the-scenes-your-app-supports).

## Topics

### Responding to scene life-cycle events

- [templateApplicationScene:didConnectInterfaceController:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene:didConnectInterfaceController:toWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.

### Responding to interactions

- [templateApplicationScene:didSelectManeuver:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-5rf2h.md): Tells your navigation app when someone selects a maneuver while your app is in the background.
- [templateApplicationScene:didSelectNavigationAlert:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didselect_%29-7bie0.md): Tells your navigation app that someone selected a navigation alert while your app was in the background.

### Responding to interface changes

- [contentStyleDidChange:](cptemplateapplicationscenedelegate/contentstyledidchange%28__%29.md): Tells your app that the suggested content style for this scene changed.

## Relationships

### Inherits From

- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.
