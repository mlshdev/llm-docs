> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfacousticfeature/frameduration](https://developer.apple.com/documentation/speech/sfacousticfeature/frameduration)

# frameDuration (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The duration of the audio frame.

## Declaration

```swift
var frameDuration: TimeInterval { get }
```

## See Also

### Inspecting a feature

- [acousticFeatureValuePerFrame](acousticfeaturevalueperframe-5krkk.md): An array of feature values, one value per audio frame, corresponding to a transcript segment of recorded audio.

# frameDuration (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The duration of the audio frame.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval frameDuration;
```

## See Also

### Inspecting a feature

- [acousticFeatureValuePerFrame](acousticfeaturevalueperframe-gsz5.md): An array of feature values, one value per audio frame, corresponding to a transcript segment of recorded audio.
