> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequery/includesample](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequery/includesample)

# includeSample (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that determines whether the query should return the series sample.

## Declaration

```swift
var includeSample: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a quantity series sample only returns the individual quantity objects that make up the series—not the [HKQuantitySample](../hkquantitysample.md) object that represents the entire series. Set this parameter to [true](../../foundation/nsexpression/true.md) to have the query also return the quantity sample object for the series.

> **Note**

>  This may introduce a performance cost for the query.

## See Also

### Creating a Series Query

- [init(quantityType:predicate:quantityHandler:)](init%28quantitytype_predicate_quantityhandler_%29.md): Creates a new query for a series of the specified quantity type.
- [orderByQuantitySampleStartDate](orderbyquantitysamplestartdate.md): A Boolean value that determines whether the query groups the results based on the quantity sample’s start date.

# includeSample (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that determines whether the query should return the series sample.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL includeSample;
```

<a id="Discussion"></a>

## Discussion

By default, a quantity series sample only returns the individual quantity objects that make up the series—not the [HKQuantitySample](../hkquantitysample.md) object that represents the entire series. Set this parameter to [trueExpression](../../foundation/nsexpression/true.md) to have the query also return the quantity sample object for the series.

> **Note**

>  This may introduce a performance cost for the query.

## See Also

### Creating a Series Query

- [initWithQuantityType:predicate:quantityHandler:](init%28quantitytype_predicate_quantityhandler_%29.md): Creates a new query for a series of the specified quantity type.
- [orderByQuantitySampleStartDate](orderbyquantitysamplestartdate.md): A Boolean value that determines whether the query groups the results based on the quantity sample’s start date.
