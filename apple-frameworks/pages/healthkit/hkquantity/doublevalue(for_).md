> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantity/doublevalue(for:)](https://developer.apple.com/documentation/healthkit/hkquantity/doublevalue(for:))

# doubleValue(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the quantity’s value in the provided unit.

## Declaration

```swift
func doubleValue(for unit: HKUnit) -> Double
```

## Parameters

- `unit`: The target unit. If the quantity is not compatible with this unit, it throws an exception ([invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

The quantity’s value in the provided units.

<a id="Discussion"></a>

## Discussion

This method converts the quantity’s value to the desired units. You do not need to know the quantity’s original units. You can request the value in whatever units you want, as long as they are compatible with the quantity. This lets each application (or each locale) work with its preferred units.

In most cases, you know which units are compatible with a given quantity from context. To see the unit types associated with different quantity sample types, see the type identifiers in [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).

If you need to programmatically check whether a particular unit is compatible with a particular quantity, call the quantity’s [is(compatibleWith:)](is%28compatiblewith_%29.md) method.

## See Also

### Working With Units

- [is(compatibleWith:)](is%28compatiblewith_%29.md): Returns a boolean value indicating whether the quantity is compatible with the provided unit.

# doubleValueForUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the quantity’s value in the provided unit.

## Declaration

```objectivec
- (double) doubleValueForUnit:(HKUnit *) unit;
```

## Parameters

- `unit`: The target unit. If the quantity is not compatible with this unit, it throws an exception ([NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md)).

<a id="return-value"></a>

## Return Value

The quantity’s value in the provided units.

<a id="Discussion"></a>

## Discussion

This method converts the quantity’s value to the desired units. You do not need to know the quantity’s original units. You can request the value in whatever units you want, as long as they are compatible with the quantity. This lets each application (or each locale) work with its preferred units.

In most cases, you know which units are compatible with a given quantity from context. To see the unit types associated with different quantity sample types, see the type identifiers in [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).

If you need to programmatically check whether a particular unit is compatible with a particular quantity, call the quantity’s [isCompatibleWithUnit:](is%28compatiblewith_%29.md) method.

## See Also

### Working With Units

- [isCompatibleWithUnit:](is%28compatiblewith_%29.md): Returns a boolean value indicating whether the quantity is compatible with the provided unit.
