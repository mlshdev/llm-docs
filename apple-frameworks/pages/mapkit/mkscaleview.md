> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkscaleview](https://developer.apple.com/documentation/mapkit/mkscaleview)

# MKScaleView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A specialized view that displays the scale information for its associated map.

## Declaration

```swift
class MKScaleView
```

<a id="overview"></a>

## Overview

Use this class when you want to incorporate a standard scale view into your own view hierarchy. A scale view displays a legend with distance information for its associated map view. As the map region changes, the scale view updates automatically to reflect any changes in scale.

## Topics

### Creating a scale view

- [init(mapView:)](mkscaleview/init%28mapview_%29.md): Creates a scale view and associates it with the specified map view.

### Getting the scale view attributes

- [mapView](mkscaleview/mapview.md): The map view that provides the scale information to the scale view.
- [scaleVisibility](mkscaleview/scalevisibility.md): The visibility of the scale view.
- [legendAlignment](mkscaleview/legendalignment.md): The alignment of the distance information in the scale view.
- [MKScaleView.Alignment](mkscaleview/alignment.md): Constants that indicate how the framework should align measurements.

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
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.

# MKScaleView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A specialized view that displays the scale information for its associated map.

## Declaration

```objectivec
@interface MKScaleView : UIView
```

<a id="overview"></a>

## Overview

Use this class when you want to incorporate a standard scale view into your own view hierarchy. A scale view displays a legend with distance information for its associated map view. As the map region changes, the scale view updates automatically to reflect any changes in scale.

## Topics

### Creating a scale view

- [scaleViewWithMapView:](mkscaleview/init%28mapview_%29.md): Creates a scale view and associates it with the specified map view.

### Getting the scale view attributes

- [mapView](mkscaleview/mapview.md): The map view that provides the scale information to the scale view.
- [scaleVisibility](mkscaleview/scalevisibility.md): The visibility of the scale view.
- [legendAlignment](mkscaleview/legendalignment.md): The alignment of the distance information in the scale view.
- [MKScaleViewAlignment](mkscaleview/alignment.md): Constants that indicate how the framework should align measurements.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

## See Also

### Map customization

- [MKMapCamera](mkmapcamera.md): A virtual camera for defining the appearance of the map.
- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.
- [MKUserTrackingBarButtonItem](mkusertrackingbarbuttonitem.md): A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.
