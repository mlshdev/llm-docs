> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciblurredroundedrectanglegenerator](https://developer.apple.com/documentation/coreimage/ciblurredroundedrectanglegenerator)

# CIBlurredRoundedRectangleGenerator (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Blurred Rounded Rectangle Generator filter.

## Declaration

```swift
protocol CIBlurredRoundedRectangleGenerator : CIFilterProtocol
```

<a id="overview"></a>

## Overview

Generates a blurred rounded rectangle image with the specified extent, corner radius, blur sigma, and color.

## Topics

### Instance Properties

- [color](ciblurredroundedrectanglegenerator/color.md): A color.
- [extent](ciblurredroundedrectanglegenerator/extent.md): A rectangle that defines the extent of the effect.
- [radius](ciblurredroundedrectanglegenerator/radius.md): The distance from the center of the effect.
- [sigma](ciblurredroundedrectanglegenerator/sigma.md): The sigma for a gaussian blur.
- [smoothness](ciblurredroundedrectanglegenerator/smoothness.md): A value to control the smoothness of the transition between the curved and linear edges of the shape.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

# CIBlurredRoundedRectangleGenerator (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Blurred Rounded Rectangle Generator filter.

## Declaration

```objectivec
@protocol CIBlurredRoundedRectangleGenerator <CIFilter>
```

<a id="overview"></a>

## Overview

Generates a blurred rounded rectangle image with the specified extent, corner radius, blur sigma, and color.

## Topics

### Instance Properties

- [color](ciblurredroundedrectanglegenerator/color.md): A color.
- [extent](ciblurredroundedrectanglegenerator/extent.md): A rectangle that defines the extent of the effect.
- [radius](ciblurredroundedrectanglegenerator/radius.md): The distance from the center of the effect.
- [sigma](ciblurredroundedrectanglegenerator/sigma.md): The sigma for a gaussian blur.
- [smoothness](ciblurredroundedrectanglegenerator/smoothness.md): A value to control the smoothness of the transition between the curved and linear edges of the shape.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)
