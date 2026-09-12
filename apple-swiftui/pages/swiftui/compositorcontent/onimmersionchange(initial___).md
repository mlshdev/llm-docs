> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontent/onimmersionchange(initial:_:)](https://developer.apple.com/documentation/swiftui/compositorcontent/onimmersionchange(initial:_:))

# onImmersionChange(initial:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Performs an action when the immersion state of your app changes.

## Declaration

```swift
nonisolated func onImmersionChange(initial: Bool = true, _ action: @escaping (ImmersionChangeContext, ImmersionChangeContext) -> Void) -> some CompositorContent

```

## Parameters

- `initial`: Whether the action should be run when this view initially appears.
- `action`: A closure to run when the immersion changes.

  - **oldValue**: The value representing the old state of immersion.
  - **newValue**: The value representing the current state of immersion.

<a id="discussion"></a>

## Discussion

Depending on the immersion style used for the Immersive Space in your app, the amount of immersion can be controlled by actions such as turning the Digital Crown. Use this modifier to define a closure that is run when the immersion state changes.
