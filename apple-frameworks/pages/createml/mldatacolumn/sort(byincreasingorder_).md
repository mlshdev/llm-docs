> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatacolumn/sort(byincreasingorder:)

# sort(byIncreasingOrder:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Returns a new MLDataColumn containing values sorted by the specified order.

## Declaration

```swift
func sort(byIncreasingOrder: Bool = true) -> MLDataColumn<Element>
```

## Parameters

- `byIncreasingOrder`: A boolean indicating whether to sort values in ascending or descending order. The default is true, sorted by ascending order.

<a id="return-value"></a>

## Return Value

A MLDataColumn sorted by the specified order.
