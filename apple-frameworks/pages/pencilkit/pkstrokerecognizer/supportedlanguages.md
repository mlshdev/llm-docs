> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/supportedlanguages

# supportedLanguages

**Framework:** PencilKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The languages the recognizer supports.

## Declaration

```swift
static var supportedLanguages: Set<Locale.Language> { get }
```

## Mentioned In

- [Recognizing handwriting and converting it to text](../recognizing-handwriting-and-converting-to-text.md)

## See Also

### Checking language support

- [languages](languages.md): The languages the recognizer uses, ordered by descending priority.
- [recognitionVersion](recognitionversion.md): The version number of the recognition engine.
