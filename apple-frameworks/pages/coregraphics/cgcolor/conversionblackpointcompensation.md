> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/conversionblackpointcompensation](https://developer.apple.com/documentation/coregraphics/cgcolor/conversionblackpointcompensation)

# conversionBlackPointCompensation (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An option for whether to apply black point compensation when converting between color profiles.

## Declaration

```swift
class let conversionBlackPointCompensation: CFString
```

<a id="Discussion"></a>

## Discussion

ICC profiles specify how to convert the lightest level of white between color spaces, but they do not specify how black should be converted. To account for this, set a value of [true](https://developer.apple.com/documentation/swift/true) for this key when creating a color conversion with the [CGColorConversionInfoCreateFromList](../cgcolorconversioninfocreatefromlist.md) function.

# kCGColorConversionBlackPointCompensation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An option for whether to apply black point compensation when converting between color profiles.

## Declaration

```objectivec
extern CFStringRef const kCGColorConversionBlackPointCompensation;
```

<a id="Discussion"></a>

## Discussion

ICC profiles specify how to convert the lightest level of white between color spaces, but they do not specify how black should be converted. To account for this, set a value of [true](https://developer.apple.com/documentation/swift/true) for this key when creating a color conversion with the [CGColorConversionInfoCreateFromList](../cgcolorconversioninfocreatefromlist.md) function.
