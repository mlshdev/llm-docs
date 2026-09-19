> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/vasrequest/merchant/init(id:url:localizedname:)

# init(id:url:localizedName:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

Creates a new merchant object with the specified information.

## Declaration

```swift
init(id: String, url: URL? = nil, localizedName: String? = nil)
```

## Parameters

- `id`: The merchant’s unique identifier. Obtain this value from the merchant.
- `url`: The URL to display if the customer doesn’t belong to the merchant’s loyalty program.
- `localizedName`: The name of the merchant, localized for the current device.
