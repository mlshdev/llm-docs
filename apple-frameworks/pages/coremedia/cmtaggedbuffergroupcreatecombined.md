> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupcreatecombined](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupcreatecombined)

# CMTaggedBufferGroupCreateCombined

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new tagged buffer group from an array of existing tagged buffer groups.

## Declaration

```objectivec
extern OSStatus CMTaggedBufferGroupCreateCombined(CFAllocatorRef allocator, CFArrayRef taggedBufferGroups, CMTaggedBufferGroupRef*groupOut);
```

## Parameters

- `allocator`: The allocator to use for the new tag collection. Pass `kCFAllocatorDefault` to use the default global allocator.
- `taggedBufferGroups`: An array of tagged buffer groups to combine into the new, single buffer group.
- `groupOut`: The output destination for the new tagged buffer group.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tagged Buffer Group Error Codes on failure.

<a id="Discussion"></a>

## Discussion

Buffers strongly retain their references when creating a new tagged buffer group, rather than performing a copy.

## See Also

### Creating Tagged Buffer Groups

- [CMTaggedBufferGroupCreate](cmtaggedbuffergroupcreate.md): Creates a new tagged buffer group from a pair of buffers and the tags to associate with them.
