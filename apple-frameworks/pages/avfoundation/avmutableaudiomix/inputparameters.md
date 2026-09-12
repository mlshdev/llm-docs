> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomix/inputparameters](https://developer.apple.com/documentation/avfoundation/avmutableaudiomix/inputparameters)

# inputParameters (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of input parameters for the mix.

## Declaration

```swift
var inputParameters: [AVAudioMixInputParameters] { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVAudioMixInputParameters](../avaudiomixinputparameters.md). You don’t need an instance for each audio track that contributes to the mix. By default, the system processes audio for those tracks without an associated `AVAudioMixInputParameters` instance.

> **Warning**

>  Specifying multiple `AVAudioMixInputParameters` for the same track has undefined behavior. Use only one instance per track in an audio mix.

# inputParameters (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of input parameters for the mix.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVAudioMixInputParameters *> * inputParameters;
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVAudioMixInputParameters](../avaudiomixinputparameters.md). You don’t need an instance for each audio track that contributes to the mix. By default, the system processes audio for those tracks without an associated `AVAudioMixInputParameters` instance.

> **Warning**

>  Specifying multiple `AVAudioMixInputParameters` for the same track has undefined behavior. Use only one instance per track in an audio mix.
