> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/subscript(_:_:)](https://developer.apple.com/documentation/createml/mldatatable/subscript(_:_:))

# subscript(\_:\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Retrieves a column with the specified name and type.

## Declaration

```swift
subscript<T>(columnName: String, columnType: T.Type) -> MLDataColumn<T>? where T : MLDataValueConvertible { get }
```

## Parameters

- `columnName`: The name of the column to extract.
- `columnType`: The underlying type of the column’s content.

<a id="return-value"></a>

## Return Value

A new [MLDataColumn](../mldatacolumn.md) with the specified name and type, if it exists; otherwise `nil`.

<a id="overview"></a>

## Overview

Use this subscript to get a typed [MLDataColumn](../mldatacolumn.md), which is easier to work with than a [MLUntypedColumn](../mluntypedcolumn.md) returned from [subscript(\_:)](https://developer.apple.com/documentation/createml/mldatatable/subscript%28_:%29-3wjk).

## See Also

### Accessing columns

- [subscript(\_:)](subscript%28__%29.md): Retrieves or adds an untyped column with the specified name.
