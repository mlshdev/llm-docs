> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/int128/distance(to:)

# distance(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance from this value to the given value, expressed as a stride.

## Declaration

```swift
func distance(to other: Self) -> Int
```

## Parameters

- `other`: The value to calculate the distance to.

<a id="return-value"></a>

## Return Value

The distance from this value to `other`.

<a id="discussion"></a>

## Discussion

For two values `x` and `y`, and a distance `n = x.distance(to: y)`, `x.advanced(by: n) == y`.
