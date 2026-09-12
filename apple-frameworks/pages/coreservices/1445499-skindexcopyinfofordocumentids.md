> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445499-skindexcopyinfofordocumentids](https://developer.apple.com/documentation/coreservices/1445499-skindexcopyinfofordocumentids)

# SKIndexCopyInfoForDocumentIDs(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets document names and parent IDs based on document IDs.

## Declaration

```swift
func SKIndexCopyInfoForDocumentIDs(_ inIndex: SKIndex!, _ inCount: CFIndex, _ inDocumentIDsArray: UnsafeMutablePointer<SKDocumentID>!, _ outNamesArray: UnsafeMutablePointer<Unmanaged<CFString>?>!, _ outParentIDsArray: UnsafeMutablePointer<SKDocumentID>!)
```

## Parameters

- `inIndex`: The index containing the document information.
- `inCount`: The number of document IDs in `inDocumentIDsArray`.
- `inDocumentIDsArray`: Points to an array of document IDs representing the documents whose names and parent IDs you want.
- `outNamesArray`: On input, a pointer to an array for document names. On output, points to the previously allocated array, which now contains the document names corresponding to the document IDs in `inDocumentIDsArray`. May be `NULL` on input if you don’t want to get the document names.

  When finished with the names array, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md) on each array element.
- `outParentIDsArray`: On input, a pointer to an array for parent document IDs. On output, points to the previously allocated array, which now contains document IDs representing the parents of the documents whose IDs are in `inDocumentIDsArray`. May be `NULL` on input if you don’t want to get the parent document IDs.

<a id="discussion"></a>

## Discussion

The [SKIndexCopyInfoForDocumentIDs(\_:\_:\_:\_:\_:)](1445499-skindexcopyinfofordocumentids.md) function lets you get a batch of document names and parent document IDs in one step, based on a list of document IDs.

## See Also

### Working with Documents and Terms

- [SKDocumentCreateWithURL(\_:)](1442564-skdocumentcreatewithurl.md): Creates a document URL object (of type [SKDocument](skdocument.md)) from a [CFURL](../corefoundation/cfurl.md) object.
- [SKDocumentCreate(\_:\_:\_:)](1443212-skdocumentcreate.md): Creates a document URL object (of type [SKDocument](skdocument.md)) based on a scheme, parent, and name.
- [SKDocumentCopyURL(\_:)](1449624-skdocumentcopyurl.md): Builds a [CFURL](../corefoundation/cfurl.md) object from a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetName(\_:)](1442657-skdocumentgetname.md): Gets the name of a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetParent(\_:)](1444449-skdocumentgetparent.md): Gets the parent of a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetSchemeName(\_:)](1448262-skdocumentgetschemename.md): Gets the scheme name for a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetTypeID()](1448891-skdocumentgettypeid.md): Gets the type identifier for Search Kit document URL objects.
- [SKIndexCopyDocumentForDocumentID(\_:\_:)](1442760-skindexcopydocumentfordocumentid.md): Obtains a document URL object (of type [SKDocument](skdocument.md)) from an index.
- [SKIndexCopyDocumentRefsForDocumentIDs(\_:\_:\_:\_:)](1445305-skindexcopydocumentrefsfordocume.md): Gets document URL objects (of type [SKDocument](skdocument.md)) based on document IDs.
- [SKIndexCopyDocumentURLsForDocumentIDs(\_:\_:\_:\_:)](1443501-skindexcopydocumenturlsfordocume.md): Gets document URLs based on document IDs.
- [SKIndexCopyDocumentIDArrayForTermID(\_:\_:)](1448003-skindexcopydocumentidarrayforter.md): Obtains document IDs for documents that contain a given term.
- [SKIndexCopyTermIDArrayForDocumentID(\_:\_:)](1446868-skindexcopytermidarrayfordocumen.md): Obtains the IDs for the terms of an indexed document.
- [SKIndexCopyTermStringForTermID(\_:\_:)](1442802-skindexcopytermstringfortermid.md): Obtains a term, specified by ID, from an index.
- [SKIndexGetTermIDForTermString(\_:\_:)](1448558-skindexgettermidfortermstring.md): Gets the ID for a term in an index.
- [SKIndexSetDocumentProperties(\_:\_:\_:)](1444576-skindexsetdocumentproperties.md): Sets the application-defined properties of a document URL object (of type [SKDocument](skdocument.md)).
- [SKIndexCopyDocumentProperties(\_:\_:)](1449500-skindexcopydocumentproperties.md): Obtains the application-defined properties of an indexed document.
- [SKIndexGetDocumentState(\_:\_:)](1443396-skindexgetdocumentstate.md): Gets the current indexing state of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexGetDocumentTermCount(\_:\_:)](1448341-skindexgetdocumenttermcount.md): Gets the number of terms for a document in an index.
- [SKIndexGetDocumentTermFrequency(\_:\_:\_:)](1447537-skindexgetdocumenttermfrequency.md): Gets the number of occurrences of a term in a document.
- [SKIndexGetTermDocumentCount(\_:\_:)](1444015-skindexgettermdocumentcount.md): Gets the number of documents containing a given term represented in an index.
- [SKIndexGetDocumentID(\_:\_:)](1444437-skindexgetdocumentid.md): Gets the ID of a document URL object (of type [SKDocument](skdocument.md)) in an index.

