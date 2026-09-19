> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfacousticfeature/acousticfeaturevalueperframe-5krkk

# acousticFeatureValuePerFrame

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS

An array of feature values, one value per audio frame, corresponding to a transcript segment of recorded audio.

## Declaration

```swift
var acousticFeatureValuePerFrame: [Double] { get }
```

## See Also

### Inspecting a feature

- [frameDuration](frameduration.md): The duration of the audio frame.
