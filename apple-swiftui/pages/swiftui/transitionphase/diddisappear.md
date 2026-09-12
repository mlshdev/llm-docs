> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transitionphase/diddisappear](https://developer.apple.com/documentation/swiftui/transitionphase/diddisappear)

# TransitionPhase.didDisappear

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The transition is being applied to a view that has been requested to be removed from the view hierarchy.

## Declaration

```swift
case didDisappear
```

<a id="discussion"></a>

## Discussion

In this phase, a transition should show the appearance that will be animated to make the disappearance transition.

## See Also

### Getting the phase

- [TransitionPhase.identity](identity.md): The transition is being applied to a view that is in the view hierarchy.
- [TransitionPhase.willAppear](willappear.md): The transition is being applied to a view that is about to be inserted into the view hierarchy.
