> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/stageinputdescriptor

# stageInputDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The organization of input and output data for the next kernel call.

## Declaration

```swift
@NSCopying var stageInputDescriptor: MTLStageInputOutputDescriptor? { get set }
```

## See Also

### Configuring compute pass inputs

- [MTLAttributeDescriptor](../mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](../mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](../mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](../mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.

# stageInputDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The organization of input and output data for the next kernel call.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MTLStageInputOutputDescriptor * stageInputDescriptor;
```

## See Also

### Configuring compute pass inputs

- [MTLAttributeDescriptor](../mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](../mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](../mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](../mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.
