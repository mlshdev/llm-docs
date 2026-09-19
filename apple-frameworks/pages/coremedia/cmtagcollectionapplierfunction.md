> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtagcollectionapplierfunction

# CMTagCollectionApplierFunction

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type for function application over elements of a tag collection.

## Declaration

```objectivec
typedef void (*)(struct CMTag, void *) CMTagCollectionApplierFunction;
```

## See Also

### Types

- [CMTagCollectionRef](cmtagcollectionref.md): A reference to a tag collection.
- [CMMutableTagCollectionRef](cmmutabletagcollectionref.md): A mutable reference to a tag collection.
- [CMTagCollectionTagFilterFunction](cmtagcollectiontagfilterfunction.md): A type for filtering of tag collections.
