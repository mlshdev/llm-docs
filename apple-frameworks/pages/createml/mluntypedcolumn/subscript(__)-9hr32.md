> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/subscript(_:)-9hr32](https://developer.apple.com/documentation/createml/mluntypedcolumn/subscript(_:)-9hr32)

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a subset of the column by masking its elements with another untyped column.

## Declaration

```swift
subscript(mask: MLUntypedColumn) -> MLUntypedColumn { get }
```

## Parameters

- `mask`: An untyped column indicating whether elements should be removed (a default value) or included (any nondefault value) in the derived column.

<a id="return-value"></a>

## Return Value

A new column.

<a id="overview"></a>

## Overview

Use this untyped column–based subscript to create a new column by masking a subset of the elements. The derived column will not include elements where `mask` contains a default value for its underlying type, such as:

- `0` in untyped `Int` columns
- `0.0` in untyped `Double` columns
- An empty string in untyped `String` columns

The derived column includes elements where the masking column has any other (nondefault) value.

See [subscript(\_:)](../mldatatable/subscript%28__%29-10r4l.md) from [MLDataTable](../mldatatable.md) for an example.

## See Also

### Masking elements to generate an untyped column

- [subscript(\_:)](subscript%28__%29.md): Accesses the element at the given position.
- [subscript(\_:)](subscript%28__%29-8ot43.md): Creates a subset of the column by masking its elements with a data column of Booleans.
