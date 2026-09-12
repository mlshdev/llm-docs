> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkusertrackingbutton](https://developer.apple.com/documentation/mapkit/mkusertrackingbutton)

# MKUserTrackingButton (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.

## Declaration

```swift
class MKUserTrackingButton
```

<a id="overview"></a>

## Overview

Use this class when you need a standard button that you can incorporate into your view hierarchy. Tapping the button lets the user toggles between modes for displaying the map with and without the current heading applied. The button also reflects the current user tracking mode if set elsewhere.

## Topics

### Creating a user tracking button

- [init(mapView:)](mkusertrackingbutton/init%28mapview_%29.md): Initializes the button with the map view that it should control.

### Getting the parent map

- [mapView](mkusertrackingbutton/mapview.md): The map view associated with the button.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Map customization

- [MKMapCamera](mkmapcamera.md): A virtual camera for defining the appearance of the map.
- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKScaleView](mkscaleview.md): A specialized view that displays the scale information for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.

# MKUserTrackingButton (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.

## Declaration

```objectivec
@interface MKUserTrackingButton : UIView
```

<a id="overview"></a>

## Overview

Use this class when you need a standard button that you can incorporate into your view hierarchy. Tapping the button lets the user toggles between modes for displaying the map with and without the current heading applied. The button also reflects the current user tracking mode if set elsewhere.

## Topics

### Creating a user tracking button

- [userTrackingButtonWithMapView:](mkusertrackingbutton/init%28mapview_%29.md): Initializes the button with the map view that it should control.

### Getting the parent map

- [mapView](mkusertrackingbutton/mapview.md): The map view associated with the button.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

## See Also

### Map customization

- [MKMapCamera](mkmapcamera.md): A virtual camera for defining the appearance of the map.
- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKScaleView](mkscaleview.md): A specialized view that displays the scale information for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.
