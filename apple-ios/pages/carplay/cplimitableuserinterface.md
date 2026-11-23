> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplimitableuserinterface

# CPLimitableUserInterface (Swift)

**Framework:** CarPlay  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The types of interfaces to which a vehicle can limit access.

## Declaration

```swift
struct CPLimitableUserInterface
```

<a id="overview"></a>

## Overview

A vehicle might limit access to specific features for safety reasons or to support vehicle constraints. For example, a vehicle might limit access to virtual keyboards when the vehicle is in motion. A [CPSessionConfiguration](cpsessionconfiguration.md) object reports these limitations in its [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md) property, which stores a bitmask of the available constants.

## Topics

### Getting the user interface limits

- [keyboard](cplimitableuserinterface/keyboard.md): A type that indicates the vehicle limits the display of virtual keyboards.
- [lists](cplimitableuserinterface/lists.md): A type that indicates the vehicle limits the number of items you can display in lists.

### Creating a limit value

- [init(rawValue:)](cplimitableuserinterface/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the configuration details

- [contentStyle](cpsessionconfiguration/contentstyle.md): The preferred interface style for your app’s content.
- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bitmask of the interface restrictions that currently apply to your app.
- [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](cpcontentstyle.md): The types of content style that the vehicle allows.

# CPLimitableUserInterface (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The types of interfaces to which a vehicle can limit access.

## Declaration

```objectivec
enum CPLimitableUserInterface : NSUInteger;
```

<a id="overview"></a>

## Overview

A vehicle might limit access to specific features for safety reasons or to support vehicle constraints. For example, a vehicle might limit access to virtual keyboards when the vehicle is in motion. A [CPSessionConfiguration](cpsessionconfiguration.md) object reports these limitations in its [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md) property, which stores a bitmask of the available constants.

## Topics

### Getting the user interface limits

- [CPLimitableUserInterfaceKeyboard](cplimitableuserinterface/keyboard.md): A type that indicates the vehicle limits the display of virtual keyboards.
- [CPLimitableUserInterfaceLists](cplimitableuserinterface/lists.md): A type that indicates the vehicle limits the number of items you can display in lists.

## See Also

### Getting the configuration details

- [contentStyle](cpsessionconfiguration/contentstyle.md): The preferred interface style for your app’s content.
- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bitmask of the interface restrictions that currently apply to your app.
- [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPContentStyle](cpcontentstyle.md): The types of content style that the vehicle allows.
