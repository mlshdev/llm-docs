> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscene](https://developer.apple.com/documentation/carplay/cptemplateapplicationscene)

# CPTemplateApplicationScene (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A CarPlay scene that controls your app’s user interface.

## Declaration

```swift
class CPTemplateApplicationScene
```

<a id="overview"></a>

## Overview

A scene manages your app’s user interface, including the window that CarPlay displays from that scene. Only navigation apps have access to that window, and use it for drawing map content. All other categories of apps use the scene’s interface controller exclusively for constructing their user interfaces.

The scene manages the display of the window on the vehicle’s CarPlay screen, and the life cycle of that scene as CarPlay and the user interact with it. The scene notifies its delegate—an object that conforms to [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md)—about various state changes and user actions.

You don’t create scenes directly. Instead, you specify the name of the appropriate scene class as part of the CarPlay scene configuration you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application(\_:configurationForConnecting:options:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29)  method.

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

## Topics

### Responding to the Scene Life Cycle

- [delegate](cptemplateapplicationscene/delegate.md): The object that receives the scene’s life-cycle events.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.

### Accessing the Interface Controller

- [interfaceController](cptemplateapplicationscene/interfacecontroller.md): The controller that manages the scene’s user interface.
- [CPInterfaceController](cpinterfacecontroller.md): A controller that manages the templates for constructing a scene’s user interface.

### Accessing the Window

- [carWindow](cptemplateapplicationscene/carwindow.md): The window that belongs to the scene.
- [CPWindow](cpwindow.md): A window that displays its content on the CarPlay screen.

### Instance Properties

- [contentStyle](cptemplateapplicationscene/contentstyle.md)

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

### CarPlay Integration

- [Requesting CarPlay Entitlements](requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that provides vehicle properties and configuration for the CarPlay environment.

# CPTemplateApplicationScene (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A CarPlay scene that controls your app’s user interface.

## Declaration

```objectivec
@interface CPTemplateApplicationScene : UIScene
```

<a id="overview"></a>

## Overview

A scene manages your app’s user interface, including the window that CarPlay displays from that scene. Only navigation apps have access to that window, and use it for drawing map content. All other categories of apps use the scene’s interface controller exclusively for constructing their user interfaces.

The scene manages the display of the window on the vehicle’s CarPlay screen, and the life cycle of that scene as CarPlay and the user interact with it. The scene notifies its delegate—an object that conforms to [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md)—about various state changes and user actions.

You don’t create scenes directly. Instead, you specify the name of the appropriate scene class as part of the CarPlay scene configuration you add to your `Info.plist` file—see the example below—or that you return from your app delegate’s [application:configurationForConnectingSceneSession:options:](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application%28_:configurationforconnecting:options:%29)  method.

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

## Topics

### Responding to the Scene Life Cycle

- [delegate](cptemplateapplicationscene/delegate.md): The object that receives the scene’s life-cycle events.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.

### Accessing the Interface Controller

- [interfaceController](cptemplateapplicationscene/interfacecontroller.md): The controller that manages the scene’s user interface.
- [CPInterfaceController](cpinterfacecontroller.md): A controller that manages the templates for constructing a scene’s user interface.

### Accessing the Window

- [carWindow](cptemplateapplicationscene/carwindow.md): The window that belongs to the scene.
- [CPWindow](cpwindow.md): A window that displays its content on the CarPlay screen.

### Instance Properties

- [contentStyle](cptemplateapplicationscene/contentstyle.md)

## Relationships

### Inherits From

- [UIScene](https://developer.apple.com/documentation/uikit/uiscene)

## See Also

### CarPlay Integration

- [Requesting CarPlay Entitlements](requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.
- [CPSessionConfiguration](cpsessionconfiguration.md): An object that provides vehicle properties and configuration for the CarPlay environment.
