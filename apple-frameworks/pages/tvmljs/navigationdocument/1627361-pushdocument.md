> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/navigationdocument/1627361-pushdocument](https://developer.apple.com/documentation/tvmljs/navigationdocument/1627361-pushdocument)

# pushDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Pushes the specified document onto the stack.

## Declaration

```
void pushDocument(
    in Document document
);
```

## Parameters

- `document`: The DOM document that is to be added onto the stack.

<a id="discussion"></a>

## Discussion

The document being pushed onto the stack must be a valid parsed DOM object.

## See Also

### Adding Documents to the Stack

- [insertBeforeDocument](1627340-insertbeforedocument.md): Inserts a new document directly before a document currently on the stack.
- [replaceDocument](1627430-replacedocument.md): Replaces a document on the stack with a new document.
