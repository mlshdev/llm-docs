> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/mapsentity/currentlocation](https://developer.apple.com/documentation/appintents/appschema/mapsentity/currentlocation)

# currentLocation

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An entity schema for a current location.

## Declaration

```swift
var currentLocation: some AppSchemaEntity { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s content available to Apple Intelligence, conform your [AppEntity](../../appentity.md) to a schema that describes your content to the system. If your app’s functionality aligns with the `maps` domain and its content matches the `currentLocation` schema, you can generate the properties and protocol conformance the schema requires for your app entity implementation with the `@AppEntity( .maps.currentLocation)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app entity that conforms to the `currentLocation` schema:

```swift
@AppEntity(schema: .maps.currentLocation)
struct MapsCurrentLocationEntity {
    // MARK: Static

    static let defaultQuery = MapsCurrentLocationEntityQuery()

    // MARK: Properties

    let id: <#Identifiable.ID#>

    var displayRepresentation: DisplayRepresentation {
        <#DisplayRepresentation#>
    }

    // MARK: Query

    struct MapsCurrentLocationEntityQuery: EntityQuery {
        func entities(for identifiers: [MapsCurrentLocationEntity.ID]) async throws -> [MapsCurrentLocationEntity] {
            <#code#>
        }
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Content and parameter types

- [navigationSession](navigationsession.md): An entity schema for a navigation session.
- [operatingHours](operatinghours.md): An entity schema for an operating hours.
- [operatingTimeRange](operatingtimerange.md): An entity schema for an operating time range.
- [place](place.md): An entity schema for a place.
- [rating](rating.md): An entity schema for a rating.
- [AppSchema.MapsEntity](../mapsentity.md): Identifies entity schemas in the maps domain.
