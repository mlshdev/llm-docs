> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinecolorattachmentdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtltilerenderpipelinecolorattachmentdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Returns the render pipeline state for the specified color attachment.

## Declaration

```swift
subscript(attachmentIndex: Int) -> MTLTileRenderPipelineColorAttachmentDescriptor { get set }
```

## Parameters

- `attachmentIndex`: An index in the color attachment array.

<a id="return-value"></a>

## Return Value

An [MTLTileRenderPipelineColorAttachmentDescriptor](../mtltilerenderpipelinecolorattachmentdescriptor.md) that describes the render pipeline information for a color attachment.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Returns the render pipeline state for the specified color attachment.

## Declaration

```objectivec
- (MTLTileRenderPipelineColorAttachmentDescriptor *) objectAtIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachmentIndex`: An index in the color attachment array.

<a id="return-value"></a>

## Return Value

An [MTLTileRenderPipelineColorAttachmentDescriptor](../mtltilerenderpipelinecolorattachmentdescriptor.md) that describes the render pipeline information for a color attachment.

## See Also

### Instance methods

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets the render pipeline state for a specified color attachment.
