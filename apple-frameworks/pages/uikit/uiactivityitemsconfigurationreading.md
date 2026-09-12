> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationreading](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationreading)

# UIActivityItemsConfigurationReading (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of methods adopted by an object so that the object can act as an activity items configuration.

## Declaration

```swift
@MainActor protocol UIActivityItemsConfigurationReading : NSObjectProtocol
```

## Topics

### Managing the Configuration

- [itemProvidersForActivityItemsConfiguration](uiactivityitemsconfigurationreading/itemprovidersforactivityitemsconfiguration.md): The item providers for the configuration.
- [applicationActivitiesForActivityItemsConfiguration](uiactivityitemsconfigurationreading/applicationactivitiesforactivityitemsconfiguration.md): The application activities, if any, for the configuration.
- [activityItemsConfigurationMetadata(key:)](uiactivityitemsconfigurationreading/activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [activityItemsConfigurationMetadataForItem(at:key:)](uiactivityitemsconfigurationreading/activityitemsconfigurationmetadataforitem%28at_key_%29.md): Returns the configuration for a particular item for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

### Managing Supported Interactions

- [activityItemsConfigurationSupports(interaction:)](uiactivityitemsconfigurationreading/activityitemsconfigurationsupports%28interaction_%29.md): Returns a Boolean value that indicates whether the activity items configuration supports the specified type of interaction.
- [UIActivityItemsConfigurationInteraction](uiactivityitemsconfigurationinteraction.md): A structure that describes types of interactions.

### Managing Previews

- [activityItemsConfigurationPreviewForItem(at:intent:suggestedSize:)](uiactivityitemsconfigurationreading/activityitemsconfigurationpreviewforitem%28at_intent_suggestedsize_%29.md): Returns an activity items configuration preview for the specified item and preview size.
- [UIActivityItemsConfigurationPreviewIntent](uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIActivityItemsConfiguration](uiactivityitemsconfiguration.md)

## See Also

### Initializing the activity view controller

- [init(activityItems:applicationActivities:)](uiactivityviewcontroller/init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [init(activityItemsConfiguration:)](uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfiguration](uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.

# UIActivityItemsConfigurationReading (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of methods adopted by an object so that the object can act as an activity items configuration.

## Declaration

```objectivec
@protocol UIActivityItemsConfigurationReading <NSObject>
```

## Topics

### Managing the Configuration

- [itemProvidersForActivityItemsConfiguration](uiactivityitemsconfigurationreading/itemprovidersforactivityitemsconfiguration.md): The item providers for the configuration.
- [applicationActivitiesForActivityItemsConfiguration](uiactivityitemsconfigurationreading/applicationactivitiesforactivityitemsconfiguration.md): The application activities, if any, for the configuration.
- [activityItemsConfigurationMetadataForKey:](uiactivityitemsconfigurationreading/activityitemsconfigurationmetadata%28key_%29.md): Returns the configuration for the specified metadata key.
- [activityItemsConfigurationMetadataForItemAtIndex:key:](uiactivityitemsconfigurationreading/activityitemsconfigurationmetadataforitem%28at_key_%29.md): Returns the configuration for a particular item for the specified metadata key.
- [UIActivityItemsConfigurationMetadataKey](uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

### Managing Supported Interactions

- [activityItemsConfigurationSupportsInteraction:](uiactivityitemsconfigurationreading/activityitemsconfigurationsupports%28interaction_%29.md): Returns a Boolean value that indicates whether the activity items configuration supports the specified type of interaction.
- [UIActivityItemsConfigurationInteraction](uiactivityitemsconfigurationinteraction.md): A structure that describes types of interactions.

### Managing Previews

- [activityItemsConfigurationPreviewForItemAtIndex:intent:suggestedSize:](uiactivityitemsconfigurationreading/activityitemsconfigurationpreviewforitem%28at_intent_suggestedsize_%29.md): Returns an activity items configuration preview for the specified item and preview size.
- [UIActivityItemsConfigurationPreviewIntent](uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIActivityItemsConfiguration](uiactivityitemsconfiguration.md)

## See Also

### Initializing the activity view controller

- [initWithActivityItems:applicationActivities:](uiactivityviewcontroller/init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [initWithActivityItemsConfiguration:](uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfiguration](uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.
