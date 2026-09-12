> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/associateappentity(_:priority:)-6h7ym](https://developer.apple.com/documentation/corespotlight/cssearchableitem/associateappentity(_:priority:)-6h7ym)

# associateAppEntity(\_:priority:)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Associates an app entity with this searchable item. Resolves deferred properties before association.

## Declaration

```swift
func associateAppEntity(_ appEntity: some IndexedEntity, priority: Int = 0) async
```

## Parameters

- `appEntity`: The app entity that will be associated with this searchable item.
- `priority`: The importance of this item compared to the other donated items.

## See Also

### Associating an entity with an item

- [associateAppEntity(\_:priority:)](associateappentity%28__priority_%29-736lx.md): Associates an app entity with this searchable item.
- [relatedAppEntityIdentifier](relatedappentityidentifier.md): The identifier of the related indexed entity for this searchable item.
