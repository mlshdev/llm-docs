> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscene

# CPTemplateApplicationScene (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A CarPlay scene that manages your app’s interface on the vehicle’s center display.

## Declaration

```swift
class CPTemplateApplicationScene
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

The `CPTemplateApplicationScene` class is an extension of the [UIScene](https://developer.apple.com/documentation/uikit/uiscene) type, and it manages an instance of your app’s CarPlay interface. Scenes serve as the main entry point to your CarPlay app. When someone launches your app from their vehicle, CarPlay starts a session and creates your app’s main scene. During the session, use the scene object to retrieve the interface controller you need to create your app’s interface.

You don’t create a `CPTemplateApplicationScene` object directly. Instead, you specify the type name in your app’s scene manifest, along with other information about the scene such as the type of its associated delegate object. When someone launches your app, CarPlay instantiates the scene and delegate types using the information in the scene manifest. The following example shows the keys and values from an app’s main CarPlay scene. The [UISceneClassName](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneclassname) key contains the name of this scene class.

```plist
<key>CPTemplateApplicationSceneSessionRoleApplication</key>
<array>
    <dict>
        <!-- Specify the name of the scene class. -->
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlaySceneConfiguration</string>
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlaySceneDelegate</string>
    </dict>
</array>
```

At the start of a session, the system delivers a [CPInterfaceController](cpinterfacecontroller.md) object to the delegate’s [templateApplicationScene(\_:didConnect:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) or [templateApplicationScene(\_:didConnect:to:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method. You can also retrieve this object from the scene’s [interfaceController](cptemplateapplicationscene/interfacecontroller.md) property at any time. Use this controller object to present the content for your app’s interface. If you’re creating a navigation app, you also need to present your map content using the scene’s window object.

For information about how to specify your app’s scene manifest, see [Specifying the scenes your app supports](https://developer.apple.com/documentation/uikit/specifying-the-scenes-your-app-supports).

## Topics

### Getting the interface controller

- [interfaceController](cptemplateapplicationscene/interfacecontroller.md): The controller object you use to present your app’s interface.

### Responding to scene life-cycle events

- [delegate](cptemplateapplicationscene/delegate.md): The custom object you provide to handle scene’s life-cycle events.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.

### Accessing the scene’s window

- [carWindow](cptemplateapplicationscene/carwindow.md): The window that displays the scene’s content.

### Getting the interface style

- [contentStyle](cptemplateapplicationscene/contentstyle.md): The current interface style for your app’s content.

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

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.

# CPTemplateApplicationScene (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A CarPlay scene that manages your app’s interface on the vehicle’s center display.

## Declaration

```objectivec
@interface CPTemplateApplicationScene : UIScene
```

## Mentioned In

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md)

<a id="overview"></a>

## Overview

The `CPTemplateApplicationScene` class is an extension of the [UIScene](https://developer.apple.com/documentation/uikit/uiscene) type, and it manages an instance of your app’s CarPlay interface. Scenes serve as the main entry point to your CarPlay app. When someone launches your app from their vehicle, CarPlay starts a session and creates your app’s main scene. During the session, use the scene object to retrieve the interface controller you need to create your app’s interface.

You don’t create a `CPTemplateApplicationScene` object directly. Instead, you specify the type name in your app’s scene manifest, along with other information about the scene such as the type of its associated delegate object. When someone launches your app, CarPlay instantiates the scene and delegate types using the information in the scene manifest. The following example shows the keys and values from an app’s main CarPlay scene. The [UISceneClassName](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneclassname) key contains the name of this scene class.

```plist
<key>CPTemplateApplicationSceneSessionRoleApplication</key>
<array>
    <dict>
        <!-- Specify the name of the scene class. -->
        <key>UISceneClassName</key>
        <string>CPTemplateApplicationScene</string>
        <key>UISceneConfigurationName</key>
        <string>MyCarPlaySceneConfiguration</string>
        <key>UISceneDelegateClassName</key>
        <string>MyCarPlaySceneDelegate</string>
    </dict>
</array>
```

At the start of a session, the system delivers a [CPInterfaceController](cpinterfacecontroller.md) object to the delegate’s [templateApplicationScene:didConnectInterfaceController:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) or [templateApplicationScene:didConnectInterfaceController:toWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method. You can also retrieve this object from the scene’s [interfaceController](cptemplateapplicationscene/interfacecontroller.md) property at any time. Use this controller object to present the content for your app’s interface. If you’re creating a navigation app, you also need to present your map content using the scene’s window object.

For information about how to specify your app’s scene manifest, see [Specifying the scenes your app supports](https://developer.apple.com/documentation/uikit/specifying-the-scenes-your-app-supports).

## Topics

### Getting the interface controller

- [interfaceController](cptemplateapplicationscene/interfacecontroller.md): The controller object you use to present your app’s interface.

### Responding to scene life-cycle events

- [delegate](cptemplateapplicationscene/delegate.md): The custom object you provide to handle scene’s life-cycle events.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.

### Accessing the scene’s window

- [carWindow](cptemplateapplicationscene/carwindow.md): The window that displays the scene’s content.

### Getting the interface style

- [contentStyle](cptemplateapplicationscene/contentstyle.md): The current interface style for your app’s content.

## Relationships

### Inherits From

- [UIScene](https://developer.apple.com/documentation/uikit/uiscene)

## See Also

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that keeps you informed of changes to the CarPlay environment.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.
