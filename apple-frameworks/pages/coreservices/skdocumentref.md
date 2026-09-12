> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/skdocumentref](https://developer.apple.com/documentation/coreservices/skdocumentref)

# SKDocumentRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Defines an opaque data type representing a document’s URL.

## Declaration

```objectivec
typedef CFTypeRef SKDocumentRef;
```

<a id="discussion"></a>

## Discussion

A document URL object is a generic location specification for a document. It is built from a document scheme, a parent document, and a document name. You can convert back and forth between document URL objects and `CFURL` objects using Search Kit’s [SKDocumentCreateWithURL](1442564-skdocumentcreatewithurl.md) and [SKDocumentCopyURL](1449624-skdocumentcopyurl.md) functions.

To create a Search Kit document URL object, use [SKDocumentCreateWithURL](1442564-skdocumentcreatewithurl.md) when you can provide a complete URL, or use [SKDocumentCreate](1443212-skdocumentcreate.md) when you want to specify document location indirectly using a parent document URL object. For other operations on documents, see [Working with Documents and Terms](search_kit.md#1655072).

If you create document URL objects with indirect locations using the [SKDocumentCreate](1443212-skdocumentcreate.md) function, you can resolve the locations by assembling them piece by piece, starting with a document URL object and going up step by step, parent to parent.
