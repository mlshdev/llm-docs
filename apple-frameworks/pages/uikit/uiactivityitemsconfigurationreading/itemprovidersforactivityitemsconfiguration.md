> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationreading/itemprovidersforactivityitemsconfiguration](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationreading/itemprovidersforactivityitemsconfiguration)

# itemProvidersForActivityItemsConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The item providers for the configuration.

## Declaration

```swift
var itemProvidersForActivityItemsConfiguration: [NSItemProvider] { get }
```

## See Also

### Managing the Configuration

- [applicationActivitiesForActivityItemsConfiguration](applicationactivitiesforactivityitemsconfiguration.md): The application activities, if any, for the configuration.
- [activityItemsConfigurationMetadata(key:)](activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [activityItemsConfigurationMetadataForItem(at:key:)](activityitemsconfigurationmetadataforitem%28at_key_%29.md): Returns the configuration for a particular item for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

# itemProvidersForActivityItemsConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The item providers for the configuration.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSItemProvider *> * itemProvidersForActivityItemsConfiguration;
```

## See Also

### Managing the Configuration

- [applicationActivitiesForActivityItemsConfiguration](applicationactivitiesforactivityitemsconfiguration.md): The application activities, if any, for the configuration.
- [activityItemsConfigurationMetadataForKey:](activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [activityItemsConfigurationMetadataForItemAtIndex:key:](activityitemsconfigurationmetadataforitem%28at_key_%29.md): Returns the configuration for a particular item for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.
