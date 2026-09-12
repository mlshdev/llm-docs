> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442212-skindexdocumentiteratorcopynext](https://developer.apple.com/documentation/coreservices/1442212-skindexdocumentiteratorcopynext)

# SKIndexDocumentIteratorCopyNext(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the next document URL object (of type [SKDocument](skdocument.md)) from an index using a document iterator.

## Declaration

```swift
func SKIndexDocumentIteratorCopyNext(_ inIterator: SKIndexDocumentIterator!) -> Unmanaged<SKDocument>!
```

## Parameters

- `inIterator`: The index-based document iterator. See [SKIndexDocumentIteratorCreate(\_:\_:)](1446189-skindexdocumentiteratorcreate.md) for information on creating an document iterator, and [SKIndexDocumentIterator](skindexdocumentiterator.md) for more about iterators.

<a id="return_value"></a>

## Return Value

The next document URL object in the index.

<a id="discussion"></a>

## Discussion

This function returns `NULL` when there are no more document URL objects (of type [SKDocument](skdocument.md)) in the index. When finished iterating, your application must call [CFRelease](../corefoundation/cfrelease.md) on all retrieved document URL objects that are non-`NULL`.

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
- [SKIndexDocumentIteratorGetTypeID()](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties(\_:)](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument(\_:\_:\_:)](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexRemoveDocument(\_:\_:)](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocument](skdocument.md)) and its children, if any, from an index.
- [SKIndexRenameDocument(\_:\_:\_:)](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush(\_:\_:)](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush(\_:)](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.

# SKIndexDocumentIteratorCopyNext (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the next document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index using a document iterator.

## Declaration

```objectivec
SKDocumentRef SKIndexDocumentIteratorCopyNext(SKIndexDocumentIteratorRef inIterator);
```

## Parameters

- `inIterator`: The index-based document iterator. See [SKIndexDocumentIteratorCreate](1446189-skindexdocumentiteratorcreate.md) for information on creating an document iterator, and [SKIndexDocumentIteratorRef](skindexdocumentiteratorref.md) for more about iterators.

<a id="return_value"></a>

## Return Value

The next document URL object in the index.

<a id="discussion"></a>

## Discussion

This function returns `NULL` when there are no more document URL objects (of type [SKDocumentRef](skdocumentref.md)) in the index. When finished iterating, your application must call [CFRelease](../corefoundation/cfrelease.md) on all retrieved document URL objects that are non-`NULL`.

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
- [SKIndexDocumentIteratorGetTypeID](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexRemoveDocument](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocumentRef](skdocumentref.md)) and its children, if any, from an index.
- [SKIndexRenameDocument](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.
