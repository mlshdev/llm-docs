> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectiontagfilterfunction](https://developer.apple.com/documentation/coremedia/cmtagcollectiontagfilterfunction)

# CMTagCollectionTagFilterFunction

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type for filtering of tag collections.

## Declaration

```objectivec
typedef unsigned char (*)(struct CMTag, void *) CMTagCollectionTagFilterFunction;
```

## See Also

### Types

- [CMTagCollectionRef](cmtagcollectionref.md): A reference to a tag collection.
- [CMMutableTagCollectionRef](cmmutabletagcollectionref.md): A mutable reference to a tag collection.
- [CMTagCollectionApplierFunction](cmtagcollectionapplierfunction.md): A type for function application over elements of a tag collection.
