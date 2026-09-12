> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/defaulttaskhint](https://developer.apple.com/documentation/speech/sfspeechrecognizer/defaulttaskhint)

# defaultTaskHint (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A hint that indicates the type of speech recognition being requested.

## Declaration

```swift
var defaultTaskHint: SFSpeechRecognitionTaskHint { get set }
```

<a id="discussion"></a>

## Discussion

By default, the value of this property overrides the [SFSpeechRecognitionTaskHint.unspecified](../sfspeechrecognitiontaskhint/unspecified.md) value for requests. For possible values, see [SFSpeechRecognitionTaskHint](../sfspeechrecognitiontaskhint.md).

## See Also

### Configuring the speech recognizer

- [queue](queue.md): The queue on which to execute recognition task handlers and delegate methods.

# defaultTaskHint (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A hint that indicates the type of speech recognition being requested.

## Declaration

```objectivec
@property (nonatomic) SFSpeechRecognitionTaskHint defaultTaskHint;
```

<a id="discussion"></a>

## Discussion

By default, the value of this property overrides the [SFSpeechRecognitionTaskHintUnspecified](../sfspeechrecognitiontaskhint/unspecified.md) value for requests. For possible values, see [SFSpeechRecognitionTaskHint](../sfspeechrecognitiontaskhint.md).

## See Also

### Configuring the speech recognizer

- [queue](queue.md): The queue on which to execute recognition task handlers and delegate methods.
