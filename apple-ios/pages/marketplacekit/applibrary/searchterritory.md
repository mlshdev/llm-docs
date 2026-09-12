> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/searchterritory](https://developer.apple.com/documentation/marketplacekit/applibrary/searchterritory)

# searchTerritory

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A country code that the framework uses to filter the search results of apps that aren’t available in that country.

## Declaration

```swift
nonisolated final var searchTerritory: String? { get async }
```

<a id="discussion"></a>

## Discussion

This property is an optional two-letter country code in the ISO 3166-1 alpha-2 standard that the alternative marketplace sets. For more information, see [setSearchTerritory(\_:)](setsearchterritory%28__%29.md).

## See Also

### Filtering app searches

- [setSearchTerritory(\_:)](setsearchterritory%28__%29.md): Defines a country code that iOS uses to filter the search results of apps that aren’t available in that country.
