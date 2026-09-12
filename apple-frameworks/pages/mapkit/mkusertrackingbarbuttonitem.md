> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkusertrackingbarbuttonitem](https://developer.apple.com/documentation/mapkit/mkusertrackingbarbuttonitem)

# MKUserTrackingBarButtonItem (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.

## Declaration

```swift
class MKUserTrackingBarButtonItem
```

<a id="overview"></a>

## Overview

Tapping the button lets the user toggles between modes for displaying the map with and without the current heading applied. The button also reflects the current user tracking mode if set elsewhere. This bar button item is associated to a single map view.

## Topics

### Creating a user tracking bar button item

- [init(mapView:)](mkusertrackingbarbuttonitem/init%28mapview_%29.md): Initializes a newly created bar button item with the specified map view.

### Accessing the owning map

- [mapView](mkusertrackingbarbuttonitem/mapview.md): The map view associated with this bar button item.

## Relationships

### Inherits From

- [UIBarButtonItem](../uikit/uibarbuttonitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UISpringLoadedInteractionSupporting](../uikit/uispringloadedinteractionsupporting.md)

## See Also

### Map customization

- [MKMapCamera](mkmapcamera.md): A virtual camera for defining the appearance of the map.
- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKScaleView](mkscaleview.md): A specialized view that displays the scale information for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.

# MKUserTrackingBarButtonItem (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A specialized bar button item that allows the user to toggle whether the map tracks to the heading the user is facing.

## Declaration

```objectivec
@interface MKUserTrackingBarButtonItem : UIBarButtonItem
```

<a id="overview"></a>

## Overview

Tapping the button lets the user toggles between modes for displaying the map with and without the current heading applied. The button also reflects the current user tracking mode if set elsewhere. This bar button item is associated to a single map view.

## Topics

### Creating a user tracking bar button item

- [initWithMapView:](mkusertrackingbarbuttonitem/init%28mapview_%29.md): Initializes a newly created bar button item with the specified map view.

### Accessing the owning map

- [mapView](mkusertrackingbarbuttonitem/mapview.md): The map view associated with this bar button item.

## Relationships

### Inherits From

- [UIBarButtonItem](../uikit/uibarbuttonitem.md)

## See Also

### Map customization

- [MKMapCamera](mkmapcamera.md): A virtual camera for defining the appearance of the map.
- [MKCompassButton](mkcompassbutton.md): A specialized view that displays the compass heading for its associated map.
- [MKScaleView](mkscaleview.md): A specialized view that displays the scale information for its associated map.
- [MKZoomControl](mkzoomcontrol.md): A specialized view that displays and controls the zoom level of the map view.
- [MKPitchControl](mkpitchcontrol.md): A specialized view that displays and controls the pitch angle of the map view.
- [MKUserTrackingButton](mkusertrackingbutton.md): A specialized button that allows the user to toggle whether the map tracks to the heading the user is facing.
