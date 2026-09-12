> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateinterval/intersection(with:)](https://developer.apple.com/documentation/foundation/dateinterval/intersection(with:))

# intersection(with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns an interval that represents the interval where the given date interval and the current instance intersect.

## Declaration

```swift
func intersection(with dateInterval: DateInterval) -> DateInterval?
```

<a id="Discussion"></a>

## Discussion

In the event that there is no intersection, the method returns nil.

## See Also

### Determining Intersections

- [intersects(\_:)](intersects%28__%29.md): Indicates whether this interval intersects the specified interval.
