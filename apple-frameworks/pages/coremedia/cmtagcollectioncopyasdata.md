> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncopyasdata](https://developer.apple.com/documentation/coremedia/cmtagcollectioncopyasdata)

# CMTagCollectionCopyAsData

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new Core Foundation data instance from a tag collection.

## Declaration

```objectivec
extern CFDataRefCMTagCollectionCopyAsData(CMTagCollectionRef tagCollection, CFAllocatorRef allocator);
```

## Parameters

- `tagCollection`: The tag collection to convert to data.
- `allocator`: The allocator to use for the new data instance. Pass `kCFAllocatorDefault` to use the default global allocator.

<a id="Discussion"></a>

## Discussion

Convert data instances created by this function back to tag collections with [CMTagCollectionCreateFromData](cmtagcollectioncreatefromdata.md).

## See Also

### Converting to Other Types

- [CMTagCollectionCopyAsDictionary](cmtagcollectioncopyasdictionary.md): Creates a new Core Foundation dictionary from a tag collection.
