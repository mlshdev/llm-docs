> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytype/aggregationstyle](https://developer.apple.com/documentation/healthkit/hkquantitytype/aggregationstyle)

# aggregationStyle (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The aggregation style for the given quantity type.

## Declaration

```swift
var aggregationStyle: HKQuantityAggregationStyle { get }
```

<a id="Discussion"></a>

## Discussion

For more information on aggregation styles, see [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md).

## See Also

### Accessing Quantity Type Data

- [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md): Constant values that describe how quantities can be aggregated over time.
- [is(compatibleWith:)](is%28compatiblewith_%29.md): Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.

# aggregationStyle (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The aggregation style for the given quantity type.

## Declaration

```objectivec
@property (readonly) HKQuantityAggregationStyle aggregationStyle;
```

<a id="Discussion"></a>

## Discussion

For more information on aggregation styles, see [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md).

## See Also

### Accessing Quantity Type Data

- [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md): Constant values that describe how quantities can be aggregated over time.
- [isCompatibleWithUnit:](is%28compatiblewith_%29.md): Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.
