> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor/supportaddingbinaryfunctions

# supportAddingBinaryFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.

## Declaration

```swift
var supportAddingBinaryFunctions: Bool { get set }
```

## See Also

### Specifying precompiled shader binaries

- [binaryArchives](binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.

# supportAddingBinaryFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL supportAddingBinaryFunctions;
```

## See Also

### Specifying precompiled shader binaries

- [binaryArchives](binaryarchives.md): An array of binary archives to search for precompiled versions of the shader.
