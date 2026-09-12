> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollphase/decelerating](https://developer.apple.com/documentation/swiftui/scrollphase/decelerating)

# ScrollPhase.decelerating

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The decelerating phase where the user use has stopped interacting with the scroll view and the scroll view is decelerating towards its final target.

## Declaration

```swift
case decelerating
```

## See Also

### Getting scroll gesture states

- [ScrollPhase.animating](animating.md): The animating phase where the scroll view is animating towards a final target.
- [ScrollPhase.idle](idle.md): The idle phase where no kind of scrolling is occurring.
- [ScrollPhase.interacting](interacting.md): The interacting phase where the user is interacting with the scroll view.
- [ScrollPhase.tracking](tracking.md): The tracking phase where the scroll view is tracking a potential scroll by the user but the user hasn’t started a scroll.
