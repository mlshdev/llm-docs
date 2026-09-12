> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/event/trackingareaidentifier](https://developer.apple.com/documentation/swiftui/spatialeventcollection/event/trackingareaidentifier)

# trackingAreaIdentifier

**Framework:** CompositorServices  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

The tracking area identifier of the event, if the gesture is attached to a `CompositorLayer`, or `nil` if the event didn’t hit a tracking area or the gesture isn’t attached to a `CompositorLayer`.

## Declaration

```swift
var trackingAreaIdentifier: LayerRenderer.Drawable.TrackingArea.Identifier { get }
```
