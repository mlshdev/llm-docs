> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpasscolorattachmentdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlrenderpasscolorattachmentdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Sets the descriptor for the specified color attachment.

## Declaration

```objectivec
- (void) setObject:(MTLRenderPassColorAttachmentDescriptor *) attachment atIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachment`: A descriptor that contains color attachment information. Specify `nil` to reset the attachment to its default values.
- `attachmentIndex`: An index in the color attachment array.

<a id="discussion"></a>

## Discussion

This method copies the color attachment information from the descriptor into the specified attachment in the array. Because the method copies the information, you can modify and reuse the descriptor without affecting a previously set attachment.

## See Also

### Accessing the description of a color attachment

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the descriptor object for the specified color attachment.
