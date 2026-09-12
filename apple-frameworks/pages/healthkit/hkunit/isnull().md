> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/isnull()](https://developer.apple.com/documentation/healthkit/hkunit/isnull())

# isNull() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the unit is null.

## Declaration

```swift
func isNull() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the unit is null; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Null units occur only when you create compound units in which all the units cancel out. For example, if you tried to create a unit by dividing deciliters by liters (`dL/L`), you would end up with a null unit.

## See Also

### Working with units

- [init(from:)](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.
- [unitString](unitstring.md): A string representation of the unit object.

# isNull (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the unit is null.

## Declaration

```objectivec
- (BOOL) isNull;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the unit is null; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Null units occur only when you create compound units in which all the units cancel out. For example, if you tried to create a unit by dividing deciliters by liters (`dL/L`), you would end up with a null unit.

## See Also

### Working with units

- [unitFromString:](init%28from_%29-9qont.md): Returns the unit instance described by the provided string.
- [unitString](unitstring.md): A string representation of the unit object.
