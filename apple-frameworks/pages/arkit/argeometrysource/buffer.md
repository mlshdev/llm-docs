> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeometrysource/buffer](https://developer.apple.com/documentation/arkit/argeometrysource/buffer)

# buffer (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

A Metal buffer that contains a list of vectors.

## Declaration

```swift
var buffer: any MTLBuffer { get }
```

<a id="Discussion"></a>

## Discussion

Each vector in the buffer is of the type defined by [format](format.md). Every vector may itself contain multiple scalars, defined by [componentsPerVector](componentspervector.md).

The buffer’s [storageMode](../../metal/mtlresource/storagemode.md) is [MTLStorageMode.shared](../../metal/mtlstoragemode/shared.md) which allows it to be accessed on both, the CPU, and GPU.

## See Also

### Accessing Geometry

- [subscript(\_:)](subscript%28__%29-3v98f.md): Provides the source float triplet at the subscripted index.
- [subscript(\_:)](subscript%28__%29-7jf4y.md): Provides the number at the subscripted index.

# buffer (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

A Metal buffer that contains a list of vectors.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) id<MTLBuffer> buffer;
```

<a id="Discussion"></a>

## Discussion

Each vector in the buffer is of the type defined by [format](format.md). Every vector may itself contain multiple scalars, defined by [componentsPerVector](componentspervector.md).

The buffer’s [storageMode](../../metal/mtlresource/storagemode.md) is [MTLStorageModeShared](../../metal/mtlstoragemode/shared.md) which allows it to be accessed on both, the CPU, and GPU.
