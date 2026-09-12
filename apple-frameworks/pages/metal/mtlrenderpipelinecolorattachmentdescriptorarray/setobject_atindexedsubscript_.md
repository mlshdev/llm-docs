> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinecolorattachmentdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlrenderpipelinecolorattachmentdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Sets the render pipeline state for a specified color attachment.

## Declaration

```objectivec
- (void) setObject:(MTLRenderPipelineColorAttachmentDescriptor *) attachment atIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachment`: A descriptor that contains the render pipeline description for a color attachment.
- `attachmentIndex`: An index in the color attachment array.

<a id="discussion"></a>

## Discussion

This method copies the pipeline state from the descriptor into the specified attachment in the array. The descriptor passed into this method can be modified and reused without affecting a previously set attachment.

If this method is called with `nil` for `attachment` for any legal index, its attachment descriptor state is set to the default values.

## See Also

### Accessing render pipeline state for a color attachment

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the render pipeline state for the specified color attachment.
