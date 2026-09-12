> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepasssamplebufferattachmentdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlcomputepasssamplebufferattachmentdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Sets the descriptor object for the specified sample buffer attachment.

## Declaration

```objectivec
- (void) setObject:(MTLComputePassSampleBufferAttachmentDescriptor *) attachment atIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachment`: A sample buffer attachment descriptor. When set to `nil`, removes any existing buffer attachment descriptor at `attachmentIndex`.
- `attachmentIndex`: The attachment in the array to replace.

<a id="discussion"></a>

## Discussion

The method copies the `attachment` parameter’s contents into the attachment at the specified index.

## See Also

### Accessing a sample buffer attachment

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the descriptor object for the specified sample buffer attachment.
