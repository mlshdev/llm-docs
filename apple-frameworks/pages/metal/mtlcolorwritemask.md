> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcolorwritemask](https://developer.apple.com/documentation/metal/mtlcolorwritemask)

# MTLColorWriteMask (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Values used to specify a mask to permit or restrict writing to color channels of a color value.

## Declaration

```swift
struct MTLColorWriteMask
```

<a id="overview"></a>

## Overview

The values [red](mtlcolorwritemask/red.md), [green](mtlcolorwritemask/green.md), [blue](mtlcolorwritemask/blue.md), and [alpha](mtlcolorwritemask/alpha.md) select one color channel each, and they can be bitwise combined.

## Topics

### Initializers

- [init(rawValue:)](mtlcolorwritemask/init%28rawvalue_%29.md): Returns a new color write mask from a specified raw value.

### Type Properties

- [all](mtlcolorwritemask/all.md): All color channels are enabled.
- [alpha](mtlcolorwritemask/alpha.md): The alpha color channel is enabled.
- [blue](mtlcolorwritemask/blue.md): The blue color channel is enabled.
- [green](mtlcolorwritemask/green.md): The green color channel is enabled.
- [red](mtlcolorwritemask/red.md): The red color channel is enabled.
- [unspecialized](mtlcolorwritemask/unspecialized.md): Defers assigning the color write mask.

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

### Configuring render pipeline states

- [pixelFormat](mtlrenderpipelinecolorattachmentdescriptor/pixelformat.md): The pixel format of the color attachment’s texture.
- [writeMask](mtlrenderpipelinecolorattachmentdescriptor/writemask.md): A bitmask that restricts which color channels are written into the texture.

# MTLColorWriteMask (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Values used to specify a mask to permit or restrict writing to color channels of a color value.

## Declaration

```objectivec
enum MTLColorWriteMask : NSUInteger;
```

<a id="overview"></a>

## Overview

The values [MTLColorWriteMaskRed](mtlcolorwritemask/red.md), [MTLColorWriteMaskGreen](mtlcolorwritemask/green.md), [MTLColorWriteMaskBlue](mtlcolorwritemask/blue.md), and [MTLColorWriteMaskAlpha](mtlcolorwritemask/alpha.md) select one color channel each, and they can be bitwise combined.

## Topics

### Enumeration Cases

- [MTLColorWriteMaskNone](mtlcolorwritemask/mtlcolorwritemasknone.md): All color channels are disabled.
- [MTLColorWriteMaskAll](mtlcolorwritemask/all.md): All color channels are enabled.
- [MTLColorWriteMaskAlpha](mtlcolorwritemask/alpha.md): The alpha color channel is enabled.
- [MTLColorWriteMaskBlue](mtlcolorwritemask/blue.md): The blue color channel is enabled.
- [MTLColorWriteMaskGreen](mtlcolorwritemask/green.md): The green color channel is enabled.
- [MTLColorWriteMaskRed](mtlcolorwritemask/red.md): The red color channel is enabled.
- [MTLColorWriteMaskUnspecialized](mtlcolorwritemask/unspecialized.md): Defers assigning the color write mask.

## See Also

### Configuring render pipeline states

- [pixelFormat](mtlrenderpipelinecolorattachmentdescriptor/pixelformat.md): The pixel format of the color attachment’s texture.
- [writeMask](mtlrenderpipelinecolorattachmentdescriptor/writemask.md): A bitmask that restricts which color channels are written into the texture.
