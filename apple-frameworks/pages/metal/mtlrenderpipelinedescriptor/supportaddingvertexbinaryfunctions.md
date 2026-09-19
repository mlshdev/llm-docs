> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/supportaddingvertexbinaryfunctions

# supportAddingVertexBinaryFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the vertex shader’s callable functions list.

## Declaration

```swift
var supportAddingVertexBinaryFunctions: Bool { get set }
```

## See Also

### Specifying precompiled shader binaries

- [supportAddingFragmentBinaryFunctions](supportaddingfragmentbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the fragment shader’s callable functions list.
- [binaryArchives](binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.

# supportAddingVertexBinaryFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the vertex shader’s callable functions list.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL supportAddingVertexBinaryFunctions;
```

## See Also

### Specifying precompiled shader binaries

- [supportAddingFragmentBinaryFunctions](supportaddingfragmentbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to the fragment shader’s callable functions list.
- [binaryArchives](binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.
