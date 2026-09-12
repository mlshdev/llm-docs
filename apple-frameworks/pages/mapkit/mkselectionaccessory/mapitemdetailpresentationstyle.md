> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle](https://developer.apple.com/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle)

# MKSelectionAccessory.MapItemDetailPresentationStyle (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The type of map item detail accessory presentation to use.

## Declaration

```swift
class MapItemDetailPresentationStyle
```

## Topics

### Creating a presentation style

- [automatic(presentationViewController:)](mapitemdetailpresentationstyle/automatic%28presentationviewcontroller_%29-648ee.md): An appropriate presentation style will be chosen automatically.
- [automatic(presentationViewController:)](mapitemdetailpresentationstyle/automatic%28presentationviewcontroller_%29-9t9vt.md): An appropriate presentation style will be chosen automatically.
- [callout](mapitemdetailpresentationstyle/callout.md): Show map item detail as an annotation callout on the map.
- [callout(\_:)](mapitemdetailpresentationstyle/callout%28__%29.md): Show map item detail as an annotation callout on the map
- [openInMaps](mapitemdetailpresentationstyle/openinmaps.md): Display a small “Open in Apple Maps” link.
- [sheet(presentedFrom:)](mapitemdetailpresentationstyle/sheet%28presentedfrom_%29.md): Show map item detail by presenting a sheet.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Place information

- [MKMapItemDetailViewControllerDelegate](../mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKMapItemDetailViewController](../mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKSelectionAccessory](../mkselectionaccessory.md): The type of accessory to display for a selected annotation.
- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle](mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.

# MKMapItemDetailSelectionAccessoryPresentationStyle (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The type of map item detail accessory presentation to use.

## Declaration

```objectivec
@interface MKMapItemDetailSelectionAccessoryPresentationStyle : NSObject
```

## Topics

### Creating a presentation style

- [automaticWithPresentationViewController:](../mkmapitemdetailselectionaccessorypresentationstyle/automaticwithpresentationviewcontroller_.md): An appropriate presentation style will be chosen automatically.
- [callout](mapitemdetailpresentationstyle/callout.md): Show map item detail as an annotation callout on the map.
- [calloutWithCalloutStyle:](../mkmapitemdetailselectionaccessorypresentationstyle/calloutwithcalloutstyle_.md): Show map item detail as an annotation callout on the map
- [openInMaps](mapitemdetailpresentationstyle/openinmaps.md): Display a small “Open in Apple Maps” link.
- [sheetPresentedFromViewController:](mapitemdetailpresentationstyle/sheet%28presentedfrom_%29.md): Show map item detail by presenting a sheet.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Place information

- [MKMapItemDetailViewControllerDelegate](../mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKMapItemDetailViewController](../mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKSelectionAccessory](../mkselectionaccessory.md): The type of accessory to display for a selected annotation.
- [MKMapItemDetailSelectionAccessoryCalloutStyle](mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.
