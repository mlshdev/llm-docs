> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/configurationsets](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/configurationsets)

# configurationSets

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The configuration sets that configure the default prim or entity.

## Declaration

```swift
var configurationSets: [String : Entity.ConfigurationCatalog.ConfigurationSet] { get }
```

<a id="discussion"></a>

## Discussion

The keys are configuration set IDs, and the values are the corresponding configuration sets.
