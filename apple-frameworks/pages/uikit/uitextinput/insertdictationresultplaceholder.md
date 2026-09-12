> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/insertdictationresultplaceholder](https://developer.apple.com/documentation/uikit/uitextinput/insertdictationresultplaceholder)

# insertDictationResultPlaceholder (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks for the placeholder object to use while generating dictation results.

## Declaration

```swift
optional var insertDictationResultPlaceholder: Any { get }
```

<a id="return-value"></a>

## Return Value

A placeholder object to use to identify the dictation results. This value must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional but can be done when you want to provide a specific rectangle for the placeholder animation while the dictation results are being processed. The object you return from this method is passed to the [frame(forDictationResultPlaceholder:)](frame%28fordictationresultplaceholder_%29.md) method later. The actual contents of the object are not accessed by UIKit but you can use the object to store whatever information you need to identify the location for the animation.

UIKit maintains a strong reference to your placeholder object until the [removeDictationResultPlaceholder(\_:willInsertResult:)](removedictationresultplaceholder%28__willinsertresult_%29.md) method is called. You must implement both this method and the [removeDictationResultPlaceholder(\_:willInsertResult:)](removedictationresultplaceholder%28__willinsertresult_%29.md) method for placeholders to be used.

## See Also

### Using dictation

- [dictationRecordingDidEnd()](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult(\_:)](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [frame(forDictationResultPlaceholder:)](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder(\_:willInsertResult:)](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.

# insertDictationResultPlaceholder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks for the placeholder object to use while generating dictation results.

## Declaration

```objectivec
@property (nonatomic, readonly) id insertDictationResultPlaceholder;
```

<a id="return-value"></a>

## Return Value

A placeholder object to use to identify the dictation results. This value must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional but can be done when you want to provide a specific rectangle for the placeholder animation while the dictation results are being processed. The object you return from this method is passed to the [frameForDictationResultPlaceholder:](frame%28fordictationresultplaceholder_%29.md) method later. The actual contents of the object are not accessed by UIKit but you can use the object to store whatever information you need to identify the location for the animation.

UIKit maintains a strong reference to your placeholder object until the [removeDictationResultPlaceholder:willInsertResult:](removedictationresultplaceholder%28__willinsertresult_%29.md) method is called. You must implement both this method and the [removeDictationResultPlaceholder:willInsertResult:](removedictationresultplaceholder%28__willinsertresult_%29.md) method for placeholders to be used.

## See Also

### Using dictation

- [dictationRecordingDidEnd](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult:](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [frameForDictationResultPlaceholder:](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
- [removeDictationResultPlaceholder:willInsertResult:](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.
