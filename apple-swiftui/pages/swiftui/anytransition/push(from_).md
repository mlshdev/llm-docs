> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anytransition/push(from:)](https://developer.apple.com/documentation/swiftui/anytransition/push(from:))

# push(from:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transition that when added to a view will animate the view’s insertion by moving it in from the specified edge while fading it in, and animate its removal by moving it out towards the opposite edge and fading it out.

## Declaration

```swift
static func push(from edge: Edge) -> AnyTransition
```

## Parameters

- `edge`: The edge from which the view will be animated in.

<a id="return-value"></a>

## Return Value

A transition that animates a view by moving and fading it.

## See Also

### Getting built-in transitions

- [identity](identity.md): A transition that returns the input view, unmodified, as the output view.
- [move(edge:)](move%28edge_%29.md): Returns a transition that moves the view away, towards the specified edge of the view.
- [offset(\_:)](offset%28__%29.md)
- [offset(x:y:)](offset%28x_y_%29.md)
- [opacity](opacity.md): A transition from transparent to opaque on insertion, and from opaque to transparent on removal.
- [scale](scale.md): Returns a transition that scales the view.
- [scale(scale:anchor:)](scale%28scale_anchor_%29.md): Returns a transition that scales the view by the specified amount.
- [slide](slide.md): A transition that inserts by moving in from the leading edge, and removes by moving out towards the trailing edge.
