> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixdescriptor/rowbytes](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixdescriptor/rowbytes)

# rowBytes (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The stride, in bytes, between corresponding elements of consecutive rows in the matrix.

## Declaration

```swift
var rowBytes: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This value must be a multiple of the element size.

## See Also

### Properties

- [rows](rows.md): The number of rows in the matrix.
- [columns](columns.md): The number of columns in the matrix.
- [dataType](datatype.md): The type of the values in the matrix.
- [MPSDataType](../mpsdatatype.md): A value to specify a type of data.
- [matrices](matrices.md)
- [matrixBytes](matrixbytes.md)

# rowBytes (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The stride, in bytes, between corresponding elements of consecutive rows in the matrix.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger rowBytes;
```

<a id="Discussion"></a>

## Discussion

This value must be a multiple of the element size.

## See Also

### Properties

- [rows](rows.md): The number of rows in the matrix.
- [columns](columns.md): The number of columns in the matrix.
- [dataType](datatype.md): The type of the values in the matrix.
- [MPSDataType](../mpsdatatype.md): A value to specify a type of data.
- [matrices](matrices.md)
- [matrixBytes](matrixbytes.md)
