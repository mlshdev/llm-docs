> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/navigationdocument/1627382-poptorootdocument](https://developer.apple.com/documentation/tvmljs/navigationdocument/1627382-poptorootdocument)

# popToRootDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Removes all documents from the stack except for the bottom-most document, which is the root document.

## Declaration

```
void popToRootDocument();
```

<a id="discussion"></a>

## Discussion

Use this function to quickly return to the root document from any other document in the stack.

## See Also

### Removing Documents from the Stack

- [clear](1627312-clear.md): Removes all documents currently on the stack.
- [popDocument](1627397-popdocument.md): Removes the top most document from the stack.
- [popToDocument](1627420-poptodocument.md): Removes all of the documents on the stack that are above the passed document.
- [removeDocument](1627394-removedocument.md): Removes the specified document from the stack.
