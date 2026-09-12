> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerregion](https://developer.apple.com/documentation/uikit/uipointerregion)

# UIPointerRegion (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A rectangular region that interacts with pointer movements.

## Declaration

```swift
@MainActor class UIPointerRegion
```

## Topics

### Creating a region

- [init(rect:identifier:)](uipointerregion/init%28rect_identifier_%29.md): Creates a pointer region with the specified rectangle and optional identifier.

### Configuring a region

- [rect](uipointerregion/rect.md): The rectangle bounds of the region.
- [identifier](uipointerregion/identifier-1tw1m.md): An optional identifier for the region.
- [latchingAxes](uipointerregion/latchingaxes.md): Axes along which the region latches after a primary click.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Pointer region

- [UIPointerRegionRequest](uipointerregionrequest.md): An object to describe the pointer’s location in the interaction’s view.

# UIPointerRegion (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A rectangular region that interacts with pointer movements.

## Declaration

```objectivec
@interface UIPointerRegion : NSObject
```

## Topics

### Creating a region

- [regionWithRect:identifier:](uipointerregion/regionwithrect_identifier_.md): Creates a pointer region with the specified rectangle and optional identifier.

### Configuring a region

- [rect](uipointerregion/rect.md): The rectangle bounds of the region.
- [identifier](uipointerregion/identifier-9i5wc.md): An optional identifier for the region.
- [latchingAxes](uipointerregion/latchingaxes.md): Axes along which the region latches after a primary click.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Pointer region

- [UIPointerRegionRequest](uipointerregionrequest.md): An object to describe the pointer’s location in the interaction’s view.
