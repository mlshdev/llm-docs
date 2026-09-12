> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolylineview](https://developer.apple.com/documentation/mapkit/mkpolylineview)

# MKPolylineView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.

> Use MKPolylineRenderer

## Declaration

```swift
class MKPolylineView
```

<a id="overview"></a>

## Overview

This view strokes the path represented by the annotation. (This class does not fill the area enclosed by the path.) You can change the color and other drawing attributes of the path by modifying the properties inherited from the [MKOverlayPathView](mkoverlaypathview.md) class. This class is typically used as is and not subclassed.

In iOS 7 and later, use the [MKPolylineRenderer](mkpolylinerenderer.md) class to display polyline overlays instead.

## Relationships

### Inherits From

- [MKOverlayPathView](mkoverlaypathview.md)

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

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayView](mkoverlayview.md): Deprecated. Defines the basic behavior associated with all overlay views.
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.

# MKPolylineView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.

> Use MKPolylineRenderer

## Declaration

```objectivec
@interface MKPolylineView : MKOverlayPathView
```

<a id="overview"></a>

## Overview

This view strokes the path represented by the annotation. (This class does not fill the area enclosed by the path.) You can change the color and other drawing attributes of the path by modifying the properties inherited from the [MKOverlayPathView](mkoverlaypathview.md) class. This class is typically used as is and not subclassed.

In iOS 7 and later, use the [MKPolylineRenderer](mkpolylinerenderer.md) class to display polyline overlays instead.

## Topics

### Initializing the polyline view

- [initWithPolyline:](mkpolylineview/initwithpolyline_.md): Deprecated. Initializes and returns a new overlay view using the specified polyline overlay object

### Accessing the polyline overlay

- [polyline](mkpolylineview/polyline.md): Deprecated. The polyline overlay object that contains the information used to draw the overlay.

## Relationships

### Inherits From

- [MKOverlayPathView](mkoverlaypathview.md)

## See Also

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayView](mkoverlayview.md): Deprecated. Defines the basic behavior associated with all overlay views.
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.
- [MKReverseGeocoder](mkreversegeocoder.md): Deprecated. Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country or region, city, or street.
