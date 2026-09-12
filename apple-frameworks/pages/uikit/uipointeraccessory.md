> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointeraccessory](https://developer.apple.com/documentation/uikit/uipointeraccessory)

# UIPointerAccessory (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Constants that describe accessories to display alongside the primary pointer.

## Declaration

```swift
@MainActor class UIPointerAccessory
```

## Topics

### Creating a pointer accessory

- [init(\_:position:)](uipointeraccessory/init%28__position_%29.md): Creates a pointer accessory with the specified shape and position.
- [arrow(\_:)](uipointeraccessory/arrow%28__%29.md): Creates a pointer accessory with an arrow shape at the specified position.

### Matching the angle

- [orientationMatchesAngle](uipointeraccessory/orientationmatchesangle.md): A Boolean value that indicates whether the system rotates the accessory to match its angle.

### Getting the shape

- [shape](uipointeraccessory/shape-8pp0a.md): The shape of the accessory.

### Getting the position

- [position](uipointeraccessory/position-swift.property.md): The position of the accessory relative to the primary pointer.
- [UIPointerAccessory.Position](uipointeraccessory/position-swift.struct.md): A structure that specifies the position of the accessory relative to the primary pointer.

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

### Pointer styles

- [UIPointerStyle](uipointerstyle.md): An object that defines the pointer shape and effect.
- [UIPointerShape](uipointershape-swift.enum.md): An object that defines the shape of custom pointers.
- [UIPointerEffect](uipointereffect-swift.enum.md): An effect that alters a view’s appearance when a pointer enters the current region.

# UIPointerAccessory (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Constants that describe accessories to display alongside the primary pointer.

## Declaration

```objectivec
@interface UIPointerAccessory : NSObject
```

## Topics

### Creating a pointer accessory

- [accessoryWithShape:position:](uipointeraccessory/accessorywithshape_position_.md): Creates a pointer accessory with the specified shape and position.
- [arrowAccessoryWithPosition:](uipointeraccessory/arrowaccessorywithposition_.md): Creates a pointer accessory at the specified position.

### Matching the angle

- [orientationMatchesAngle](uipointeraccessory/orientationmatchesangle.md): A Boolean value that indicates whether the system rotates the accessory to match its angle.

### Getting the shape

- [shape](uipointeraccessory/shape-9jmm8.md): The shape of the accessory.

### Getting the position

- [position](uipointeraccessory/position-swift.property.md): The position of the accessory relative to the primary pointer.
- [UIPointerAccessoryPosition](uipointeraccessoryposition.md): A structure that specifies the position of the accessory relative to the primary pointer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Pointer styles

- [UIPointerStyle](uipointerstyle.md): An object that defines the pointer shape and effect.
- [UIPointerShape](uipointershape-c.class.md): An object that defines the shape of custom pointers.
- [UIPointerEffect](uipointereffect-c.class.md): An effect that alters a view’s appearance when a pointer enters the current region.
