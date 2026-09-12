> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/skindexref](https://developer.apple.com/documentation/coreservices/skindexref)

# SKIndexRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Defines an opaque data type representing an index.

## Declaration

```objectivec
typedef struct __SKIndex *SKIndexRef;
```

<a id="discussion"></a>

## Discussion

A Search Kit index object contains the textual contents of one or more documents, as well as document URL objects (SKDocumentRefs) representing those documents’ locations.

To create a new disk-based Search Kit index object, use [SKIndexCreateWithURL](1446111-skindexcreatewithurl.md). To create a memory-based index, use [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md). For other operations on indexes, see [Creating, Opening, and Closing Indexes](search_kit.md#1654608) and [Managing Indexes](search_kit.md#1654733). Also see[Fast Asynchronous Searching](search_kit.md#1655469).

<a id="1681550"></a>

### Special Considerations

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with SKIndex objects. In a garbage-collected environment, you must use [SKIndexClose](1442401-skindexclose.md) to dispose of an SKIndex object.
