> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/setstatefromphysicalinput(_:)](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/setstatefromphysicalinput(_:))

# setStateFromPhysicalInput(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Copies the input values from a specified physical input profile to a snapshot of the profile.

## Declaration

```swift
func setStateFromPhysicalInput(_ physicalInput: GCPhysicalInputProfile)
```

## Parameters

- `physicalInput`: The physical input profile to copy the input values from.

<a id="Discussion"></a>

## Discussion

If the associated controller isn’t a snapshot, this method does nothing.

## See Also

### Related Documentation

- [isSnapshot](../gccontroller/issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.

### Setting snapshot values

- [capture()](capture%28%29.md): Returns a snapshot of the profile with its current element values.

# setStateFromPhysicalInput: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Copies the input values from a specified physical input profile to a snapshot of the profile.

## Declaration

```objectivec
- (void) setStateFromPhysicalInput:(GCPhysicalInputProfile *) physicalInput;
```

## Parameters

- `physicalInput`: The physical input profile to copy the input values from.

<a id="Discussion"></a>

## Discussion

If the associated controller isn’t a snapshot, this method does nothing.

## See Also

### Related Documentation

- [snapshot](../gccontroller/issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.

### Setting snapshot values

- [capture](capture%28%29.md): Returns a snapshot of the profile with its current element values.
