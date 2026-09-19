> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsdate/init(timeinterval:since:)

# init(timeInterval:since:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to another given date by a given number of seconds.

## Declaration

```swift
convenience init(timeInterval secsToBeAdded: TimeInterval, since date: Date)
```

## Parameters

- `secsToBeAdded`: The number of seconds to add to `date`. A negative value means the receiver will be earlier than `date`.
- `date`: The reference date.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized relative to `date` by `secsToBeAdded` seconds.

# initWithTimeInterval:sinceDate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a date object initialized relative to another given date by a given number of seconds.

## Declaration

```objectivec
- (instancetype) initWithTimeInterval:(NSTimeInterval) secsToBeAdded sinceDate:(NSDate *) date;
```

## Parameters

- `secsToBeAdded`: The number of seconds to add to `date`. A negative value means the receiver will be earlier than `date`.
- `date`: The reference date.

<a id="return-value"></a>

## Return Value

An `NSDate` object initialized relative to `date` by `secsToBeAdded` seconds.
