> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmclock/nextpreferredstarttimepattern()

# nextPreferredStartTimePattern()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the pattern of preferred start times, such as for synchronization with an external genlock signal.

## Declaration

```swift
func nextPreferredStartTimePattern() -> CMClock.StartTimePattern?
```

<a id="discussion"></a>

## Discussion

When a genlock signal is present and disciplined, this function returns a matched time pair in the near future and the delta between successive times.
