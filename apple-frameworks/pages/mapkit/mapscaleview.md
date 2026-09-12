> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapscaleview](https://developer.apple.com/documentation/mapkit/mapscaleview)

# MapScaleView

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS

Displays a legend with distance information for the associated map.

## Declaration

```swift
@MainActor @preconcurrency struct MapScaleView
```

<a id="overview"></a>

## Overview

You can use this with [Map](map.md) as a standalone view, for example:

```swift
    struct ScaleTestView: View {
        @Namespace var mapScope

        var body: some View {
            VStack {
                Map(scope: mapScope)
                MapCompass(scope: mapScope)
            }
            .mapScope(mapScope)
        }
    }
```

The scale indicator grows and shrinks (although visually, its frame is static) based on the zoom level of the map. By default the leading edge remains anchored and the trailing edge moves as the scale changes. If the scale is trailing aligned, then it may be more visually appealing to anchor the `ScaleView` to the trailing edge

```swift
    ZStack(alignment: .trailing) {
        Map(mapScope)
        MapScaleView(anchorEdge: .trailing, scope: mapScope)
    }
    .mapScope(mapScope)
```

You can also use `MapScaleView` with the [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29) modifier, as shown in this example:

```swift
    Map()
        .mapControls {
            MapScaleView()
        }
```

## Topics

### Creating a map scale view

- [init(anchorEdge:scope:)](mapscaleview/init%28anchoredge_scope_%29.md): Creates a map scale view.
- [init(alignment:scope:)](mapscaleview/init%28alignment_scope_%29.md): Creates a scale view with the provided alignment and scope.

### Managing map control sizing and visibility

- [mapControlVisibility(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrolvisibility%28_:%29): Configures all Map controls in the environment to have the specified visibility
- [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29): Configures all `Map` views in the associated environment to have standard size and position controls
- [controlSize(\_:)](https://developer.apple.com/documentation/swiftui/view/controlsize%28_:%29): Sets the size for controls within this view.

### Setting the namespace Identifier

- [mapScope(\_:)](https://developer.apple.com/documentation/swiftui/view/mapscope%28_:%29): Creates a mapScope that SwiftUI uses to connect map controls to an associated map.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Map controls

- [MapCompass](mapcompass.md): A view that reflects the current orientation of the associated map.
- [MapLocationCompass](maplocationcompass.md): A view that displays a combined user location button and map compass.
- [MapPitchSlider](mappitchslider.md): A slider control that allows a person to change the pitch of the map.
- [MapPitchToggle](mappitchtoggle.md): A button that sets the pitch of the associated map.
- [MapUserLocationButton](mapuserlocationbutton.md): A button that sets the framing of the associated map to the user location.
- [MapZoomStepper](mapzoomstepper.md): Buttons a person uses to adjust the zoom level of the map.
