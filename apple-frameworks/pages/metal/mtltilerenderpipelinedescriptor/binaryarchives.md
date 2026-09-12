> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinedescriptor/binaryarchives](https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor/binaryarchives)

# binaryArchives (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An array of binary archives to search for precompiled versions of the shader.

## Declaration

```swift
var binaryArchives: [any MTLBinaryArchive]? { get set }
```

## See Also

### Specifying precompiled shader binaries

- [supportAddingBinaryFunctions](supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.

# binaryArchives (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

An array of binary archives to search for precompiled versions of the shader.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLBinaryArchive>> * binaryArchives;
```

## See Also

### Specifying precompiled shader binaries

- [supportAddingBinaryFunctions](supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.
