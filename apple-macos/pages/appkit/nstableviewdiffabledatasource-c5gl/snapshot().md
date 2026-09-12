> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasource-c5gl/snapshot()](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasource-c5gl/snapshot())

# snapshot()

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a representation of the current state of the data in the table view.

## Declaration

```swift
func snapshot() -> NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>
```

<a id="return-value"></a>

## Return Value

A snapshot that contains row and item identifiers in the order they appear in the UI.

## See Also

### Updating Data

- [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default animation the UI uses to show differences between rows.
