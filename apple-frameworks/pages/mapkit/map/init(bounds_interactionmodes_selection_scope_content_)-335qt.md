> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/map/init(bounds:interactionmodes:selection:scope:content:)-335qt

# init(bounds:interactionModes:selection:scope:content:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency init<SelectedValue, C>(bounds: MapCameraBounds? = nil, interactionModes: MapInteractionModes = .all, selection: Binding<SelectedValue?>, scope: Namespace.ID? = nil, @MapContentBuilder content: () -> C) where Content == MapSelectableContentView<SelectedValue, C>, SelectedValue : MapSelectable, C : MapContent
```
