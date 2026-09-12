> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplebuilder/insert(_:for:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplebuilder/insert(_:for:))

# insert(\_:for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a new quantity to the series with the provided date interval.

## Declaration

```swift
func insert(_ quantity: HKQuantity, for dateInterval: DateInterval) throws
```

## Parameters

- `quantity`: The quantity to insert.
- `dateInterval`: The date interval associated with the quantity. If the interval’s [start](../../foundation/dateinterval/start.md) parameter is the same as the start date for a previously provided quantity, this quantity replaces the previous one. This method fails with an [HKError.Code.errorInvalidArgument](../hkerror/code/errorinvalidargument.md) error if the date parameter is earlier than the series builder’s [startDate](startdate.md) property.

<a id="Discussion"></a>

## Discussion

Use this method to add a quantity to the series. The quantity must have a unit that is compatible with the series builder’s quantity type (see [is(compatibleWith:)](../hkquantitytype/is%28compatiblewith_%29.md)).

> **Note**

>  You can insert quantities in any order. The builder sorts them by the date interval’s [startDate](../../foundation/nsdateinterval/startdate.md) property when you finish the series.

## See Also

### Adding Values

- [insert(\_:at:)](insert%28__at_%29.md): Adds a new quantity to the series at the provided date and time.

# insertQuantity:dateInterval:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a new quantity to the series with the provided date interval.

## Declaration

```objectivec
- (BOOL) insertQuantity:(HKQuantity *) quantity dateInterval:(NSDateInterval *) dateInterval error:(NSError **) error;
```

## Parameters

- `quantity`: The quantity to insert.
- `dateInterval`: The date interval associated with the quantity. If the interval’s [start](../../foundation/dateinterval/start.md) parameter is the same as the start date for a previously provided quantity, this quantity replaces the previous one. This method fails with an [HKErrorInvalidArgument](../hkerror/code/errorinvalidargument.md) error if the date parameter is earlier than the series builder’s [startDate](startdate.md) property.
- `error`: If an error occurs, the system sets this parameter to an [NSError](../../foundation/nserror.md) object that describes the problem. If you are not interested in possible errors, you may pass in `NULL`.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Use this method to add a quantity to the series. The quantity must have a unit that is compatible with the series builder’s quantity type (see [isCompatibleWithUnit:](../hkquantitytype/is%28compatiblewith_%29.md)).

> **Note**

>  You can insert quantities in any order. The builder sorts them by the date interval’s [startDate](../../foundation/nsdateinterval/startdate.md) property when you finish the series.

## See Also

### Adding Values

- [insertQuantity:date:error:](insert%28__at_%29.md): Adds a new quantity to the series at the provided date and time.