# SKIndexCopyInfoForDocumentIDs (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets document names and parent IDs based on document IDs.

## Declaration

```objectivec
void SKIndexCopyInfoForDocumentIDs(SKIndexRef inIndex, CFIndex inCount, SKDocumentID *inDocumentIDsArray, CFStringRef *outNamesArray, SKDocumentID *outParentIDsArray);
```

## Parameters

- `inIndex`: The index containing the document information.
- `inCount`: The number of document IDs in `inDocumentIDsArray`.
- `inDocumentIDsArray`: Points to an array of document IDs representing the documents whose names and parent IDs you want.
- `outNamesArray`: On input, a pointer to an array for document names. On output, points to the previously allocated array, which now contains the document names corresponding to the document IDs in `inDocumentIDsArray`. May be `NULL` on input if you don’t want to get the document names.

  When finished with the names array, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md) on each array element.
- `outParentIDsArray`: On input, a pointer to an array for parent document IDs. On output, points to the previously allocated array, which now contains document IDs representing the parents of the documents whose IDs are in `inDocumentIDsArray`. May be `NULL` on input if you don’t want to get the parent document IDs.

<a id="discussion"></a>

## Discussion

The [SKIndexCopyInfoForDocumentIDs](1445499-skindexcopyinfofordocumentids.md) function lets you get a batch of document names and parent document IDs in one step, based on a list of document IDs.

## See Also

### Working with Documents and Terms

- [SKDocumentCreateWithURL](1442564-skdocumentcreatewithurl.md): Creates a document URL object (of type [SKDocumentRef](skdocumentref.md)) from a [CFURL](../corefoundation/cfurl.md) object.
- [SKDocumentCreate](1443212-skdocumentcreate.md): Creates a document URL object (of type [SKDocumentRef](skdocumentref.md)) based on a scheme, parent, and name.
- [SKDocumentCopyURL](1449624-skdocumentcopyurl.md): Builds a [CFURL](../corefoundation/cfurl.md) object from a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetName](1442657-skdocumentgetname.md): Gets the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetParent](1444449-skdocumentgetparent.md): Gets the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetSchemeName](1448262-skdocumentgetschemename.md): Gets the scheme name for a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetTypeID](1448891-skdocumentgettypeid.md): Gets the type identifier for Search Kit document URL objects.
- [SKIndexCopyDocumentForDocumentID](1442760-skindexcopydocumentfordocumentid.md): Obtains a document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index.
- [SKIndexCopyDocumentRefsForDocumentIDs](1445305-skindexcopydocumentrefsfordocume.md): Gets document URL objects (of type [SKDocumentRef](skdocumentref.md)) based on document IDs.
- [SKIndexCopyDocumentURLsForDocumentIDs](1443501-skindexcopydocumenturlsfordocume.md): Gets document URLs based on document IDs.
- [SKIndexCopyDocumentIDArrayForTermID](1448003-skindexcopydocumentidarrayforter.md): Obtains document IDs for documents that contain a given term.
- [SKIndexCopyTermIDArrayForDocumentID](1446868-skindexcopytermidarrayfordocumen.md): Obtains the IDs for the terms of an indexed document.
- [SKIndexCopyTermStringForTermID](1442802-skindexcopytermstringfortermid.md): Obtains a term, specified by ID, from an index.
- [SKIndexGetTermIDForTermString](1448558-skindexgettermidfortermstring.md): Gets the ID for a term in an index.
- [SKIndexSetDocumentProperties](1444576-skindexsetdocumentproperties.md): Sets the application-defined properties of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKIndexCopyDocumentProperties](1449500-skindexcopydocumentproperties.md): Obtains the application-defined properties of an indexed document.
- [SKIndexGetDocumentState](1443396-skindexgetdocumentstate.md): Gets the current indexing state of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexGetDocumentTermCount](1448341-skindexgetdocumenttermcount.md): Gets the number of terms for a document in an index.
- [SKIndexGetDocumentTermFrequency](1447537-skindexgetdocumenttermfrequency.md): Gets the number of occurrences of a term in a document.
- [SKIndexGetTermDocumentCount](1444015-skindexgettermdocumentcount.md): Gets the number of documents containing a given term represented in an index.
- [SKIndexGetDocumentID](1444437-skindexgetdocumentid.md): Gets the ID of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
