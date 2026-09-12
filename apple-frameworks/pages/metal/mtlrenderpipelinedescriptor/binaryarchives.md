> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/binaryarchives](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/binaryarchives)

# binaryArchives (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of binary archives to search for precompiled versions of the shader.

## Declaration

```swift
var binaryArchives: [any MTLBinaryArchive]? { get set }
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

## See Also

### Specifying precompiled shader binaries

- [supportAddingVertexBinaryFunctions](supportaddingvertexbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the vertex shader’s callable functions list.
- [supportAddingFragmentBinaryFunctions](supportaddingfragmentbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the fragment shader’s callable functions list.

# binaryArchives (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of binary archives to search for precompiled versions of the shader.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLBinaryArchive>> * binaryArchives;
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

## See Also

### Specifying precompiled shader binaries

- [supportAddingVertexBinaryFunctions](supportaddingvertexbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the vertex shader’s callable functions list.
- [supportAddingFragmentBinaryFunctions](supportaddingfragmentbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the fragment shader’s callable functions list.
