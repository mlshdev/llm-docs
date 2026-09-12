> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/read-operations](https://developer.apple.com/documentation/pdfkit/read-operations)

# Read Operations (Swift)

**Framework:** PDFKit  
**Kind:** API Collection

Operations that let you access documents and pages, manage document security, and work with searching and selections.

## Topics

### Accessing Document Information

- [documentURL](pdfdocument/documenturl.md): The URL for the document.
- [majorVersion](pdfdocument/majorversion.md): The major version of the document.
- [minorVersion](pdfdocument/minorversion.md): The minor version of the document.
- [string](pdfdocument/string.md): A string representing the textual content for the entire document.
- [outlineItem(for:)](pdfdocument/outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](pdfdocument/outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](pdfdocument/documentattributes.md): A dictionary of document metadata.
- [documentRef](pdfdocument/documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

### Managing Document Security

- [isEncrypted](pdfdocument/isencrypted.md): A Boolean value specifying whether the document is encrypted.
- [isLocked](pdfdocument/islocked.md): A Boolean value indicating whether the document is locked.
- [unlock(withPassword:)](pdfdocument/unlock%28withpassword_%29.md): Attempts to unlock an encrypted document.
- [permissionsStatus](pdfdocument/permissionsstatus.md): The permissions status of the PDF document.
- [Permission Properties](permission-properties.md): Properties that specify what functions are allowed for a PDF document.

### Working with Selections and Searches

- [selection(from:atCharacterIndex:to:atCharacterIndex:)](pdfdocument/selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selection(from:at:to:at:)](pdfdocument/selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [selectionForEntireDocument](pdfdocument/selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.
- [Search Operations](search-operations.md): Find and search in PDFs.

### Working with Pages

- [pageCount](pdfdocument/pagecount.md): The number of pages in the document.
- [page(at:)](pdfdocument/page%28at_%29.md): Returns the page at the specified index number.
- [index(for:)](pdfdocument/index%28for_%29.md): Gets the index number for the specified page.
- [insert(\_:at:)](pdfdocument/insert%28__at_%29.md): Inserts a page at the specified index point.
- [removePage(at:)](pdfdocument/removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePage(at:withPageAt:)](pdfdocument/exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pdfdocument/pageclass.md): The class that is allocated and initialized when page objects are created for the document.

## See Also

### Reading and Writing PDFs

- [Write Operations](write-operations.md): Operations that let you write document data to different locations.

# Read Operations (Objective-C)

**Framework:** PDFKit  
**Kind:** API Collection

Operations that let you access documents and pages, manage document security, and work with searching and selections.

## Topics

### Accessing Document Information

- [documentURL](pdfdocument/documenturl.md): The URL for the document.
- [majorVersion](pdfdocument/majorversion.md): The major version of the document.
- [minorVersion](pdfdocument/minorversion.md): The minor version of the document.
- [string](pdfdocument/string.md): A string representing the textual content for the entire document.
- [outlineItemForSelection:](pdfdocument/outlineitem%28for_%29.md): Returns the most likely parent PDF outline object for the selection.
- [outlineRoot](pdfdocument/outlineroot.md): The document’s root outline to a PDF outline object.
- [documentAttributes](pdfdocument/documentattributes.md): A dictionary of document metadata.
- [documentRef](pdfdocument/documentref.md): The `CGPDFDocument` associated with the `PDFDocument` object.

### Managing Document Security

- [isEncrypted](pdfdocument/isencrypted.md): A Boolean value specifying whether the document is encrypted.
- [isLocked](pdfdocument/islocked.md): A Boolean value indicating whether the document is locked.
- [unlockWithPassword:](pdfdocument/unlock%28withpassword_%29.md): Attempts to unlock an encrypted document.
- [permissionsStatus](pdfdocument/permissionsstatus.md): The permissions status of the PDF document.
- [Permission Properties](permission-properties.md): Properties that specify what functions are allowed for a PDF document.

### Working with Selections and Searches

- [selectionFromPage:atCharacterIndex:toPage:atCharacterIndex:](pdfdocument/selection%28from_atcharacterindex_to_atcharacterindex_%29.md): Returns the specified selection based on starting and ending character indexes.
- [selectionFromPage:atPoint:toPage:atPoint:](pdfdocument/selection%28from_at_to_at_%29.md): Returns the specified selection based on starting and ending points.
- [selectionForEntireDocument](pdfdocument/selectionforentiredocument.md): Returns a selection representing the textual content of the entire document.
- [Search Operations](search-operations.md): Find and search in PDFs.

### Working with Pages

- [pageCount](pdfdocument/pagecount.md): The number of pages in the document.
- [pageAtIndex:](pdfdocument/page%28at_%29.md): Returns the page at the specified index number.
- [indexForPage:](pdfdocument/index%28for_%29.md): Gets the index number for the specified page.
- [insertPage:atIndex:](pdfdocument/insert%28__at_%29.md): Inserts a page at the specified index point.
- [removePageAtIndex:](pdfdocument/removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePageAtIndex:withPageAtIndex:](pdfdocument/exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pdfdocument/pageclass.md): The class that is allocated and initialized when page objects are created for the document.

## See Also

### Reading and Writing PDFs

- [Write Operations](write-operations.md): Operations that let you write document data to different locations.
