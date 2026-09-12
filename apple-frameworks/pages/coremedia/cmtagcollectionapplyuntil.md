> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectionapplyuntil](https://developer.apple.com/documentation/coremedia/cmtagcollectionapplyuntil)

# CMTagCollectionApplyUntil

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies a Boolean function to tags in a collection, stopping when it returns true.

## Declaration

```objectivec
extern CMTag CMTagCollectionApplyUntil(CMTagCollectionRef tagCollection, CMTagCollectionTagFilterFunction applier, void *context);
```

## Parameters

- `tagCollection`: The tag collection to apply the filter to.
- `applier`: A filter function which runs over sequential elements of the collection until it returns `YES`.
- `context`: A pointer passed to the `applier` as a parameter on each call.

<a id="return-value"></a>

## Return Value

The tag for which `applier` returned `YES`.

## See Also

### Iterating Over Tags

- [CMTagCollectionApply](cmtagcollectionapply.md): Applies a function to all tags in a collection.
