> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/navigationdocument/1627340-insertbeforedocument](https://developer.apple.com/documentation/tvmljs/navigationdocument/1627340-insertbeforedocument)

# insertBeforeDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Inserts a new document directly before a document currently on the stack.

## Declaration

```
void insertBeforeDocument(
    in Document document, 
    in optional Document beforeDocument
);
```

## Parameters

- `document`: The DOM document that is to be added onto the stack.
- `beforeDocument`: A DOM document currently on the stack. The new document is placed on the stack directly after this document.

<a id="discussion"></a>

## Discussion

This function searches the stack for the first instance of the document contained in the `beforeDocument` parameter and inserts the document contained in the `document` parameter on top of it.

## See Also

### Adding Documents to the Stack

- [pushDocument](1627361-pushdocument.md): Pushes the specified document onto the stack.
- [replaceDocument](1627430-replacedocument.md): Replaces a document on the stack with a new document.
