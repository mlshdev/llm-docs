> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupformatdescriptioncreatefortaggedbuffergroup

# CMTaggedBufferGroupFormatDescriptionCreateForTaggedBufferGroup

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new format description for a tagged buffer group.

## Declaration

```objectivec
extern OSStatus CMTaggedBufferGroupFormatDescriptionCreateForTaggedBufferGroup(CFAllocatorRef allocator, CMTaggedBufferGroupRef taggedBufferGroup, CMTaggedBufferGroupFormatDescriptionRef*formatDescriptionOut);
```

## Parameters

- `allocator`: The allocator to use for the format description. Pass `kCFAllocatorDefault` to use the default global allocator.
- `taggedBufferGroup`: The tagged buffer group to inspect.
- `formatDescriptionOut`: The output destination for the new format description.

<a id="return-value"></a>

## Return Value

Returns `0` on success and a value from Tagged Buffer Group Error Codes on failure.

## See Also

### Inspecting Buffer Format

- [CMTaggedBufferGroupFormatDescriptionMatchesTaggedBufferGroup](cmtaggedbuffergroupformatdescriptionmatchestaggedbuffergroup.md): Checks to see if a tagged buffer group’s format matches an existing format description.
