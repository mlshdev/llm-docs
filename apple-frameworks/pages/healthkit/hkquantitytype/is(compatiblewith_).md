> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkquantitytype/is(compatiblewith:)

# is(compatibleWith:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.

## Declaration

```swift
func `is`(compatibleWith unit: HKUnit) -> Bool
```

## Parameters

- `unit`: The HealthKit unit to be checked.

<a id="return-value"></a>

## Return Value

YES if the quantity type is compatible with the given unit; otherwise, NO.

<a id="Discussion"></a>

## Discussion

When creating a HealthKit quantity sample, the sample’s type and quantity object must use compatible units. For more information, see [HKQuantity](../hkquantity.md).

## See Also

### Accessing Quantity Type Data

- [aggregationStyle](aggregationstyle.md): The aggregation style for the given quantity type.
- [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md): Constant values that describe how quantities can be aggregated over time.

# isCompatibleWithUnit: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.

## Declaration

```objectivec
- (BOOL) isCompatibleWithUnit:(HKUnit *) unit;
```

## Parameters

- `unit`: The HealthKit unit to be checked.

<a id="return-value"></a>

## Return Value

YES if the quantity type is compatible with the given unit; otherwise, NO.

<a id="Discussion"></a>

## Discussion

When creating a HealthKit quantity sample, the sample’s type and quantity object must use compatible units. For more information, see [HKQuantity](../hkquantity.md).

## See Also

### Accessing Quantity Type Data

- [aggregationStyle](aggregationstyle.md): The aggregation style for the given quantity type.
- [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md): Constant values that describe how quantities can be aggregated over time.
