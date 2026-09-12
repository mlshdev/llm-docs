> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/map/init(position:bounds:interactionmodes:selection:scope:content:)-96bhq](https://developer.apple.com/documentation/mapkit/map/init(position:bounds:interactionmodes:selection:scope:content:)-96bhq)

# init(position:bounds:interactionModes:selection:scope:content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency init<SelectedValue, C>(position: Binding<MapCameraPosition>, bounds: MapCameraBounds? = nil, interactionModes: MapInteractionModes = .all, selection: Binding<SelectedValue?>, scope: Namespace.ID? = nil, @MapContentBuilder content: () -> C) where Content == MapSelectableContentView<SelectedValue, C>, SelectedValue : MapSelectable, C : MapContent
```
