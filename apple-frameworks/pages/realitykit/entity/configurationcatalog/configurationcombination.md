> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/configurationcombination](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/configurationcombination)

# Entity.ConfigurationCatalog.ConfigurationCombination

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A type that associates an entity with a combination of configurations.

## Declaration

```swift
struct ConfigurationCombination
```

## Topics

### Creating a configuration combination

- [init(entity:configurationSpecifications:)](configurationcombination/init%28entity_configurationspecifications_%29.md): Creates a configuration combination from an entity and a configuration dictionary.

### Accessing values

- [entity](configurationcombination/entity.md): The entity that represents the configuration choices.
- [configurationSpecifications](configurationcombination/configurationspecifications.md): A dictionary that associates IDs of configuration sets to IDs of configurations.

## See Also

### Defining configuration choices

- [Entity.ConfigurationCatalog.Configuration](configuration.md): A type that represents an alternative that you can choose.
- [Entity.ConfigurationCatalog.ConfigurationSet](configurationset.md): A collection of alternatives to choose from.
