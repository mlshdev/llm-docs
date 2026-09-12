> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/map](https://developer.apple.com/documentation/mapkit/map)

# Map

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A view that displays an embedded map interface.

## Declaration

```swift
@MainActor @preconcurrency struct Map<Content> where Content : View
```

<a id="overview"></a>

## Overview

Use this SwiftUI view to display a `Map` with markers, annotations, and custom content you provide. You can configure the `Map` to optionally display the user’s location, track a location, and display various controls to allow them to interact with and control the map’s display. The following example displays a map of downtown San Francisco that shows different markers, and an annotation with custom view content at specific locations:

```swift
    struct ContentView: View {
        var body: some View {
            Map {
                Marker("San Francisco City Hall", coordinate: cityHallLocation)
                    .tint(.orange)
                Marker("San Francisco Public Library", coordinate: publicLibraryLocation)
                    .tint(.blue)
                Annotation("Diller Civic Center Playground", coordinate: playgroundLocation) {
                    ZStack {
                        RoundedRectangle(cornerRadius: 5)
                            .fill(Color.yellow)
                        Text("🛝")
                            .padding(5)
                    }
                }
            }
            .mapControlVisibility(.hidden)
        }
    }
```

You create markers, annotations, and overlays using [MapContentBuilder](mapcontentbuilder.md) with any of several [MapContent](mapcontent.md) types including:

- [Annotation](annotation.md)
- [UserAnnotation](userannotation.md)
- [Marker](marker.md)
- [MapCircle](mapcircle.md)
- [MapPolygon](mappolygon.md)
- [MapPolyline](mappolyline.md)

You can also add a variety of controls to allow a person to interact with the map to change the map’s scale, display or hide the device’s current location, and so on:

- [MapCompass](mapcompass.md)
- [MapPitchToggle](mappitchtoggle.md)
- [MapPitchSlider](mappitchslider.md)
- [MapScaleView](mapscaleview.md)
- [MapUserLocationButton](mapuserlocationbutton.md)
- [MapZoomStepper](mapzoomstepper.md)

## Topics

### Creating a map

- [init(bounds:interactionModes:scope:)](map/init%28bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, and scope you provide.
- [init(bounds:interactionModes:scope:content:)](map/init%28bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, scope, and content you provide.
- [init(bounds:interactionModes:selection:scope:)](map/init%28bounds_interactionmodes_selection_scope_%29-11lec.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, a binding to a map feature, and scope you provide.
- [init(bounds:interactionModes:selection:scope:)](map/init%28bounds_interactionmodes_selection_scope_%29-236di.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the bounds, interaction modes, the selected map feature, and scope you provide.
- [init(bounds:interactionModes:selection:scope:content:)](map/init%28bounds_interactionmodes_selection_scope_content_%29-28wns.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, selected map feature, scope, and map content you provide.
- [init(bounds:interactionModes:selection:scope:content:)](map/init%28bounds_interactionmodes_selection_scope_content_%29-2tdbr.md): Conforms when `Content` conforms to `View`. Creates a new map with the bounds, interaction modes, selected value, scope, and map content you provide.
- [init(initialPosition:bounds:interactionModes:scope:)](map/init%28initialposition_bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, and scope you provide.
- [init(initialPosition:bounds:interactionModes:scope:content:)](map/init%28initialposition_bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and map content you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:)](map/init%28initialposition_bounds_interactionmodes_selection_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, selected map feature, and scope you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:content:)](map/init%28initialposition_bounds_interactionmodes_selection_scope_content_%29-9feos.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected map feature, scope, and content you provide.
- [init(initialPosition:bounds:interactionModes:selection:scope:content:)](map/init%28initialposition_bounds_interactionmodes_selection_scope_content_%29-451vp.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected map feature, scope, and content you provide.
- [init(position:bounds:interactionModes:scope:)](map/init%28position_bounds_interactionmodes_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new, empty map with the initial camera position, bounds, interaction modes, and scope you provide.
- [init(position:bounds:interactionModes:scope:content:)](map/init%28position_bounds_interactionmodes_scope_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:)](map/init%28position_bounds_interactionmodes_selection_scope_%29.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:content:)](map/init%28position_bounds_interactionmodes_selection_scope_content_%29-47y4p.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected feature, scope, and content you provide.
- [init(position:bounds:interactionModes:selection:scope:content:)](map/init%28position_bounds_interactionmodes_selection_scope_content_%29-9xq1q.md): Conforms when `Content` conforms to `View`. Creates a new map with the initial camera position, bounds, interaction modes, selected feature, scope, and content you provide.
- [MapInteractionModes](mapinteractionmodes.md): Options that indicate the user interactions that the map responds to.

### Managing feature selection

- [mapFeatureSelectionContent(content:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectioncontent%28content:%29): Specifies a custom presentation for the currently selected feature.
- [mapFeatureSelectionDisabled(\_:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectiondisabled%28_:%29): Specifies which map features should have selection disabled.

### Managing Look Around view presentation

- [lookAroundViewer(isPresented:initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/lookaroundviewer%28ispresented:initialscene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:%29)
- [lookAroundViewer(isPresented:scene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/lookaroundviewer%28ispresented:scene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:%29)

### Managing map control sizing and visibility

- [mapControlVisibility(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrolvisibility%28_:%29): Configures all Map controls in the environment to have the specified visibility
- [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29): Configures all `Map` views in the associated environment to have standard size and position controls

### Managing the camera

- [mapCameraKeyframeAnimator(trigger:keyframes:)](https://developer.apple.com/documentation/swiftui/view/mapcamerakeyframeanimator%28trigger:keyframes:%29): Uses the given keyframes to animate the camera of a `Map` when the given trigger value changes.
- [onMapCameraChange(frequency:\_:)](https://developer.apple.com/documentation/swiftui/view/onmapcamerachange%28frequency:_:%29-2pcga): Performs an action when Map camera framing changes
- [onMapCameraChange(frequency:\_:)](https://developer.apple.com/documentation/swiftui/view/onmapcamerachange%28frequency:_:%29): Performs an action when Map camera framing changes

### Setting the namespace Identifier

- [mapScope(\_:)](https://developer.apple.com/documentation/swiftui/view/mapscope%28_:%29): Creates a mapScope that SwiftUI uses to connect map controls to an associated map.

### Setting the map style

- [mapStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/mapstyle%28_:%29): Specifies the map style to be used.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Map protocols and view modifiers that are no longer supported.

### Displaying place information

- [mapFeatureSelectionAccessory(\_:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectionaccessory%28_:%29): Specifies the selection accessory to display for a `MapFeature`
- [mapItemDetailSelectionAccessory(\_:)](mapcontent/mapitemdetailselectionaccessory%28__%29.md): Specifies the selection accessory to display for the selected map item content.

### Initializers

- [init(bounds:interactionModes:selection:scope:content:)](map/init%28bounds_interactionmodes_selection_scope_content_%29-335qt.md): Conforms when `Content` conforms to `View`.
- [init(initialPosition:bounds:interactionModes:selection:scope:content:)](map/init%28initialposition_bounds_interactionmodes_selection_scope_content_%29-2u4ry.md): Conforms when `Content` conforms to `View`.
- [init(position:bounds:interactionModes:selection:scope:content:)](map/init%28position_bounds_interactionmodes_selection_scope_content_%29-96bhq.md): Conforms when `Content` conforms to `View`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Essentials

- [MapStyle](mapstyle.md): A style that you can apply to a map.
