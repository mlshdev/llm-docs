> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionrequest/requiresondevicerecognition](https://developer.apple.com/documentation/speech/sfspeechrecognitionrequest/requiresondevicerecognition)

# requiresOnDeviceRecognition (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that determines whether a request must keep its audio data on the device.

## Declaration

```swift
var requiresOnDeviceRecognition: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to `true` to prevent an [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) from sending audio over the network. However, on-device requests won’t be as accurate.

> **Note**

>  The request only honors this setting if the [supportsOnDeviceRecognition](../sfspeechrecognizer/supportsondevicerecognition.md) ([SFSpeechRecognizer](../sfspeechrecognizer.md)) property is also `true`.

## See Also

### Configuring a recognition request

- [shouldReportPartialResults](shouldreportpartialresults.md): A Boolean value that indicates whether you want intermediate results returned for each utterance.
- [contextualStrings](contextualstrings.md): An array of phrases that should be recognized, even if they are not in the system vocabulary.

# requiresOnDeviceRecognition (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that determines whether a request must keep its audio data on the device.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresOnDeviceRecognition;
```

<a id="discussion"></a>

## Discussion

Set this property to `true` to prevent an [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) from sending audio over the network. However, on-device requests won’t be as accurate.

> **Note**

>  The request only honors this setting if the [supportsOnDeviceRecognition](../sfspeechrecognizer/supportsondevicerecognition.md) ([SFSpeechRecognizer](../sfspeechrecognizer.md)) property is also `true`.

## See Also

### Configuring a recognition request

- [shouldReportPartialResults](shouldreportpartialresults.md): A Boolean value that indicates whether you want intermediate results returned for each utterance.
- [contextualStrings](contextualstrings.md): An array of phrases that should be recognized, even if they are not in the system vocabulary.
