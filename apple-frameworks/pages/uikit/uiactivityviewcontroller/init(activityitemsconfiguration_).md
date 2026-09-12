> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/init(activityitemsconfiguration:)](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/init(activityitemsconfiguration:))

# init(activityItemsConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Initializes a new activity view controller object that acts on the specified configuration.

## Declaration

```swift
convenience init(activityItemsConfiguration: any UIActivityItemsConfigurationReading)
```

## See Also

### Initializing the activity view controller

- [init(activityItems:applicationActivities:)](init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [UIActivityItemsConfiguration](../uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.
- [UIActivityItemsConfigurationReading](../uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.

# initWithActivityItemsConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Initializes a new activity view controller object that acts on the specified configuration.

## Declaration

```objectivec
- (instancetype) initWithActivityItemsConfiguration:(id<UIActivityItemsConfigurationReading>) activityItemsConfiguration;
```

## See Also

### Initializing the activity view controller

- [initWithActivityItems:applicationActivities:](init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [UIActivityItemsConfiguration](../uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.
- [UIActivityItemsConfigurationReading](../uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.
