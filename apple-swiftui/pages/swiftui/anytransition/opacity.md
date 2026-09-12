> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anytransition/opacity](https://developer.apple.com/documentation/swiftui/anytransition/opacity)

# opacity

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A transition from transparent to opaque on insertion, and from opaque to transparent on removal.

## Declaration

```swift
nonisolated(unsafe) static let opacity: AnyTransition
```

## See Also

### Getting built-in transitions

- [identity](identity.md): A transition that returns the input view, unmodified, as the output view.
- [move(edge:)](move%28edge_%29.md): Returns a transition that moves the view away, towards the specified edge of the view.
- [offset(\_:)](offset%28__%29.md)
- [offset(x:y:)](offset%28x_y_%29.md)
- [push(from:)](push%28from_%29.md): Creates a transition that when added to a view will animate the view’s insertion by moving it in from the specified edge while fading it in, and animate its removal by moving it out towards the opposite edge and fading it out.
- [scale](scale.md): Returns a transition that scales the view.
- [scale(scale:anchor:)](scale%28scale_anchor_%29.md): Returns a transition that scales the view by the specified amount.
- [slide](slide.md): A transition that inserts by moving in from the leading edge, and removes by moving out towards the trailing edge.
