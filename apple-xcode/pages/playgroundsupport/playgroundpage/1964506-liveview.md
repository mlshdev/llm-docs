> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundpage/1964506-liveview](https://developer.apple.com/documentation/playgroundsupport/playgroundpage/1964506-liveview)

# liveView

**Framework:** Playground Support  
**Kind:** Instance Property  
**Availability:** macOS 11.0+ · Xcode 10.2+ · Swift Playgrounds 2.0+

A live view that shows the result of running the code that’s on the current page.

## Declaration

```swift
final var liveView: (any PlaygroundLiveViewable)? { get set }
```

```swift
var liveView: PlaygroundLiveViewable? { get set }
```

<a id="discussion"></a>

## Discussion

Display a live view by setting [liveView](1964506-liveview.md) to an object that conforms to the [PlaygroundLiveViewable](../playgroundliveviewable.md) protocol. Dismiss any open live view by setting [liveView](1964506-liveview.md) to `nil`.

The live view is displayed in the assistant editor for the current playground page. There can be only one live view open at any time.

Displaying the live view requires that [needsIndefiniteExecution](1964501-needsindefiniteexecution.md) be set to [true](https://developer.apple.com/documentation/swift/true). When [liveView](1964506-liveview.md) is set to a non-`nil` value, the system sets [needsIndefiniteExecution](1964501-needsindefiniteexecution.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Live Views

- [current](1964509-current.md): The current playground page.
- [setLiveView(\_:)](3375751-setliveview.md): Displays a SwiftUI view that shows the result of running the code that’s on the current page.
- [setLiveView(\_:)](3375752-setliveview.md): Displays a view that shows the result of running the code that’s on the current page.
