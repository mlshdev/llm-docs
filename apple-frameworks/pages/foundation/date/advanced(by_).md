> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/advanced(by:)](https://developer.apple.com/documentation/foundation/date/advanced(by:))

# advanced(by:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a date offset the specified time interval from this date.

## Declaration

```swift
func advanced(by n: TimeInterval) -> Date
```

## Parameters

- `n`: The time interval offset.

<a id="return-value"></a>

## Return Value

A date offset the specified time interval from this date.

## See Also

### Adding or Subtracting a Time Interval

- [addTimeInterval(\_:)](addtimeinterval%28__%29.md): Adds a time interval to this date.
- [addingTimeInterval(\_:)](addingtimeinterval%28__%29.md): Creates a new date value by adding a time interval to this date.
- [+(\_:\_:)](+%28____%29.md): Returns a date with a specified amount of time added to it.
- [+=(\_:\_:)](+=%28____%29.md): Adds a time interval to a date.
- [-(\_:\_:)](-%28____%29.md): Returns a `Date` with a specified amount of time subtracted from it.
- [-=(\_:\_:)](-=%28____%29.md): Subtract a `TimeInterval` from a `Date`.
