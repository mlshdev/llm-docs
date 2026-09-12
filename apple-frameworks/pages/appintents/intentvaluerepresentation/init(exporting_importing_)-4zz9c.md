> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvaluerepresentation/init(exporting:importing:)-4zz9c](https://developer.apple.com/documentation/appintents/intentvaluerepresentation/init(exporting:importing:)-4zz9c)

# init(exporting:importing:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Creates a value representation that supports bidirectional conversion between an entity and a system intent value.

## Declaration

```swift
init(exporting: @escaping @Sendable (Item) async throws -> IntentValue, importing: @escaping @Sendable (IntentValue) async throws -> Item)
```

## Parameters

- `exporting`: A closure that converts an entity to a system intent value.
- `importing`: A closure that converts a system intent value back to an entity.

<a id="Example"></a>

## Example

```swift
struct LocationEntity: AppEntity, Transferable {
    static var transferRepresentation: some TransferRepresentation {
        IntentValueRepresentation(
            exporting: { entity in
                PlaceDescriptor(
                    representations: [
                        .coordinate(.init(
                            latitude: entity.latitude,
                            longitude: entity.longitude
                        ))
                    ],
                    commonName: entity.name
                )
            },
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
