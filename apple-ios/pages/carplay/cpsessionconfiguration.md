> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfiguration

# CPSessionConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that keeps you informed of changes to the CarPlay environment.

## Declaration

```swift
class CPSessionConfiguration
```

<a id="overview"></a>

## Overview

A `CPSessionConfiguration` object provides your app with the current configuration of the CarPlay environment. When building a CarPlay app, use the information in this object to make decisions about what content to display and how to display it. For example, you might disable your app’s video features if the [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md) property is `false`.

Create an instance of `CPSessionConfiguration` when your app starts and use it to get the current values. When instantiating this type, you also provide a custom delegate object to respond to subsequent environment changes. Define this type in your code and use the methods of the [CPSessionConfigurationDelegate](cpsessionconfigurationdelegate.md) protocol to receive the updated values. Keep a strong reference to the `CPSessionConfiguration` object and your custom delegate object while your app runs.

## Topics

### Creating a session configuration

- [init(delegate:)](cpsessionconfiguration/init%28delegate_%29.md): Configures a session configuration with the custom delegate object you provide.
- [CPSessionConfigurationDelegate](cpsessionconfigurationdelegate.md): Methods you use to respond to changes in the CarPlay environment.

### Responding to configuration changes

- [delegate](cpsessionconfiguration/delegate.md): The custom object you use to handle changes to environment values.

### Getting the configuration details

- [contentStyle](cpsessionconfiguration/contentstyle.md): The preferred interface style for your app’s content.
- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bitmask of the interface restrictions that currently apply to your app.
- [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](cpcontentstyle.md): The types of content style that the vehicle allows.
- [CPLimitableUserInterface](cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.

# CPSessionConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that keeps you informed of changes to the CarPlay environment.

## Declaration

```objectivec
@interface CPSessionConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A `CPSessionConfiguration` object provides your app with the current configuration of the CarPlay environment. When building a CarPlay app, use the information in this object to make decisions about what content to display and how to display it. For example, you might disable your app’s video features if the [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md) property is `false`.

Create an instance of `CPSessionConfiguration` when your app starts and use it to get the current values. When instantiating this type, you also provide a custom delegate object to respond to subsequent environment changes. Define this type in your code and use the methods of the [CPSessionConfigurationDelegate](cpsessionconfigurationdelegate.md) protocol to receive the updated values. Keep a strong reference to the `CPSessionConfiguration` object and your custom delegate object while your app runs.

## Topics

### Creating a session configuration

- [initWithDelegate:](cpsessionconfiguration/init%28delegate_%29.md): Configures a session configuration with the custom delegate object you provide.
- [CPSessionConfigurationDelegate](cpsessionconfigurationdelegate.md): Methods you use to respond to changes in the CarPlay environment.

### Responding to configuration changes

- [delegate](cpsessionconfiguration/delegate.md): The custom object you use to handle changes to environment values.

### Getting the configuration details

- [contentStyle](cpsessionconfiguration/contentstyle.md): The preferred interface style for your app’s content.
- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bitmask of the interface restrictions that currently apply to your app.
- [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](cpcontentstyle.md): The types of content style that the vehicle allows.
- [CPLimitableUserInterface](cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App management

- [Building your app’s initial CarPlay interface](building-your-apps-initial-carplay-interface.md): Build the interface for your CarPlay app using scenes and templates from the CarPlay framework.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that manages your app’s interface on the vehicle’s center display.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): Methods for responding to life-cycle events in your app’s scene.
- [CPInterfaceController](cpinterfacecontroller.md): The type you use to present your app’s CarPlay interface and change what appears on the vehicle’s display.
- [CPWindow](cpwindow.md): A type that navigation apps use to present their map content.
