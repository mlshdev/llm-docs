> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444576-skindexsetdocumentproperties](https://developer.apple.com/documentation/coreservices/1444576-skindexsetdocumentproperties)

# SKIndexSetDocumentProperties(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Sets the application-defined properties of a document URL object (of type [SKDocument](skdocument.md)).

## Declaration

```swift
func SKIndexSetDocumentProperties(_ inIndex: SKIndex!, _ inDocument: SKDocument!, _ inProperties: CFDictionary!)
```

## Parameters

- `inIndex`: An index containing the document URL object whose properties you want to set.
- `inDocument`: The document URL object whose properties you want to set.
- `inProperties`: A CFDictionary object containing the properties to apply to the document URL object.

<a id="discussion"></a>

## Discussion

Search Kit document URL objects (of type [SKDocument](skdocument.md)) can have an optional, application-defined properties dictionary to hold any information you’d like to associate with the document represented by a document URL object—such as timestamp, keywords, and so on.

Use `SKIndexSetDocumentProperties` to persistently set application-defined properties for a document URL object in an index. This function replaces a document URL object’s existing properties dictionary with the new one. To obtain a copy of a document URL object’s properties dictionary, use [SKIndexCopyDocumentProperties(\_:\_:)](1449500-skindexcopydocumentproperties.md).

<a id="1681176"></a>

### Special Considerations

You must set any desired properties on a document URL object *after* adding the document URL object to an index. Adding a document URL object to an index clears the object’s preexisting properties.

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
- [SKIndexCopyInfoForDocumentIDs(\_:\_:\_:\_:\_:)](1445499-skindexcopyinfofordocumentids.md): Gets document names and parent IDs based on document IDs.
- [SKIndexCopyDocumentRefsForDocumentIDs(\_:\_:\_:\_:)](1445305-skindexcopydocumentrefsfordocume.md): Gets document URL objects (of type [SKDocument](skdocument.md)) based on document IDs.
- [SKIndexCopyDocumentURLsForDocumentIDs(\_:\_:\_:\_:)](1443501-skindexcopydocumenturlsfordocume.md): Gets document URLs based on document IDs.
- [SKIndexCopyDocumentIDArrayForTermID(\_:\_:)](1448003-skindexcopydocumentidarrayforter.md): Obtains document IDs for documents that contain a given term.
- [SKIndexCopyTermIDArrayForDocumentID(\_:\_:)](1446868-skindexcopytermidarrayfordocumen.md): Obtains the IDs for the terms of an indexed document.
- [SKIndexCopyTermStringForTermID(\_:\_:)](1442802-skindexcopytermstringfortermid.md): Obtains a term, specified by ID, from an index.
- [SKIndexGetTermIDForTermString(\_:\_:)](1448558-skindexgettermidfortermstring.md): Gets the ID for a term in an index.
- [SKIndexCopyDocumentProperties(\_:\_:)](1449500-skindexcopydocumentproperties.md): Obtains the application-defined properties of an indexed document.
- [SKIndexGetDocumentState(\_:\_:)](1443396-skindexgetdocumentstate.md): Gets the current indexing state of a document URL object (of type [SKDocument](skdocument.md)) in an index.
- [SKIndexGetDocumentTermCount(\_:\_:)](1448341-skindexgetdocumenttermcount.md): Gets the number of terms for a document in an index.
- [SKIndexGetDocumentTermFrequency(\_:\_:\_:)](1447537-skindexgetdocumenttermfrequency.md): Gets the number of occurrences of a term in a document.
- [SKIndexGetTermDocumentCount(\_:\_:)](1444015-skindexgettermdocumentcount.md): Gets the number of documents containing a given term represented in an index.
- [SKIndexGetDocumentID(\_:\_:)](1444437-skindexgetdocumentid.md): Gets the ID of a document URL object (of type [SKDocument](skdocument.md)) in an index.

# SKIndexSetDocumentProperties (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Sets the application-defined properties of a document URL object (of type [SKDocumentRef](skdocumentref.md)).

## Declaration

```objectivec
void SKIndexSetDocumentProperties(SKIndexRef inIndex, SKDocumentRef inDocument, CFDictionaryRef inProperties);
```

## Parameters

- `inIndex`: An index containing the document URL object whose properties you want to set.
- `inDocument`: The document URL object whose properties you want to set.
- `inProperties`: A CFDictionary object containing the properties to apply to the document URL object.

<a id="discussion"></a>

## Discussion

Search Kit document URL objects (of type [SKDocumentRef](skdocumentref.md)) can have an optional, application-defined properties dictionary to hold any information you’d like to associate with the document represented by a document URL object—such as timestamp, keywords, and so on.

Use `SKIndexSetDocumentProperties` to persistently set application-defined properties for a document URL object in an index. This function replaces a document URL object’s existing properties dictionary with the new one. To obtain a copy of a document URL object’s properties dictionary, use [SKIndexCopyDocumentProperties](1449500-skindexcopydocumentproperties.md).

<a id="1681176"></a>

### Special Considerations

You must set any desired properties on a document URL object *after* adding the document URL object to an index. Adding a document URL object to an index clears the object’s preexisting properties.

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
- [SKIndexCopyInfoForDocumentIDs](1445499-skindexcopyinfofordocumentids.md): Gets document names and parent IDs based on document IDs.
- [SKIndexCopyDocumentRefsForDocumentIDs](1445305-skindexcopydocumentrefsfordocume.md): Gets document URL objects (of type [SKDocumentRef](skdocumentref.md)) based on document IDs.
- [SKIndexCopyDocumentURLsForDocumentIDs](1443501-skindexcopydocumenturlsfordocume.md): Gets document URLs based on document IDs.
- [SKIndexCopyDocumentIDArrayForTermID](1448003-skindexcopydocumentidarrayforter.md): Obtains document IDs for documents that contain a given term.
- [SKIndexCopyTermIDArrayForDocumentID](1446868-skindexcopytermidarrayfordocumen.md): Obtains the IDs for the terms of an indexed document.
- [SKIndexCopyTermStringForTermID](1442802-skindexcopytermstringfortermid.md): Obtains a term, specified by ID, from an index.
- [SKIndexGetTermIDForTermString](1448558-skindexgettermidfortermstring.md): Gets the ID for a term in an index.
- [SKIndexCopyDocumentProperties](1449500-skindexcopydocumentproperties.md): Obtains the application-defined properties of an indexed document.
- [SKIndexGetDocumentState](1443396-skindexgetdocumentstate.md): Gets the current indexing state of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
- [SKIndexGetDocumentTermCount](1448341-skindexgetdocumenttermcount.md): Gets the number of terms for a document in an index.
- [SKIndexGetDocumentTermFrequency](1447537-skindexgetdocumenttermfrequency.md): Gets the number of occurrences of a term in a document.
- [SKIndexGetTermDocumentCount](1444015-skindexgettermdocumentcount.md): Gets the number of documents containing a given term represented in an index.
- [SKIndexGetDocumentID](1444437-skindexgetdocumentid.md): Gets the ID of a document URL object (of type [SKDocumentRef](skdocumentref.md)) in an index.
