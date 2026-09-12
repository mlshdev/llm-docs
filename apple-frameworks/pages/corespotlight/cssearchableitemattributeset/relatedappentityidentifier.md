> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/relatedappentityidentifier](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/relatedappentityidentifier)

# relatedAppEntityIdentifier

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The identifier of the related indexed entity for this searchable item’s attribute set.

## Declaration

```swift
var relatedAppEntityIdentifier: EntityIdentifier? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to associate a child searchable item such as an attachment or embedded content with its parent `IndexedEntity` instance.

Only an identifier reference is stored. No entity content is embedded in the child item.

Setting this property again replaces the previously set identifier.
