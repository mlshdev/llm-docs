> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput/setvalue(_:)](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput/setvalue(_:))

# setValue(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the pressure value of a snapshot of a button.

## Declaration

```swift
func setValue(_ value: Float)
```

## Parameters

- `value`: A normalized number between `0.0` (minimum pressure) and `1.0` (maximum pressure).

<a id="Discussion"></a>

## Discussion

This method does nothing if the associated controller isn’t a snapshot (its [isSnapshot](../gccontroller/issnapshot.md) property is [false](https://developer.apple.com/documentation/swift/false)`)`.

# setValue: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the pressure value of a snapshot of a button.

## Declaration

```objectivec
- (void) setValue:(float) value;
```

## Parameters

- `value`: A normalized number between `0.0` (minimum pressure) and `1.0` (maximum pressure).

<a id="Discussion"></a>

## Discussion

This method does nothing if the associated controller isn’t a snapshot (its [snapshot](../gccontroller/issnapshot.md) property is [false](https://developer.apple.com/documentation/swift/false)`)`.
