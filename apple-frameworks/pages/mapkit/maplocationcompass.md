> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/maplocationcompass](https://developer.apple.com/documentation/mapkit/maplocationcompass)

# MapLocationCompass

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** watchOS 10.0+

A view that displays a combined user location button and map compass.

## Declaration

```swift
@MainActor @preconcurrency struct MapLocationCompass
```

<a id="overview"></a>

## Overview

In watchOS 10 and later, this view displays a combined [MapUserLocationButton](mapuserlocationbutton.md) and [MapCompass](mapcompass.md) control. When the map camera has a heading of zero (where north is up), this view shows the user location button. When the map camera is in a rotated state, it shows a compass.

Use `MapLocationCompass` in conjunction with [Map](map.md) as a standalone view, as shown in this example:

```swift
    struct LocationCompassTestView: View {
        @Namespace var mapScope

        var body: some View {
            VStack {
                Map(scope: mapScope)
                MapLocationCompass(scope: mapScope)
            }
            .mapScope(mapScope)
        }
    }
```

You can also use `MapLocationCompass` in conjunction with the [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29) modifier. For example:

```swift
    Map()
        .mapControls {
            MapLocationCompass()
        }
```

## Topics

### Creating a map loction compass

- [init(scope:)](maplocationcompass/init%28scope_%29.md): Creates a new map location compass with the provided scope.

### Managing map control sizing and visibility

- [mapControlVisibility(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrolvisibility%28_:%29): Configures all Map controls in the environment to have the specified visibility
- [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29): Configures all `Map` views in the associated environment to have standard size and position controls

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
- [MapPitchSlider](mappitchslider.md): A slider control that allows a person to change the pitch of the map.
- [MapPitchToggle](mappitchtoggle.md): A button that sets the pitch of the associated map.
- [MapScaleView](mapscaleview.md): Displays a legend with distance information for the associated map.
- [MapUserLocationButton](mapuserlocationbutton.md): A button that sets the framing of the associated map to the user location.
- [MapZoomStepper](mapzoomstepper.md): Buttons a person uses to adjust the zoom level of the map.
