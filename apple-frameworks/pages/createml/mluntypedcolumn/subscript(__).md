> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/subscript(_:)](https://developer.apple.com/documentation/createml/mluntypedcolumn/subscript(_:))

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Accesses the element at the given position.

## Declaration

```swift
subscript(index: Int) -> MLDataValue { get }
```

## Parameters

- `index`: The index of an element in the column.

<a id="return-value"></a>

## Return Value

The value at the given index.

## See Also

### Masking elements to generate an untyped column

- [subscript(\_:)](subscript%28__%29-8ot43.md): Creates a subset of the column by masking its elements with a data column of Booleans.
- [subscript(\_:)](subscript%28__%29-9hr32.md): Creates a subset of the column by masking its elements with another untyped column.
