> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfacousticfeature/acousticfeaturevalueperframe-gsz5

# acousticFeatureValuePerFrame

**Interface language:** Objective-C

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

An array of feature values, one value per audio frame, corresponding to a transcript segment of recorded audio.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSNumber *> * acousticFeatureValuePerFrame;
```

## See Also

### Inspecting a feature

- [frameDuration](frameduration.md): The duration of the audio frame.
