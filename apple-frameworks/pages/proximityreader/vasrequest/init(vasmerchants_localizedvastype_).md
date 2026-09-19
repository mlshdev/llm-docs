> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/vasrequest/init(vasmerchants:localizedvastype:)

# init(vasMerchants:localizedVASType:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

Creates a request to read loyalty card service information.

## Declaration

```swift
init(vasMerchants: [VASRequest.Merchant] = [], localizedVASType: String = "")
```

## Parameters

- `vasMerchants`: The merchants associated with the requested loyalty program.
- `localizedVASType`: The localized name of the loyalty program.
