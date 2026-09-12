> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/supportaddingfragmentbinaryfunctions](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/supportaddingfragmentbinaryfunctions)

# supportAddingFragmentBinaryFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the fragment shader’s callable functions list.

## Declaration

```swift
var supportAddingFragmentBinaryFunctions: Bool { get set }
```

## See Also

### Specifying precompiled shader binaries

- [supportAddingVertexBinaryFunctions](supportaddingvertexbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the vertex shader’s callable functions list.
- [binaryArchives](binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.

# supportAddingFragmentBinaryFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the fragment shader’s callable functions list.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL supportAddingFragmentBinaryFunctions;
```

## See Also

### Specifying precompiled shader binaries

- [supportAddingVertexBinaryFunctions](supportaddingvertexbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the vertex shader’s callable functions list.
- [binaryArchives](binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.
