> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixmultiplication/encode(commandbuffer:leftmatrix:rightmatrix:resultmatrix:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixmultiplication/encode(commandbuffer:leftmatrix:rightmatrix:resultmatrix:))

# encode(commandBuffer:leftMatrix:rightMatrix:resultMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Encodes a matrix multiplication kernel to a command buffer.

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, leftMatrix: MPSMatrix, rightMatrix: MPSMatrix, resultMatrix: MPSMatrix)
```

## Parameters

- `commandBuffer`: The command buffer that will receive the encoded kernel.
- `leftMatrix`: The left input matrix.
- `rightMatrix`: The right input matrix.
- `resultMatrix`: The addend matrix which will also be overwritten by the operation result.

<a id="Discussion"></a>

## Discussion

The following constraints apply to the sizes of the matrices depending on the transposition operations and the sizes requested at initialization time, as well as the origins at the time this method is called:

- The left input matrix must be large enough to hold an array of size `resultRows x interiorColumns` elements, beginning at the value of the [leftMatrixOrigin](leftmatrixorigin.md) property.
- The right input matrix must be large enough to hold an array of size `interiorColumns x resultColumns` elements, beginning at the value of the [rightMatrixOrigin](rightmatrixorigin.md) property.
- The result matrix must be large enough to hold an array of size `resultRows x resultColumns` elements, beginning at the value of the [resultMatrixOrigin](resultmatrixorigin.md) property.

## See Also

### Methods

- [init(device:transposeLeft:transposeRight:resultRows:resultColumns:interiorColumns:alpha:beta:)](init%28device_transposeleft_transposeright_resultrows_resultcolumns_interiorcolumns_alpha_beta_%29.md): Initializes a matrix multiplication kernel.

# encodeToCommandBuffer:leftMatrix:rightMatrix:resultMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Encodes a matrix multiplication kernel to a command buffer.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer leftMatrix:(MPSMatrix *) leftMatrix rightMatrix:(MPSMatrix *) rightMatrix resultMatrix:(MPSMatrix *) resultMatrix;
```

## Parameters

- `commandBuffer`: The command buffer that will receive the encoded kernel.
- `leftMatrix`: The left input matrix.
- `rightMatrix`: The right input matrix.
- `resultMatrix`: The addend matrix which will also be overwritten by the operation result.

<a id="Discussion"></a>

## Discussion

The following constraints apply to the sizes of the matrices depending on the transposition operations and the sizes requested at initialization time, as well as the origins at the time this method is called:

- The left input matrix must be large enough to hold an array of size `resultRows x interiorColumns` elements, beginning at the value of the [leftMatrixOrigin](leftmatrixorigin.md) property.
- The right input matrix must be large enough to hold an array of size `interiorColumns x resultColumns` elements, beginning at the value of the [rightMatrixOrigin](rightmatrixorigin.md) property.
- The result matrix must be large enough to hold an array of size `resultRows x resultColumns` elements, beginning at the value of the [resultMatrixOrigin](resultmatrixorigin.md) property.

## See Also

### Methods

- [initWithDevice:transposeLeft:transposeRight:resultRows:resultColumns:interiorColumns:alpha:beta:](init%28device_transposeleft_transposeright_resultrows_resultcolumns_interiorcolumns_alpha_beta_%29.md): Initializes a matrix multiplication kernel.
