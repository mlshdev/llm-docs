> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepad/setstatefrom(_:)](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepad/setstatefrom(_:))

# setStateFrom(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Copies the input values from a specified micro gamepad to a snapshot of a micro gamepad.

## Declaration

```swift
func setStateFrom(_ microGamepad: GCMicroGamepad)
```

## Parameters

- `microGamepad`: The micro gamepad to copy the input values from.

## See Also

### Setting snapshot avlues

- [saveSnapshot()](savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

# setStateFromMicroGamepad: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Copies the input values from a specified micro gamepad to a snapshot of a micro gamepad.

## Declaration

```objectivec
- (void) setStateFromMicroGamepad:(GCMicroGamepad *) microGamepad;
```

## Parameters

- `microGamepad`: The micro gamepad to copy the input values from.

## See Also

### Setting snapshot avlues

- [saveSnapshot](savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.
