> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/handlesgamecontrollerevents(matching:)

# handlesGameControllerEvents(matching:)

**Framework:** GameController  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Specifies the game controllers events which should be delivered through the GameController framework when the view, or one of its descendants has focus.

## Declaration

```swift
nonisolated func handlesGameControllerEvents(matching types: GCUIEventTypes) -> some View

```

<a id="discussion"></a>

## Discussion

```swift
SpriteView(scene: MyGameScene())
.handlesGameControllerEvents(matching: .gamepad)
.focused(true)
```
