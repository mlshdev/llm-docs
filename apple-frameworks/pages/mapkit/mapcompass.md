> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcompass](https://developer.apple.com/documentation/mapkit/mapcompass)

# MapCompass

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A view that reflects the current orientation of the associated map.

## Declaration

```swift
@MainActor @preconcurrency struct MapCompass
```

<a id="overview"></a>

## Overview

You can use `MapCompass` with a [Map](map.md) as a stand alone view, as shown in the following example:

```swift
    struct CompassButtonTestView: View {
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

You can also use `MapCompass` with the [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29), modifier, as shown below:

```swift
    Map()
        .mapControls {
            MapCompass()
        }
```

Tapping the compass reorients the map so that North is at the top of the [Map](map.md) view.

## Topics

### Creating a map compass

- [init(scope:)](mapcompass/init%28scope_%29.md): Creates a new map compass with the scope you specify.

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

- [MapLocationCompass](maplocationcompass.md): A view that displays a combined user location button and map compass.
- [MapPitchSlider](mappitchslider.md): A slider control that allows a person to change the pitch of the map.
- [MapPitchToggle](mappitchtoggle.md): A button that sets the pitch of the associated map.
- [MapScaleView](mapscaleview.md): Displays a legend with distance information for the associated map.
- [MapUserLocationButton](mapuserlocationbutton.md): A button that sets the framing of the associated map to the user location.
- [MapZoomStepper](mapzoomstepper.md): Buttons a person uses to adjust the zoom level of the map.
