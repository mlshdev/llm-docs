> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/init(appentity:priority:)-7xlow](https://developer.apple.com/documentation/corespotlight/cssearchableitem/init(appentity:priority:)-7xlow)

# init(appEntity:priority:)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.

## Declaration

```swift
convenience init<Entity>(appEntity: Entity, priority: Int) async where Entity : IndexedEntity
```

## Parameters

- `appEntity`: The app entity to use for initialization.
- `priority`: The importance of this item compared to the other donated items.

## See Also

### Getting a searchable item

- [init(uniqueIdentifier:domainIdentifier:attributeSet:)](init%28uniqueidentifier_domainidentifier_attributeset_%29.md): Returns a searchable item associated with the specified identifier, domain identifier, and attribute set.
- [init(appEntity:)](init%28appentity_%29-3hv5.md): Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.
- [init(appEntity:)](init%28appentity_%29-89ehq.md): Initializes a new searchable item with the relevant fields populated from the provided app entity.
- [init(appEntity:priority:)](init%28appentity_priority_%29-7h9s.md): Initializes a new searchable item with the relevant fields populated from the provided app entity.
- [init(coder:)](init%28coder_%29.md)
