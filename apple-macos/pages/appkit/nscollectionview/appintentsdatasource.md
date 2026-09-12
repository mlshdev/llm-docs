> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/appintentsdatasource](https://developer.apple.com/documentation/appkit/nscollectionview/appintentsdatasource)

# appIntentsDataSource

**Framework:** AppIntents  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The object acting as the collection view’s data source for app entity identifiers that make a cell’s content discoverable by Apple Intelligence and Siri.

## Declaration

```swift
@MainActor @preconcurrency weak var appIntentsDataSource: (any NSCollectionViewAppIntentsDataSource)? { get set }
```

<a id="discussion"></a>

## Discussion

For more information, refer to doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri and [App Intents](https://developer.apple.com/documentation/appintents).
