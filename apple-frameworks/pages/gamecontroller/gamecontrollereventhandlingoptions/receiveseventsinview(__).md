> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gamecontrollereventhandlingoptions/receiveseventsinview(_:)](https://developer.apple.com/documentation/gamecontroller/gamecontrollereventhandlingoptions/receiveseventsinview(_:))

# receivesEventsInView(\_:)

**Framework:** GameController  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A Boolean option that determines whether events are delivered exclusively through the GameController framework.

## Declaration

```swift
static func receivesEventsInView(_ receivesEventsInView: Bool) -> GameControllerEventHandlingOptions
```

<a id="discussion"></a>

## Discussion

If `true`, events are delivered both through the Game Controller framework and as SwiftUI events to your app’s views and gesture recognizers.

If `false`, events are delivered **exclusively** through the Game Controller framework.
