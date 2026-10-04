> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentvaluerepresentation/init(importing:)-7cl3z

# init(importing:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Creates a value representation that imports a system intent value into an entity.

## Declaration

```swift
init(importing: @escaping @Sendable (IntentValue) async throws -> Item)
```

## Parameters

- `importing`: A closure that converts a system intent value to an entity.

<a id="discussion"></a>

## Discussion

Use this initializer when your entity can be created from a system type, but has no meaningful representation to export back out. The entity’s metadata declares the system type as importable only, and the entity is never offered for export as that type.

<a id="Example"></a>

## Example

```swift
struct LocationEntity: AppEntity, Transferable {
    static var transferRepresentation: some TransferRepresentation {
        IntentValueRepresentation(
            importing: { place in
                guard let coordinate = place.coordinate else {
                    throw ImportError.missingCoordinate
                }
                return LocationEntity(
                    name: place.commonName ?? "Unknown Location",
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude
                )
            }
        )
    }
}
```
