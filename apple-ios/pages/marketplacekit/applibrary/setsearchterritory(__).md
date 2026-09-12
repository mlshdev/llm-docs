> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/setsearchterritory(_:)](https://developer.apple.com/documentation/marketplacekit/applibrary/setsearchterritory(_:))

# setSearchTerritory(\_:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Defines a country code that iOS uses to filter the search results of apps that aren’t available in that country.

## Declaration

```swift
nonisolated final func setSearchTerritory(_ territory: String?) async
```

<a id="discussion"></a>

## Discussion

Set this property to an ISO 3166-1 alpha-2, two-letter country code. Any system-wide app search — such as through Lookup, Safari, or Spotlight — that a person starts after you set this, results in apps matching the criteria that are available in that country.

This property is optional and you choose how to derive the value. You can set this property using the country from a person’s billing address — which is how the App Store sets its search territory — or you can use some other source, for example, language settings.

The alternative marketplace associates an app it distributes with the countries in which it’s available by defining `countriesSupported` in the app catalog that Applebot crawls. For more information, see [Building a searchable catalog for your marketplace app for inclusion in Spotlight](https://developer.apple.com/documentation/appstoreconnectapi/building-a-searchable-catalog-for-your-marketplace-app-for-inclusion-in-spotlight).

## See Also

### Filtering app searches

- [searchTerritory](searchterritory.md): A country code that the framework uses to filter the search results of apps that aren’t available in that country.
