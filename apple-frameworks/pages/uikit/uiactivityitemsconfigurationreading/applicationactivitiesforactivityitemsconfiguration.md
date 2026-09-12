> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationreading/applicationactivitiesforactivityitemsconfiguration](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationreading/applicationactivitiesforactivityitemsconfiguration)

# applicationActivitiesForActivityItemsConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The application activities, if any, for the configuration.

## Declaration

```swift
optional var applicationActivitiesForActivityItemsConfiguration: [UIActivity]? { get }
```

## See Also

### Managing the Configuration

- [itemProvidersForActivityItemsConfiguration](itemprovidersforactivityitemsconfiguration.md): The item providers for the configuration.
- [activityItemsConfigurationMetadata(key:)](activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [activityItemsConfigurationMetadataForItem(at:key:)](activityitemsconfigurationmetadataforitem%28at_key_%29.md): Returns the configuration for a particular item for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

# applicationActivitiesForActivityItemsConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The application activities, if any, for the configuration.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<UIActivity *> * applicationActivitiesForActivityItemsConfiguration;
```

## See Also

### Managing the Configuration

- [itemProvidersForActivityItemsConfiguration](itemprovidersforactivityitemsconfiguration.md): The item providers for the configuration.
- [activityItemsConfigurationMetadataForKey:](activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [activityItemsConfigurationMetadataForItemAtIndex:key:](activityitemsconfigurationmetadataforitem%28at_key_%29.md): Returns the configuration for a particular item for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.
