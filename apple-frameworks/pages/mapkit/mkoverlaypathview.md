> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathview](https://developer.apple.com/documentation/mapkit/mkoverlaypathview)

# MKOverlayPathView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Represents a generic overlay that draws its contents using a Core Graphics path data type.

> Use MKOverlayPathRenderer

## Declaration

```swift
class MKOverlayPathView
```

<a id="overview"></a>

## Overview

You can use this class to implement simple path-based overlay views or subclass it to define additional drawing behaviors. The default drawing behavior of this class is to apply the object’s current fill attributes, fill the path, apply the current stroke attributes, and then stroke the path.

If you subclass, you should override the [createPath](mkoverlaypathview/createpath.md) method and use that method to build the appropriate path for the overlay. You can invalidate this path as needed and force the path to be recreated using whatever new data your subclass has obtained.

In iOS 7 and later, use the [MKOverlayPathRenderer](mkoverlaypathrenderer.md) class to display path-based overlays instead.

## Relationships

### Inherits From

- [MKOverlayView](mkoverlayview.md)

### Inherited By

- [MKCircleView](mkcircleview.md)
- [MKPolygonView](mkpolygonview.md)
- [MKPolylineView](mkpolylineview.md)

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
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.

# MKOverlayPathView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Represents a generic overlay that draws its contents using a Core Graphics path data type.

> Use MKOverlayPathRenderer

## Declaration

```objectivec
@interface MKOverlayPathView : MKOverlayView
```

<a id="overview"></a>

## Overview

You can use this class to implement simple path-based overlay views or subclass it to define additional drawing behaviors. The default drawing behavior of this class is to apply the object’s current fill attributes, fill the path, apply the current stroke attributes, and then stroke the path.

If you subclass, you should override the [createPath](mkoverlaypathview/createpath.md) method and use that method to build the appropriate path for the overlay. You can invalidate this path as needed and force the path to be recreated using whatever new data your subclass has obtained.

In iOS 7 and later, use the [MKOverlayPathRenderer](mkoverlaypathrenderer.md) class to display path-based overlays instead.

## Topics

### Accessing the drawing attributes

- [fillColor](mkoverlaypathview/fillcolor.md): Deprecated. The fill color to use for the path.
- [strokeColor](mkoverlaypathview/strokecolor.md): Deprecated. The stroke color to use for the path.
- [lineWidth](mkoverlaypathview/linewidth.md): Deprecated. The stroke width to use for the path.
- [lineJoin](mkoverlaypathview/linejoin.md): Deprecated. The line join style to apply to corners of the path.
- [lineCap](mkoverlaypathview/linecap.md): Deprecated. The line cap style to apply to the open ends of the path.
- [miterLimit](mkoverlaypathview/miterlimit.md): Deprecated. The limiting value that helps avoid spikes at junctions between connected line segments.
- [lineDashPhase](mkoverlaypathview/linedashphase.md): Deprecated. The offset (in points) at which to start drawing the dash pattern.
- [lineDashPattern](mkoverlaypathview/linedashpattern.md): Deprecated. An array of numbers indicating the dash pattern for paths.

### Creating and managing the path

- [path](mkoverlaypathview/path.md): Deprecated. The current path to use when drawing the overlay.
- [createPath](mkoverlaypathview/createpath.md): Deprecated. Creates the path for the overlay.
- [invalidatePath](mkoverlaypathview/invalidatepath.md): Deprecated. Releases the path associated with the receiver.

### Drawing the Path

- [applyStrokePropertiesToContext:atZoomScale:](mkoverlaypathview/applystrokepropertiestocontext_atzoomscale_.md): Deprecated. Applies the receiver’s current stroke-related drawing properties to the specified graphics context.
- [applyFillPropertiesToContext:atZoomScale:](mkoverlaypathview/applyfillpropertiestocontext_atzoomscale_.md): Deprecated. Applies the receiver’s current fill-related drawing properties to the specified graphics context
- [strokePath:inContext:](mkoverlaypathview/strokepath_incontext_.md): Deprecated. Draws a line along the specified path.
- [fillPath:inContext:](mkoverlaypathview/fillpath_incontext_.md): Deprecated. Fills the area enclosed by the specified path.

## Relationships

### Inherits From

- [MKOverlayView](mkoverlayview.md)

### Inherited By

- [MKCircleView](mkcircleview.md)
- [MKPolygonView](mkpolygonview.md)
- [MKPolylineView](mkpolylineview.md)

## See Also

### Classes

- [MKCircleView](mkcircleview.md): Deprecated. Provides the visual representation for an [MKCircle](mkcircle.md) annotation object.
- [MKOverlayView](mkoverlayview.md): Deprecated. Defines the basic behavior associated with all overlay views.
- [MKPolygonView](mkpolygonview.md): Deprecated. Provides the visual representation for an [MKPolygon](mkpolygon.md) annotation object.
- [MKPolylineView](mkpolylineview.md): Deprecated. Provides the visual representation for an [MKPolyline](mkpolyline.md) annotation object.
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.
- [MKReverseGeocoder](mkreversegeocoder.md): Deprecated. Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country or region, city, or street.
