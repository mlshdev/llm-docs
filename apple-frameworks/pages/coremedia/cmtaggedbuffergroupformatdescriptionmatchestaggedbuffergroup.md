> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaggedbuffergroupformatdescriptionmatchestaggedbuffergroup](https://developer.apple.com/documentation/coremedia/cmtaggedbuffergroupformatdescriptionmatchestaggedbuffergroup)

# CMTaggedBufferGroupFormatDescriptionMatchesTaggedBufferGroup

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Checks to see if a tagged buffer group’s format matches an existing format description.

## Declaration

```objectivec
extern Boolean CMTaggedBufferGroupFormatDescriptionMatchesTaggedBufferGroup(CMTaggedBufferGroupFormatDescriptionRef desc, CMTaggedBufferGroupRef taggedBufferGroup);
```

## Parameters

- `desc`: A tagged buffer format description, created by [CMTaggedBufferGroupFormatDescriptionCreateForTaggedBufferGroup](cmtaggedbuffergroupformatdescriptioncreatefortaggedbuffergroup.md).
- `taggedBufferGroup`: The tagged buffer group to inspect the format of.

<a id="return-value"></a>

## Return Value

Returns `YES` when the format description of `taggedBufferGroup` is equal to the description `desc`.

## See Also

### Inspecting Buffer Format

- [CMTaggedBufferGroupFormatDescriptionCreateForTaggedBufferGroup](cmtaggedbuffergroupformatdescriptioncreatefortaggedbuffergroup.md): Creates a new format description for a tagged buffer group.
