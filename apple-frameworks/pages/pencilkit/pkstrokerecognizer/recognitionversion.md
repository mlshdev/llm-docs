> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokerecognizer/recognitionversion](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/recognitionversion)

# recognitionVersion

**Framework:** PencilKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The version number of the recognition engine.

## Declaration

```swift
static var recognitionVersion: Int { get }
```

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

<a id="discussion"></a>

## Discussion

If you persist results this recognizer returns, store this value alongside them and regenerate the results when running on an OS with a higher version number.

## See Also

### Checking language support

- [supportedLanguages](supportedlanguages.md): The languages the recognizer supports.
- [languages](languages.md): The languages the recognizer uses, ordered by descending priority.
