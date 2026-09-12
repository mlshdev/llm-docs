> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepad/reportsabsolutedpadvalues](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepad/reportsabsolutedpadvalues)

# reportsAbsoluteDpadValues (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the directional pad reports absolute or relative values.

## Declaration

```swift
var reportsAbsoluteDpadValues: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), the profile assumes the location where the user first touches the pad is the origin value (`0.0,0.0`) for the pad. The profile calculates all subsequent values relative to this position until the user lifts their finger. The next time the user touches the pad, the profile uses that location as the new origin. If this property is [true](https://developer.apple.com/documentation/swift/true), the profile calculates values relative to the physical center of the touchpad. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting directional pad inputs

- [dpad](dpad.md): The controller’s directional pad element.
- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.

# reportsAbsoluteDpadValues (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the directional pad reports absolute or relative values.

## Declaration

```objectivec
@property (nonatomic) BOOL reportsAbsoluteDpadValues;
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), the profile assumes the location where the user first touches the pad is the origin value (`0.0,0.0`) for the pad. The profile calculates all subsequent values relative to this position until the user lifts their finger. The next time the user touches the pad, the profile uses that location as the new origin. If this property is [true](https://developer.apple.com/documentation/swift/true), the profile calculates values relative to the physical center of the touchpad. The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting directional pad inputs

- [dpad](dpad.md): The controller’s directional pad element.
- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.
