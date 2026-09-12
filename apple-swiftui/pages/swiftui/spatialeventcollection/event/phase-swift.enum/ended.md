> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/event/phase-swift.enum/ended](https://developer.apple.com/documentation/swiftui/spatialeventcollection/event/phase-swift.enum/ended)

# SpatialEventCollection.Event.Phase.ended

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+ · watchOS 11.0+

The state associated with this phase ended normally and won’t produce any more updates.

## Declaration

```swift
case ended
```

## See Also

### Getting the phase

- [SpatialEventCollection.Event.Phase.active](active.md): The phase is active and the state associated with it is guaranteed to produce at least one more update.
- [SpatialEventCollection.Event.Phase.cancelled](cancelled.md): The state associated with this phase was canceled and won’t produce any more updates.
