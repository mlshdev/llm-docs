> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/distance(to:)](https://developer.apple.com/documentation/foundation/date/distance(to:))

# distance(to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the distance from this date to another date, specified as a time interval.

## Declaration

```swift
func distance(to other: Date) -> TimeInterval
```

## Parameters

- `other`: Another date.

<a id="return-value"></a>

## Return Value

The distance from this date to the other date, as a [TimeInterval](../timeinterval.md).

## See Also

### Comparing Dates

- [==(\_:\_:)](==%28____%29.md): Returns true if the two `Date` values represent the same point in time.
- [\>(\_:\_:)](_%28____%29-880ns.md): Returns true if the left hand `Date` is later in time than the right hand `Date`.
- [\<(\_:\_:)](_%28____%29-42kro.md): Returns true if the left hand `Date` is earlier in time than the right hand `Date`.
- [compare(\_:)](compare%28__%29.md): Compares another date to this one.
