> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfiguration](https://developer.apple.com/documentation/uikit/uiactivityitemsconfiguration)

# UIActivityItemsConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A configuration that allows a responder to export data through a variety of interactions.

## Declaration

```swift
@MainActor class UIActivityItemsConfiguration
```

## Mentioned In

- [Collaborating and sharing copies of your data](collaborating-and-sharing-copies-of-your-data.md)

## Topics

### Creating an activity items configuration

- [init(objects:)](uiactivityitemsconfiguration/init%28objects_%29.md): Initializes and returns an activity items configuration with the specified objects.
- [init(itemProviders:)](uiactivityitemsconfiguration/init%28itemproviders_%29.md): Initializes and returns an activity items configuration with the specified item providers.

### Managing the configuration

- [localObject](uiactivityitemsconfiguration/localobject.md): A local object that represents the configuration.
- [metadataProvider](uiactivityitemsconfiguration/metadataprovider.md): A closure that provides metadata for the activity items.
- [perItemMetadataProvider](uiactivityitemsconfiguration/peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [applicationActivitiesProvider](uiactivityitemsconfiguration/applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.
- [UIActivityItemsConfigurationMetadataKey](uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

### Managing supported interactions

- [supportedInteractions](uiactivityitemsconfiguration/supportedinteractions.md): The types of interactions that the configuration supports.
- [UIActivityItemsConfigurationInteraction](uiactivityitemsconfigurationinteraction.md): A structure that describes types of interactions.

### Managing previews

- [previewProvider](uiactivityitemsconfiguration/previewprovider.md): A closure that provides previews for the activity items.
- [UIActivityItemsConfigurationPreviewIntent](uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.

### Restricting the sharing mode

- [UIActivityViewController.CollaborationModeRestriction](uiactivityviewcontroller/collaborationmoderestriction.md): An object that disables the sharing mode and optionally displays an alert.
- [UIActivityCollaborationMode](uiactivitycollaborationmode.md): A value that defines how the system shares an item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIActivityItemsConfigurationReading](uiactivityitemsconfigurationreading.md)

## See Also

### Initializing the activity view controller

- [init(activityItems:applicationActivities:)](uiactivityviewcontroller/init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [init(activityItemsConfiguration:)](uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfigurationReading](uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.

# UIActivityItemsConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A configuration that allows a responder to export data through a variety of interactions.

## Declaration

```objectivec
@interface UIActivityItemsConfiguration : NSObject
```

## Mentioned In

- [Collaborating and sharing copies of your data](collaborating-and-sharing-copies-of-your-data.md)

## Topics

### Creating an activity items configuration

- [initWithObjects:](uiactivityitemsconfiguration/init%28objects_%29.md): Initializes and returns an activity items configuration with the specified objects.
- [initWithItemProviders:](uiactivityitemsconfiguration/init%28itemproviders_%29.md): Initializes and returns an activity items configuration with the specified item providers.
- [activityItemsConfigurationWithObjects:](uiactivityitemsconfiguration/activityitemsconfigurationwithobjects_.md): Creates an activity items configuration with the specified objects.
- [activityItemsConfigurationWithItemProviders:](uiactivityitemsconfiguration/activityitemsconfigurationwithitemproviders_.md): Creates an activity items configuration with the specified item providers.

### Managing the configuration

- [localObject](uiactivityitemsconfiguration/localobject.md): A local object that represents the configuration.
- [metadataProvider](uiactivityitemsconfiguration/metadataprovider.md): A closure that provides metadata for the activity items.
- [perItemMetadataProvider](uiactivityitemsconfiguration/peritemmetadataprovider.md): A closure that provides metadata for each activity item.
- [applicationActivitiesProvider](uiactivityitemsconfiguration/applicationactivitiesprovider.md): A closure that provides application acitivites for the activity items.
- [UIActivityItemsConfigurationMetadataKey](uiactivityitemsconfigurationmetadatakey.md): A structure that defines keys for the metadata associated with an activity items configuration.

### Managing supported interactions

- [supportedInteractions](uiactivityitemsconfiguration/supportedinteractions.md): The types of interactions that the configuration supports.
- [UIActivityItemsConfigurationInteraction](uiactivityitemsconfigurationinteraction.md): A structure that describes types of interactions.

### Managing previews

- [previewProvider](uiactivityitemsconfiguration/previewprovider.md): A closure that provides previews for the activity items.
- [UIActivityItemsConfigurationPreviewIntent](uiactivityitemsconfigurationpreviewintent.md): A structure that specifies the types of activity item previews.

### Restricting the sharing mode

- [UIActivityCollaborationModeRestriction](uiactivityviewcontroller/collaborationmoderestriction.md): An object that disables the sharing mode and optionally displays an alert.
- [UIActivityCollaborationMode](uiactivitycollaborationmode.md): A value that defines how the system shares an item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIActivityItemsConfigurationReading](uiactivityitemsconfigurationreading.md)

## See Also

### Initializing the activity view controller

- [initWithActivityItems:applicationActivities:](uiactivityviewcontroller/init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [initWithActivityItemsConfiguration:](uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfigurationReading](uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.
