> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/configurationcombination/init(entity:configurationspecifications:)](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/configurationcombination/init(entity:configurationspecifications:))

# init(entity:configurationSpecifications:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a configuration combination from an entity and a configuration dictionary.

## Declaration

```swift
init(entity: Entity, configurationSpecifications: [String : String])
```

## Parameters

- `entity`: An entity that represents the configuration choices in `configurationSpecifications`.
- `configurationSpecifications`: A dictionary that associates a configuration set name with a choice from that set.
