> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/highlight](https://developer.apple.com/documentation/swiftui/customhovereffect/highlight)

# highlight

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A hover effect that highlights views using a light source to indicate position.

## Declaration

```swift
static var highlight: HighlightHoverEffect { get }
```

<a id="discussion"></a>

## Discussion

For pointer input this effect morphs the pointer into a platter behind the view and shows a light source indicating position.

On tvOS it applies a projection effect accompanied with a specular highlight on the view when contained within a focused view. It also incorporates motion effects to produce a parallax effect by adjusting the projection matrix and specular offset.

On visionOS this effect applies a glow effect based on where the user is looking or touching the view.

## See Also

### Getting built-in hover effects

- [automatic](automatic.md): Conforms when `Self` is `AutomaticHoverEffect`. The default hover effect based on the surrounding context.
- [empty](empty.md): Conforms when `Self` is `EmptyHoverEffect`. An effect that applies no changes when hovered.
- [lift](lift.md): Conforms when `Self` is `LiftHoverEffect`. A hover effect that slides the pointer under the view and disappears as the view scales up and gains a shadow.
