> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/addingtimeinterval(_:)](https://developer.apple.com/documentation/foundation/nsdate/addingtimeinterval(_:))

# addingTimeInterval(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new date object that is set to a given number of seconds relative to the receiver.

## Declaration

```swift
func addingTimeInterval(_ ti: TimeInterval) -> Self
```

## Parameters

- `ti`: The number of seconds to add to the receiver. Use a negative value for seconds to have the returned object specify a date before the receiver.

<a id="return-value"></a>

## Return Value

A new `NSDate` object that is set to `seconds` seconds relative to the receiver. The date returned might have a representation different from the receiver’s.

## See Also

### Related Documentation

- [timeIntervalSince(\_:)](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.

# dateByAddingTimeInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new date object that is set to a given number of seconds relative to the receiver.

## Declaration

```objectivec
- (instancetype) dateByAddingTimeInterval:(NSTimeInterval) ti;
```

## Parameters

- `ti`: The number of seconds to add to the receiver. Use a negative value for seconds to have the returned object specify a date before the receiver.

<a id="return-value"></a>

## Return Value

A new `NSDate` object that is set to `seconds` seconds relative to the receiver. The date returned might have a representation different from the receiver’s.

## See Also

### Related Documentation

- [timeIntervalSinceDate:](timeintervalsince%28__%29.md): Returns the interval between the receiver and another given date.
