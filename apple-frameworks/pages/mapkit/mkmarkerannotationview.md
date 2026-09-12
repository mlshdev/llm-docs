> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmarkerannotationview](https://developer.apple.com/documentation/mapkit/mkmarkerannotationview)

# MKMarkerAnnotationView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

An annotation view that displays a balloon-shaped marker at the designated location.

## Declaration

```swift
class MKMarkerAnnotationView
```

<a id="overview"></a>

## Overview

Return an instance of this class from the [mapView(\_:viewFor:)](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method of your map view delegate when you want to display the same types of markers used in the Maps app.

The default [displayPriority](mkannotationview/displaypriority.md) for an instance of this class is [defaultLow](mkfeaturedisplaypriority/defaultlow.md).

## Topics

### Setting the Marker Color

- [markerTintColor](mkmarkerannotationview/markertintcolor.md): The background color of the marker balloon.

### Setting the Marker Content

- [glyphText](mkmarkerannotationview/glyphtext.md): The text to display in the marker balloon.
- [glyphImage](mkmarkerannotationview/glyphimage.md): An image to display in the marker balloon.
- [glyphTintColor](mkmarkerannotationview/glyphtintcolor.md): The color to apply to the glyph text or image.
- [selectedGlyphImage](mkmarkerannotationview/selectedglyphimage.md): An image to display when the user selects the marker.

### Setting the Visibility

- [titleVisibility](mkmarkerannotationview/titlevisibility.md): The visibility of the title text rendered beneath the marker balloon.
- [subtitleVisibility](mkmarkerannotationview/subtitlevisibility.md): The visibility of the subtitle text rendered beneath the marker balloon.
- [MKFeatureVisibility](mkfeaturevisibility.md): Constants that indicate the visibility of different map features.

### Animating the Marker onto the Screen

- [animatesWhenAdded](mkmarkerannotationview/animateswhenadded.md): A Boolean that indicates whether the marker animates into position onscreen.

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

### Location annotations

- [Annotating a Map with Custom Data](annotating-a-map-with-custom-data.md): Annotate a map with location-specific data using default and customized annotation views and callouts.
- [MKPointAnnotation](mkpointannotation.md): A string-based piece of location-specific data that you apply to a specific point on a map.
- [MKMapItemAnnotation](mkmapitemannotation.md): An annotation that represents a map item
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.

# MKMarkerAnnotationView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

An annotation view that displays a balloon-shaped marker at the designated location.

## Declaration

```objectivec
@interface MKMarkerAnnotationView : MKAnnotationView
```

<a id="overview"></a>

## Overview

Return an instance of this class from the [mapView:viewForAnnotation:](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md) method of your map view delegate when you want to display the same types of markers used in the Maps app.

The default [displayPriority](mkannotationview/displaypriority.md) for an instance of this class is [MKFeatureDisplayPriorityDefaultLow](mkfeaturedisplaypriority/defaultlow.md).

## Topics

### Setting the Marker Color

- [markerTintColor](mkmarkerannotationview/markertintcolor.md): The background color of the marker balloon.

### Setting the Marker Content

- [glyphText](mkmarkerannotationview/glyphtext.md): The text to display in the marker balloon.
- [glyphImage](mkmarkerannotationview/glyphimage.md): An image to display in the marker balloon.
- [glyphTintColor](mkmarkerannotationview/glyphtintcolor.md): The color to apply to the glyph text or image.
- [selectedGlyphImage](mkmarkerannotationview/selectedglyphimage.md): An image to display when the user selects the marker.

### Setting the Visibility

- [titleVisibility](mkmarkerannotationview/titlevisibility.md): The visibility of the title text rendered beneath the marker balloon.
- [subtitleVisibility](mkmarkerannotationview/subtitlevisibility.md): The visibility of the subtitle text rendered beneath the marker balloon.
- [MKFeatureVisibility](mkfeaturevisibility.md): Constants that indicate the visibility of different map features.

### Animating the Marker onto the Screen

- [animatesWhenAdded](mkmarkerannotationview/animateswhenadded.md): A Boolean that indicates whether the marker animates into position onscreen.

## Relationships

### Inherits From

- [MKAnnotationView](mkannotationview.md)

## See Also

### Location annotations

- [Annotating a Map with Custom Data](annotating-a-map-with-custom-data.md): Annotate a map with location-specific data using default and customized annotation views and callouts.
- [MKPointAnnotation](mkpointannotation.md): A string-based piece of location-specific data that you apply to a specific point on a map.
- [MKMapItemAnnotation](mkmapitemannotation.md): An annotation that represents a map item
- [MKPinAnnotationView](mkpinannotationview.md): Deprecated. An annotation view that displays a pin image on the map.
