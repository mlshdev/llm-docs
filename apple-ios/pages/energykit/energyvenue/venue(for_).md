> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/energyvenue/venue(for:)](https://developer.apple.com/documentation/energykit/energyvenue/venue(for:))

# venue(for:)

**Framework:** EnergyKit  
**Kind:** Type Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

Returns an electricity venue for the given venue identifier.

## Declaration

```swift
static func venue(for id: UUID) async throws -> EnergyVenue
```

## Parameters

- `id`: The requested venue’s identifier.

<a id="discussion"></a>

## Discussion

This method throws [EnergyKitError.venueUnavailable](../energykiterror/venueunavailable.md) if the framework can’t provide the requested venue.

## See Also

### Returning electricity sites

- [venue(matchingHomeUniqueIdentifier:)](venue%28matchinghomeuniqueidentifier_%29.md): Returns an energy venue for the given HomeKit identifier.
