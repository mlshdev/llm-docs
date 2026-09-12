> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncreatemutable](https://developer.apple.com/documentation/coremedia/cmtagcollectioncreatemutable)

# CMTagCollectionCreateMutable

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new, mutable, empty tag collection.

## Declaration

```objectivec
extern OSStatus CMTagCollectionCreateMutable(CFAllocatorRef allocator, CFIndex capacity, CMMutableTagCollectionRef*newMutableCollectionOut);
```

## Parameters

- `allocator`: The allocator to use for the new tag collection. Pass `kCFAllocatorDefault` to use the default global allocator.
- `capacity`: The maximum number of tags the collection can contain. Pass `0` for an unbounded capacity.
- `newMutableCollectionOut`: The output destination for the new mutable tag collection.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

## See Also

### Creating Collections

- [CMTagCollectionCreate](cmtagcollectioncreate.md): Creates a new tag collection from an existing C-style array of tags.
- [CMTagCollectionCreateFromData](cmtagcollectioncreatefromdata.md): Creates a new tag collection from an existing Core Foundation data instance.
- [CMTagCollectionCreateFromDictionary](cmtagcollectioncreatefromdictionary.md): Creates a new tag collection from an existing Core Foundation dictionary.
