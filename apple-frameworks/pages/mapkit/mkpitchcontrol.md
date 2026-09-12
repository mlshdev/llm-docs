> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpitchcontrol](https://developer.apple.com/documentation/mapkit/mkpitchcontrol)

# MKPitchControl (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A specialized view that displays and controls the pitch angle of the map view.

## Declaration

```swift
class MKPitchControl
```

<a id="overview"></a>

## Overview

Use this class when you want to incorporate a standard, fixed-size pitch control into your own view hierarchy. A pitch control allows the user to change the pitch angle of its associated map view.

## Topics

### Creating a pitch control

- [init(mapView:)](mkpitchcontrol/init%28mapview_%29.md): Creates a pitch control and associates it with the specified map view.

### Accessing the map view

- [mapView](mkpitchcontrol/mapview.md): The map view associated with this control.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
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
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
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
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.

# MKPitchControl (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A specialized view that displays and controls the pitch angle of the map view.

## Declaration

```objectivec
@interface MKPitchControl : UIView
```

```objectivec
@interface MKPitchControl : NSView
```

<a id="overview"></a>

## Overview

Use this class when you want to incorporate a standard, fixed-size pitch control into your own view hierarchy. A pitch control allows the user to change the pitch angle of its associated map view.

## Topics

### Creating a pitch control

- [pitchControlWithMapView:](mkpitchcontrol/init%28mapview_%29.md): Creates a pitch control and associates it with the specified map view.

### Accessing the map view

- [mapView](mkpitchcontrol/mapview.md): The map view associated with this control.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

## See Also

### Map customization

- [MKMapCamera](mkmapcamera.md): A virtual camera for defining the appearance of the map.
- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKScaleView](mkscaleview.md): A specialized view that displays the scale information for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.
