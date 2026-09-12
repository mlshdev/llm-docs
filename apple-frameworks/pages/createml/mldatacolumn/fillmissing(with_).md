> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/fillmissing(with:)](https://developer.apple.com/documentation/createml/mldatacolumn/fillmissing(with:))

# fillMissing(with:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a modified copy of the column such that every missing element is replaced with the given value.

## Declaration

```swift
func fillMissing(with value: Element) -> MLDataColumn<Element>
```

## Parameters

- `value`: A value used to replace every undefined element.

<a id="return-value"></a>

## Return Value

A new column.
