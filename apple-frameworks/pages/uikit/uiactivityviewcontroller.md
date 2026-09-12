> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller)

# UIActivityViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that you use to offer standard services from your app.

## Declaration

```swift
class UIActivityViewController
```

## Mentioned In

- [Collaborating and sharing copies of your data](collaborating-and-sharing-copies-of-your-data.md)

<a id="overview"></a>

## Overview

The system provides several standard services, such as copying items to the pasteboard, posting content to social media sites, sending items via email or SMS, and more. Apps can also define custom services.

Your app is responsible for configuring, presenting, and dismissing this view controller. Configuration for the view controller involves specifying the data objects on which the view controller should act. (You can also specify the list of custom services your app supports.) When presenting the view controller, you must do so using the appropriate means for the current device. On iPad, you must present the view controller in a popover. On iPhone and iPod touch, you must present it modally.

## Topics

### Initializing the activity view controller

- [init(activityItems:applicationActivities:)](uiactivityviewcontroller/init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [init(activityItemsConfiguration:)](uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfiguration](uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.
- [UIActivityItemsConfigurationReading](uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.

### Accessing the completion handler

- [completionWithItemsHandler](uiactivityviewcontroller/completionwithitemshandler-swift.property.md): The completion handler to execute after the activity view controller is dismissed.
- [UIActivityViewController.CompletionWithItemsHandler](uiactivityviewcontroller/completionwithitemshandler-swift.typealias.md): A completion handler to execute after the activity view controller is dismissed.

### Excluding specific activity types

- [excludedActivityTypes](uiactivityviewcontroller/excludedactivitytypes.md): The list of services that should not be displayed.

### Excluding specific sections

- [excludedActivitySectionTypes](uiactivityviewcontroller/excludedactivitysectiontypes.md): Hides some sections of the activity view controller. Default is none
- [UIActivitySectionTypes](uiactivitysectiontypes.md)

### Elevating a prominent activity

- [allowsProminentActivity](uiactivityviewcontroller/allowsprominentactivity.md): A Boolean value the system uses to elevate a system activity to make it more prominent.

### Deprecated

- [completionHandler](uiactivityviewcontroller/completionhandler-swift.property.md): Deprecated. The completion handler to execute after the activity view controller is dismissed.
- [UIActivityViewController.CompletionHandler](uiactivityviewcontroller/completionhandler-swift.typealias.md): Deprecated. A completion handler to execute after the activity view controller is dismissed.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Services

- [UIActivity](uiactivity.md): An abstract class that you subclass to implement app-specific services.
- [UIActivityItemSource](uiactivityitemsource.md): A set of methods that an activity view controller uses to retrieve the data items to act on.
- [UIActivityItemProvider](uiactivityitemprovider.md): A proxy for data that passes to an activity view controller.

# UIActivityViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that you use to offer standard services from your app.

## Declaration

```objectivec
@interface UIActivityViewController : UIViewController
```

## Mentioned In

- [Collaborating and sharing copies of your data](collaborating-and-sharing-copies-of-your-data.md)

<a id="overview"></a>

## Overview

The system provides several standard services, such as copying items to the pasteboard, posting content to social media sites, sending items via email or SMS, and more. Apps can also define custom services.

Your app is responsible for configuring, presenting, and dismissing this view controller. Configuration for the view controller involves specifying the data objects on which the view controller should act. (You can also specify the list of custom services your app supports.) When presenting the view controller, you must do so using the appropriate means for the current device. On iPad, you must present the view controller in a popover. On iPhone and iPod touch, you must present it modally.

## Topics

### Initializing the activity view controller

- [initWithActivityItems:applicationActivities:](uiactivityviewcontroller/init%28activityitems_applicationactivities_%29.md): Initializes a new activity view controller object that acts on the specified data.
- [initWithActivityItemsConfiguration:](uiactivityviewcontroller/init%28activityitemsconfiguration_%29.md): Initializes a new activity view controller object that acts on the specified configuration.
- [UIActivityItemsConfiguration](uiactivityitemsconfiguration.md): A configuration that allows a responder to export data through a variety of interactions.
- [UIActivityItemsConfigurationReading](uiactivityitemsconfigurationreading.md): A set of methods adopted by an object so that the object can act as an activity items configuration.

### Accessing the completion handler

- [completionWithItemsHandler](uiactivityviewcontroller/completionwithitemshandler-swift.property.md): The completion handler to execute after the activity view controller is dismissed.
- [UIActivityViewControllerCompletionWithItemsHandler](uiactivityviewcontroller/completionwithitemshandler-swift.typealias.md): A completion handler to execute after the activity view controller is dismissed.

### Excluding specific activity types

- [excludedActivityTypes](uiactivityviewcontroller/excludedactivitytypes.md): The list of services that should not be displayed.

### Excluding specific sections

- [excludedActivitySectionTypes](uiactivityviewcontroller/excludedactivitysectiontypes.md): Hides some sections of the activity view controller. Default is none
- [UIActivitySectionTypes](uiactivitysectiontypes.md)

### Elevating a prominent activity

- [allowsProminentActivity](uiactivityviewcontroller/allowsprominentactivity.md): A Boolean value the system uses to elevate a system activity to make it more prominent.

### Deprecated

- [completionHandler](uiactivityviewcontroller/completionhandler-swift.property.md): Deprecated. The completion handler to execute after the activity view controller is dismissed.
- [UIActivityViewControllerCompletionHandler](uiactivityviewcontroller/completionhandler-swift.typealias.md): Deprecated. A completion handler to execute after the activity view controller is dismissed.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Services

- [UIActivity](uiactivity.md): An abstract class that you subclass to implement app-specific services.
- [UIActivityItemSource](uiactivityitemsource.md): A set of methods that an activity view controller uses to retrieve the data items to act on.
- [UIActivityItemProvider](uiactivityitemprovider.md): A proxy for data that passes to an activity view controller.
