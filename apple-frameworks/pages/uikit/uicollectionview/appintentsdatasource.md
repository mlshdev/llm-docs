> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/appintentsdatasource](https://developer.apple.com/documentation/uikit/uicollectionview/appintentsdatasource)

# appIntentsDataSource

**Framework:** AppIntents  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · tvOS 18.4+ · visionOS 2.4+

The object acting as the collection view’s data source for app entity identifiers that make a cell’s content avdiscoverable by Apple Intelligence and Siri.

## Declaration

```swift
@MainActor @preconcurrency weak var appIntentsDataSource: (any UICollectionViewAppIntentsDataSource)? { get set }
```

<a id="discussion"></a>

## Discussion

For more information, refer to doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri and [App Intents](../../appintents.md).
