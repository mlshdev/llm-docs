> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/corespotlightsource/searchableindexdelegate](https://developer.apple.com/documentation/corespotlight/corespotlightsource/searchableindexdelegate)

# searchableIndexDelegate

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An optional delegate object you use to provide additional data about items in search results.

## Declaration

```swift
var searchableIndexDelegate: (any CSSearchableIndexDelegate)?
```

<a id="discussion"></a>

## Discussion

Use this delegate object to provide detailed information about your searchable items to the model. Some information in the Spotlight index is searchable, but not recoverable. For example, Spotlight can’t recover the original text or HTML content you supply for an item. When it needs this information, the search tool asks your delegate to provide a new [CSSearchableItem](../cssearchableitem.md) object with the same content as the original one.

If you configure the Spotlight search tool to use the [SpotlightSearchTool.GuidanceLevel.dynamic(\_:)](../spotlightsearchtool/guidancelevel/dynamic%28__%29.md) guidance level, you can also use this delegate to fill in any missing attributes. Dynamic profiles cause the tool to search specific attributes of each item. If those attributes aren’t available in the index, the tool uses your delegate to recreate the item.

If you don’t provide a delegate object, the tool uses only the information it retrieves from the source.

## See Also

### Providing additional attributes

- [CSSearchableIndexDelegate](../cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.
