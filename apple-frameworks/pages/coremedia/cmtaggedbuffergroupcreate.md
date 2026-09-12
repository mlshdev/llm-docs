> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupcreate](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupcreate)

# CMTaggedBufferGroupCreate

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tagged buffer group from a pair of buffers and the tags to associate with them.

## Declaration

```objectivec
extern OSStatus CMTaggedBufferGroupCreate(CFAllocatorRef allocator, CFArrayRef tagCollections, CFArrayRef buffers, CMTaggedBufferGroupRef*groupOut);
```

## Parameters

- `allocator`: The allocator to use for the new tag collection. Pass `kCFAllocatorDefault` to use the default global allocator.
- `tagCollections`: The tag collections to apply to each buffer, in order.
- `buffers`: An array of buffer instances to place in the tagged buffer group.
- `groupOut`: The output destination for the new tagged buffer group.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tagged Buffer Group Error Codes on failure.

<a id="Discussion"></a>

## Discussion

Buffers strongly retain their references when creating a new tagged buffer group, rather than performing a copy. The number of elements in `tagCollections` and `buffers` must be the same.

## See Also

### Creating Tagged Buffer Groups

- [CMTaggedBufferGroupCreateCombined](cmtaggedbuffergroupcreatecombined.md): Creates a new tagged buffer group from an array of existing tagged buffer groups.
