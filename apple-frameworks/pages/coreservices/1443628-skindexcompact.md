> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1443628-skindexcompact](https://developer.apple.com/documentation/coreservices/1443628-skindexcompact)

# SKIndexCompact(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.

## Declaration

```swift
func SKIndexCompact(_ inIndex: SKIndex!) -> Bool
```

## Parameters

- `inIndex`: The index you want to compact.

<a id="return_value"></a>

## Return Value

A Boolean value of `true` on success, or `false` on failure.

<a id="discussion"></a>

## Discussion

Over time, as document URL objects (of type [SKDocument](skdocument.md)) and associated contents get added to and removed from an index, the index’s disk or memory footprint may grow due to fragmentation.

Compacting can take a significant amount of time. Do not call [SKIndexCompact(\_:)](1443628-skindexcompact.md) on the main thread in an application with a user interface. Call it only if the index is significantly fragmented and according to the needs of your application.

Calling [SKIndexCompact(\_:)](1443628-skindexcompact.md) changes the block allocation for an index’s backing store. Close all clients of an index before calling this function.

## See Also

### Managing Indexes

- [SKIndexAddDocumentWithText(\_:\_:\_:\_:)](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocument](skdocument.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument(\_:\_:\_:\_:)](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush(\_:)](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexGetDocumentCount(\_:)](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID(\_:)](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID(\_:)](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCreate(\_:\_:)](1446189-skindexdocumentiteratorcreate.md): Creates an index-based iterator for document URL objects (of type [SKDocument](skdocument.md)) owned by a parent document URL object.
- [SKIndexDocumentIteratorCopyNext(\_:)](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocument](skdocument.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID()](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties(\_:)](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument(\_:\_:\_:)](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexRemoveDocument(\_:\_:)](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocument](skdocument.md)) and its children, if any, from an index.
- [SKIndexRenameDocument(\_:\_:\_:)](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush(\_:\_:)](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush(\_:)](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.

# SKIndexCompact (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Invokes all pending updates associated with an index, compacts the index if compaction is needed, and commits all changes to backing store.

## Declaration

```objectivec
Boolean SKIndexCompact(SKIndexRef inIndex);
```

## Parameters

- `inIndex`: The index you want to compact.

<a id="return_value"></a>

## Return Value

A Boolean value of `true` on success, or `false` on failure.

<a id="discussion"></a>

## Discussion

Over time, as document URL objects (of type [SKDocumentRef](skdocumentref.md)) and associated contents get added to and removed from an index, the index’s disk or memory footprint may grow due to fragmentation.

Compacting can take a significant amount of time. Do not call [SKIndexCompact](1443628-skindexcompact.md) on the main thread in an application with a user interface. Call it only if the index is significantly fragmented and according to the needs of your application.

Calling [SKIndexCompact](1443628-skindexcompact.md) changes the block allocation for an index’s backing store. Close all clients of an index before calling this function.

## See Also

### Managing Indexes

- [SKIndexAddDocumentWithText](1444518-skindexadddocumentwithtext.md): Adds a document URL ([SKDocumentRef](skdocumentref.md)) object, and the associated document’s textual content, to an index.
- [SKIndexAddDocument](1444897-skindexadddocument.md): Adds location information for a file-based document, and the document’s textual content, to an index.
- [SKIndexFlush](1450667-skindexflush.md): Invokes all pending updates associated with an index and commits them to backing store.
- [SKIndexGetDocumentCount](1449093-skindexgetdocumentcount.md): Gets the total number of documents represented in an index.
- [SKIndexGetMaximumDocumentID](1444628-skindexgetmaximumdocumentid.md): Gets the highest-numbered document ID in an index.
- [SKIndexGetMaximumTermID](1444278-skindexgetmaximumtermid.md): Gets the highest-numbered term ID in an index.
- [SKIndexDocumentIteratorCreate](1446189-skindexdocumentiteratorcreate.md): Creates an index-based iterator for document URL objects (of type [SKDocumentRef](skdocumentref.md)) owned by a parent document URL object.
- [SKIndexDocumentIteratorCopyNext](1442212-skindexdocumentiteratorcopynext.md): Obtains the next document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index using a document iterator.
- [SKIndexDocumentIteratorGetTypeID](1443022-skindexdocumentiteratorgettypeid.md): Gets the type identifier for Search Kit document iterators.
- [SKIndexGetAnalysisProperties](1443461-skindexgetanalysisproperties.md): Gets the text analysis properties of an index.
- [SKIndexMoveDocument](1449899-skindexmovedocument.md): Changes the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexRemoveDocument](1444375-skindexremovedocument.md): Removes a document URL object (of type [SKDocumentRef](skdocumentref.md)) and its children, if any, from an index.
- [SKIndexRenameDocument](1448935-skindexrenamedocument.md): Changes the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexSetMaximumBytesBeforeFlush](1448696-skindexsetmaximumbytesbeforeflus.md): Not recommended. Sets the memory size limit for updates to an index, measured in bytes.
- [SKIndexGetMaximumBytesBeforeFlush](1445329-skindexgetmaximumbytesbeforeflus.md): Not recommended. Gets the memory size limit for updates to an index, measured in bytes.
