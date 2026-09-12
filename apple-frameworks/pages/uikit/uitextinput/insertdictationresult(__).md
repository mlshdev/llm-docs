> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/insertdictationresult(_:)](https://developer.apple.com/documentation/uikit/uitextinput/insertdictationresult(_:))

# insertDictationResult(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.1+ · iPadOS 5.1+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.

## Declaration

```swift
optional func insertDictationResult(_ dictationResult: [UIDictationPhrase])
```

## Parameters

- `dictationResult`: An array of [UIDictationPhrase](../uidictationphrase.md) objects.

<a id="Discussion"></a>

## Discussion

Implement this optional method if you want to support dictation phrase alternatives. If you do not implement this method, iOS inserts the most likely interpretation of the dictated phrase.

> **Important**

>  This method is called only if the custom text view client leverages system selection by subclassing `UITextView`. Other clients can use [dictationRecordingDidEnd()](dictationrecordingdidend%28%29.md) and [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md) to implement a custom placeholder.

## See Also

### Using dictation

- [dictationRecordingDidEnd()](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frame(forDictationResultPlaceholder:)](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder(\_:willInsertResult:)](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.

# insertDictationResult: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.

## Declaration

```objectivec
- (void) insertDictationResult:(NSArray<UIDictationPhrase *> *) dictationResult;
```

## Parameters

- `dictationResult`: An array of [UIDictationPhrase](../uidictationphrase.md) objects.

<a id="Discussion"></a>

## Discussion

Implement this optional method if you want to support dictation phrase alternatives. If you do not implement this method, iOS inserts the most likely interpretation of the dictated phrase.

> **Important**

>  This method is called only if the custom text view client leverages system selection by subclassing `UITextView`. Other clients can use [dictationRecordingDidEnd](dictationrecordingdidend%28%29.md) and [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md) to implement a custom placeholder.

## See Also

### Using dictation

- [dictationRecordingDidEnd](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frameForDictationResultPlaceholder:](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder:willInsertResult:](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.
