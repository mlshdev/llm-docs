> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfiguration/metadataprovider](https://developer.apple.com/documentation/uikit/uiactivityitemsconfiguration/metadataprovider)

# metadataProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides metadata for the activity items.

## Declaration

```swift
var metadataProvider: ((UIActivityItemsConfigurationMetadataKey) -> Any?)? { get set }
```

## See Also

### Managing the configuration

- [localObject](localobject.md): A local object that represents the configuration.
- [perItemMetadataProvider](peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [applicationActivitiesProvider](applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

# metadataProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides metadata for the activity items.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id (^metadataProvider)(UIActivityItemsConfigurationMetadataKey key);
```

## See Also

### Managing the configuration

- [localObject](localobject.md): A local object that represents the configuration.
- [perItemMetadataProvider](peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [applicationActivitiesProvider](applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.
