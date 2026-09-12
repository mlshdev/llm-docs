> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepad/savesnapshot()](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepad/savesnapshot())

# saveSnapshot() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Saves a snapshot of all of the profile’s elements.

> Use [capture()](../gccontroller/capture%28%29.md) instead.

## Declaration

```swift
func saveSnapshot() -> GCMicroGamepadSnapshot
```

<a id="return-value"></a>

## Return Value

A snapshot that is a copy of the controller at a moment in time, and has element values you can set.

## See Also

### Setting snapshot avlues

- [setStateFrom(\_:)](setstatefrom%28__%29.md): Copies the input values from a specified micro gamepad to a snapshot of a micro gamepad.

# saveSnapshot (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Saves a snapshot of all of the profile’s elements.

> Use [capture](../gccontroller/capture%28%29.md) instead.

## Declaration

```objectivec
- (GCMicroGamepadSnapshot *) saveSnapshot;
```

<a id="return-value"></a>

## Return Value

A snapshot that is a copy of the controller at a moment in time, and has element values you can set.

## See Also

### Setting snapshot avlues

- [setStateFromMicroGamepad:](setstatefrom%28__%29.md): Copies the input values from a specified micro gamepad to a snapshot of a micro gamepad.
