> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/filledcolumn/argmax()

# argmax()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the index of the element with the highest value.

## Declaration

```swift
func argmax() -> FilledColumn<Base>.Index?
```

## See Also

### Finding an Element Index

- [argmin()](argmin%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Comparable`. Returns the index of the element with the lowest value.
