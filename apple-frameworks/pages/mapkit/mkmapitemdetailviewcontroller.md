> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemdetailviewcontroller](https://developer.apple.com/documentation/mapkit/mkmapitemdetailviewcontroller)

# MKMapItemDetailViewController (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An object that displays detailed information about a map item.

## Declaration

```swift
class MKMapItemDetailViewController
```

<a id="overview"></a>

## Overview

The view controller presents modally and displays place information such as addresses and phone numbers.

This class doesn’t support subclassing. The view hierarchy for this class is private and must not be modified.

## Topics

### Creating a map item detail view controller

- [init(mapItem:)](mkmapitemdetailviewcontroller/init%28mapitem_%29.md): Create a map item detail view controller.
- [init(mapItem:displaysMap:)](mkmapitemdetailviewcontroller/init%28mapitem_displaysmap_%29.md): Create a map item detail view controller

### Dismissing the map item detail interface

- [delegate](mkmapitemdetailviewcontroller/delegate.md): The map item detail view controller’s delegate.

### Getting and setting the map item

- [mapItem](mkmapitemdetailviewcontroller/mapitem.md): The map item to display.

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

### Place information

- [MKMapItemDetailViewControllerDelegate](mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKSelectionAccessory.MapItemDetailPresentationStyle](mkselectionaccessory/mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKSelectionAccessory](mkselectionaccessory.md): The type of accessory to display for a selected annotation.
- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle](mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.

# MKMapItemDetailViewController (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An object that displays detailed information about a map item.

## Declaration

```objectivec
@interface MKMapItemDetailViewController : UIViewController
```

```objectivec
@interface MKMapItemDetailViewController : NSViewController
```

<a id="overview"></a>

## Overview

The view controller presents modally and displays place information such as addresses and phone numbers.

This class doesn’t support subclassing. The view hierarchy for this class is private and must not be modified.

## Topics

### Creating a map item detail view controller

- [initWithMapItem:](mkmapitemdetailviewcontroller/init%28mapitem_%29.md): Create a map item detail view controller.
- [initWithMapItem:displaysMap:](mkmapitemdetailviewcontroller/init%28mapitem_displaysmap_%29.md): Create a map item detail view controller

### Dismissing the map item detail interface

- [delegate](mkmapitemdetailviewcontroller/delegate.md): The map item detail view controller’s delegate.

### Getting and setting the map item

- [mapItem](mkmapitemdetailviewcontroller/mapitem.md): The map item to display.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Place information

- [MKMapItemDetailViewControllerDelegate](mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKMapItemDetailSelectionAccessoryPresentationStyle](mkselectionaccessory/mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKSelectionAccessory](mkselectionaccessory.md): The type of accessory to display for a selected annotation.
- [MKMapItemDetailSelectionAccessoryCalloutStyle](mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.
