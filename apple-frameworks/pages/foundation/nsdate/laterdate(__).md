> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/laterdate(_:)](https://developer.apple.com/documentation/foundation/nsdate/laterdate(_:))

# laterDate(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the later of the receiver and another given date.

## Declaration

```swift
func laterDate(_ anotherDate: Date) -> Date
```

## Parameters

- `anotherDate`: The date with which to compare the receiver.

<a id="return-value"></a>

## Return Value

The later of the receiver and `anotherDate`, determined using [timeIntervalSince(\_:)](timeintervalsince%28__%29.md). If the receiver and `anotherDate` represent the same date, returns the receiver.

## See Also

### Related Documentation

- [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Dates

- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.
- [earlierDate(\_:)](earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [compare(\_:)](compare%28__%29.md): Indicates the temporal ordering of the receiver and another given date.

# laterDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the later of the receiver and another given date.

## Declaration

```objectivec
- (NSDate *) laterDate:(NSDate *) anotherDate;
```

## Parameters

- `anotherDate`: The date with which to compare the receiver.

<a id="return-value"></a>

## Return Value

The later of the receiver and `anotherDate`, determined using [timeIntervalSinceDate:](timeintervalsince%28__%29.md). If the receiver and `anotherDate` represent the same date, returns the receiver.

## See Also

### Related Documentation

- [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Dates

- [isEqualToDate:](isequal%28to_%29.md): Returns a Boolean value that indicates whether a given object is a date that is exactly equal the receiver.
- [earlierDate:](earlierdate%28__%29.md): Returns the earlier of the receiver and another given date.
- [compare:](compare%28__%29.md): Indicates the temporal ordering of the receiver and another given date.
