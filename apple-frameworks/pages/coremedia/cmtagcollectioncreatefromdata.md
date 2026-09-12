> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcollectioncreatefromdata](https://developer.apple.com/documentation/coremedia/cmtagcollectioncreatefromdata)

# CMTagCollectionCreateFromData

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tag collection from an existing Core Foundation data instance.

## Declaration

```objectivec
extern OSStatus CMTagCollectionCreateFromData(CFDataRef data, CFAllocatorRef allocator, CMTagCollectionRef*newCollectionOut);
```

## Parameters

- `data`: The data instance to create the new tag collection from. Pass an instance created with [CMTagCollectionCopyAsData](cmtagcollectioncopyasdata.md).
- `allocator`: The allocator to use for the new tag collection. Pass `kCFAllocatorDefault` to use the default global allocator.
- `newCollectionOut`: The output destination for the new tag collection.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tag Collection Error Codes on failure.

## See Also

### Creating Collections

- [CMTagCollectionCreate](cmtagcollectioncreate.md): Creates a new tag collection from an existing C-style array of tags.
- [CMTagCollectionCreateMutable](cmtagcollectioncreatemutable.md): Creates a new, mutable, empty tag collection.
- [CMTagCollectionCreateFromDictionary](cmtagcollectioncreatefromdictionary.md): Creates a new tag collection from an existing Core Foundation dictionary.
