> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/configurationset](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/configurationset)

# Entity.ConfigurationCatalog.ConfigurationSet

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A collection of alternatives to choose from.

## Declaration

```swift
struct ConfigurationSet
```

<a id="overview"></a>

## Overview

For example, a configuration set might contain configurations named `small`, `medium`, and `big` to represent a choice of sizes.

## Topics

### Creating a configuration set

- [init(id:configurations:defaultConfigurationId:)](configurationset/init%28id_configurations_defaultconfigurationid_%29-5erwz.md): Creates a configuration set from an ID, an array of configurations, and a default configuration ID.
- [init(id:configurations:defaultConfigurationId:)](configurationset/init%28id_configurations_defaultconfigurationid_%29-5erwz.md): Creates a configuration set from an ID, an array of configurations, and a default configuration ID.

### Accessing a configuration set’s name

- [id](configurationset/id.md): A name that identifies the configuration set.

### Accessing configurations in a configuration set

- [configurations](configurationset/configurations.md): The alternative configurations that are available in a set.
- [defaultConfiguration](configurationset/defaultconfiguration.md): The default configuration, if you don’t explicitly set one.

### Initializers

- [init(id:configurations:defaultConfigurationId:)](configurationset/init%28id_configurations_defaultconfigurationid_%29.md): Creates a configuration set from an ID, an array of configurations, and a default configuration ID.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining configuration choices

- [Entity.ConfigurationCatalog.Configuration](configuration.md): A type that represents an alternative that you can choose.
- [Entity.ConfigurationCatalog.ConfigurationCombination](configurationcombination.md): A type that associates an entity with a combination of configurations.
