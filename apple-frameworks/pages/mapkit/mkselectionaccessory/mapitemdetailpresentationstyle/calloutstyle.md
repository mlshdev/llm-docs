> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle](https://developer.apple.com/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/calloutstyle)

# MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The style to use for a map item detail callout presentation.

## Declaration

```swift
enum CalloutStyle
```

<a id="overview"></a>

## Overview

In Swift, use [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle.full](calloutstyle/full.md) for map views on iPadOS and macOS. Use a sheet presentation to display full detail place information on iOS.

In Objective-C, use [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle.full](calloutstyle/full.md) for map views on iPadOS and macOS. Use a sheet presentation to display full detail place information on iOS.

## Topics

### Enumeration Cases

- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle.automatic](calloutstyle/automatic.md): A value that allows the framework to choose an appropriate callout style automatically.
- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle.compact](calloutstyle/compact.md): A compact, space-saving callout style.
- [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle.full](calloutstyle/full.md): A rich, detailed callout style that is suitable for large map views.

### Initializers

- [init(rawValue:)](calloutstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Place information

- [MKMapItemDetailViewControllerDelegate](../../mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKMapItemDetailViewController](../../mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKSelectionAccessory.MapItemDetailPresentationStyle](../mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKSelectionAccessory](../../mkselectionaccessory.md): The type of accessory to display for a selected annotation.

# MKMapItemDetailSelectionAccessoryCalloutStyle (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The style to use for a map item detail callout presentation.

## Declaration

```objectivec
enum MKMapItemDetailSelectionAccessoryCalloutStyle : NSInteger;
```

<a id="overview"></a>

## Overview

In Swift, use [MKMapItemDetailSelectionAccessoryCalloutStyleFull](calloutstyle/full.md) for map views on iPadOS and macOS. Use a sheet presentation to display full detail place information on iOS.

In Objective-C, use [MKMapItemDetailSelectionAccessoryCalloutStyleFull](calloutstyle/full.md) for map views on iPadOS and macOS. Use a sheet presentation to display full detail place information on iOS.

## Topics

### Enumeration Cases

- [MKMapItemDetailSelectionAccessoryCalloutStyleAutomatic](calloutstyle/automatic.md): A value that allows the framework to choose an appropriate callout style automatically.
- [MKMapItemDetailSelectionAccessoryCalloutStyleCompact](calloutstyle/compact.md): A compact, space-saving callout style.
- [MKMapItemDetailSelectionAccessoryCalloutStyleFull](calloutstyle/full.md): A rich, detailed callout style that is suitable for large map views.

## See Also

### Place information

- [MKMapItemDetailViewControllerDelegate](../../mkmapitemdetailviewcontrollerdelegate.md): The methods that you use to receive events from an associated map view controller.
- [MKMapItemDetailViewController](../../mkmapitemdetailviewcontroller.md): An object that displays detailed information about a map item.
- [MKMapItemDetailSelectionAccessoryPresentationStyle](../mapitemdetailpresentationstyle.md): The type of map item detail accessory presentation to use.
- [MKSelectionAccessory](../../mkselectionaccessory.md): The type of accessory to display for a selected annotation.
