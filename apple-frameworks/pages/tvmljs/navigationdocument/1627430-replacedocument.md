> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/navigationdocument/1627430-replacedocument

# replaceDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Replaces a document on the stack with a new document.

## Declaration

```
void replaceDocument(
    in Document document, 
    in Document oldDocument
);
```

## Parameters

- `document`: The DOM document that is to be added onto the stack.
- `oldDocument`: The DOM document that is being replaced.

<a id="discussion"></a>

## Discussion

This function searches the stack for the first instance of the document to be replaced and replaces it with the new document.

## See Also

### Adding Documents to the Stack

- [insertBeforeDocument](1627340-insertbeforedocument.md): Inserts a new document directly before a document currently on the stack.
- [pushDocument](1627361-pushdocument.md): Pushes the specified document onto the stack.
