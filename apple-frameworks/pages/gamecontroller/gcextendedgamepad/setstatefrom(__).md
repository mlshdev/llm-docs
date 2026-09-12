> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepad/setstatefrom(_:)](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepad/setstatefrom(_:))

# setStateFrom(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Copies the input values from a specified extended gamepad to a snapshot of an extended gamepad.

## Declaration

```swift
func setStateFrom(_ extendedGamepad: GCExtendedGamepad)
```

## Parameters

- `extendedGamepad`: The extended gamepad to copy the input values from.

<a id="Discussion"></a>

## Discussion

If this extended gamepad isn’t a snapshot, this method does nothing. A snapshot is a copy of a controller at a moment in time that has element values you can set.

## See Also

### Setting snapshot values

- [saveSnapshot()](savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.

# setStateFromExtendedGamepad: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Copies the input values from a specified extended gamepad to a snapshot of an extended gamepad.

## Declaration

```objectivec
- (void) setStateFromExtendedGamepad:(GCExtendedGamepad *) extendedGamepad;
```

## Parameters

- `extendedGamepad`: The extended gamepad to copy the input values from.

<a id="Discussion"></a>

## Discussion

If this extended gamepad isn’t a snapshot, this method does nothing. A snapshot is a copy of a controller at a moment in time that has element values you can set.

## See Also

### Setting snapshot values

- [saveSnapshot](savesnapshot%28%29.md): Deprecated. Saves a snapshot of all of the profile’s elements.
