> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemdetailselectionaccessorypresentationstyle/calloutwithcalloutstyle:](https://developer.apple.com/documentation/mapkit/mkmapitemdetailselectionaccessorypresentationstyle/calloutwithcalloutstyle:)

# calloutWithCalloutStyle:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Show map item detail as an annotation callout on the map

## Declaration

```objectivec
+ (MKMapItemDetailSelectionAccessoryPresentationStyle *) calloutWithCalloutStyle:(MKMapItemDetailSelectionAccessoryCalloutStyle) style;
```

## Parameters

- `style`: The callout style to use.

## See Also

### Creating a presentation style

- [automaticWithPresentationViewController:](automaticwithpresentationviewcontroller_.md): An appropriate presentation style will be chosen automatically.
- [callout](../mkselectionaccessory/mapitemdetailpresentationstyle/callout.md): Show map item detail as an annotation callout on the map.
- [openInMaps](../mkselectionaccessory/mapitemdetailpresentationstyle/openinmaps.md): Display a small “Open in Apple Maps” link.
- [sheetPresentedFromViewController:](../mkselectionaccessory/mapitemdetailpresentationstyle/sheet%28presentedfrom_%29.md): Show map item detail by presenting a sheet.
