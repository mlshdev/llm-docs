> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontentstyle](https://developer.apple.com/documentation/carplay/cpcontentstyle)

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

### Creating a Content Style

- [init(rawValue:)](cpcontentstyle/init%28rawvalue_%29.md): Creates a content style from a raw value.

### Content Styles

- [dark](cpcontentstyle/dark.md): The indication from the vehicle to draw the content in a dark style.
- [light](cpcontentstyle/light.md): The indication from the vehicle to draw the content in a light style.

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

### Getting the Content Style

- [contentStyle](cpsessionconfiguration/contentstyle.md): The content style that the vehicle selects.

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

### Content Styles

- [CPContentStyleDark](cpcontentstyle/dark.md): The indication from the vehicle to draw the content in a dark style.
- [CPContentStyleLight](cpcontentstyle/light.md): The indication from the vehicle to draw the content in a light style.

## See Also

### Getting the Content Style

- [contentStyle](cpsessionconfiguration/contentstyle.md): The content style that the vehicle selects.
