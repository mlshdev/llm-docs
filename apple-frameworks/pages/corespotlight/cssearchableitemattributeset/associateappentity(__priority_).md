> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/associateappentity(_:priority:)](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/associateappentity(_:priority:))

# associateAppEntity(\_:priority:)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Associates the specified app entity with this attribute set.

## Declaration

```swift
func associateAppEntity<Entity>(_ appEntity: Entity, priority: Int = 0) where Entity : IndexedEntity
```

## Parameters

- `appEntity`: The entity to associate with the attributes. Choose the entity with the same data as the [CSSearchableItem](../cssearchableitem.md) that you’re creating.
- `priority`: The importance of this item compared to other donated items. Give more important items a higher priority value. The App Intents system uses priorities to determine what items to show in suggestions and other places.

<a id="discussion"></a>

## Discussion

If your app has an [AppEntity](../../appintents/appentity.md) object that equates to the [CSSearchableItem](../cssearchableitem.md) you’re creating, use this method to connect the two objects. When your searchable item appears in search results, Spotlight can use the provided entity to perform related actions. For example, it can ask your app to open the entity and display its content.

For additional information about the relationship between searchable items and entities, see [Making app entities available in Spotlight](../../appintents/making-app-entities-available-in-spotlight.md).
