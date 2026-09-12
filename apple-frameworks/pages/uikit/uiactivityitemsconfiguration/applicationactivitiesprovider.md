> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfiguration/applicationactivitiesprovider](https://developer.apple.com/documentation/uikit/uiactivityitemsconfiguration/applicationactivitiesprovider)

# applicationActivitiesProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides application acitivites for the activity items.

## Declaration

```swift
var applicationActivitiesProvider: (() -> [UIActivity])? { get set }
```

## See Also

### Managing the configuration

- [localObject](localobject.md): A local object that represents the configuration.
- [metadataProvider](metadataprovider.md): A closure that provides metadata for the activity items.
- [perItemMetadataProvider](peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

# applicationActivitiesProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides application acitivites for the activity items.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<UIActivity *> * (^applicationActivitiesProvider)();
```

## See Also

### Managing the configuration

- [localObject](localobject.md): A local object that represents the configuration.
- [metadataProvider](metadataprovider.md): A closure that provides metadata for the activity items.
- [perItemMetadataProvider](peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.
