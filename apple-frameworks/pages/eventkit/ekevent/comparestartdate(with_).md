> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekevent/comparestartdate(with:)](https://developer.apple.com/documentation/eventkit/ekevent/comparestartdate(with:))

# compareStartDate(with:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Compares the start date of the receiving event with the start date of another event.

## Declaration

```swift
func compareStartDate(with other: EKEvent) -> ComparisonResult
```

## Parameters

- `other`: The event to compare against.

<a id="return-value"></a>

## Return Value

Returns [ComparisonResult.orderedAscending](../../foundation/comparisonresult/orderedascending.md) if the start date of the receiver precedes the start date of `other`. Returns [ComparisonResult.orderedSame](../../foundation/comparisonresult/orderedsame.md) if the start dates of the two events are identical. Returns [ComparisonResult.orderedDescending](../../foundation/comparisonresult/ordereddescending.md) if the start date of the receiver comes after the start date of `other`.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

You can pass the selector for this method to the NSArray method [sortedArray(using:)](../../foundation/nsarray/sortedarray%28using_%29-9nhh9.md) to create an array of events sorted by start date.

# compareStartDateWithEvent: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Compares the start date of the receiving event with the start date of another event.

## Declaration

```objectivec
- (NSComparisonResult) compareStartDateWithEvent:(EKEvent *) other;
```

## Parameters

- `other`: The event to compare against.

<a id="return-value"></a>

## Return Value

Returns [NSOrderedAscending](../../foundation/comparisonresult/orderedascending.md) if the start date of the receiver precedes the start date of `other`. Returns [NSOrderedSame](../../foundation/comparisonresult/orderedsame.md) if the start dates of the two events are identical. Returns [NSOrderedDescending](../../foundation/comparisonresult/ordereddescending.md) if the start date of the receiver comes after the start date of `other`.

## Mentioned In

- [Retrieving events and reminders](../retrieving-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

You can pass the selector for this method to the NSArray method [sortedArrayUsingSelector:](../../foundation/nsarray/sortedarray%28using_%29-9nhh9.md) to create an array of events sorted by start date.
