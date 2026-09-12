> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokerecognizer](https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer)

# PKStrokeRecognizer

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An actor that recognizes handwriting and searches for text within a PencilKit drawing.

## Declaration

```swift
final actor PKStrokeRecognizer
```

## Mentioned In

- [Recognizing handwriting and converting it to text](recognizing-handwriting-and-converting-to-text.md)

<a id="overview"></a>

## Overview

Use `PKStrokeRecognizer` to extract recognized text from individual strokes, generate content suitable for indexing in search systems such as Spotlight, and search for specific words or phrases within handwritten content. The recognizer uses an on-device recognition engine and all operations are asynchronous.

Recognition works best when handwriting is scaled as if drawn on standard US Letter or A4 paper in points. Before creating a recognizer, check [supportedLanguages](pkstrokerecognizer/supportedlanguages.md) to confirm your target language is available. If you persist results from a recognizer, store the current [recognitionVersion](pkstrokerecognizer/recognitionversion.md) alongside the results and regenerate them when the version advances.

## Topics

### Creating a recognizer

- [init(preferredLanguages:)](pkstrokerecognizer/init%28preferredlanguages_%29.md): Creates a recognizer with the specified preferred languages.

### Providing drawing content

- [drawing](pkstrokerecognizer/drawing.md): The drawing the recognizer analyzes.
- [updateDrawing(\_:)](pkstrokerecognizer/updatedrawing%28__%29.md): Updates the drawing the recognizer analyzes.

### Recognizing handwriting

- [recognizedText(strokeIDs:)](pkstrokerecognizer/recognizedtext%28strokeids_%29.md): Returns the recognized text from the specified strokes in the drawing.
- [indexableContent](pkstrokerecognizer/indexablecontent.md): A string suitable for indexing the drawing’s recognized text in search systems such as Spotlight.

### Searching for text

- [search(\_:fullWordsOnly:caseMatchingOnly:)](pkstrokerecognizer/search%28__fullwordsonly_casematchingonly_%29.md): Searches the drawing for strokes whose recognized text matches the query.
- [PKStrokeRecognizer.SearchResult](pkstrokerecognizer/searchresult.md): A value that describes a single result returned by a handwriting search.

### Checking language support

- [supportedLanguages](pkstrokerecognizer/supportedlanguages.md): The languages the recognizer supports.
- [languages](pkstrokerecognizer/languages.md): The languages the recognizer uses, ordered by descending priority.
- [recognitionVersion](pkstrokerecognizer/recognitionversion.md): The version number of the recognition engine.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handwriting recognition

- [Building a handwriting recognition experience with PencilKit](building-a-handwriting-recognition-experience-with-pencilkit.md): Integrate handwriting recognition into your app to identify written text across multiple languages, and explore path conversion and substrokes to enhance the drawing experience.
- [Recognizing handwriting and converting it to text](recognizing-handwriting-and-converting-to-text.md): Analyze handwritten strokes in a PencilKit canvas using on-device recognition, and convert them to text that your app can display, copy, or index.
