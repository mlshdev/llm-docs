> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfiguration/peritemmetadataprovider](https://developer.apple.com/documentation/uikit/uiactivityitemsconfiguration/peritemmetadataprovider)

# perItemMetadataProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides metadata for each activity item.

## Declaration

```swift
var perItemMetadataProvider: ((Int, UIActivityItemsConfigurationMetadataKey) -> Any?)? { get set }
```

## Mentioned In

- [Collaborating and sharing copies of your data](../collaborating-and-sharing-copies-of-your-data.md)

## See Also

### Managing the configuration

- [localObject](localobject.md): A local object that represents the configuration.
- [metadataProvider](metadataprovider.md): A closure that provides metadata for the activity items.
- [applicationActivitiesProvider](applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

# perItemMetadataProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A closure that provides metadata for each activity item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id (^perItemMetadataProvider)(NSInteger index, UIActivityItemsConfigurationMetadataKey key);
```

## Mentioned In

- [Collaborating and sharing copies of your data](../collaborating-and-sharing-copies-of-your-data.md)

## See Also

### Managing the configuration

- [localObject](localobject.md): A local object that represents the configuration.
- [metadataProvider](metadataprovider.md): A closure that provides metadata for the activity items.
- [applicationActivitiesProvider](applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.
