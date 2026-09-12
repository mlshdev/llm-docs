> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontentview](https://developer.apple.com/documentation/mapkit/mapcontentview)

# MapContentView

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A view that contains content that displays on a map at a specific position, and that responds to specific interactions you specify.

## Declaration

```swift
@MainActor @preconcurrency struct MapContentView<SelectionValue, Content> where SelectionValue : Hashable, Content : MapContent
```

## Topics

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

### Setting the visibility of the title and subtitle

- [annotationTitles(\_:)](mapcontent/annotationtitles%28__%29.md): Sets the visibility of titles for markers and annotations.
- [annotationSubtitles(\_:)](mapcontent/annotationsubtitles%28__%29.md): Sets the visibility of subtitles for markers and annotations.

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

### Protocols

- [DynamicMapContent](dynamicmapcontent.md): A type of view that generates views from an underlying collection of data.
- [MapContent](mapcontent.md): A protocol used to construct map content such as controls, markers, and annotations.
- [MapContentBuilder](mapcontentbuilder.md): A result builder that creates map content from closures you provide.
