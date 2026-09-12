> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/reserve(locale:)](https://developer.apple.com/documentation/speech/assetinventory/reserve(locale:))

# reserve(locale:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Add an asset locale to the app’s current reservations.

## Declaration

```swift
@discardableResult static func reserve(locale: Locale) async throws -> Bool
```

<a id="return-value"></a>

## Return Value

`false` if the locale was already reserved.

<a id="discussion"></a>

## Discussion

If an asset that supports the input locale exists, adds that asset’s locale to [reservedLocales](reservedlocales.md).

> **Throws**

> An error if the number of locales would exceed [maximumReservedLocales](maximumreservedlocales.md) or if there is no asset that can support the locale.

## See Also

### Managing allocations

- [release(reservedLocale:)](release%28reservedlocale_%29.md): Removes an asset locale reservation.
- [reservedLocales](reservedlocales.md): The app’s current asset locale reservations.
- [maximumReservedLocales](maximumreservedlocales.md): The number of locale reservations permitted to an app.
