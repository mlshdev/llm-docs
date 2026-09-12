> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundviewcontroller](https://developer.apple.com/documentation/mapkit/mklookaroundviewcontroller)

# MKLookAroundViewController (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that manages the presentation and display of a LookAround view.

## Declaration

```swift
class MKLookAroundViewController
```

## Topics

### Creating a LookAround controller

- [init(coder:)](mklookaroundviewcontroller/init%28coder_%29.md): Creates a new LookAround view controller object from a coder object provided by a storyboard or nib file.
- [init(nibName:bundle:)](mklookaroundviewcontroller/init%28nibname_bundle_%29.md): Creates a new LookAround view controller from the specified nib and bundle.
- [init(scene:)](mklookaroundviewcontroller/init%28scene_%29.md): Creates a new LookAround view controller with the specified scene.

### Customizing the LookAround display

- [isNavigationEnabled](mklookaroundviewcontroller/isnavigationenabled.md): A Boolean value that indicates whether the map’s navigation controls are visible.
- [pointOfInterestFilter](mklookaroundviewcontroller/pointofinterestfilter.md): The filter used to determine the points of interest shown on the map.
- [showsRoadLabels](mklookaroundviewcontroller/showsroadlabels.md): A Boolean value that indicates whether the map display road labels.
- [badgePosition](mklookaroundviewcontroller/badgeposition.md): A value that indicates the badge’s position on the LookAround view.
- [MKLookAroundBadgePosition](mklookaroundbadgeposition.md): Constants that control the position of badges on LookAround views.

### Interacting with the controller

- [delegate](mklookaroundviewcontroller/delegate.md): An object you provide to receive events related to the user’s interaction with the LookAround view controller.
- [MKLookAroundViewControllerDelegate](mklookaroundviewcontrollerdelegate.md): Methods you implement to respond to changes in the LookAround view controller.

### Accessing the scene

- [scene](mklookaroundviewcontroller/scene.md): The LookAround scene.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Exploring at street level

- [MKLookAroundScene](mklookaroundscene.md): A utility class that encapsulates information the framework requires to retrieve and display a specific Look Around location’s imagery.
- [MKLookAroundSceneRequest](mklookaroundscenerequest.md): A class you use to request a LookAround scene at the location you specify.
- [MKLookAroundSnapshotter](mklookaroundsnapshotter.md): A utility class that you use to create a static image from a LookAround scene.

# MKLookAroundViewController (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that manages the presentation and display of a LookAround view.

## Declaration

```objectivec
@interface MKLookAroundViewController : UIViewController
```

```objectivec
@interface MKLookAroundViewController : NSViewController
```

## Topics

### Creating a LookAround controller

- [initWithCoder:](mklookaroundviewcontroller/init%28coder_%29.md): Creates a new LookAround view controller object from a coder object provided by a storyboard or nib file.
- [initWithNibName:bundle:](mklookaroundviewcontroller/init%28nibname_bundle_%29.md): Creates a new LookAround view controller from the specified nib and bundle.
- [initWithScene:](mklookaroundviewcontroller/init%28scene_%29.md): Creates a new LookAround view controller with the specified scene.

### Customizing the LookAround display

- [navigationEnabled](mklookaroundviewcontroller/isnavigationenabled.md): A Boolean value that indicates whether the map’s navigation controls are visible.
- [pointOfInterestFilter](mklookaroundviewcontroller/pointofinterestfilter.md): The filter used to determine the points of interest shown on the map.
- [showsRoadLabels](mklookaroundviewcontroller/showsroadlabels.md): A Boolean value that indicates whether the map display road labels.
- [badgePosition](mklookaroundviewcontroller/badgeposition.md): A value that indicates the badge’s position on the LookAround view.
- [MKLookAroundBadgePosition](mklookaroundbadgeposition.md): Constants that control the position of badges on LookAround views.

### Interacting with the controller

- [delegate](mklookaroundviewcontroller/delegate.md): An object you provide to receive events related to the user’s interaction with the LookAround view controller.
- [MKLookAroundViewControllerDelegate](mklookaroundviewcontrollerdelegate.md): Methods you implement to respond to changes in the LookAround view controller.

### Accessing the scene

- [scene](mklookaroundviewcontroller/scene.md): The LookAround scene.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Exploring at street level

- [MKLookAroundScene](mklookaroundscene.md): A utility class that encapsulates information the framework requires to retrieve and display a specific Look Around location’s imagery.
- [MKLookAroundSceneRequest](mklookaroundscenerequest.md): A class you use to request a LookAround scene at the location you specify.
- [MKLookAroundSnapshotter](mklookaroundsnapshotter.md): A utility class that you use to create a static image from a LookAround scene.
