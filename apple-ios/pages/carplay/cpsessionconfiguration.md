> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsessionconfiguration](https://developer.apple.com/documentation/carplay/cpsessionconfiguration)

# CPSessionConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that provides vehicle properties and configuration for the CarPlay environment.

## Declaration

```swift
class CPSessionConfiguration
```

<a id="overview"></a>

## Overview

You use a session configuration to determine any user interface limits the vehicle imposes, such as keyboard display and list length, and the content style the vehicle selects according to the ambient light level.

## Topics

### Creating a Session Configuration

- [init(delegate:)](cpsessionconfiguration/init%28delegate_%29.md): Creates a session configuration with a delegate.
- [CPSessionConfigurationDelegate](cpsessionconfigurationdelegate.md): A protocol for receiving notifications about changes to vehicle properties and configuration.

### Managing the Delegate

- [delegate](cpsessionconfiguration/delegate.md): An object that serves as the delegate to the session configuration.

### Getting the Content Style

- [contentStyle](cpsessionconfiguration/contentstyle.md): The content style that the vehicle selects.
- [CPContentStyle](cpcontentstyle.md): The types of content style that the vehicle allows.

### Getting the Limits

- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bit mask value that indicates the user interface limits.
- [CPLimitableUserInterface](cplimitableuserinterface.md): The types of limitable user interface elements.

### Instance Properties

- [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md): The connected CarPlay system supports video playback.

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

### CarPlay Integration

- [Requesting CarPlay Entitlements](requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that controls your app’s user interface.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.

# CPSessionConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that provides vehicle properties and configuration for the CarPlay environment.

## Declaration

```objectivec
@interface CPSessionConfiguration : NSObject
```

<a id="overview"></a>

## Overview

You use a session configuration to determine any user interface limits the vehicle imposes, such as keyboard display and list length, and the content style the vehicle selects according to the ambient light level.

## Topics

### Creating a Session Configuration

- [initWithDelegate:](cpsessionconfiguration/init%28delegate_%29.md): Creates a session configuration with a delegate.
- [CPSessionConfigurationDelegate](cpsessionconfigurationdelegate.md): A protocol for receiving notifications about changes to vehicle properties and configuration.

### Managing the Delegate

- [delegate](cpsessionconfiguration/delegate.md): An object that serves as the delegate to the session configuration.

### Getting the Content Style

- [contentStyle](cpsessionconfiguration/contentstyle.md): The content style that the vehicle selects.
- [CPContentStyle](cpcontentstyle.md): The types of content style that the vehicle allows.

### Getting the Limits

- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bit mask value that indicates the user interface limits.
- [CPLimitableUserInterface](cplimitableuserinterface.md): The types of limitable user interface elements.

### Instance Properties

- [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md): The connected CarPlay system supports video playback.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### CarPlay Integration

- [Requesting CarPlay Entitlements](requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationScene](cptemplateapplicationscene.md): A CarPlay scene that controls your app’s user interface.
- [CPTemplateApplicationSceneDelegate](cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.
