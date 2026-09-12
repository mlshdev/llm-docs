> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor/supportaddingbinaryfunctions](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/supportaddingbinaryfunctions)

# supportAddingBinaryFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.

## Declaration

```swift
var supportAddingBinaryFunctions: Bool { get set }
```

## See Also

### Loading binary archives

- [binaryArchives](binaryarchives.md): The binary archives that contain any precompiled shader functions to link.

# supportAddingBinaryFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL supportAddingBinaryFunctions;
```

## See Also

### Loading binary archives

- [binaryArchives](binaryarchives.md): The binary archives that contain any precompiled shader functions to link.
