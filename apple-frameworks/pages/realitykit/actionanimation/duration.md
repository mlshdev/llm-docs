> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/actionanimation/duration

# duration

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The elapsed time for one complete rotation.

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="discussion"></a>

## Discussion

The framework sets a value for this property depending on the underlying animation data and the specified `AnimationAction/speed`.

You can override the default duration by defining `AnimationAction/trimStart`, `AnimationAction/trimEnd`, or `AnimationAction/trimDuration`.
