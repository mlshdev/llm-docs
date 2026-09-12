> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modeldocument](https://developer.apple.com/documentation/swiftdata/modeldocument)

# ModelDocument

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A document type that uses SwiftData to manage its storage.

## Declaration

```swift
struct ModelDocument
```

<a id="overview"></a>

## Overview

> **Important**

> Don’t create instances of this type. Instead, use one of the initializers on [DocumentGroup](https://developer.apple.com/documentation/swiftui/documentgroup).

## See Also

### Model storage

- [Maintaining a local copy of server data](maintaining-a-local-copy-of-server-data.md): Create and update a persistent store to cache read-only network data.
- [DefaultStore](defaultstore.md): A data store that uses Core Data as its undelying storage mechanism.
- [DataStore](datastore.md): An interface that enables SwiftData to read and write model data without knowledge of the underlying storage mechanism.
- [DataStoreBatching](datastorebatching.md): An interface that enables a custom data store to support batch requests.
- [HistoryProviding](historyproviding.md): An interface that enables a custom data store to provide the history of changes for its persisted models.
- [Building a document-based app using SwiftData](https://developer.apple.com/documentation/swiftui/building-a-document-based-app-using-swiftdata): Code along with the WWDC presenter to transform an app with SwiftData.
