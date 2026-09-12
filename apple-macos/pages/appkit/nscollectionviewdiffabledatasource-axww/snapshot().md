> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasource-axww/snapshot()](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasource-axww/snapshot())

# snapshot()

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Returns a representation of the current state of the data in the collection view.

## Declaration

```swift
func snapshot() -> NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>
```

<a id="return-value"></a>

## Return Value

A snapshot containing section and item identifiers in the order that they appear in the UI.

## See Also

### Updating Data

- [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
