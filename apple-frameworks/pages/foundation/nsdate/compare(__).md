> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/compare(_:)](https://developer.apple.com/documentation/foundation/nsdate/compare(_:))

# compare(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates the temporal ordering of the receiver and another given date.

## Declaration

```swift
func compare(_ other: Date) -> ComparisonResult
```

## Parameters

- `other`: The date with which to compare the receiver.

  This value must not be `nil`. If the value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

If:

- The receiver and `anotherDate` are exactly equal to each other, [ComparisonResult.orderedSame](../comparisonresult/orderedsame.md)
- The receiver is later in time than `anotherDate`, [ComparisonResult.orderedDescending](../comparisonresult/ordereddescending.md)
- The receiver is earlier in time than `anotherDate`, [ComparisonResult.orderedAscending](../comparisonresult/orderedascending.md).

<a id="discussion"></a>

## Discussion

This method detects sub-second differences between dates. If you want to compare dates with a less fine granularity, use [timeIntervalSince(\_:)](timeintervalsince%28__%29.md) to compare the two dates.

## See Also

### Related Documentation

- [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Dates

- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.
- [earlierDate(\_:)](earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [laterDate(\_:)](laterdate%28__%29.md): Returns the later of the receiver and another given date.

# compare: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates the temporal ordering of the receiver and another given date.

## Declaration

```objectivec
- (NSComparisonResult) compare:(NSDate *) other;
```

## Parameters

- `other`: The date with which to compare the receiver.

  This value must not be `nil`. If the value is `nil`, the behavior is undefined and may change in future versions of macOS.

<a id="return-value"></a>

## Return Value

If:

- The receiver and `anotherDate` are exactly equal to each other, [NSOrderedSame](../comparisonresult/orderedsame.md)
- The receiver is later in time than `anotherDate`, [NSOrderedDescending](../comparisonresult/ordereddescending.md)
- The receiver is earlier in time than `anotherDate`, [NSOrderedAscending](../comparisonresult/orderedascending.md).

<a id="discussion"></a>

## Discussion

This method detects sub-second differences between dates. If you want to compare dates with a less fine granularity, use [timeIntervalSinceDate:](timeintervalsince%28__%29.md) to compare the two dates.

## See Also

### Related Documentation

- [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Dates

- [isEqualToDate:](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.
- [earlierDate:](earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [laterDate:](laterdate%28__%29.md): Returns the later of the receiver and another given date.
