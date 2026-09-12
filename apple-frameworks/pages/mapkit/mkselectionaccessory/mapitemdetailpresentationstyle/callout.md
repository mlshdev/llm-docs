> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/callout](https://developer.apple.com/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/callout)

# callout (Swift)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Show map item detail as an annotation callout on the map.

## Declaration

```swift
class var callout: MKSelectionAccessory.MapItemDetailPresentationStyle { get }
```

<a id="Discussion"></a>

## Discussion

Uses the [MKSelectionAccessory.MapItemDetailPresentationStyle.CalloutStyle.automatic](calloutstyle/automatic.md) callout style.

## See Also

### Creating a presentation style

- [automatic(presentationViewController:)](automatic%28presentationviewcontroller_%29-648ee.md): An appropriate presentation style will be chosen automatically.
- [automatic(presentationViewController:)](automatic%28presentationviewcontroller_%29-9t9vt.md): An appropriate presentation style will be chosen automatically.
- [callout(\_:)](callout%28__%29.md): Show map item detail as an annotation callout on the map
- [openInMaps](openinmaps.md): Display a small “Open in Apple Maps” link.
- [sheet(presentedFrom:)](sheet%28presentedfrom_%29.md): Show map item detail by presenting a sheet.

# callout (Objective-C)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Show map item detail as an annotation callout on the map.

## Declaration

```objectivec
@property (class, nonatomic, strong, readonly) MKMapItemDetailSelectionAccessoryPresentationStyle * callout;
```

<a id="Discussion"></a>

## Discussion

Uses the [MKMapItemDetailSelectionAccessoryCalloutStyleAutomatic](calloutstyle/automatic.md) callout style.

## See Also

### Creating a presentation style

- [automaticWithPresentationViewController:](../../mkmapitemdetailselectionaccessorypresentationstyle/automaticwithpresentationviewcontroller_.md): An appropriate presentation style will be chosen automatically.
- [calloutWithCalloutStyle:](../../mkmapitemdetailselectionaccessorypresentationstyle/calloutwithcalloutstyle_.md): Show map item detail as an annotation callout on the map
- [openInMaps](openinmaps.md): Display a small “Open in Apple Maps” link.
- [sheetPresentedFromViewController:](sheet%28presentedfrom_%29.md): Show map item detail by presenting a sheet.
