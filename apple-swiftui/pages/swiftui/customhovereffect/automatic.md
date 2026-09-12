> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/customhovereffect/automatic](https://developer.apple.com/documentation/swiftui/customhovereffect/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The default hover effect based on the surrounding context.

## Declaration

```swift
nonisolated static var automatic: AutomaticHoverEffect { get }
```

<a id="discussion"></a>

## Discussion

The automatic effect will resolve to any [defaultHoverEffect(\_:)](../view/defaulthovereffect%28__%29.md) applied to the current View hierarchy, or a system-defined effect if no default effect has been defined.

## See Also

### Getting built-in hover effects

- [empty](empty.md): Conforms when `Self` is `EmptyHoverEffect`. An effect that applies no changes when hovered.
- [highlight](highlight.md): Conforms when `Self` is `HighlightHoverEffect`. A hover effect that highlights views using a light source to indicate position.
- [lift](lift.md): Conforms when `Self` is `LiftHoverEffect`. A hover effect that slides the pointer under the view and disappears as the view scales up and gains a shadow.
