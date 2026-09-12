> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/frame(fordictationresultplaceholder:)](https://developer.apple.com/documentation/uikit/uitextinput/frame(fordictationresultplaceholder:))

# frame(forDictationResultPlaceholder:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks for the rectangle for displaying the dictation placeholder animation.

## Declaration

```swift
optional func frame(forDictationResultPlaceholder placeholder: Any) -> CGRect
```

## Parameters

- `placeholder`: A placeholder object provided by your app and used to identify the location of the dictation results.

<a id="return-value"></a>

## Return Value

The rectangle, in the coordinate system of your input view, at which to display the dictation placeholder animation.

<a id="Discussion"></a>

## Discussion

While dictation results are being generated, UIKit displays the built-in dictation placeholder animation. Your implementation of this method should provide the rectangle at which to display this animation (at the location where the dictation results will be inserted).

> **Important**

>  This method is called only if the custom text view client leverages system selection by subclassing `UITextView`. Other clients can use [dictationRecordingDidEnd()](dictationrecordingdidend%28%29.md) and [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md) to implement a custom placeholder.

## See Also

### Using dictation

- [dictationRecordingDidEnd()](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult(\_:)](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [removeDictationResultPlaceholder(\_:willInsertResult:)](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.

# frameForDictationResultPlaceholder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks for the rectangle for displaying the dictation placeholder animation.

## Declaration

```objectivec
- (CGRect) frameForDictationResultPlaceholder:(id) placeholder;
```

## Parameters

- `placeholder`: A placeholder object provided by your app and used to identify the location of the dictation results.

<a id="return-value"></a>

## Return Value

The rectangle, in the coordinate system of your input view, at which to display the dictation placeholder animation.

<a id="Discussion"></a>

## Discussion

While dictation results are being generated, UIKit displays the built-in dictation placeholder animation. Your implementation of this method should provide the rectangle at which to display this animation (at the location where the dictation results will be inserted).

> **Important**

>  This method is called only if the custom text view client leverages system selection by subclassing `UITextView`. Other clients can use [dictationRecordingDidEnd](dictationrecordingdidend%28%29.md) and [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md) to implement a custom placeholder.

## See Also

### Using dictation

- [dictationRecordingDidEnd](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult:](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [removeDictationResultPlaceholder:willInsertResult:](removedictationresultplaceholder%28__willinsertresult_%29.md): Tells the view that the specified placeholder object is unnecessary.
