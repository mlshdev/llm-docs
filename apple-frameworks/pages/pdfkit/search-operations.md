> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/search-operations](https://developer.apple.com/documentation/pdfkit/search-operations)

# Search Operations (Swift)

**Framework:** PDFKit  
**Kind:** API Collection

Find and search in PDFs.

## Topics

### Searching Documents

- [findString(\_:withOptions:)](pdfdocument/findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString(\_:withOptions:)](pdfdocument/beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings(\_:withOptions:)](pdfdocument/beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [findString(\_:fromSelection:withOptions:)](pdfdocument/findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](pdfdocument/isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString()](pdfdocument/cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString(\_:withOptions:)](pdfdocument/beginfindstring%28__withoptions_%29.md).

## See Also

### Working with Selections and Searches

- [selection(from:atCharacterIndex:to:atCharacterIndex:)](pdfdocument/selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selection(from:at:to:at:)](pdfdocument/selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [selectionForEntireDocument](pdfdocument/selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.

# Search Operations (Objective-C)

**Framework:** PDFKit  
**Kind:** API Collection

Find and search in PDFs.

## Topics

### Searching Documents

- [findString:withOptions:](pdfdocument/findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString:withOptions:](pdfdocument/beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings:withOptions:](pdfdocument/beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [findString:fromSelection:withOptions:](pdfdocument/findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](pdfdocument/isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString](pdfdocument/cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString:withOptions:](pdfdocument/beginfindstring%28__withoptions_%29.md).

## See Also

### Working with Selections and Searches

- [selectionFromPage:atCharacterIndex:toPage:atCharacterIndex:](pdfdocument/selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selectionFromPage:atPoint:toPage:atPoint:](pdfdocument/selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [selectionForEntireDocument](pdfdocument/selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.
