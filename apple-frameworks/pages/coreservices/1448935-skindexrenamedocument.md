> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448935-skindexrenamedocument](https://developer.apple.com/documentation/coreservices/1448935-skindexrenamedocument)

# SKIndexRenameDocument(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Changes the name of a document URL object (of type [SKDocument](skdocument.md)) in an index.

## Declaration

```swift
func SKIndexRenameDocument(_ inIndex: SKIndex!, _ inDocument: SKDocument!, _ inNewName: CFString!) -> Bool
```

## Parameters

- `inIndex`: The index containing the document URL object whose name you want to change.
- `inDocument`: The document URL object whose name you want to change.
- `inNewName`: The new name for the document URL object.

<a id="return_value"></a>

## Return Value

A Boolean value of `true` if the document URL object name was successfully changed, or `false` on failure.

<a id="discussion"></a>

## Discussion

When your application changes the name of a document, use this function to update the index to reflect the change.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Managing Indexes

- [SKIndexAddDocumentWithText(\_:\_:\_:\_:)](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocument](skdocument.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument(\_:\_:\_:\_:)](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush(\_:)](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexCompact(\_:)](1443628-skindexcompact.md): Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.
- [SKIndexGetDocumentCount(\_:)](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID(\_:)](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID(\_:)](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCreate(\_:\_:)](1446189-skindexdocumentiteratorcreate.md): Creates an index-based iterator for document URL objects (of type [SKDocument](skdocument.md)) owned by a parent document URL object.
- [SKIndexDocumentIteratorCopyNext(\_:)](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocument](skdocument.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID()](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties(\_:)](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument(\_:\_:\_:)](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexRemoveDocument(\_:\_:)](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocument](skdocument.md)) and its children, if any, from an index.
- [SKIndexSetMaximumBytesBeforeFlush(\_:\_:)](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush(\_:)](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.

# SKIndexRenameDocument (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Changes the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.

## Declaration

```objectivec
Boolean SKIndexRenameDocument(SKIndexRef inIndex, SKDocumentRef inDocument, CFStringRef inNewName);
```

## Parameters

- `inIndex`: The index containing the document URL object whose name you want to change.
- `inDocument`: The document URL object whose name you want to change.
- `inNewName`: The new name for the document URL object.

<a id="return_value"></a>

## Return Value

A Boolean value of `true` if the document URL object name was successfully changed, or `false` on failure.

<a id="discussion"></a>

## Discussion

When your application changes the name of a document, use this function to update the index to reflect the change.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Managing Indexes

- [SKIndexAddDocumentWithText](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocumentRef](skdocumentref.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexCompact](1443628-skindexcompact.md): Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.
- [SKIndexGetDocumentCount](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCreate](1446189-skindexdocumentiteratorcreate.md): Creates an index-based iterator for document URL objects (of type [SKDocumentRef](skdocumentref.md)) owned by a parent document URL object.
- [SKIndexDocumentIteratorCopyNext](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexRemoveDocument](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocumentRef](skdocumentref.md)) and its children, if any, from an index.
- [SKIndexSetMaximumBytesBeforeFlush](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.
