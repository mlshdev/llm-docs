> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionrequest/taskhint](https://developer.apple.com/documentation/speech/sfspeechrecognitionrequest/taskhint)

# taskHint (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A value that indicates the type of speech recognition being performed.

## Declaration

```swift
var taskHint: SFSpeechRecognitionTaskHint { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [SFSpeechRecognitionTaskHint.unspecified](../sfspeechrecognitiontaskhint/unspecified.md). For a valid list of values, see [SFSpeechRecognitionTaskHint](../sfspeechrecognitiontaskhint.md).

## See Also

### Speech Type Classification

- [SFSpeechRecognitionTaskHint](../sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.

# taskHint (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A value that indicates the type of speech recognition being performed.

## Declaration

```objectivec
@property (nonatomic) SFSpeechRecognitionTaskHint taskHint;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [SFSpeechRecognitionTaskHintUnspecified](../sfspeechrecognitiontaskhint/unspecified.md). For a valid list of values, see [SFSpeechRecognitionTaskHint](../sfspeechrecognitiontaskhint.md).

## See Also

### Speech Type Classification

- [SFSpeechRecognitionTaskHint](../sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.
