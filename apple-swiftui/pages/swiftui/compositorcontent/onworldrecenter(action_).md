> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontent/onworldrecenter(action:)](https://developer.apple.com/documentation/swiftui/compositorcontent/onworldrecenter(action:))

# onWorldRecenter(action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Adds an action to perform when recentering the view with the digital crown.

## Declaration

```swift
nonisolated func onWorldRecenter(action: @escaping @MainActor () -> Void) -> some CompositorContent

```

## Parameters

- `action`: A closure to run when the content is recentered. This will run when the app has been recentered and is about to fade back in, equivalent to `WorldRecenterPhase.ended`.

<a id="discussion"></a>

## Discussion

When the user recenters their content, the app will fade out and then be repositioned. Once it has been repositioned, the action will be called and the app will fade back in. The action will be called if the app is not backgrounded or suspended.
