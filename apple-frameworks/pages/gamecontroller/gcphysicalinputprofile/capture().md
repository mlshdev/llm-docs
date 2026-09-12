> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/capture()](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/capture())

# capture() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a snapshot of the profile with its current element values.

## Declaration

```swift
func capture() -> Self
```

<a id="return-value"></a>

## Return Value

A snapshot of the profile.

<a id="Discussion"></a>

## Discussion

A snapshot is a copy of profile at a moment in time with its current element values. Unlike other profiles, you can set the values of a snapshot’s elements.

## See Also

### Setting snapshot values

- [setStateFromPhysicalInput(\_:)](setstatefromphysicalinput%28__%29.md): Copies the input values from a specified physical input profile to a snapshot of the profile.

# capture (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a snapshot of the profile with its current element values.

## Declaration

```objectivec
- (instancetype) capture;
```

<a id="return-value"></a>

## Return Value

A snapshot of the profile.

<a id="Discussion"></a>

## Discussion

A snapshot is a copy of profile at a moment in time with its current element values. Unlike other profiles, you can set the values of a snapshot’s elements.

## See Also

### Setting snapshot values

- [setStateFromPhysicalInput:](setstatefromphysicalinput%28__%29.md): Copies the input values from a specified physical input profile to a snapshot of the profile.
