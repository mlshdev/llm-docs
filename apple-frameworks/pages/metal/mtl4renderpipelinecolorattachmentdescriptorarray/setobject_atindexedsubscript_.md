> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpipelinecolorattachmentdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtl4renderpipelinecolorattachmentdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an attachment at an index.

## Declaration

```objectivec
- (void) setObject:(MTL4RenderPipelineColorAttachmentDescriptor *) attachment atIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachment`: The descriptor of the attachment to set.
- `attachmentIndex`: The index of the attachment within the array.

<a id="discussion"></a>

## Discussion

This function offers ‘copy’ semantics.

You can safely set the color attachment at any legal index to nil. This has the effect of resetting that attachment descriptor’s state to its default values.
