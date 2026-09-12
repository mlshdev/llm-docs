> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onworldrecenter(action:)](https://developer.apple.com/documentation/swiftui/view/onworldrecenter(action:))

# onWorldRecenter(action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Adds an action to perform when recentering the view with the digital crown.

## Declaration

```swift
nonisolated func onWorldRecenter(action: @escaping @MainActor () -> Void) -> some View

```

## Parameters

- `action`: A closure to run when the view is recentered. This will run when the app has been recentered and is about to fade back in, equivalent to `WorldRecenterPhase.ended`.

<a id="discussion"></a>

## Discussion

```swift
struct ContentView: View {
    @State private var mascot = Mascot()
    var body: some View {
        WelcomeView(mascot: mascot)
            .onWorldRecenter {
                mascot.wave()
            }
    }
}
```

When the user recenters their view, the app will fade out and then be repositioned. Once it has been repositioned, the action will be called and the app will fade back in. The action will be called if the app is not backgrounded or suspended.

## See Also

### Immersive spaces

- [onImmersionChange(initial:\_:)](onimmersionchange%28initial___%29.md): Performs an action when the immersion state of your app changes.
- [immersiveEnvironmentPicker(content:)](immersiveenvironmentpicker%28content_%29.md): Add menu items to open immersive spaces from a media player’s environment picker.
