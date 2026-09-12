> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:)](https://developer.apple.com/documentation/mapkit/mapcontent/mapitemdetailselectionaccessory(_:))

# mapItemDetailSelectionAccessory(\_:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Specifies the selection accessory to display for the selected map item content.

## Declaration

```swift
@MainActor @preconcurrency func mapItemDetailSelectionAccessory(_ style: MapItemDetailSelectionAccessoryStyle? = .automatic) -> some MapContent

```

## Parameters

- `style`: The map item detail selection accessory style. If `nil`, no selection accessory appears.

## See Also

### Place information

- [MapItemDetailSelectionAccessoryStyle](../mapitemdetailselectionaccessorystyle.md): The map item detail selection accessory style.
- [mapFeatureSelectionAccessory(\_:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectionaccessory%28_:%29): Specifies the selection accessory to display for a `MapFeature`
- [callout(\_:)](../mapitemdetailselectionaccessorystyle/callout%28__%29.md): Presents the accessory as an annotation callout on the map.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28ispresented:item:displaysmap:attachmentanchor:%29): Presents a map item detail popover.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:arrowEdge:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28ispresented:item:displaysmap:attachmentanchor:arrowedge:%29): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28item:displaysmap:attachmentanchor:%29): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:arrowEdge:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailpopover%28item:displaysmap:attachmentanchor:arrowedge:%29): Presents a map item detail popover.
- [mapItemDetailSheet(isPresented:item:displaysMap:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailsheet%28ispresented:item:displaysmap:%29): Presents a map item detail sheet.
- [mapItemDetailSheet(item:displaysMap:)](https://developer.apple.com/documentation/swiftui/view/mapitemdetailsheet%28item:displaysmap:%29): Presents a map item detail sheet.
