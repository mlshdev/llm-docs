> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/timecode/init(pretime:)-7gpbh

# init(preTime:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The instant directly before the given time value.

## Declaration

```swift
init(preTime instant: Double)
```

<a id="discussion"></a>

## Discussion

If a time-varying value is discontinuous at `instant`, pre-time refers to the value’s limit approaching from the left.
