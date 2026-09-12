> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageinterpolation](https://developer.apple.com/documentation/appkit/nsimageinterpolation)

# NSImageInterpolation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.

## Declaration

```swift
enum NSImageInterpolation
```

<a id="overview"></a>

## Overview

Use these constants with the [imageInterpolation](nsgraphicscontext/imageinterpolation.md) property.

## Topics

### Constants

- [NSImageInterpolation.default](nsimageinterpolation/default.md): Use the context’s default interpolation.
- [NSImageInterpolation.none](nsimageinterpolation/none.md): No interpolation.
- [NSImageInterpolation.low](nsimageinterpolation/low.md): Fast, low-quality interpolation.
- [NSImageInterpolation.medium](nsimageinterpolation/medium.md): Medium quality, slower than the low interpolation option.
- [NSImageInterpolation.high](nsimageinterpolation/high.md): Highest quality, slower than the medium interpolation option.

### Initializers

- [init(rawValue:)](nsimageinterpolation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Rendering Options

- [compositingOperation](nsgraphicscontext/compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](nsgraphicscontext/imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [shouldAntialias](nsgraphicscontext/shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](nsgraphicscontext/patternphase.md): The amount to offset the pattern color when filling the graphics context.

# NSImageInterpolation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.

## Declaration

```objectivec
enum NSImageInterpolation : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [imageInterpolation](nsgraphicscontext/imageinterpolation.md) property.

## Topics

### Constants

- [NSImageInterpolationDefault](nsimageinterpolation/default.md): Use the context’s default interpolation.
- [NSImageInterpolationNone](nsimageinterpolation/none.md): No interpolation.
- [NSImageInterpolationLow](nsimageinterpolation/low.md): Fast, low-quality interpolation.
- [NSImageInterpolationMedium](nsimageinterpolation/medium.md): Medium quality, slower than the low interpolation option.
- [NSImageInterpolationHigh](nsimageinterpolation/high.md): Highest quality, slower than the medium interpolation option.

## See Also

### Configuring Rendering Options

- [compositingOperation](nsgraphicscontext/compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](nsgraphicscontext/imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [shouldAntialias](nsgraphicscontext/shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](nsgraphicscontext/patternphase.md): The amount to offset the pattern color when filling the graphics context.
