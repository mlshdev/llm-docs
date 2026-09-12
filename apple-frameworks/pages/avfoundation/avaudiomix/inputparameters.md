> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiomix/inputparameters](https://developer.apple.com/documentation/avfoundation/avaudiomix/inputparameters)

# inputParameters (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of input parameters for the mix.

## Declaration

```swift
var inputParameters: [AVAudioMixInputParameters] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVAudioMixInputParameters](../avaudiomixinputparameters.md).

> **Note**

>  An instance of [AVAudioMixInputParameters](../avaudiomixinputparameters.md) isn’t required for each audio track that contributes to the mix. Audio for those without associated `AVAudioMixInputParameters` objects are included in the mix and processed according to the default behavior.

# inputParameters (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An array of input parameters for the mix.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVAudioMixInputParameters *> * inputParameters;
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVAudioMixInputParameters](../avaudiomixinputparameters.md).

> **Note**

>  An instance of [AVAudioMixInputParameters](../avaudiomixinputparameters.md) isn’t required for each audio track that contributes to the mix. Audio for those without associated `AVAudioMixInputParameters` objects are included in the mix and processed according to the default behavior.
