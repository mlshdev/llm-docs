> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimerange/containstimerange(_:)

# containsTimeRange(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the time range contains another time range.

## Declaration

```swift
func containsTimeRange(_ range: CMTimeRange) -> Bool
```

## Parameters

- `range`: The time range to test for inclusion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if time range contains `range`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Finding Elements

- [containsTime(\_:)](containstime%28__%29.md): Returns a Boolean value that indicates whether the time range contains a time.
