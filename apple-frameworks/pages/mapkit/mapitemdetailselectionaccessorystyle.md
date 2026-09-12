> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapitemdetailselectionaccessorystyle](https://developer.apple.com/documentation/mapkit/mapitemdetailselectionaccessorystyle)

# MapItemDetailSelectionAccessoryStyle

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The map item detail selection accessory style.

## Declaration

```swift
struct MapItemDetailSelectionAccessoryStyle
```

## Topics

### Accessory styles

- [automatic](mapitemdetailselectionaccessorystyle/automatic.md): A value that allows the framework to choose an appropriate callout style automatically.
- [callout](mapitemdetailselectionaccessorystyle/callout.md): The accessory, shown as an annotation callout on the map.
- [caption](mapitemdetailselectionaccessorystyle/caption.md): An “Open in Apple Maps” link below the content’s label.
- [sheet](mapitemdetailselectionaccessorystyle/sheet.md): The map item detail sheet.

### Callout styles

- [MapItemDetailSelectionAccessoryStyle.CalloutStyle](mapitemdetailselectionaccessorystyle/calloutstyle.md): The style to use for callout content.
- [automatic](mapitemdetailselectionaccessorystyle/calloutstyle/automatic.md): A value that allows the framework to choose an appropriate callout style automatically.
- [compact](mapitemdetailselectionaccessorystyle/calloutstyle/compact.md): A compact, space-saving callout style.
- [full](mapitemdetailselectionaccessorystyle/calloutstyle/full.md): A rich, detailed callout style that is suitable for large map views.

### Type Methods

- [callout(\_:)](mapitemdetailselectionaccessorystyle/callout%28__%29.md): Presents the accessory as an annotation callout on the map.

## See Also

### Place information

- [mapItemDetailSelectionAccessory(\_:)](mapcontent/mapitemdetailselectionaccessory%28__%29.md): Specifies the selection accessory to display for the selected map item content.
- [mapFeatureSelectionAccessory(\_:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectionaccessory%28_:%29): Specifies the selection accessory to display for a `MapFeature`
- [callout(\_:)](mapitemdetailselectionaccessorystyle/callout%28__%29.md): Presents the accessory as an annotation callout on the map.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28ispresented:item:displaysmap:attachmentanchor:%29): Presents a map item detail popover.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:arrowEdge:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28ispresented:item:displaysmap:attachmentanchor:arrowedge:%29): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28item:displaysmap:attachmentanchor:%29): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:arrowEdge:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28item:displaysmap:attachmentanchor:arrowedge:%29): Presents a map item detail popover.
- [mapItemDetailSheet(isPresented:item:displaysMap:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailsheet%28ispresented:item:displaysmap:%29): Presents a map item detail sheet.
- [mapItemDetailSheet(item:displaysMap:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailsheet%28item:displaysmap:%29): Presents a map item detail sheet.
