> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/mapfeatureselectionaccessory(_:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectionaccessory(_:))

# mapFeatureSelectionAccessory(\_:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Specifies the selection accessory to display for a `MapFeature`

## Declaration

```swift
@MainActor @preconcurrency func mapFeatureSelectionAccessory(_ style: MapItemDetailSelectionAccessoryStyle? = .automatic) -> some View

```

## Parameters

- `style`: The map item detail selection accessory style. If `nil`, no selection accessory will be displayed.

## See Also

### Getting location information

- [LocationButton](https://developer.apple.com/documentation/corelocationui/locationbutton): A SwiftUI button that grants one-time location authorization.
- [Map](https://developer.apple.com/documentation/mapkit/map): A view that displays an embedded map interface.
- [mapStyle(\_:)](mapstyle%28__%29.md): Specifies the map style to be used.
- [mapScope(\_:)](mapscope%28__%29.md): Creates a mapScope that SwiftUI uses to connect map controls to an associated map.
- [mapFeatureSelectionDisabled(\_:)](mapfeatureselectiondisabled%28__%29.md): Specifies which map features should have selection disabled.
- [mapFeatureSelectionContent(content:)](mapfeatureselectioncontent%28content_%29.md): Specifies a custom presentation for the currently selected feature.
- [mapControls(\_:)](mapcontrols%28__%29.md): Configures all `Map` views in the associated environment to have standard size and position controls
- [mapControlVisibility(\_:)](mapcontrolvisibility%28__%29.md): Configures all Map controls in the environment to have the specified visibility
- [mapCameraKeyframeAnimator(trigger:keyframes:)](mapcamerakeyframeanimator%28trigger_keyframes_%29.md): Uses the given keyframes to animate the camera of a `Map` when the given trigger value changes.
- [lookAroundViewer(isPresented:scene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](lookaroundviewer%28ispresented_scene_allowsnavigation_showsroadlabels_pointsofinterest_ondismiss_%29.md)
- [lookAroundViewer(isPresented:initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](lookaroundviewer%28ispresented_initialscene_allowsnavigation_showsroadlabels_pointsofinterest_ondismiss_%29.md)
- [onMapCameraChange(frequency:\_:)](onmapcamerachange%28frequency___%29.md): Performs an action when Map camera framing changes
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:)](mapitemdetailpopover%28ispresented_item_displaysmap_attachmentanchor_%29.md): Presents a map item detail popover.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:arrowEdge:)](mapitemdetailpopover%28ispresented_item_displaysmap_attachmentanchor_arrowedge_%29.md): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:)](mapitemdetailpopover%28item_displaysmap_attachmentanchor_%29.md): Presents a map item detail popover.
