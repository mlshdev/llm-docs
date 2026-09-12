> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/selectedtextsearchdocument](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/selectedtextsearchdocument)

# selectedTextSearchDocument

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The object that uniquely identifies the specific document with selected text.

## Declaration

```objectivec
@property (readonly, nullable) UITextSearchDocumentIdentifier selectedTextSearchDocument;
```

<a id="Discussion"></a>

## Discussion

When performing a search across multiple documents, this object returns the identifier for the document with the selected text. When performing a search on a single document, it returns `nil`.

## See Also

### Identifying selected text

- [selectedTextRange](selectedtextrange.md): The range of selected text in a document.
