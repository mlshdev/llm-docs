> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/sheet(presentedfrom:)](https://developer.apple.com/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/sheet(presentedfrom:))

# sheet(presentedFrom:) (Swift)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Show map item detail by presenting a sheet.

## Declaration

```swift
class func sheet(presentedFrom viewController: UIViewController) -> MKSelectionAccessory.MapItemDetailPresentationStyle
```

```swift
class func sheet(presentedFrom viewController: NSViewController) -> MKSelectionAccessory.MapItemDetailPresentationStyle
```

## Parameters

- `viewController`: The view controller that will present the sheet.

## See Also

### Creating a presentation style

- [automatic(presentationViewController:)](automatic%28presentationviewcontroller_%29-648ee.md): An appropriate presentation style will be chosen automatically.
- [automatic(presentationViewController:)](automatic%28presentationviewcontroller_%29-9t9vt.md): An appropriate presentation style will be chosen automatically.
- [callout](callout.md): Show map item detail as an annotation callout on the map.
- [callout(\_:)](callout%28__%29.md): Show map item detail as an annotation callout on the map
- [openInMaps](openinmaps.md): Display a small “Open in Apple Maps” link.

# sheetPresentedFromViewController: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Show map item detail by presenting a sheet.

## Declaration

```objectivec
+ (MKMapItemDetailSelectionAccessoryPresentationStyle *) sheetPresentedFromViewController:(UIViewController *) viewController;
```

```objectivec
+ (MKMapItemDetailSelectionAccessoryPresentationStyle *) sheetPresentedFromViewController:(NSViewController *) viewController;
```

## Parameters

- `viewController`: The view controller that will present the sheet.

## See Also

### Creating a presentation style

- [automaticWithPresentationViewController:](../../mkmapitemdetailselectionaccessorypresentationstyle/automaticwithpresentationviewcontroller_.md): An appropriate presentation style will be chosen automatically.
- [callout](callout.md): Show map item detail as an annotation callout on the map.
- [calloutWithCalloutStyle:](../../mkmapitemdetailselectionaccessorypresentationstyle/calloutwithcalloutstyle_.md): Show map item detail as an annotation callout on the map
- [openInMaps](openinmaps.md): Display a small “Open in Apple Maps” link.
