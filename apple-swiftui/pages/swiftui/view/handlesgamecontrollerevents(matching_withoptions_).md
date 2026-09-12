> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/handlesgamecontrollerevents(matching:withoptions:)](https://developer.apple.com/documentation/swiftui/view/handlesgamecontrollerevents(matching:withoptions:))

# handlesGameControllerEvents(matching:withOptions:)

**Framework:** GameController  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Specifies the game controllers events which should be delivered through the GameController framework when the view or one of its descendants has focus.

## Declaration

```swift
nonisolated func handlesGameControllerEvents(matching types: GCUIEventTypes, withOptions options: GameControllerEventHandlingOptions?) -> some View

```

<a id="discussion"></a>

## Discussion

```swift
SpriteView(scene: MyGameScene())
.handlesGameControllerEvents(matching: .gamepad, withOptions: .defaultOptions)
.focused(true)
```

## See Also

### Game controller

- [handlesGameControllerEvents(matching:)](handlesgamecontrollerevents%28matching_%29.md): Specifies the game controllers events which should be delivered through the GameController framework when the view, or one of its descendants has focus.
