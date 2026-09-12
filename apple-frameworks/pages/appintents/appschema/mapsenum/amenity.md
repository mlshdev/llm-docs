> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/mapsenum/amenity](https://developer.apple.com/documentation/appintents/appschema/mapsenum/amenity)

# amenity

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An enum schema for an amenity parameter.

## Declaration

```swift
var amenity: some AppSchemaEnum { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s parameter types available to Apple Intelligence, conform your [AppEnum](../../appenum.md) to a schema that describes a parameter’s possible values to the system. If your app’s functionality aligns with the `maps` domain and a parameter type matches the `amenity` schema, you can generate the protocol conformance the schema requires for your app enum implementation with the `@AppEnum( .maps.amenity)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an app enum that conforms to the `amenity` schema:

```swift
@AppEnum(schema: .maps.amenity)
enum MapsAmenityTypeEnum: String {
    case <#MapsAmenityTypeEnum Case#>

    static let caseDisplayRepresentations: [Self: DisplayRepresentation] = [
        <#DisplayRepresentations#>
    ]
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Types for static parameters

- [incident](incident.md): An enum schema for an incident parameter.
- [navigationPreferences](navigationpreferences.md): An enum schema for a navigation preferences parameter.
- [operatingStatus](operatingstatus.md): An enum schema for an operating status parameter.
- [priceRange](pricerange.md): An enum schema for a price range parameter.
- [ratingDescriptor](ratingdescriptor.md): An enum schema for a rating descriptor parameter.
- [transportType](transporttype.md): An enum schema for a transport type parameter.
- [AppSchema.MapsEnum](../mapsenum.md): Identifies enum schemas in the maps domain.
