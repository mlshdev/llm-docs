> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/energyvenue](https://developer.apple.com/documentation/energykit/energyvenue)

# EnergyVenue

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A physical site that uses or produces electricity at that location.

## Declaration

```swift
struct EnergyVenue
```

## Topics

### Returning electricity sites

- [venue(for:)](energyvenue/venue%28for_%29.md): Returns an electricity venue for the given venue identifier.
- [venue(matchingHomeUniqueIdentifier:)](energyvenue/venue%28matchinghomeuniqueidentifier_%29.md): Returns an energy venue for the given HomeKit identifier.

### Submitting load events

- [submitEvents(\_:)](energyvenue/submitevents%28__%29.md): Submits electrical load events to be used by EnergyKit to generate energy insights.

### Identifying the location

- [id](energyvenue/id.md): A unique identifier for the venue.
- [name](energyvenue/name.md): The name of the Home to which the venue corresponds.

### Type Methods

- [venues()](energyvenue/venues%28%29.md): Returns a list of electricity venues.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
