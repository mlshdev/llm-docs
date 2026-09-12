> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/init(configurationsets:combinations:)](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/init(configurationsets:combinations:))

# init(configurationSets:combinations:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a configuration catalog from in-memory entities and an array of configuration sets.

## Declaration

```swift
init(configurationSets: [Entity.ConfigurationCatalog.ConfigurationSet], combinations: [Entity.ConfigurationCatalog.ConfigurationCombination]) throws
```

## Parameters

- `configurationSets`: The configuration choices that the configuration catalog presents. Each configuration set needs to have a unique ID from all others. The configuration catalog stores the array as the `configurationSets` dictionary property and doesn’t preserve its order.
- `combinations`: The combinations of in-memory entities and the configurations that can address them. The keys you use in [configurationSpecifications](configurationcombination/configurationspecifications.md) need to match IDs of configuration sets from the `configurationSets` argument. The values you use in [configurationSpecifications](configurationcombination/configurationspecifications.md) need to match IDs of configurations from the `configurationSets` argument. There needs to be one [Entity.ConfigurationCatalog.ConfigurationCombination](configurationcombination.md) for each possible combination of configurations.

<a id="return-value"></a>

## Return Value

A configuration catalog that maintains the provided entities in memory.
