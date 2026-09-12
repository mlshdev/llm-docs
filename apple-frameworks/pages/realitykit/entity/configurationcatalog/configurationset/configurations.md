> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/configurationcatalog/configurationset/configurations](https://developer.apple.com/documentation/realitykit/entity/configurationcatalog/configurationset/configurations)

# configurations

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The alternative configurations that are available in a set.

## Declaration

```swift
var configurations: [String : Entity.ConfigurationCatalog.Configuration] { get }
```

<a id="discussion"></a>

## Discussion

The keys are configuration IDs, and the values are the corresponding configurations.

## See Also

### Accessing configurations in a configuration set

- [defaultConfiguration](defaultconfiguration.md): The default configuration, if you don’t explicitly set one.
