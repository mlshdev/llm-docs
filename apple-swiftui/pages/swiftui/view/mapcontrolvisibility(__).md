> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/mapcontrolvisibility(_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrolvisibility(_:))

# mapControlVisibility(\_:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Configures all Map controls in the environment to have the specified visibility

## Declaration

```swift
@MainActor @preconcurrency func mapControlVisibility(_ visibility: Visibility) -> some View

```

## Parameters

- `visibility`: How modified map controls should show or hide

<a id="discussion"></a>

## Discussion

MapCompass, MapScaleView, and MapPitchToggle may automatically show and hide based on the current state of the Map. That may not be appropriate for all use cases, where always showing a control may be desirable.

```swift
HStack {
    MapCompass()
    MapScaleView()
    MapPitchToggle()
}
.mapControls(.visible)
```

Other controls don’t have an automatic visibility behavior, so they will always be visible when automatic is specified. Controls may also be hidden via this modifier when conditionalizing the view is not appropriate

```swift
MapUserLocationButton()
    .mapControls(.automatic)
MapZoomStepper()
    .mapControls(.hidden)
```

## See Also

### Getting location information

- [LocationButton](https://developer.apple.com/documentation/corelocationui/locationbutton): A SwiftUI button that grants one-time location authorization.
- [Map](https://developer.apple.com/documentation/mapkit/map): A view that displays an embedded map interface.
- [mapStyle(\_:)](mapstyle%28__%29.md): Specifies the map style to be used.
- [mapScope(\_:)](mapscope%28__%29.md): Creates a mapScope that SwiftUI uses to connect map controls to an associated map.
- [mapFeatureSelectionDisabled(\_:)](mapfeatureselectiondisabled%28__%29.md): Specifies which map features should have selection disabled.
- [mapFeatureSelectionAccessory(\_:)](mapfeatureselectionaccessory%28__%29.md): Specifies the selection accessory to display for a `MapFeature`
- [mapFeatureSelectionContent(content:)](mapfeatureselectioncontent%28content_%29.md): Specifies a custom presentation for the currently selected feature.
- [mapControls(\_:)](mapcontrols%28__%29.md): Configures all `Map` views in the associated environment to have standard size and position controls
- [mapCameraKeyframeAnimator(trigger:keyframes:)](mapcamerakeyframeanimator%28trigger_keyframes_%29.md): Uses the given keyframes to animate the camera of a `Map` when the given trigger value changes.
- [lookAroundViewer(isPresented:scene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](lookaroundviewer%28ispresented_scene_allowsnavigation_showsroadlabels_pointsofinterest_ondismiss_%29.md)
- [lookAroundViewer(isPresented:initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](lookaroundviewer%28ispresented_initialscene_allowsnavigation_showsroadlabels_pointsofinterest_ondismiss_%29.md)
- [onMapCameraChange(frequency:\_:)](onmapcamerachange%28frequency___%29.md): Performs an action when Map camera framing changes
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:)](mapitemdetailpopover%28ispresented_item_displaysmap_attachmentanchor_%29.md): Presents a map item detail popover.
- [mapItemDetailPopover(isPresented:item:displaysMap:attachmentAnchor:arrowEdge:)](mapitemdetailpopover%28ispresented_item_displaysmap_attachmentanchor_arrowedge_%29.md): Presents a map item detail popover.
- [mapItemDetailPopover(item:displaysMap:attachmentAnchor:)](mapitemdetailpopover%28item_displaysmap_attachmentanchor_%29.md): Presents a map item detail popover.
