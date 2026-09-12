> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cascrolllayer](https://developer.apple.com/documentation/quartzcore/cascrolllayer)

# CAScrollLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that displays scrollable content larger than its own bounds.

## Declaration

```swift
class CAScrollLayer
```

<a id="overview"></a>

## Overview

The [CAScrollLayer](cascrolllayer.md) class is a subclass of [CALayer](calayer.md) that simplifies displaying a portion of a layer. The extent of the scrollable area of the [CAScrollLayer](cascrolllayer.md) is defined by the layout of its sublayers. The visible portion of the layer content is set by specifying the origin as a point or a rectangular area of the contents to be displayed. [CAScrollLayer](cascrolllayer.md) does not provide keyboard or mouse event-handling, nor does it provide visible scrollers.

## Topics

### Scrolling constraints

- [scrollMode](cascrolllayer/scrollmode.md): Defines the axes in which the layer may be scrolled.

### Scrolling the layer

- [scroll(to:)](cascrolllayer/scroll%28to_%29-37q0p.md): Changes the origin of the receiver to the specified point.
- [scroll(to:)](cascrolllayer/scroll%28to_%29-782vd.md): Scroll the contents of the receiver to ensure that the rectangle is visible.

### Constants

- [Scroll Modes](scroll-modes.md): These constants describe the supported scroll modes used by the [scrollMode](cascrolllayer/scrollmode.md) property.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Advanced Layer Options

- [CATiledLayer](catiledlayer.md): A layer that provides a way to asynchronously provide tiles of the layer’s content, potentially cached at multiple levels of detail.
- [CATransformLayer](catransformlayer.md): Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other layer types.
- [CAReplicatorLayer](careplicatorlayer.md): A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.

# CAScrollLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that displays scrollable content larger than its own bounds.

## Declaration

```objectivec
@interface CAScrollLayer : CALayer
```

<a id="overview"></a>

## Overview

The [CAScrollLayer](cascrolllayer.md) class is a subclass of [CALayer](calayer.md) that simplifies displaying a portion of a layer. The extent of the scrollable area of the [CAScrollLayer](cascrolllayer.md) is defined by the layout of its sublayers. The visible portion of the layer content is set by specifying the origin as a point or a rectangular area of the contents to be displayed. [CAScrollLayer](cascrolllayer.md) does not provide keyboard or mouse event-handling, nor does it provide visible scrollers.

## Topics

### Scrolling constraints

- [scrollMode](cascrolllayer/scrollmode.md): Defines the axes in which the layer may be scrolled.

### Scrolling the layer

- [scrollToPoint:](cascrolllayer/scroll%28to_%29-37q0p.md): Changes the origin of the receiver to the specified point.
- [scrollToRect:](cascrolllayer/scroll%28to_%29-782vd.md): Scroll the contents of the receiver to ensure that the rectangle is visible.

### Constants

- [Scroll Modes](scroll-modes.md): These constants describe the supported scroll modes used by the [scrollMode](cascrolllayer/scrollmode.md) property.

## Relationships

### Inherits From

- [CALayer](calayer.md)

## See Also

### Advanced Layer Options

- [CATiledLayer](catiledlayer.md): A layer that provides a way to asynchronously provide tiles of the layer’s content, potentially cached at multiple levels of detail.
- [CATransformLayer](catransformlayer.md): Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other layer types.
- [CAReplicatorLayer](careplicatorlayer.md): A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.
