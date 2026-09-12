> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/removedictationresultplaceholder(_:willinsertresult:)](https://developer.apple.com/documentation/uikit/uitextinput/removedictationresultplaceholder(_:willinsertresult:))

# removeDictationResultPlaceholder(\_:willInsertResult:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the view that the specified placeholder object is unnecessary.

## Declaration

```swift
optional func removeDictationResultPlaceholder(_ placeholder: Any, willInsertResult: Bool)
```

## Parameters

- `placeholder`: The placeholder object that is no longer needed.
- `willInsertResult`: The value of this parameter is [true](https://developer.apple.com/documentation/swift/true) if the dictation value was generated successfully or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

If the value in the `willInsertResult` parameter is [false](https://developer.apple.com/documentation/swift/false), the placeholder animation is not replaced by an actual dictation result. When this happens, the system still removes the placeholder animation and removes the strong reference to your placeholder object.

> **Important**

>  This method is called only if the custom text view client leverages system selection by subclassing `UITextView`. Other clients can use [dictationRecordingDidEnd()](dictationrecordingdidend%28%29.md) and [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md) to implement a custom placeholder.

## See Also

### Using dictation

- [dictationRecordingDidEnd()](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed()](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult(\_:)](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frame(forDictationResultPlaceholder:)](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.

# removeDictationResultPlaceholder:willInsertResult: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the view that the specified placeholder object is unnecessary.

## Declaration

```objectivec
- (void) removeDictationResultPlaceholder:(id) placeholder willInsertResult:(BOOL) willInsertResult;
```

## Parameters

- `placeholder`: The placeholder object that is no longer needed.
- `willInsertResult`: The value of this parameter is [true](https://developer.apple.com/documentation/swift/true) if the dictation value was generated successfully or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

If the value in the `willInsertResult` parameter is [false](https://developer.apple.com/documentation/swift/false), the placeholder animation is not replaced by an actual dictation result. When this happens, the system still removes the placeholder animation and removes the strong reference to your placeholder object.

> **Important**

>  This method is called only if the custom text view client leverages system selection by subclassing `UITextView`. Other clients can use [dictationRecordingDidEnd](dictationrecordingdidend%28%29.md) and [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md) to implement a custom placeholder.

## See Also

### Using dictation

- [dictationRecordingDidEnd](dictationrecordingdidend%28%29.md): Tells the object when there is a pending dictation result.
- [dictationRecognitionFailed](dictationrecognitionfailed%28%29.md): Tells the object when dictation ends, but recognition fails.
- [insertDictationResult:](insertdictationresult%28__%29.md): Tells the object when there is more than one interpretation of a spoken phrase in a dictation result.
- [insertDictationResultPlaceholder](insertdictationresultplaceholder.md): Asks for the placeholder object to use while generating dictation results.
- [frameForDictationResultPlaceholder:](frame%28fordictationresultplaceholder_%29.md): Asks for the rectangle for displaying the dictation placeholder animation.
