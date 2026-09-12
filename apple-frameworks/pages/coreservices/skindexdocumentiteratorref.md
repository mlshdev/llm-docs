> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/skindexdocumentiteratorref](https://developer.apple.com/documentation/coreservices/skindexdocumentiteratorref)

# SKIndexDocumentIteratorRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Defines an opaque data type representing an index-based document iterator.

## Declaration

```objectivec
typedef struct __SKIndexDocumentIterator *SKIndexDocumentIteratorRef;
```

<a id="discussion"></a>

## Discussion

A Search Kit document iterator lets your application loop through all the document URL objects owned by a given parent document URL object. To create an iterator, use [SKIndexDocumentIteratorCreate](1446189-skindexdocumentiteratorcreate.md). To get a copy of the next document in the set owned by the iterator, use [SKIndexDocumentIteratorCopyNext](1442212-skindexdocumentiteratorcopynext.md).
