> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/geolocationpush/init(latitude:longitude:description:)

# init(latitude:longitude:description:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates a geolocation push content instance with the given latitude and longitude.

## Declaration

```swift
init(latitude: Double, longitude: Double, description: String? = nil)
```

## Parameters

- `latitude`: The location’s latitude, as a double-precision value.
- `longitude`: The location’s longitude, as a double-precision value.
- `description`: A textual description of the location.
