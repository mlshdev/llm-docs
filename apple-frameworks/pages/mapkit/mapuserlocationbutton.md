> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapuserlocationbutton](https://developer.apple.com/documentation/mapkit/mapuserlocationbutton)

# MapUserLocationButton

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A button that sets the framing of the associated map to the user location.

## Declaration

```swift
@MainActor @preconcurrency struct MapUserLocationButton
```

<a id="overview"></a>

## Overview

Use `MapUserLocationButton` in conjunction with [Map](map.md) as a stand alone view, as shown in this example:

```swift
    struct LocationButtonTestView: View {
        @Namespace var mapScope
        var body: some View {
            VStack {
                Map(scope: mapScope)
                MapUserLocationButton(scope: mapScope)
            }
            .mapScope(mapScope)
        }
    }
```

You can also use `MapUserLocationButton` in conjunction with the [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29) modifier as shown in this example:

```swift
    Map()
        .mapControls {
            MapUserLocationButton()
        }
```

## Topics

### Creating a map user location button

- [init(scope:)](mapuserlocationbutton/init%28scope_%29.md): Creates a new user location button with the scope you specify.

### Managing map control sizing and visibility

- [mapControlVisibility(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrolvisibility%28_:%29): Configures all Map controls in the environment to have the specified visibility
- [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29): Configures all `Map` views in the associated environment to have standard size and position controls
- [controlSize(\_:)](https://developer.apple.com/documentation/swiftui/view/controlsize%28_:%29): Sets the size for controls within this view.

### Setting the namespace Identifier

- [mapScope(\_:)](https://developer.apple.com/documentation/swiftui/view/mapscope%28_:%29): Creates a mapScope that SwiftUI uses to connect map controls to an associated map.

### Setting the tint and border shape

- [buttonBorderShape(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonbordershape%28_:%29): Sets the border shape for buttons in this view.
- [tint(\_:)](mapcontent/tint%28__%29.md): The tint shape style to apply to map content.

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
- [MapScaleView](mapscaleview.md): Displays a legend with distance information for the associated map.
- [MapZoomStepper](mapzoomstepper.md): Buttons a person uses to adjust the zoom level of the map.
