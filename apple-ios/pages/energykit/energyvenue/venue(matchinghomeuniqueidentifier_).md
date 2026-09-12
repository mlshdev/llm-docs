> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/energyvenue/venue(matchinghomeuniqueidentifier:)](https://developer.apple.com/documentation/energykit/energyvenue/venue(matchinghomeuniqueidentifier:))

# venue(matchingHomeUniqueIdentifier:)

**Framework:** EnergyKit  
**Kind:** Type Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

Returns an energy venue for the given HomeKit identifier.

## Declaration

```swift
static func venue(matchingHomeUniqueIdentifier: UUID) async throws -> EnergyVenue
```

## Parameters

- `matchingHomeUniqueIdentifier`: A HomeKit identifier for the requested venue.

<a id="discussion"></a>

## Discussion

This method throws [EnergyKitError.venueUnavailable](../energykiterror/venueunavailable.md) if the framework can’t provide the requested venue.

## See Also

### Returning electricity sites

- [venue(for:)](venue%28for_%29.md): Returns an electricity venue for the given venue identifier.
