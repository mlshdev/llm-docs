> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/navigationdocument/1627394-removedocument](https://developer.apple.com/documentation/tvmljs/navigationdocument/1627394-removedocument)

# removeDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Removes the specified document from the stack.

## Declaration

```
void removeDocument(
    in Document document
);
```

## Parameters

- `document`: A DOM document created by parsing a TVML file.

## See Also

### Removing Documents from the Stack

- [clear](1627312-clear.md): Removes all documents currently on the stack.
- [popDocument](1627397-popdocument.md): Removes the top most document from the stack.
- [popToDocument](1627420-poptodocument.md): Removes all of the documents on the stack that are above the passed document.
- [popToRootDocument](1627382-poptorootdocument.md): Removes all documents from the stack except for the bottom-most document, which is the root document.
