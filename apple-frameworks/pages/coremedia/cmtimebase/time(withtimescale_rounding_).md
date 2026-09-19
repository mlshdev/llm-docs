> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimebase/time(withtimescale:rounding:)

# time(withTimescale:rounding:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the current time in the timescale you request.

## Declaration

```swift
func time(withTimescale timescale: CMTimeScale, rounding: CMTimeRoundingMethod = .`default`) -> CMTime
```

## See Also

### Getting and Setting Time

- [setTime(\_:)](settime%28__%29.md): Sets the current time.
