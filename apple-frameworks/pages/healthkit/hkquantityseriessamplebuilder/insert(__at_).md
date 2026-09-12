> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplebuilder/insert(_:at:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplebuilder/insert(_:at:))

# insert(\_:at:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Adds a new quantity to the series at the provided date and time.

## Declaration

```swift
func insert(_ quantity: HKQuantity, at date: Date) throws
```

## Parameters

- `quantity`: The quantity to insert.
- `date`: The start date associated with the quantity. If this is the same start date as a previously provided quantity, this quantity replaces the previous one. This method fails with an [HKError.Code.errorInvalidArgument](../hkerror/code/errorinvalidargument.md) error if the `date` parameter is earlier than the series builder’s [startDate](startdate.md) property.

<a id="Discussion"></a>

## Discussion

This method calls [insert(\_:for:)](insert%28__for_%29.md), passing a date interval with the provided start date, and a duration of `0`.

## See Also

### Adding Values

- [insert(\_:for:)](insert%28__for_%29.md): Adds a new quantity to the series with the provided date interval.

# insertQuantity:date:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Adds a new quantity to the series at the provided date and time.

## Declaration

```objectivec
- (BOOL) insertQuantity:(HKQuantity *) quantity date:(NSDate *) date error:(NSError **) error;
```

## Parameters

- `quantity`: The quantity to insert.
- `date`: The start date associated with the quantity. If this is the same start date as a previously provided quantity, this quantity replaces the previous one. This method fails with an [HKErrorInvalidArgument](../hkerror/code/errorinvalidargument.md) error if the `date` parameter is earlier than the series builder’s [startDate](startdate.md) property.
- `error`: If an error occurs, the system sets this parameter to an [NSError](../../foundation/nserror.md) object that describes the problem. If you are not interested in possible errors, you may pass in `NULL`.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

This method calls [insertQuantity:dateInterval:error:](insert%28__for_%29.md), passing a date interval with the provided start date, and a duration of `0`.

## See Also

### Adding Values

- [insertQuantity:dateInterval:error:](insert%28__for_%29.md): Adds a new quantity to the series with the provided date interval.
