> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/order/areordered(_:_:)

# areOrdered(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean that indicates whether the comparable types match the order’s state.

## Declaration

```swift
func areOrdered<T>(_ lhs: T, _ rhs: T) -> Bool where T : Comparable
```

## Parameters

- `lhs`: A comparable type.
- `rhs`: Another comparable type.

## See Also

### Getting the Properties

- [Order.ascending](ascending.md): A sort ordering that starts with the lowest value and monotonically proceeds to higher values.
- [Order.descending](descending.md): A sort ordering that starts with the highest value and monotonically proceeds to lower values.
