> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayview](https://developer.apple.com/documentation/mapkit/mkoverlayview)

# MKOverlayView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Defines the basic behavior associated with all overlay views.

> Use MKOverlayRenderer

## Declaration

```swift
class MKOverlayView
```

<a id="overview"></a>

## Overview

An overlay view provides the visual representation of an overlay object—that is, an object that conforms to the [MKOverlay](mkoverlay.md) protocol. This class defines the drawing infrastructure used by the map view but does not do any actual drawing. Subclasses are expected to override the [drawMapRect:zoomScale:inContext:](mkoverlayview/drawmaprect_zoomscale_incontext_.md) method in order to draw the contents of the overlay view.

The Map Kit framework provides several concrete instances of overlay views. Specifically, it provides overlay views for each of the concrete overlay objects. You can use one of these existing overlay views or define your own subclass if you want to draw the overlay contents differently.

In iOS 7 and later, use the [MKOverlayRenderer](mkoverlayrenderer.md) class to display overlays instead.

<a id="Subclassing-notes"></a>

### Subclassing notes

You can subclass `MKOverlayView` to create overlays based on custom shapes and content. The only method subclasses are expected to override is the [drawMapRect:zoomScale:inContext:](mkoverlayview/drawmaprect_zoomscale_incontext_.md) method. However, if your class contains content that may not be ready for drawing right away, you should also override the [canDrawMapRect:zoomScale:](mkoverlayview/candrawmaprect_zoomscale_.md) method and use it to report when your class is ready and able to draw.

The implementation of your [drawMapRect:zoomScale:inContext:](mkoverlayview/drawmaprect_zoomscale_incontext_.md) method must be safe to run from multiple threads simultaneously. To improve performance, the map view may tile overlays that are large enough and distribute the rendering of each tile to separate threads.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Inherited By

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
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.

# MKOverlayView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Defines the basic behavior associated with all overlay views.

> Use MKOverlayRenderer

## Declaration

```objectivec
@interface MKOverlayView : UIView
```

<a id="overview"></a>

## Overview

An overlay view provides the visual representation of an overlay object—that is, an object that conforms to the [MKOverlay](mkoverlay.md) protocol. This class defines the drawing infrastructure used by the map view but does not do any actual drawing. Subclasses are expected to override the [drawMapRect:zoomScale:inContext:](mkoverlayview/drawmaprect_zoomscale_incontext_.md) method in order to draw the contents of the overlay view.

The Map Kit framework provides several concrete instances of overlay views. Specifically, it provides overlay views for each of the concrete overlay objects. You can use one of these existing overlay views or define your own subclass if you want to draw the overlay contents differently.

In iOS 7 and later, use the [MKOverlayRenderer](mkoverlayrenderer.md) class to display overlays instead.

<a id="Subclassing-notes"></a>

### Subclassing notes

You can subclass `MKOverlayView` to create overlays based on custom shapes and content. The only method subclasses are expected to override is the [drawMapRect:zoomScale:inContext:](mkoverlayview/drawmaprect_zoomscale_incontext_.md) method. However, if your class contains content that may not be ready for drawing right away, you should also override the [canDrawMapRect:zoomScale:](mkoverlayview/candrawmaprect_zoomscale_.md) method and use it to report when your class is ready and able to draw.

The implementation of your [drawMapRect:zoomScale:inContext:](mkoverlayview/drawmaprect_zoomscale_incontext_.md) method must be safe to run from multiple threads simultaneously. To improve performance, the map view may tile overlays that are large enough and distribute the rendering of each tile to separate threads.

## Topics

### Initializing an overlay view

- [initWithOverlay:](mkoverlayview/initwithoverlay_.md): Deprecated. Initializes and returns the overlay view and associates it with the specified overlay object.

### Attributes of the overlay

- [overlay](mkoverlayview/overlay.md): Deprecated. The overlay object containing the data for drawing.

### Converting points on the map

- [pointForMapPoint:](mkoverlayview/pointformappoint_.md): Deprecated. Returns the point in the overlay view that corresponds to specified point on the map.
- [mapPointForPoint:](mkoverlayview/mappointforpoint_.md): Deprecated. Returns the map point that corresponds to the specified point in the overlay view.
- [rectForMapRect:](mkoverlayview/rectformaprect_.md): Deprecated. Returns the rectangle in the overlay view that corresponds to the specified rectangle on the map.
- [mapRectForRect:](mkoverlayview/maprectforrect_.md): Deprecated. Returns the map rectangle that corresponds to the rectangle in the overlay view’s coordinate system.

### Drawing the overlay

- [canDrawMapRect:zoomScale:](mkoverlayview/candrawmaprect_zoomscale_.md): Deprecated. Returns a Boolean value indicating whether the overlay view is ready to draw its content.
- [drawMapRect:zoomScale:inContext:](mkoverlayview/drawmaprect_zoomscale_incontext_.md): Deprecated. Draws the contents of the overlay view.
- [setNeedsDisplayInMapRect:](mkoverlayview/setneedsdisplayinmaprect_.md): Deprecated. Invalidates the view in the given map rectangle at all zoom scales.
- [setNeedsDisplayInMapRect:zoomScale:](mkoverlayview/setneedsdisplayinmaprect_zoomscale_.md): Deprecated. Invalidates the view in the given map rectangle but only at the specified zoom scale.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Inherited By

- [MKOverlayPathView](mkoverlaypathview.md)

## See Also

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayPathView](mkoverlaypathview.md): Deprecated. Represents a generic overlay that draws its contents using a Core Graphics path data type.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.
- [MKReverseGeocoder](mkreversegeocoder.md): Deprecated. Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country or region, city, or street.
