> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/associateappentity(_:priority:)-736lx](https://developer.apple.com/documentation/corespotlight/cssearchableitem/associateappentity(_:priority:)-736lx)

# associateAppEntity(\_:priority:)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Associates an app entity with this searchable item.

## Declaration

```swift
func associateAppEntity(_ appEntity: some IndexedEntity, priority: Int = 0)
```

## Parameters

- `appEntity`: The app entity that will be associated with this searchable item.
- `priority`: The importance of this item compared to the other donated items.

## See Also

### Associating an entity with an item

- [associateAppEntity(\_:priority:)](associateappentity%28__priority_%29-6h7ym.md): Associates an app entity with this searchable item. Resolves deferred properties before association.
- [relatedAppEntityIdentifier](relatedappentityidentifier.md): The identifier of the related indexed entity for this searchable item.
