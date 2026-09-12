> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkuserlocationview](https://developer.apple.com/documentation/mapkit/mkuserlocationview)

# MKUserLocationView (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configurable annotation that shows the user’s location using the default MapKit style.

## Declaration

```swift
class MKUserLocationView
```

<a id="overview"></a>

## Overview

If you don’t need additional configuration, you can show an annotation with the user’s location by setting [showsUserLocation](mkmapview/showsuserlocation.md) on the map to `true`.

If you want to specify additional configuration, such as [zPriority](mkannotationview/zpriority.md), create this annotation view directly. To display the annotation view, return the instance from [mapView(\_:viewFor:)](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md).

The user location view provides the MapKit default style and behavior. The visual display varies with the level of authorization the user grants your app.

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

### User location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [MKUserLocation](mkuserlocation.md): An annotation that reflects the user’s location on the map.

# MKUserLocationView (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configurable annotation that shows the user’s location using the default MapKit style.

## Declaration

```objectivec
@interface MKUserLocationView : MKAnnotationView
```

<a id="overview"></a>

## Overview

If you don’t need additional configuration, you can show an annotation with the user’s location by setting [showsUserLocation](mkmapview/showsuserlocation.md) on the map to `true`.

If you want to specify additional configuration, such as [zPriority](mkannotationview/zpriority.md), create this annotation view directly. To display the annotation view, return the instance from [mapView:viewForAnnotation:](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md).

The user location view provides the MapKit default style and behavior. The visual display varies with the level of authorization the user grants your app.

## Relationships

### Inherits From

- [MKAnnotationView](mkannotationview.md)

## See Also

### User location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [MKUserLocation](mkuserlocation.md): An annotation that reflects the user’s location on the map.
