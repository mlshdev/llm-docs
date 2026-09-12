> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/filledcolumn/argmin()](https://developer.apple.com/documentation/tabulardata/filledcolumn/argmin())

# argmin()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the index of the element with the lowest value.

## Declaration

```swift
func argmin() -> Base.Index?
```

```swift
func argmin() -> FilledColumn<Base>.Index?
```

## See Also

### Finding an Element Index

- [argmax()](argmax%28%29.md): Conforms when `Base` conforms to `OptionalColumnProtocol` and `Base.WrappedElement` conforms to `Comparable`. Returns the index of the element with the highest value.
