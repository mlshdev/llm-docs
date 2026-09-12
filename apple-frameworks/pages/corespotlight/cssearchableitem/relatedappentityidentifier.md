> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/relatedappentityidentifier](https://developer.apple.com/documentation/corespotlight/cssearchableitem/relatedappentityidentifier)

# relatedAppEntityIdentifier

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The identifier of the related indexed entity for this searchable item.

## Declaration

```swift
var relatedAppEntityIdentifier: EntityIdentifier? { get set }
```

<a id="discussion"></a>

## Discussion

Convenience property that forwards to the item’s attribute set. Use this property to associate a child searchable item such as an attachment or embedded content with its parent `IndexedEntity` instance.

Only an identifier reference is stored. No entity content is embedded in the child item.

Setting this property again replaces the previously set identifier.

## See Also

### Associating an entity with an item

- [associateAppEntity(\_:priority:)](associateappentity%28__priority_%29-6h7ym.md): Associates an app entity with this searchable item. Resolves deferred properties before association.
- [associateAppEntity(\_:priority:)](associateappentity%28__priority_%29-736lx.md): Associates an app entity with this searchable item.
