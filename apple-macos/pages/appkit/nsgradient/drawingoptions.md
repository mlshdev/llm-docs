> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgradient/drawingoptions](https://developer.apple.com/documentation/appkit/nsgradient/drawingoptions)

# NSGradient.DrawingOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify gradient drawing options.

## Declaration

```swift
struct DrawingOptions
```

<a id="overview"></a>

## Overview

These constants are used by the primitive drawing methods to determine if drawing occurs outside of the gradient start and end locations.

## Topics

### Constants

- [drawsBeforeStartingLocation](drawingoptions/drawsbeforestartinglocation.md): Drawing extends before the gradient starting point.
- [drawsAfterEndingLocation](drawingoptions/drawsafterendinglocation.md): Drawing extends beyond the gradient end point.

### Initializers

- [init(rawValue:)](drawingoptions/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

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

# NSGradientDrawingOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify gradient drawing options.

## Declaration

```objectivec
enum NSGradientDrawingOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the primitive drawing methods to determine if drawing occurs outside of the gradient start and end locations.

## Topics

### Constants

- [NSGradientDrawsBeforeStartingLocation](drawingoptions/drawsbeforestartinglocation.md): Drawing extends before the gradient starting point.
- [NSGradientDrawsAfterEndingLocation](drawingoptions/drawsafterendinglocation.md): Drawing extends beyond the gradient end point.
