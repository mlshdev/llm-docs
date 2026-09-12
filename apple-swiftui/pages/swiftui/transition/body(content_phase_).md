> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transition/body(content:phase:)](https://developer.apple.com/documentation/swiftui/transition/body(content:phase:))

# body(content:phase:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Gets the current body of the caller.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency func body(content: Self.Content, phase: TransitionPhase) -> Self.Body
```

<a id="discussion"></a>

## Discussion

`content` is a proxy for the view that will have the modifier represented by `Self` applied to it.

## See Also

### Creating a custom transition

- [Body](body.md): The type of view representing the body.
- [Transition.Content](content.md): The content view type passed to `body()`.
