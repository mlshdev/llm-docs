> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollertouchpad/touchstate-swift.property](https://developer.apple.com/documentation/gamecontroller/gccontrollertouchpad/touchstate-swift.property)

# touchState (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The state of the user’s touch on the surface of the touchpad.

## Declaration

```swift
var touchState: GCControllerTouchpad.TouchState { get }
```

## See Also

### Accessing the input values

- [GCControllerTouchpad.TouchState](touchstate-swift.enum.md): The possible states of the user’s touch.
- [reportsAbsoluteTouchSurfaceValues](reportsabsolutetouchsurfacevalues.md): A Boolean value that determines whether the touch values are absolute or relative.

# touchState (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The state of the user’s touch on the surface of the touchpad.

## Declaration

```objectivec
@property (nonatomic, readonly) GCTouchState touchState;
```

## See Also

### Accessing the input values

- [GCTouchState](touchstate-swift.enum.md): The possible states of the user’s touch.
- [reportsAbsoluteTouchSurfaceValues](reportsabsolutetouchsurfacevalues.md): A Boolean value that determines whether the touch values are absolute or relative.
