> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixmultiplication/resultmatrixorigin](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixmultiplication/resultmatrixorigin)

# resultMatrixOrigin (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The origin of the result matrix.

## Declaration

```swift
var resultMatrixOrigin: MTLOrigin { get set }
```

<a id="Discussion"></a>

## Discussion

The origin, relative to `(0,0)`, at which to start reading values. If a different origin is desired, you must modify this property before encoding the matrix multiplication kernel. The default value is `(0,0,0)` (the `z` value must always be 0).

## See Also

### Properties

- [leftMatrixOrigin](leftmatrixorigin.md): The origin of the left input matrix.
- [rightMatrixOrigin](rightmatrixorigin.md): The origin of the right input matrix.
- [batchSize](batchsize.md)
- [batchStart](batchstart.md)

# resultMatrixOrigin (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The origin of the result matrix.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLOrigin resultMatrixOrigin;
```

<a id="Discussion"></a>

## Discussion

The origin, relative to `(0,0)`, at which to start reading values. If a different origin is desired, you must modify this property before encoding the matrix multiplication kernel. The default value is `(0,0,0)` (the `z` value must always be 0).

## See Also

### Properties

- [leftMatrixOrigin](leftmatrixorigin.md): The origin of the left input matrix.
- [rightMatrixOrigin](rightmatrixorigin.md): The origin of the right input matrix.
- [batchSize](batchsize.md)
- [batchStart](batchstart.md)
