> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448891-skdocumentgettypeid](https://developer.apple.com/documentation/coreservices/1448891-skdocumentgettypeid)

# SKDocumentGetTypeID() (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the type identifier for Search Kit document URL objects.

## Declaration

```swift
func SKDocumentGetTypeID() -> CFTypeID
```

<a id="return_value"></a>

## Return Value

A [CFTypeID](../corefoundation/cftypeid.md) object containing the type identifier for the document URL object (of type [SKDocument](skdocument.md)).

<a id="discussion"></a>

## Discussion

Search Kit represents document URL objects with the [SKDocument](skdocument.md) opaque type. If your code needs to determine whether a particular data type is a document URL object, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the document URL object type ID because it can change from one release of macOS to another.

## See Also

### Working with Documents and Terms

- [SKDocumentCreateWithURL(\_:)](1442564-skdocumentcreatewithurl.md): Creates a document URL object (of type [SKDocument](skdocument.md)) from a [CFURL](../corefoundation/cfurl.md) object.
- [SKDocumentCreate(\_:\_:\_:)](1443212-skdocumentcreate.md): Creates a document URL object (of type [SKDocument](skdocument.md)) based on a scheme, parent, and name.
- [SKDocumentCopyURL(\_:)](1449624-skdocumentcopyurl.md): Builds a [CFURL](../corefoundation/cfurl.md) object from a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetName(\_:)](1442657-skdocumentgetname.md): Gets the name of a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetParent(\_:)](1444449-skdocumentgetparent.md): Gets the parent of a document URL object (of type [SKDocument](skdocument.md)).
- [SKDocumentGetSchemeName(\_:)](1448262-skdocumentgetschemename.md): Gets the scheme name for a document URL object (of type [SKDocument](skdocument.md)).
- [SKIndexCopyDocumentForDocumentID(\_:\_:)](1442760-skindexcopydocumentfordocumentid.md): Obtains a document URL object (of type [SKDocument](skdocument.md)) from an index.
- [SKIndexCopyInfoForDocumentIDs(\_:\_:\_:\_:\_:)](1445499-skindexcopyinfofordocumentids.md): Gets document names and parent IDs based on document IDs.
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

# SKDocumentGetTypeID (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the type identifier for Search Kit document URL objects.

## Declaration

```objectivec
CFTypeID SKDocumentGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

A [CFTypeID](../corefoundation/cftypeid.md) object containing the type identifier for the document URL object (of type [SKDocumentRef](skdocumentref.md)).

<a id="discussion"></a>

## Discussion

Search Kit represents document URL objects with the [SKDocumentRef](skdocumentref.md) opaque type. If your code needs to determine whether a particular data type is a document URL object, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the document URL object type ID because it can change from one release of macOS to another.

## See Also

### Working with Documents and Terms

- [SKDocumentCreateWithURL](1442564-skdocumentcreatewithurl.md): Creates a document URL object (of type [SKDocumentRef](skdocumentref.md)) from a [CFURL](../corefoundation/cfurl.md) object.
- [SKDocumentCreate](1443212-skdocumentcreate.md): Creates a document URL object (of type [SKDocumentRef](skdocumentref.md)) based on a scheme, parent, and name.
- [SKDocumentCopyURL](1449624-skdocumentcopyurl.md): Builds a [CFURL](../corefoundation/cfurl.md) object from a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetName](1442657-skdocumentgetname.md): Gets the name of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetParent](1444449-skdocumentgetparent.md): Gets the parent of a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKDocumentGetSchemeName](1448262-skdocumentgetschemename.md): Gets the scheme name for a document URL object (of type [SKDocumentRef](skdocumentref.md)).
- [SKIndexCopyDocumentForDocumentID](1442760-skindexcopydocumentfordocumentid.md): Obtains a document URL object (of type [SKDocumentRef](skdocumentref.md)) from an index.
- [SKIndexCopyInfoForDocumentIDs](1445499-skindexcopyinfofordocumentids.md): Gets document names and parent IDs based on document IDs.
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
