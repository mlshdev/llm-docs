> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationreading/activityitemsconfigurationmetadataforitem(at:key:)](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationreading/activityitemsconfigurationmetadataforitem(at:key:))

# activityItemsConfigurationMetadataForItem(at:key:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the configuration for a particular item for the specified metadata key.

## Declaration

```swift
optional func activityItemsConfigurationMetadataForItem(at index: Int, key: UIActivityItemsConfigurationMetadataKey) -> Any?
```

## See Also

### Managing the Configuration

- [itemProvidersForActivityItemsConfiguration](itemprovidersforactivityitemsconfiguration.md): The item providers for the configuration.
- [applicationActivitiesForActivityItemsConfiguration](applicationactivitiesforactivityitemsconfiguration.md): The application activities, if any, for the configuration.
- [activityItemsConfigurationMetadata(key:)](activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

# activityItemsConfigurationMetadataForItemAtIndex:key: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the configuration for a particular item for the specified metadata key.

## Declaration

```objectivec
- (id) activityItemsConfigurationMetadataForItemAtIndex:(NSInteger) index key:(UIActivityItemsConfigurationMetadataKey) key;
```

## See Also

### Managing the Configuration

- [itemProvidersForActivityItemsConfiguration](itemprovidersforactivityitemsconfiguration.md): The item providers for the configuration.
- [applicationActivitiesForActivityItemsConfiguration](applicationactivitiesforactivityitemsconfiguration.md): The application activities, if any, for the configuration.
- [activityItemsConfigurationMetadataForKey:](activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](../uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.
