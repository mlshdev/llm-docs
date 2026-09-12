> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemdetailviewcontrollerdelegate](https://developer.apple.com/documentation/mapkit/mkmapitemdetailviewcontrollerdelegate)

# MKMapItemDetailViewControllerDelegate (Swift)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The methods that you use to receive events from an associated map view controller.

## Declaration

```swift
@MainActor protocol MKMapItemDetailViewControllerDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [mapItemDetailViewControllerDidFinish(\_:)](mkmapitemdetailviewcontrollerdelegate/mapitemdetailviewcontrollerdidfinish%28__%29.md): Informs the delegate when a person dismissed the view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Place information

- [MKMapItemDetailViewController](mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKSelectionAccessory.MapItemDetailPresentationStyle](mkselectionaccessory/mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKSelectionAccessory](mkselectionaccessory.md): The type of accessory to display for a selected annotation.
- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle](mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.

# MKMapItemDetailViewControllerDelegate (Objective-C)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The methods that you use to receive events from an associated map view controller.

## Declaration

```objectivec
@protocol MKMapItemDetailViewControllerDelegate <NSObject>
```

## Topics

### Instance Methods

- [mapItemDetailViewControllerDidFinish:](mkmapitemdetailviewcontrollerdelegate/mapitemdetailviewcontrollerdidfinish%28__%29.md): Informs the delegate when a person dismissed the view controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Place information

- [MKMapItemDetailViewController](mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKMapItemDetailSelectionAccessoryPresentationStyle](mkselectionaccessory/mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKSelectionAccessory](mkselectionaccessory.md): The type of accessory to display for a selected annotation.
- [MKMapItemDetailSelectionAccessoryCalloutStyle](mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle.md): The style to use for a map item detail callout presentation.
