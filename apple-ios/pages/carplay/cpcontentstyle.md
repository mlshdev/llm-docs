> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpcontentstyle

# CPContentStyle (Swift)

**Framework:** CarPlay  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The types of content style that the vehicle allows.

## Declaration

```swift
struct CPContentStyle
```

<a id="overview"></a>

## Overview

The vehicle selects the content style according to the ambient light level. Your navigation app can use this value to determine the most appropriate style of map content to draw in its base view. The content style is independent of the user interface style, which controls light and dark mode.

You don’t create instances of `CPContentStyle`. Instead, the session configuration provides the current content style, and it notifies its delegate of any changes. See [CPSessionConfiguration](cpsessionconfiguration.md) for more information.

## Topics

### Getting the content styles

- [dark](cpcontentstyle/dark.md)
- [light](cpcontentstyle/light.md)

### Creating a content style

- [init(rawValue:)](cpcontentstyle/init%28rawvalue_%29.md)

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
- [CPLimitableUserInterface](cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.

# CPContentStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The types of content style that the vehicle allows.

## Declaration

```objectivec
enum CPContentStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

The vehicle selects the content style according to the ambient light level. Your navigation app can use this value to determine the most appropriate style of map content to draw in its base view. The content style is independent of the user interface style, which controls light and dark mode.

You don’t create instances of `CPContentStyle`. Instead, the session configuration provides the current content style, and it notifies its delegate of any changes. See [CPSessionConfiguration](cpsessionconfiguration.md) for more information.

## Topics

### Getting the content styles

- [CPContentStyleDark](cpcontentstyle/dark.md)
- [CPContentStyleLight](cpcontentstyle/light.md)

## See Also

### Getting the configuration details

- [contentStyle](cpsessionconfiguration/contentstyle.md): The preferred interface style for your app’s content.
- [limitedUserInterfaces](cpsessionconfiguration/limiteduserinterfaces.md): A bitmask of the interface restrictions that currently apply to your app.
- [supportsVideoPlayback](cpsessionconfiguration/supportsvideoplayback.md): A Boolean value that indicates whether CarPlay supports playing video content.
- [CPLimitableUserInterface](cplimitableuserinterface.md): The types of interfaces to which a vehicle can limit access.
