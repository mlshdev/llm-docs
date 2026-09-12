> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/skdocumentid](https://developer.apple.com/documentation/coreservices/skdocumentid)

# SKDocumentID (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Defines an opaque data type representing a lightweight document identifier.

## Declaration

```swift
typealias SKDocumentID = CFIndex
```

<a id="discussion"></a>

## Discussion

Use document IDs rather than document URL objects (SKDocumentRefs) whenever possible. Using document IDs results in faster searching.

You can work with document IDs using a variety of Search Kit functions. See [SKIndexGetMaximumDocumentID(\_:)](1444628-skindexgetmaximumdocumentid.md), [SKIndexCopyDocumentForDocumentID(\_:\_:)](1442760-skindexcopydocumentfordocumentid.md), [SKIndexCopyInfoForDocumentIDs(\_:\_:\_:\_:\_:)](1445499-skindexcopyinfofordocumentids.md), [SKIndexCopyDocumentRefsForDocumentIDs(\_:\_:\_:\_:)](1445305-skindexcopydocumentrefsfordocume.md), [SKIndexCopyDocumentURLsForDocumentIDs(\_:\_:\_:\_:)](1443501-skindexcopydocumenturlsfordocume.md), [SKIndexCopyDocumentIDArrayForTermID(\_:\_:)](1448003-skindexcopydocumentidarrayforter.md), and [SKIndexCopyTermIDArrayForDocumentID(\_:\_:)](1446868-skindexcopytermidarrayfordocumen.md).

# SKDocumentID (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Defines an opaque data type representing a lightweight document identifier.

## Declaration

```objectivec
typedef CFIndex SKDocumentID;
```

<a id="discussion"></a>

## Discussion

Use document IDs rather than document URL objects (SKDocumentRefs) whenever possible. Using document IDs results in faster searching.

You can work with document IDs using a variety of Search Kit functions. See [SKIndexGetMaximumDocumentID](1444628-skindexgetmaximumdocumentid.md), [SKIndexCopyDocumentForDocumentID](1442760-skindexcopydocumentfordocumentid.md), [SKIndexCopyInfoForDocumentIDs](1445499-skindexcopyinfofordocumentids.md), [SKIndexCopyDocumentRefsForDocumentIDs](1445305-skindexcopydocumentrefsfordocume.md), [SKIndexCopyDocumentURLsForDocumentIDs](1443501-skindexcopydocumenturlsfordocume.md), [SKIndexCopyDocumentIDArrayForTermID](1448003-skindexcopydocumentidarrayforter.md), and [SKIndexCopyTermIDArrayForDocumentID](1446868-skindexcopytermidarrayfordocumen.md).
