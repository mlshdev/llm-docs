> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepad/dpad](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepad/dpad)

# dpad (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The controller’s directional pad element.

## Declaration

```swift
var dpad: GCControllerDirectionPad { get }
```

<a id="Discussion"></a>

## Discussion

The directional pad in the micro gamepad profile reports analog directional information.

## See Also

### Getting directional pad inputs

- [reportsAbsoluteDpadValues](reportsabsolutedpadvalues.md): A Boolean value that indicates whether the directional pad reports absolute or relative values.
- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.

# dpad (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The controller’s directional pad element.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) GCControllerDirectionPad * dpad;
```

<a id="Discussion"></a>

## Discussion

The directional pad in the micro gamepad profile reports analog directional information.

## See Also

### Getting directional pad inputs

- [reportsAbsoluteDpadValues](reportsabsolutedpadvalues.md): A Boolean value that indicates whether the directional pad reports absolute or relative values.
- [allowsRotation](allowsrotation.md): A Boolean value that indicates whether the profile reports the directional pad values relative to its current orientation.
