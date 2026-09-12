> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/shapeddata](https://developer.apple.com/documentation/tabulardata/shapeddata)

# ShapedData

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection type that represents multidimensional data in a data frame element.

## Declaration

```swift
struct ShapedData<Element>
```

## Topics

### Initializers

- [init(shape:strides:contents:)](shapeddata/init%28shape_strides_contents_%29.md): Creates a multidimensional shaped array from a one-dimensional array.

### Instance Properties

- [contents](shapeddata/contents.md): A linear array that stores the elements of the multidimensional array.
- [shape](shapeddata/shape.md): An integer array that stores the size of each dimension in the corresponding element.
- [strides](shapeddata/strides.md): An integer array that stores the number of memory locations that span the length of each dimension in the corresponding element.

### Subscripts

- [subscript(\_:)](shapeddata/subscript%28__%29.md): Retrieves an element using an index for each dimension.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Data Frame from Turi Create Types

- [init(contentsOfSFrameDirectory:columns:rows:)](dataframe/init%28contentsofsframedirectory_columns_rows_%29.md): Creates a data frame from a Turi Create scalable data frame.
