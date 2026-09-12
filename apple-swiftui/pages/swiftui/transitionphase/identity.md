> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transitionphase/identity](https://developer.apple.com/documentation/swiftui/transitionphase/identity)

# TransitionPhase.identity

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The transition is being applied to a view that is in the view hierarchy.

## Declaration

```swift
case identity
```

<a id="discussion"></a>

## Discussion

In this phase, a transition should show its steady state appearance, which will generally not make any visual change to the view.

## See Also

### Getting the phase

- [TransitionPhase.willAppear](willappear.md): The transition is being applied to a view that is about to be inserted into the view hierarchy.
- [TransitionPhase.didDisappear](diddisappear.md): The transition is being applied to a view that has been requested to be removed from the view hierarchy.
