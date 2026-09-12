> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateinterval/intersection(with:)](https://developer.apple.com/documentation/foundation/nsdateinterval/intersection(with:))

# intersection(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the intersection between the receiver and the specified date interval.

## Declaration

```swift
func intersection(with dateInterval: DateInterval) -> DateInterval?
```

## Parameters

- `dateInterval`: The date interval with which to calculate the intersection of the receiver.

<a id="return-value"></a>

## Return Value

A date interval for the intersection of the receiver and `dateInterval`, or `nil` if no intersection occurs.

<a id="Discussion"></a>

## Discussion

Calculating the intersection of date intervals is a commutative and associative operation. The intersection of a date interval with itself is equal to itself.

The following figure illustrates five `NSDateInterval` objects plotted on an arbitrary time axis. Each date interval spans its [duration](duration.md) from left to right, from its [startDate](startdate.md) to its [endDate](enddate.md).

![](https://developer.apple.com/images/com.apple.foundation/media-2556958@2x.png)

The date intervals labeled **A** and **B** do not intersect, because the [startDate](startdate.md) of **B** occurs later than the [endDate](enddate.md) of **A**.

The date intervals  labeled **C** and **D** do intersect. The date interval labeled **E** represents the result of calculating the intersection between **C** and **D**.

## See Also

### Determining Intersections

- [intersects(\_:)](intersects%28__%29.md): Indicates whether the receiver intersects with the specified date interval.

# intersectionWithDateInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the intersection between the receiver and the specified date interval.

## Declaration

```objectivec
- (NSDateInterval *) intersectionWithDateInterval:(NSDateInterval *) dateInterval;
```

## Parameters

- `dateInterval`: The date interval with which to calculate the intersection of the receiver.

<a id="return-value"></a>

## Return Value

A date interval for the intersection of the receiver and `dateInterval`, or `nil` if no intersection occurs.

<a id="Discussion"></a>

## Discussion

Calculating the intersection of date intervals is a commutative and associative operation. The intersection of a date interval with itself is equal to itself.

The following figure illustrates five `NSDateInterval` objects plotted on an arbitrary time axis. Each date interval spans its [duration](duration.md) from left to right, from its [startDate](startdate.md) to its [endDate](enddate.md).

![](https://developer.apple.com/images/com.apple.foundation/media-2556958@2x.png)

The date intervals labeled **A** and **B** do not intersect, because the [startDate](startdate.md) of **B** occurs later than the [endDate](enddate.md) of **A**.

The date intervals  labeled **C** and **D** do intersect. The date interval labeled **E** represents the result of calculating the intersection between **C** and **D**.

## See Also

### Determining Intersections

- [intersectsDateInterval:](intersects%28__%29.md): Indicates whether the receiver intersects with the specified date interval.
