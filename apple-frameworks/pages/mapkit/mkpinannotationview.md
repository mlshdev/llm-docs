> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpinannotationview](https://developer.apple.com/documentation/mapkit/mkpinannotationview)

# MKPinAnnotationView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.9+ (deprecated in 13.0) · tvOS 9.2+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An annotation view that displays a pin image on the map.

> In iOS 16 and macOS 13 and later use an [MKAnnotationView](mkannotationview.md) to create a custom map annotation

## Declaration

```swift
class MKPinAnnotationView
```

<a id="overview"></a>

## Overview

Return instances of this class from the [mapView(\_:viewFor:)](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method of your map view delegate when you want to display a pin for one of your annotations. The pins displayed by this view are the same ones found in the Maps application. You can specify the type of pin you want to display and whether you want the pin to be animated into place.

> **Note**

>  In iOS 5.1 and earlier, the MapKit framework uses the Google Mobile Maps (GMM) service to provide map data. Use of specific classes of this framework (and their associated interfaces) is subject to the Google Mobile Maps terms of service, found at [http://code.google.com/apis/maps/iphone/terms.html](http://code.google.com/apis/maps/iphone/terms.html).

## Topics

### Getting Standard Pin Colors

- [redPinColor()](mkpinannotationview/redpincolor%28%29.md): Deprecated. Returns the standard color for red pins.
- [greenPinColor()](mkpinannotationview/greenpincolor%28%29.md): Deprecated. Returns the standard color for green pins.
- [purplePinColor()](mkpinannotationview/purplepincolor%28%29.md): Deprecated. Returns the standard color for purple pins.
- [MKPinAnnotationColor](mkpinannotationcolor.md): Deprecated. The supported colors for pin annotations.

### Getting and Setting Attributes

- [pinTintColor](mkpinannotationview/pintintcolor.md): Deprecated. The color of the pin head.
- [animatesDrop](mkpinannotationview/animatesdrop.md): Deprecated. A Boolean value indicating whether the annotation view is animated onto the screen.
- [pinColor](mkpinannotationview/pincolor.md): Deprecated. The color of the pin head.

## Relationships

### Inherits From

- [MKAnnotationView](mkannotationview.md)

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

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayView](mkoverlayview.md): Deprecated. Defines the basic behavior associated with all overlay views.
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.

# MKPinAnnotationView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 16.0) · iPadOS 3.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.9+ (deprecated in 13.0) · tvOS 9.2+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An annotation view that displays a pin image on the map.

> In iOS 16 and macOS 13 and later use an [MKAnnotationView](mkannotationview.md) to create a custom map annotation

## Declaration

```objectivec
@interface MKPinAnnotationView : MKAnnotationView
```

<a id="overview"></a>

## Overview

Return instances of this class from the [mapView:viewForAnnotation:](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method of your map view delegate when you want to display a pin for one of your annotations. The pins displayed by this view are the same ones found in the Maps application. You can specify the type of pin you want to display and whether you want the pin to be animated into place.

> **Note**

>  In iOS 5.1 and earlier, the MapKit framework uses the Google Mobile Maps (GMM) service to provide map data. Use of specific classes of this framework (and their associated interfaces) is subject to the Google Mobile Maps terms of service, found at [http://code.google.com/apis/maps/iphone/terms.html](http://code.google.com/apis/maps/iphone/terms.html).

## Topics

### Getting Standard Pin Colors

- [redPinColor](mkpinannotationview/redpincolor%28%29.md): Deprecated. Returns the standard color for red pins.
- [greenPinColor](mkpinannotationview/greenpincolor%28%29.md): Deprecated. Returns the standard color for green pins.
- [purplePinColor](mkpinannotationview/purplepincolor%28%29.md): Deprecated. Returns the standard color for purple pins.
- [MKPinAnnotationColor](mkpinannotationcolor.md): Deprecated. The supported colors for pin annotations.

### Getting and Setting Attributes

- [pinTintColor](mkpinannotationview/pintintcolor.md): Deprecated. The color of the pin head.
- [animatesDrop](mkpinannotationview/animatesdrop.md): Deprecated. A Boolean value indicating whether the annotation view is animated onto the screen.
- [pinColor](mkpinannotationview/pincolor.md): Deprecated. The color of the pin head.

## Relationships

### Inherits From

- [MKAnnotationView](mkannotationview.md)

## See Also

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayView](mkoverlayview.md): Deprecated. Defines the basic behavior associated with all overlay views.
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKReverseGeocoder](mkreversegeocoder.md): Deprecated. Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country or region, city, or street.
