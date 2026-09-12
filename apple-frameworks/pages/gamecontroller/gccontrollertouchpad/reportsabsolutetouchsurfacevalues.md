> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollertouchpad/reportsabsolutetouchsurfacevalues](https://developer.apple.com/documentation/gamecontroller/gccontrollertouchpad/reportsabsolutetouchsurfacevalues)

# reportsAbsoluteTouchSurfaceValues (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that determines whether the touch values are absolute or relative.

## Declaration

```swift
var reportsAbsoluteTouchSurfaceValues: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the touch values are absolute on the surface of the touchpad. If this property is [false](https://developer.apple.com/documentation/swift/false), the touch values are relative to the first touch on a virtual directional pad. The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the input values

- [touchState](touchstate-swift.property.md): The state of the user’s touch on the surface of the touchpad.
- [GCControllerTouchpad.TouchState](touchstate-swift.enum.md): The possible states of the user’s touch.

# reportsAbsoluteTouchSurfaceValues (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that determines whether the touch values are absolute or relative.

## Declaration

```objectivec
@property (nonatomic) BOOL reportsAbsoluteTouchSurfaceValues;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the touch values are absolute on the surface of the touchpad. If this property is [false](https://developer.apple.com/documentation/swift/false), the touch values are relative to the first touch on a virtual directional pad. The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the input values

- [touchState](touchstate-swift.property.md): The state of the user’s touch on the surface of the touchpad.
- [GCTouchState](touchstate-swift.enum.md): The possible states of the user’s touch.
