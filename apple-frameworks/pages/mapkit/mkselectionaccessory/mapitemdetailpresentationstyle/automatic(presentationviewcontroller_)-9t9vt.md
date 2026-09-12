> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/automatic(presentationviewcontroller:)-9t9vt](https://developer.apple.com/documentation/mapkit/mkselectionaccessory/mapitemdetailpresentationstyle/automatic(presentationviewcontroller:)-9t9vt)

# automatic(presentationViewController:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** macOS 15.0+

An appropriate presentation style will be chosen automatically.

## Declaration

```swift
static func automatic(presentationViewController: NSViewController? = nil) -> MKSelectionAccessory.MapItemDetailPresentationStyle
```

## Parameters

- `presentationViewController`: Supplying a non-nil presentationViewController will enable sheet presentation, if appropriate.

## See Also

### Creating a presentation style

- [automatic(presentationViewController:)](automatic%28presentationviewcontroller_%29-648ee.md): An appropriate presentation style will be chosen automatically.
- [callout](callout.md): Show map item detail as an annotation callout on the map.
- [callout(\_:)](callout%28__%29.md): Show map item detail as an annotation callout on the map
- [openInMaps](openinmaps.md): Display a small “Open in Apple Maps” link.
- [sheet(presentedFrom:)](sheet%28presentedfrom_%29.md): Show map item detail by presenting a sheet.
