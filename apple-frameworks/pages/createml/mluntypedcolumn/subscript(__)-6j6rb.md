> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mluntypedcolumn/subscript(_:)-6j6rb

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
