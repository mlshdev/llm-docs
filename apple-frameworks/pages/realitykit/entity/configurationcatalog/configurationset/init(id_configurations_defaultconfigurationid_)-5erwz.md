> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/configurationset/init(id:configurations:defaultconfigurationid:)-5erwz](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/configurationset/init(id:configurations:defaultconfigurationid:)-5erwz)

# init(id:configurations:defaultConfigurationId:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a configuration set from an ID, an array of configurations, and a default configuration ID.

## Declaration

```swift
init(id: String, configurations: [Entity.ConfigurationCatalog.Configuration], defaultConfigurationId: String? = nil) throws
```

## Parameters

- `id`: The ID of the configuration set that’s unique across all other configuration sets.
- `configurations`: An array of configurations you can choose from. The configuration set stores the array in the [configurations](configurations.md) property and doesn’t preserve the order of the array.
- `defaultConfigurationId`: The ID of one of the configuration elements in the `configurations` parameter, which is the default configuration the entity initializer applies if you don’t choose a configuration from the set.

<a id="return-value"></a>

## Return Value

A configuration set containing the configurations.
