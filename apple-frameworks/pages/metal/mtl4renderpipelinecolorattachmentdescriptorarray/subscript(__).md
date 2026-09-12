> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpipelinecolorattachmentdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtl4renderpipelinecolorattachmentdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Accesses a color attachment at a specific index.

## Declaration

```swift
subscript(attachmentIndex: Int) -> MTL4RenderPipelineColorAttachmentDescriptor! { get set }
```

## Parameters

- `attachmentIndex`: Index of the attachment to access.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Accesses a color attachment at a specific index.

## Declaration

```objectivec
- (MTL4RenderPipelineColorAttachmentDescriptor *) objectAtIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachmentIndex`: Index of the attachment to access.
