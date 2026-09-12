> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/nstableviewappintentsdatasource/outlineview(_:appentityidentifierfor:)](https://developer.apple.com/documentation/appintents/nstableviewappintentsdatasource/outlineview(_:appentityidentifierfor:))

# outlineView(\_:appEntityIdentifierFor:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Asks the data source to return an app entity identifier for a particular item in the outline view.

## Declaration

```swift
@MainActor func outlineView(_ outlineView: NSOutlineView, appEntityIdentifierFor item: Any?) -> EntityIdentifier?
```

## Parameters

- `outlineView`: The outline-view object asking for the app entity identifier.
- `item`: The specified item in the outline view.

<a id="return-value"></a>

## Return Value

The app entity identifier for the item at the specified location in the outline view.

## Default Implementations

### NSTableViewAppIntentsDataSource Implementations

- [outlineView(\_:appEntityIdentifierFor:)](outlineview%28__appentityidentifierfor_%29-9r6op.md): Asks the data source to return an app entity identifier for a particular item in the outline view.
