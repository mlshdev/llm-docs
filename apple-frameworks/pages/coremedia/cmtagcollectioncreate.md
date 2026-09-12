> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncreate](https://developer.apple.com/documentation/coremedia/cmtagcollectioncreate)

# CMTagCollectionCreate

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tag collection from an existing C-style array of tags.

## Declaration

```objectivec
extern OSStatus CMTagCollectionCreate(CFAllocatorRef allocator, const CMTag *tags, CMItemCount tagCount, CMTagCollectionRef*newCollectionOut);
```

## Parameters

- `allocator`: The allocator to use for the new tag collection. Pass `kCFAllocatorDefault` to use the default global allocator.
- `tags`: A pointer to the first element of the tag array.
- `tagCount`: The number of tags to copy from the array.
- `newCollectionOut`: The output destination for the new tag collection.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  Using a value of `tagCount` greater than the number of elements in the array starting from `tags` causes undefined behavior.

## See Also

### Creating Collections

- [CMTagCollectionCreateMutable](cmtagcollectioncreatemutable.md): Creates a new, mutable, empty tag collection.
- [CMTagCollectionCreateFromData](cmtagcollectioncreatefromdata.md): Creates a new tag collection from an existing Core Foundation data instance.
- [CMTagCollectionCreateFromDictionary](cmtagcollectioncreatefromdictionary.md): Creates a new tag collection from an existing Core Foundation dictionary.
