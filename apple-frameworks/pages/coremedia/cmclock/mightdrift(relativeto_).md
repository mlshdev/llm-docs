> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmclock/mightdrift(relativeto:)

# mightDrift(relativeTo:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to another.

## Declaration

```swift
func mightDrift(relativeTo otherClock: CMClock) -> Bool
```

## Parameters

- `otherClock`: The clock to compare to.
