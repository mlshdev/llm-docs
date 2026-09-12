> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/mapsintent/shareeta](https://developer.apple.com/documentation/appintents/appschema/mapsintent/shareeta)

# shareETA

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An intent schema that shares ETA to a contact while navigating.

## Declaration

```swift
var shareETA: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `maps` domain and one of your app’s actions matches the `shareETA` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .maps.shareETA)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `shareETA` schema:

```swift
@AppIntent(schema: .maps.shareETA)
struct MapsShareETAIntent {
    var person: IntentPerson

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [reportIncident](reportincident.md): An intent schema that reports a traffic incident on the route.
- [startNavigation](startnavigation.md): An intent schema that starts navigation.
- [stopNavigation](stopnavigation.md): An intent schema that ends navigation.
- [stopShareETA](stopshareeta.md): An intent schema that stops sharing ETA.
- [updateNavigationWaypoints](updatenavigationwaypoints.md): An intent schema that updates the list of waypoints for a navigation session.
- [AppSchema.MapsIntent](../mapsintent.md): Identifies intent schemas in the maps domain.
