> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapreader](https://developer.apple.com/documentation/mapkit/mapreader)

# MapReader

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A container view that defines its contents as a function of information about the first contained map.

## Declaration

```swift
@MainActor @preconcurrency struct MapReader<Content> where Content : View
```

<a id="overview"></a>

## Overview

The map reader’s content builder receives a [MapProxy](mapproxy.md) instance. You can use this instance to get the information you’ll need to convert between a [MapCamera](mapcamera.md) and a [MKMapRect](mkmaprect.md) or [MKCoordinateRegion](mkcoordinateregion.md).

## Topics

### Creating a map reader

- [init(content:)](mapreader/init%28content_%29.md): Creates an instance that allows view content to reference information about a contained map.

### Managing Look Around view presentation

- [lookAroundViewer(isPresented:initialScene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/lookaroundviewer%28ispresented:initialscene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:%29)
- [lookAroundViewer(isPresented:scene:allowsNavigation:showsRoadLabels:pointsOfInterest:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/lookaroundviewer%28ispresented:scene:allowsnavigation:showsroadlabels:pointsofinterest:ondismiss:%29)

### Managing map controls

- [mapControlVisibility(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrolvisibility%28_:%29): Configures all Map controls in the environment to have the specified visibility
- [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29): Configures all `Map` views in the associated environment to have standard size and position controls

### Managing the camera

- [mapCameraKeyframeAnimator(trigger:keyframes:)](https://developer.apple.com/documentation/swiftui/view/mapcamerakeyframeanimator%28trigger:keyframes:%29): Uses the given keyframes to animate the camera of a `Map` when the given trigger value changes.
- [onMapCameraChange(frequency:\_:)](https://developer.apple.com/documentation/swiftui/view/onmapcamerachange%28frequency:_:%29-2pcga): Performs an action when Map camera framing changes
- [onMapCameraChange(frequency:\_:)](https://developer.apple.com/documentation/swiftui/view/onmapcamerachange%28frequency:_:%29): Performs an action when Map camera framing changes

### Managing feature selection

- [mapFeatureSelectionContent(content:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectioncontent%28content:%29): Specifies a custom presentation for the currently selected feature.
- [mapFeatureSelectionDisabled(\_:)](https://developer.apple.com/documentation/swiftui/view/mapfeatureselectiondisabled%28_:%29): Specifies which map features should have selection disabled.

### Setting the namespace Identifier

- [mapScope(\_:)](https://developer.apple.com/documentation/swiftui/view/mapscope%28_:%29): Creates a mapScope that SwiftUI uses to connect map controls to an associated map.

### Setting the map style

- [mapStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/mapstyle%28_:%29): Specifies the map style to be used.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Structures

- [DefaultUserAnnotationContent](defaultuserannotationcontent.md): A structure that represents the view to show at the user’s location on the map.
- [EmptyMapContent](emptymapcontent.md): A map content element that doesn’t contain any content.
- [MapProxy](mapproxy.md): A proxy for accessing sizing information about a given map view.
- [TupleMapContent](tuplemapcontent.md): A view created from a Swift tuple of map content values.
- [MapSelectableContentView](mapselectablecontentview.md)
