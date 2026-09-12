> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpasssamplebufferattachmentdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlblitpasssamplebufferattachmentdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Copies the properties of a blit pass sample buffer attachment descriptor instance to the properties of one of the array’s instances.

## Declaration

```objectivec
- (void) setObject:(MTLBlitPassSampleBufferAttachmentDescriptor *) attachment atIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachment`: An [MTLBlitPassSampleBufferAttachmentDescriptor](../mtlblitpasssamplebufferattachmentdescriptor.md) instance that the method assigns its properties values to the properties of the array’s instance at `attachmentIndex`.

  You can reset the property configuration of the array’s instance at `attachmentIndex` to its default values by passing `nil`.
- `attachmentIndex`: An index into the array’s copies of attachment descriptor instances.

<a id="discussion"></a>

## Discussion

The array has at

## See Also

### Accessing a sample buffer attachment descriptor

- [objectAtIndexedSubscript:](subscript%28__%29.md): Accesses one of the array’s blit pass sample buffer attachment descriptor instances.
