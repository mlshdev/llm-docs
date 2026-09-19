> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimerange/intersection(_:)

# intersection(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new time range with the time elements that are common to both this time range and the given time range.

## Declaration

```swift
func intersection(_ otherRange: CMTimeRange) -> CMTimeRange
```

## Parameters

- `otherRange`: A time range to intersect.

<a id="return-value"></a>

## Return Value

A time range that represents the largest intersection of the input.

## See Also

### Combining Time Ranges

- [union(\_:)](union%28__%29.md): Returns a new time range with the time elements of both this time range and the given time range.
