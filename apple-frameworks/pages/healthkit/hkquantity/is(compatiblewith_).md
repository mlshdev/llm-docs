> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantity/is(compatiblewith:)](https://developer.apple.com/documentation/healthkit/hkquantity/is(compatiblewith:))

# is(compatibleWith:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a boolean value indicating whether the quantity is compatible with the provided unit.

## Declaration

```swift
func `is`(compatibleWith unit: HKUnit) -> Bool
```

## Parameters

- `unit`: The target unit.

<a id="return-value"></a>

## Return Value

`Yes` if the quantity is compatible; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Individual units are compatible if they measure the same feature. For example, all length units are compatible. All mass units are also compatible. However, a length unit is not compatible with a mass unit.

Complex units are compatible if the equation defining the units are compatible. Specifically, it must use the same operators, and the operands must be compatible. For example, meters per second and miles per hour are compatible. The left operands are both length units, the right operands are both time units and they all use a division operator.

## See Also

### Working With Units

- [doubleValue(for:)](doublevalue%28for_%29.md): Returns the quantity’s value in the provided unit.

# isCompatibleWithUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a boolean value indicating whether the quantity is compatible with the provided unit.

## Declaration

```objectivec
- (BOOL) isCompatibleWithUnit:(HKUnit *) unit;
```

## Parameters

- `unit`: The target unit.

<a id="return-value"></a>

## Return Value

`Yes` if the quantity is compatible; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Individual units are compatible if they measure the same feature. For example, all length units are compatible. All mass units are also compatible. However, a length unit is not compatible with a mass unit.

Complex units are compatible if the equation defining the units are compatible. Specifically, it must use the same operators, and the operands must be compatible. For example, meters per second and miles per hour are compatible. The left operands are both length units, the right operands are both time units and they all use a division operator.

## See Also

### Working With Units

- [doubleValueForUnit:](doublevalue%28for_%29.md): Returns the quantity’s value in the provided unit.
