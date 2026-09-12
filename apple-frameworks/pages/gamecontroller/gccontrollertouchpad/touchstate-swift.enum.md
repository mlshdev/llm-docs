> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollertouchpad/touchstate-swift.enum](https://developer.apple.com/documentation/gamecontroller/gccontrollertouchpad/touchstate-swift.enum)

# GCControllerTouchpad.TouchState (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The possible states of the user’s touch.

## Declaration

```swift
enum TouchState
```

## Topics

### States

- [GCControllerTouchpad.TouchState.up](touchstate-swift.enum/up.md): The user stops or isn’t touching the surface.
- [GCControllerTouchpad.TouchState.down](touchstate-swift.enum/down.md): The user starts touching the surface.
- [GCControllerTouchpad.TouchState.moving](touchstate-swift.enum/moving.md): The user continues touching the surface.

### Initializers

- [init(rawValue:)](touchstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the input values

- [touchState](touchstate-swift.property.md): The state of the user’s touch on the surface of the touchpad.
- [reportsAbsoluteTouchSurfaceValues](reportsabsolutetouchsurfacevalues.md): A Boolean value that determines whether the touch values are absolute or relative.

# GCTouchState (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The possible states of the user’s touch.

## Declaration

```objectivec
enum GCTouchState : NSInteger;
```

## Topics

### States

- [GCTouchStateUp](touchstate-swift.enum/up.md): The user stops or isn’t touching the surface.
- [GCTouchStateDown](touchstate-swift.enum/down.md): The user starts touching the surface.
- [GCTouchStateMoving](touchstate-swift.enum/moving.md): The user continues touching the surface.

## See Also

### Accessing the input values

- [touchState](touchstate-swift.property.md): The state of the user’s touch on the surface of the touchpad.
- [reportsAbsoluteTouchSurfaceValues](reportsabsolutetouchsurfacevalues.md): A Boolean value that determines whether the touch values are absolute or relative.
