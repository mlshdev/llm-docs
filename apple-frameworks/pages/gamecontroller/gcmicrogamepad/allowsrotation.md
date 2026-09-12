> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepad/allowsrotation](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepad/allowsrotation)

# allowsRotation (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.

## Declaration

```swift
var allowsRotation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), the profile reports the value of the directional pad only in portrait orientation even when the user rotates the controller. If this property is [true](https://developer.apple.com/documentation/swift/true), the profile reports the values using the current orientation. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting directional pad inputs

- [dpad](dpad.md): The controller’s directional pad element.
- [reportsAbsoluteDpadValues](reportsabsolutedpadvalues.md): A Boolean value that indicates whether the directional pad reports absolute or relative values.

# allowsRotation (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsRotation;
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), the profile reports the value of the directional pad only in portrait orientation even when the user rotates the controller. If this property is [true](https://developer.apple.com/documentation/swift/true), the profile reports the values using the current orientation. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting directional pad inputs

- [dpad](dpad.md): The controller’s directional pad element.
- [reportsAbsoluteDpadValues](reportsabsolutedpadvalues.md): A Boolean value that indicates whether the directional pad reports absolute or relative values.
