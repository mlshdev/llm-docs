> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/delegate](https://developer.apple.com/documentation/speech/sfspeechrecognizer/delegate)

# delegate (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The delegate object that handles changes to the availability of speech recognition services.

## Declaration

```swift
weak var delegate: (any SFSpeechRecognizerDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

Provide a delegate object when you want to monitor changes to the availability of speech recognition services. Your delegate object must conform to the [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md) protocol.

## See Also

### Monitoring speech recognition availability

- [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [isAvailable](isavailable.md): A Boolean value that indicates whether the speech recognizer is currently available.
- [supportsOnDeviceRecognition](supportsondevicerecognition.md): A Boolean value that indicates whether the speech recognizer can operate without network access.

# delegate (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The delegate object that handles changes to the availability of speech recognition services.

## Declaration

```objectivec
@property (nonatomic, weak) id<SFSpeechRecognizerDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

Provide a delegate object when you want to monitor changes to the availability of speech recognition services. Your delegate object must conform to the [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md) protocol.

## See Also

### Monitoring speech recognition availability

- [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [available](isavailable.md): A Boolean value that indicates whether the speech recognizer is currently available.
- [supportsOnDeviceRecognition](supportsondevicerecognition.md): A Boolean value that indicates whether the speech recognizer can operate without network access.
