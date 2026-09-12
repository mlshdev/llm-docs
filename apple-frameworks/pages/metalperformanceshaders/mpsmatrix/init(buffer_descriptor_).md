> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrix/init(buffer:descriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrix/init(buffer:descriptor:))

# init(buffer:descriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a matrix with a buffer.

## Declaration

```swift
init(buffer: any MTLBuffer, descriptor: MPSMatrixDescriptor)
```

## Parameters

- `buffer`: The buffer that stores the matrix data.
- `descriptor`: The matrix descriptor.

<a id="return-value"></a>

## Return Value

A valid [MPSMatrix](../mpsmatrix.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

The dimensions and stride of the matrix are specified by the [MPSMatrixDescriptor](../mpsmatrixdescriptor.md) object. The size of the provided [MTLBuffer](../../metal/mtlbuffer.md) object must be large enough to store the following amount of bytes:

`(descriptor.rows-1) * descriptor.rowBytes + descriptor.columns * (element size)`

# initWithBuffer:descriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes a matrix with a buffer.

## Declaration

```objectivec
- (instancetype) initWithBuffer:(id<MTLBuffer>) buffer descriptor:(MPSMatrixDescriptor *) descriptor;
```

## Parameters

- `buffer`: The buffer that stores the matrix data.
- `descriptor`: The matrix descriptor.

<a id="return-value"></a>

## Return Value

A valid [MPSMatrix](../mpsmatrix.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

The dimensions and stride of the matrix are specified by the [MPSMatrixDescriptor](../mpsmatrixdescriptor.md) object. The size of the provided [MTLBuffer](../../metal/mtlbuffer.md) object must be large enough to store the following amount of bytes:

`(descriptor.rows-1) * descriptor.rowBytes + descriptor.columns * (element size)`
