> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/nstableviewappintentsdatasource](https://developer.apple.com/documentation/appintents/nstableviewappintentsdatasource)

# NSTableViewAppIntentsDataSource

**Framework:** AppIntents  
**Kind:** Protocol  
**Availability:** macOS 15.4+

The methods that an object adopts to make items in a table view or outline view discoverable by Apple Intelligence and Siri.

## Declaration

```swift
@MainActor protocol NSTableViewAppIntentsDataSource : AnyObject
```

## Topics

### Instance Methods

- [outlineView(\_:appEntityIdentifierFor:)](nstableviewappintentsdatasource/outlineview%28__appentityidentifierfor_%29.md): Asks the data source to return an app entity identifier for a particular item in the outline view.
- [tableView(\_:appEntityIdentifierFor:)](nstableviewappintentsdatasource/tableview%28__appentityidentifierfor_%29.md): Asks the data source to return an app entity identifier for a particular row in the table view.

## See Also

### Onscreen context

- [Providing contextual cues to Apple Intelligence and Siri](providing-contextual-cues-to-apple-intelligence-and-siri.md): Annotate your interface with app entities to offer contextual information about your app’s onscreen content.
- [App schema domains](app-schema-domains.md): Declare support for well-known actions and content by applying system-defined schemas to your app intents, app entities, and app enumerations.
- [UITableViewAppIntentsDataSource](uitableviewappintentsdatasource.md): The methods that an object adopts to make items in a table view discoverable by Apple Intelligence and Siri.
- [UICollectionViewAppIntentsDataSource](uicollectionviewappintentsdatasource.md): The methods adopted by the object you use to make items in a collection view discoverable by Apple Intelligence and Siri.
- [NSCollectionViewAppIntentsDataSource](nscollectionviewappintentsdatasource.md): The methods adopted by the object you use to make items in a collection view discoverable by Apple Intelligence and Siri.
