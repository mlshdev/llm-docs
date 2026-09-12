> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitpasssamplebufferattachmentdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlblitpasssamplebufferattachmentdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Accesses one of the array’s blit pass sample buffer attachment descriptor instances.

## Declaration

```swift
subscript(attachmentIndex: Int) -> MTLBlitPassSampleBufferAttachmentDescriptor! { get set }
```

## Parameters

- `attachmentIndex`: An index of one of the array’s [MTLBlitPassSampleBufferAttachmentDescriptor](../mtlblitpasssamplebufferattachmentdescriptor.md) instances.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Accesses one of the array’s blit pass sample buffer attachment descriptor instances.

## Declaration

```objectivec
- (MTLBlitPassSampleBufferAttachmentDescriptor *) objectAtIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachmentIndex`: An index of one of the array’s [MTLBlitPassSampleBufferAttachmentDescriptor](../mtlblitpasssamplebufferattachmentdescriptor.md) instances.

## See Also

### Accessing a sample buffer attachment descriptor

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Copies the properties of a blit pass sample buffer attachment descriptor instance to the properties of one of the array’s instances.
