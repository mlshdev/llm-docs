> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygonview](https://developer.apple.com/documentation/mapkit/mkpolygonview)

# MKPolygonView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.

> Use MKPolygonRenderer

## Declaration

```swift
class MKPolygonView
```

<a id="overview"></a>

## Overview

This view fills and strokes the area represented by the annotation. You can change the color and other drawing attributes of the polygon by modifying the properties inherited from the [MKOverlayPathView](mkoverlaypathview.md) class. This class is typically used as is and not subclassed.

In iOS 7 and later, use the [MKPolygonRenderer](mkpolygonrenderer.md) class to display polygon overlays instead.

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
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.

# MKPolygonView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.

> Use MKPolygonRenderer

## Declaration

```objectivec
@interface MKPolygonView : MKOverlayPathView
```

<a id="overview"></a>

## Overview

This view fills and strokes the area represented by the annotation. You can change the color and other drawing attributes of the polygon by modifying the properties inherited from the [MKOverlayPathView](mkoverlaypathview.md) class. This class is typically used as is and not subclassed.

In iOS 7 and later, use the [MKPolygonRenderer](mkpolygonrenderer.md) class to display polygon overlays instead.

## Topics

### Initializing a polygon view

- [initWithPolygon:](mkpolygonview/initwithpolygon_.md): Deprecated. Initializes and returns a new overlay view using the specified polygon overlay object.

### Accessing the polygon overlay

- [polygon](mkpolygonview/polygon.md): Deprecated. The polygon overlay object that contains the information used to draw the overlay.

## Relationships

### Inherits From

- [MKOverlayPathView](mkoverlaypathview.md)

## See Also

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayView](mkoverlayview.md): Deprecated. Defines the basic behavior associated with all overlay views.
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.
- [MKReverseGeocoder](mkreversegeocoder.md): Deprecated. Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country or region, city, or street.
