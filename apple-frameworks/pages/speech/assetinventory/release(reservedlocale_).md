> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/release(reservedlocale:)](https://developer.apple.com/documentation/speech/assetinventory/release(reservedlocale:))

# release(reservedLocale:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Removes an asset locale reservation.

## Declaration

```swift
@discardableResult static func release(reservedLocale: Locale) async -> Bool
```

<a id="return-value"></a>

## Return Value

`false` if the locale was not reserved.

<a id="discussion"></a>

## Discussion

Unsubscribes from any assets that depended on the locale.

## See Also

### Managing allocations

- [reserve(locale:)](reserve%28locale_%29.md): Add an asset locale to the app’s current reservations.
- [reservedLocales](reservedlocales.md): The app’s current asset locale reservations.
- [maximumReservedLocales](maximumreservedlocales.md): The number of locale reservations permitted to an app.
