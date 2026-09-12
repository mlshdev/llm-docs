> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitycollection/init(entities:)](https://developer.apple.com/documentation/appintents/entitycollection/init(entities:))

# init(entities:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new entity identifier collection from entities.

## Declaration

```swift
init(entities: [Entity])
```

## Parameters

- `entities`: The entities to add to the collection.

<a id="discussion"></a>

## Discussion

This initializer adds the identifier for each entity to the collection and caches the entity instances for fast retrieval later.
