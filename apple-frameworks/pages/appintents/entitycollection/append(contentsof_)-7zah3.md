> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitycollection/append(contentsof:)-7zah3](https://developer.apple.com/documentation/appintents/entitycollection/append(contentsof:)-7zah3)

# append(contentsOf:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds the identifiers for multiple entities to the collection.

## Declaration

```swift
mutating func append(contentsOf entities: [Entity])
```

<a id="discussion"></a>

## Discussion

- Parameter:

  - entities: An array of entities. This method adds the identifier for each entity to the collection.

This method adds the identifier for each entity to the collection, but doesn’t keep a reference to the actual entities.
