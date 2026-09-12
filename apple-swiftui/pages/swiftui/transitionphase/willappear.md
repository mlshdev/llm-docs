> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transitionphase/willappear](https://developer.apple.com/documentation/swiftui/transitionphase/willappear)

# TransitionPhase.willAppear

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The transition is being applied to a view that is about to be inserted into the view hierarchy.

## Declaration

```swift
case willAppear
```

<a id="discussion"></a>

## Discussion

In this phase, a transition should show the appearance that will be animated from to make the appearance transition.

## See Also

### Getting the phase

- [TransitionPhase.identity](identity.md): The transition is being applied to a view that is in the view hierarchy.
- [TransitionPhase.didDisappear](diddisappear.md): The transition is being applied to a view that has been requested to be removed from the view hierarchy.
