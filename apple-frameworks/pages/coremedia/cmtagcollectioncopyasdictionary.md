> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncopyasdictionary](https://developer.apple.com/documentation/coremedia/cmtagcollectioncopyasdictionary)

# CMTagCollectionCopyAsDictionary

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new Core Foundation dictionary from a tag collection.

## Declaration

```objectivec
extern CFDictionaryRefCMTagCollectionCopyAsDictionary(CMTagCollectionRef tagCollection, CFAllocatorRef allocator);
```

## Parameters

- `tagCollection`: The tag collection to copy to the dictionary result.
- `allocator`: The allocator to use for the new dictionary. Pass `kCFAllocatorDefault` to use the default global allocator.

<a id="Discussion"></a>

## Discussion

Convert dictionaries created by this function back to tag collections with [CMTagCollectionCreateFromDictionary](cmtagcollectioncreatefromdictionary.md).

## See Also

### Converting to Other Types

- [CMTagCollectionCopyAsData](cmtagcollectioncopyasdata.md): Creates a new Core Foundation data instance from a tag collection.
