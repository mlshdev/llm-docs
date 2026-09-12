> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundpage/3375751-setliveview](https://developer.apple.com/documentation/playgroundsupport/playgroundpage/3375751-setliveview)

# setLiveView(\_:)

**Framework:** Playground Support  
**Kind:** Generic Instance Method  
**Availability:** macOS 10.15+ · Xcode 11.0+ · Swift Playgrounds 4.0+

Displays a SwiftUI view that shows the result of running the code that’s on the current page.

## Declaration

```swift
final func setLiveView<IncomingView>(_ newLiveView: IncomingView) where IncomingView : View
```

```swift
func setLiveView<IncomingView>(_ newLiveView: IncomingView) where IncomingView : View
```

## Parameters

- `newLiveView`: The view to display as the current page’s live view.

<a id="discussion"></a>

## Discussion

The live view appears in the assistant editor for the current playground page. There can be only one live view open at any time.

When you call [setLiveView(\_:)](3375751-setliveview.md), the system sets [needsIndefiniteExecution](1964501-needsindefiniteexecution.md) to `true`.

## See Also

### Configuring Live Views

- [current](1964509-current.md): The current playground page.
- [setLiveView(\_:)](3375752-setliveview.md): Displays a view that shows the result of running the code that’s on the current page.
- [liveView](1964506-liveview.md): A live view that shows the result of running the code that’s on the current page.
