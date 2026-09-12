> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkselectionaccessory](https://developer.apple.com/documentation/mapkit/mkselectionaccessory)

# MKSelectionAccessory (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The type of accessory to display for a selected annotation.

## Declaration

```swift
class MKSelectionAccessory
```

## Mentioned In

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md)

<a id="overview"></a>

## Overview

Implement [mapView(\_:selectionAccessoryFor:)](mkmapviewdelegate/mapview%28__selectionaccessoryfor_%29.md) in your map view delegate to specify a selection accessory for annotation content.

## Topics

### Creating a selection accessory

- [mapItemDetail(\_:)](mkselectionaccessory/mapitemdetail%28__%29.md): Detailed information about a place

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Place information

- [MKMapItemDetailViewControllerDelegate](mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKMapItemDetailViewController](mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKSelectionAccessory.MapItemDetailPresentationStyle](mkselectionaccessory/mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle](mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.

# MKSelectionAccessory (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The type of accessory to display for a selected annotation.

## Declaration

```objectivec
@interface MKSelectionAccessory : NSObject
```

## Mentioned In

- [Identifying unique locations with Place IDs](identifying-unique-locations-with-place-ids.md)

<a id="overview"></a>

## Overview

Implement [mapView:selectionAccessoryForAnnotation:](mkmapviewdelegate/mapview%28__selectionaccessoryfor_%29.md) in your map view delegate to specify a selection accessory for annotation content.

## Topics

### Creating a selection accessory

- [mapItemDetailWithPresentationStyle:](mkselectionaccessory/mapitemdetail%28__%29.md): Detailed information about a place

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Place information

- [MKMapItemDetailViewControllerDelegate](mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKMapItemDetailViewController](mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKMapItemDetailSelectionAccessoryPresentationStyle](mkselectionaccessory/mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKMapItemDetailSelectionAccessoryCalloutStyle](mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.
