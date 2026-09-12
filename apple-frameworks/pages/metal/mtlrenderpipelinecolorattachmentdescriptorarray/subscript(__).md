> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinecolorattachmentdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlrenderpipelinecolorattachmentdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the render pipeline state for the specified color attachment.

## Declaration

```swift
subscript(attachmentIndex: Int) -> MTLRenderPipelineColorAttachmentDescriptor! { get set }
```

## Parameters

- `attachmentIndex`: An index in the color attachment array.

<a id="return-value"></a>

## Return Value

An [MTLRenderPipelineColorAttachmentDescriptor](../mtlrenderpipelinecolorattachmentdescriptor.md) instance that describes the render pipeline information for a color attachment.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the render pipeline state for the specified color attachment.

## Declaration

```objectivec
- (MTLRenderPipelineColorAttachmentDescriptor *) objectAtIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachmentIndex`: An index in the color attachment array.

<a id="return-value"></a>

## Return Value

An [MTLRenderPipelineColorAttachmentDescriptor](../mtlrenderpipelinecolorattachmentdescriptor.md) instance that describes the render pipeline information for a color attachment.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Accessing render pipeline state for a color attachment

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets the render pipeline state for a specified color attachment.
