> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/supportsondevicerecognition](https://developer.apple.com/documentation/speech/sfspeechrecognizer/supportsondevicerecognition)

# supportsOnDeviceRecognition (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the speech recognizer can operate without network access.

## Declaration

```swift
var supportsOnDeviceRecognition: Bool { get set }
```

<a id="discussion"></a>

## Discussion

An [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) can only honor its [requiresOnDeviceRecognition](../sfspeechrecognitionrequest/requiresondevicerecognition.md) property if [supportsOnDeviceRecognition](supportsondevicerecognition.md) is `true`. If [supportsOnDeviceRecognition](supportsondevicerecognition.md) is `false`, the [SFSpeechRecognizer](../sfspeechrecognizer.md) requires a network in order to recognize speech.

## See Also

### Monitoring speech recognition availability

- [delegate](delegate.md): The delegate object that handles changes to the availability of speech recognition services.
- [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [isAvailable](isavailable.md): A Boolean value that indicates whether the speech recognizer is currently available.

# supportsOnDeviceRecognition (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the speech recognizer can operate without network access.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsOnDeviceRecognition;
```

<a id="discussion"></a>

## Discussion

An [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) can only honor its [requiresOnDeviceRecognition](../sfspeechrecognitionrequest/requiresondevicerecognition.md) property if [supportsOnDeviceRecognition](supportsondevicerecognition.md) is `true`. If [supportsOnDeviceRecognition](supportsondevicerecognition.md) is `false`, the [SFSpeechRecognizer](../sfspeechrecognizer.md) requires a network in order to recognize speech.

## See Also

### Monitoring speech recognition availability

- [delegate](delegate.md): The delegate object that handles changes to the availability of speech recognition services.
- [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [available](isavailable.md): A Boolean value that indicates whether the speech recognizer is currently available.
