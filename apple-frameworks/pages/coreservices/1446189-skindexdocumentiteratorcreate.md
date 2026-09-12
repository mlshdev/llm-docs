> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446189-skindexdocumentiteratorcreate](https://developer.apple.com/documentation/coreservices/1446189-skindexdocumentiteratorcreate)

# SKIndexDocumentIteratorCreate(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates an index-based iterator for document URL objects (of type [SKDocument](skdocument.md)) owned by a parent document URL object.

## Declaration

```swift
func SKIndexDocumentIteratorCreate(_ inIndex: SKIndex!, _ inParentDocument: SKDocument!) -> Unmanaged<SKIndexDocumentIterator>!
```

## Parameters

- `inIndex`: The index you want to iterate across.
- `inParentDocument`: The document URL object that is the parent of the document URL objects you want to examine. Pass `NULL` to get the top item in an index. See [SKDocument](skdocument.md) for a discussion of how to get the full URL for a document URL object.

<a id="return_value"></a>

## Return Value

An index-based document iterator.

<a id="discussion"></a>

## Discussion

When you want to iterate across all the documents represented in an index, use this function to create an iterator and then call [SKIndexDocumentIteratorCopyNext(\_:)](1442212-skindexdocumentiteratorcopynext.md) in turn for each document URL object (of type [SKDocument](skdocument.md)) in the index.

Document iterators iterate over a single level of an index. Your code is responsible for descending through a hierarchy of documents in an index.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

When your application no longer needs the iterator, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Managing Indexes

- [SKIndexAddDocumentWithText(\_:\_:\_:\_:)](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocument](skdocument.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument(\_:\_:\_:\_:)](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush(\_:)](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexCompact(\_:)](1443628-skindexcompact.md): Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.
- [SKIndexGetDocumentCount(\_:)](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID(\_:)](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID(\_:)](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCopyNext(\_:)](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocument](skdocument.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID()](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties(\_:)](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument(\_:\_:\_:)](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexRemoveDocument(\_:\_:)](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocument](skdocument.md)) and its children, if any, from an index.
- [SKIndexRenameDocument(\_:\_:\_:)](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush(\_:\_:)](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush(\_:)](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.

# SKIndexDocumentIteratorCreate (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates an index-based iterator for document URL objects (of type [SKDocumentRef](skdocumentref.md)) owned by a parent document URL object.

## Declaration

```objectivec
SKIndexDocumentIteratorRef SKIndexDocumentIteratorCreate(SKIndexRef inIndex, SKDocumentRef inParentDocument);
```

## Parameters

- `inIndex`: The index you want to iterate across.
- `inParentDocument`: The document URL object that is the parent of the document URL objects you want to examine. Pass `NULL` to get the top item in an index. See [SKDocumentRef](skdocumentref.md) for a discussion of how to get the full URL for a document URL object.

<a id="return_value"></a>

## Return Value

An index-based document iterator.

<a id="discussion"></a>

## Discussion

When you want to iterate across all the documents represented in an index, use this function to create an iterator and then call [SKIndexDocumentIteratorCopyNext](1442212-skindexdocumentiteratorcopynext.md) in turn for each document URL object (of type [SKDocumentRef](skdocumentref.md)) in the index.

Document iterators iterate over a single level of an index. Your code is responsible for descending through a hierarchy of documents in an index.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

When your application no longer needs the iterator, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Managing Indexes

- [SKIndexAddDocumentWithText](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocumentRef](skdocumentref.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexCompact](1443628-skindexcompact.md): Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.
- [SKIndexGetDocumentCount](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCopyNext](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexRemoveDocument](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocumentRef](skdocumentref.md)) and its children, if any, from an index.
- [SKIndexRenameDocument](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.
