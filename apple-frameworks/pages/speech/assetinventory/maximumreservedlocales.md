> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/maximumreservedlocales](https://developer.apple.com/documentation/speech/assetinventory/maximumreservedlocales)

# maximumReservedLocales

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The number of locale reservations permitted to an app.

## Declaration

```swift
static var maximumReservedLocales: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is the largest allowed count of [reservedLocales](reservedlocales.md). The value may vary between devices according to storage space.

## See Also

### Managing allocations

- [reserve(locale:)](reserve%28locale_%29.md): Add an asset locale to the app’s current reservations.
- [release(reservedLocale:)](release%28reservedlocale_%29.md): Removes an asset locale reservation.
- [reservedLocales](reservedlocales.md): The app’s current asset locale reservations.
