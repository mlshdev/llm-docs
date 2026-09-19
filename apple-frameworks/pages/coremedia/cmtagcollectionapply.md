> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtagcollectionapply

# CMTagCollectionApply

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies a function to all tags in a collection.

## Declaration

```objectivec
extern void CMTagCollectionApply(CMTagCollectionRef tagCollection, CMTagCollectionApplierFunction applier, void *context);
```

## Parameters

- `tagCollection`: The tag collection to iterate over.
- `applier`: The callback function to call for each tag.
- `context`: A pointer passed to the `applier` as a parameter on each call.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  When applying a function to a mutable tag collection, modifying `tagCollection` in `applier` causes undefined behavior or a crash.

## See Also

### Iterating Over Tags

- [CMTagCollectionApplyUntil](cmtagcollectionapplyuntil.md): Applies a Boolean function to tags in a collection, stopping when it returns true.
