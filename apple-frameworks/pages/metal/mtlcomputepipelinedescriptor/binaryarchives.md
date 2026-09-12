> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor/binaryarchives](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/binaryarchives)

# binaryArchives (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The binary archives that contain any precompiled shader functions to link.

## Declaration

```swift
var binaryArchives: [any MTLBinaryArchive]? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`.

When you create a Metal library, Metal compiles shader functions into an intermediate representation. When you create the pipeline state object, the GPU compiles this intermediate code.

By providing a set of binary archives, when Metal creates the pipeline state object, it first checks the archives to see if there’s already a compiled function. If so, Metal uses it instead.

## See Also

### Loading binary archives

- [supportAddingBinaryFunctions](supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.

# binaryArchives (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The binary archives that contain any precompiled shader functions to link.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLBinaryArchive>> * binaryArchives;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`.

When you create a Metal library, Metal compiles shader functions into an intermediate representation. When you create the pipeline state object, the GPU compiles this intermediate code.

By providing a set of binary archives, when Metal creates the pipeline state object, it first checks the archives to see if there’s already a compiled function. If so, Metal uses it instead.

## See Also

### Loading binary archives

- [supportAddingBinaryFunctions](supportaddingbinaryfunctions.md): A Boolean value that indicates whether you can use the pipeline to create new pipelines by adding binary functions to its callable functions list.
