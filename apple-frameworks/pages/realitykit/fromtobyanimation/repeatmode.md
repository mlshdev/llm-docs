> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/fromtobyanimation/repeatmode

# repeatMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An option that determines how the animation repeats.

## Declaration

```swift
var repeatMode: AnimationRepeatMode { get set }
```

<a id="discussion"></a>

## Discussion

If you call `FromToByAnimation/trimmed(start:end:duration:)` with a `start` or `end` that lies outside of the timeline defined by [duration](duration.md), the animation fills the additional playback by applying this property.

## See Also

### Repeating animation playback

- [fillMode](fillmode.md): An option that determines which data displays outside of the normal duration.
