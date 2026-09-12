> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/reservedlocales](https://developer.apple.com/documentation/speech/assetinventory/reservedlocales)

# reservedLocales

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The app’s current asset locale reservations.

## Declaration

```swift
static var reservedLocales: [Locale] { get async }
```

<a id="discussion"></a>

## Discussion

Before you can subscribe to assets supporting a module, you must reserve those assets’ locales. Please note, the locales returned by this method may be variants of the locales provided to [reserve(locale:)](reserve%28locale_%29.md).

## See Also

### Managing allocations

- [reserve(locale:)](reserve%28locale_%29.md): Add an asset locale to the app’s current reservations.
- [release(reservedLocale:)](release%28reservedlocale_%29.md): Removes an asset locale reservation.
- [maximumReservedLocales](maximumreservedlocales.md): The number of locale reservations permitted to an app.
