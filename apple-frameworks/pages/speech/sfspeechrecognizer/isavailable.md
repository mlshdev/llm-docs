> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/isavailable](https://developer.apple.com/documentation/speech/sfspeechrecognizer/isavailable)

# isAvailable (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the speech recognizer is currently available.

## Declaration

```swift
var isAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, you may create new speech recognition tasks. When value of this property is `false`, speech recognition services are not available.

## See Also

### Monitoring speech recognition availability

- [delegate](delegate.md): The delegate object that handles changes to the availability of speech recognition services.
- [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [supportsOnDeviceRecognition](supportsondevicerecognition.md): A Boolean value that indicates whether the speech recognizer can operate without network access.

# available (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the speech recognizer is currently available.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAvailable) BOOL available;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, you may create new speech recognition tasks. When value of this property is `false`, speech recognition services are not available.

## See Also

### Monitoring speech recognition availability

- [delegate](delegate.md): The delegate object that handles changes to the availability of speech recognition services.
- [SFSpeechRecognizerDelegate](../sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [supportsOnDeviceRecognition](supportsondevicerecognition.md): A Boolean value that indicates whether the speech recognizer can operate without network access.
