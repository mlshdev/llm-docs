> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/dictationrecordingdidend()](https://developer.apple.com/documentation/uikit/uitextinput/dictationrecordingdidend())

# dictationRecordingDidEnd() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the object when there is a pending dictation result.

## Declaration

```swift
optional func dictationRecordingDidEnd()
```

<a id="Discussion"></a>

## Discussion

Implement this optional method if you want to respond to the completion of the recognition of a dictated phrase.

## See Also

### Using dictation

- [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult(\_:)](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frame(forDictationResultPlaceholder:)](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder(\_:willInsertResult:)](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.

# dictationRecordingDidEnd (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the object when there is a pending dictation result.

## Declaration

```objectivec
- (void) dictationRecordingDidEnd;
```

<a id="Discussion"></a>

## Discussion

Implement this optional method if you want to respond to the completion of the recognition of a dictated phrase.

## See Also

### Using dictation

- [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult:](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frameForDictationResultPlaceholder:](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder:willInsertResult:](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.
