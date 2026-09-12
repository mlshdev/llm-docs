> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitycollection/resolvedentities()](https://developer.apple.com/documentation/appintents/entitycollection/resolvedentities())

# resolvedEntities()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Retrieves and returns the entity instances for each identifier in the collection.

## Declaration

```swift
func resolvedEntities() async throws -> [Entity]
```

<a id="return-value"></a>

## Return Value

An array of resolved entities.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the entities cannot be resolved.

Use this method to retrieve the [AppEntity](../appentity.md) instances for each identifier in the collection. You might use this method in your [perform()](../appintent/perform%28%29.md) method when you need additional data from each entity. If the collection already has a cached set of entity instances, the method returns them. If there are no cached values, the method uses entity queries to request them from your app.
