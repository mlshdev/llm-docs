> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/isequal(to:)](https://developer.apple.com/documentation/foundation/nsdate/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.

## Declaration

```swift
func isEqual(to otherDate: Date) -> Bool
```

## Parameters

- `otherDate`: The date to compare with the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `otherDate` is an [NSDate](../nsdate.md) object and is exactly equal to the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method detects sub-second differences between dates. If you want to compare dates with a less fine granularity, use [timeIntervalSince(\_:)](timeintervalsince%28__%29.md) to compare the two dates.

## See Also

### Related Documentation

- [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Dates

- [earlierDate(\_:)](earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [laterDate(\_:)](laterdate%28__%29.md): Returns the later of the receiver and another given date.
- [compare(\_:)](compare%28__%29.md): Indicates the temporal ordering of the receiver and another given date.

# isEqualToDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.

## Declaration

```objectivec
- (BOOL) isEqualToDate:(NSDate *) otherDate;
```

## Parameters

- `otherDate`: The date to compare with the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `otherDate` is an [NSDate](../nsdate.md) object and is exactly equal to the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method detects sub-second differences between dates. If you want to compare dates with a less fine granularity, use [timeIntervalSinceDate:](timeintervalsince%28__%29.md) to compare the two dates.

## See Also

### Related Documentation

- [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Dates

- [earlierDate:](earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [laterDate:](laterdate%28__%29.md): Returns the later of the receiver and another given date.
- [compare:](compare%28__%29.md): Indicates the temporal ordering of the receiver and another given date.
