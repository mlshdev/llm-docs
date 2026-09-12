> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrix/device](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrix/device)

# device (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The device on which the matrix will be used.

## Declaration

```swift
var device: any MTLDevice { get }
```

## See Also

### Properties

- [rows](rows.md): The number of rows in the matrix.
- [columns](columns.md): The number of columns in the matrix.
- [dataType](datatype.md): The type of the values in the matrix.
- [rowBytes](rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [data](data.md): The buffer that stores the matrix data.
- [matrices](matrices.md)
- [matrixBytes](matrixbytes.md)

# device (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The device on which the matrix will be used.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nonnull) id<MTLDevice> device;
```

## See Also

### Properties

- [rows](rows.md): The number of rows in the matrix.
- [columns](columns.md): The number of columns in the matrix.
- [dataType](datatype.md): The type of the values in the matrix.
- [rowBytes](rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [data](data.md): The buffer that stores the matrix data.
- [matrices](matrices.md)
- [matrixBytes](matrixbytes.md)
