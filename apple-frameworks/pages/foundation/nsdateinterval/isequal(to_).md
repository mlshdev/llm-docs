> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateinterval/isequal(to:)](https://developer.apple.com/documentation/foundation/nsdateinterval/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Indicates whether the receiver is equal to the specified date interval.

## Declaration

```swift
func isEqual(to dateInterval: DateInterval) -> Bool
```

## Parameters

- `dateInterval`: The date interval with which to check the receiver for equality.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the [startDate](startdate.md) and [duration](duration.md) of `dateInterval` and the receiver are equal. Otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Date Intervals

- [compare(\_:)](compare%28__%29.md): Compares the receiver with the specified date interval.

# isEqualToDateInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Indicates whether the receiver is equal to the specified date interval.

## Declaration

```objectivec
- (BOOL) isEqualToDateInterval:(NSDateInterval *) dateInterval;
```

## Parameters

- `dateInterval`: The date interval with which to check the receiver for equality.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the [startDate](startdate.md) and [duration](duration.md) of `dateInterval` and the receiver are equal. Otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Date Intervals

- [compare:](compare%28__%29.md): Compares the receiver with the specified date interval.
