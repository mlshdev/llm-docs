> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrolleraxisinput/setvalue(_:)](https://developer.apple.com/documentation/gamecontroller/gccontrolleraxisinput/setvalue(_:))

# setValue(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the normalized value of the axis.

## Declaration

```swift
func setValue(_ value: Float)
```

## Parameters

- `value`: A normalized value ranging from `-1` to `1` where `0` is in the dead zone.

## See Also

### Accessing the input values

- [value](value.md): The current value of the axis.

# setValue: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the normalized value of the axis.

## Declaration

```objectivec
- (void) setValue:(float) value;
```

## Parameters

- `value`: A normalized value ranging from `-1` to `1` where `0` is in the dead zone.

## See Also

### Accessing the input values

- [value](value.md): The current value of the axis.
