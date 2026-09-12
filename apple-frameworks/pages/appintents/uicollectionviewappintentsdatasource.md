> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/uicollectionviewappintentsdatasource](https://developer.apple.com/documentation/appintents/uicollectionviewappintentsdatasource)

# UICollectionViewAppIntentsDataSource

**Framework:** AppIntents  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · tvOS 18.4+ · visionOS 2.4+

The methods adopted by the object you use to make items in a collection view discoverable by Apple Intelligence and Siri.

## Declaration

```swift
@MainActor protocol UICollectionViewAppIntentsDataSource : AnyObject
```

<a id="overview"></a>

## Overview

For more information, refer to doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri and [App Intents](../appintents.md).

## Topics

### Instance Methods

- [collectionView(\_:appEntityIdentifierForItemAt:)](uicollectionviewappintentsdatasource/collectionview%28__appentityidentifierforitemat_%29.md): Asks the data source to return an app entity identifier for a cell at a particular location in the collection view.

## See Also

### Onscreen context

- [Providing contextual cues to Apple Intelligence and Siri](providing-contextual-cues-to-apple-intelligence-and-siri.md): Annotate your interface with app entities to offer contextual information about your app’s onscreen content.
- [App schema domains](app-schema-domains.md): Declare support for well-known actions and content by applying system-defined schemas to your app intents, app entities, and app enumerations.
- [UITableViewAppIntentsDataSource](uitableviewappintentsdatasource.md): The methods that an object adopts to make items in a table view discoverable by Apple Intelligence and Siri.
- [NSTableViewAppIntentsDataSource](nstableviewappintentsdatasource.md): The methods that an object adopts to make items in a table view or outline view discoverable by Apple Intelligence and Siri.
- [NSCollectionViewAppIntentsDataSource](nscollectionviewappintentsdatasource.md): The methods adopted by the object you use to make items in a collection view discoverable by Apple Intelligence and Siri.
