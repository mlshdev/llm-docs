> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinecolorattachmentdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtltilerenderpipelinecolorattachmentdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Sets the render pipeline state for a specified color attachment.

## Declaration

```objectivec
- (void) setObject:(MTLTileRenderPipelineColorAttachmentDescriptor *) attachment atIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachment`: A descriptor that contains the render pipeline description for a color attachment. Specify `nil` to reset the entry to default values.
- `attachmentIndex`: An index in the color attachment array.

<a id="discussion"></a>

## Discussion

This method copies the pipeline state from the descriptor into the specified attachment in the array. Afterwards, you can modify and reuse the descriptior without affecting a previously set attachment.

## See Also

### Instance methods

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the render pipeline state for the specified color attachment.
