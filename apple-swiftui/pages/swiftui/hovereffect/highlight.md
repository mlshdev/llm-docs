> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffect/highlight](https://developer.apple.com/documentation/swiftui/hovereffect/highlight)

# highlight

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 17.0+ · visionOS 1.0+

An effect  that morphs the pointer into a platter behind the view and shows a light source indicating position.

## Declaration

```swift
static var highlight: HoverEffect { get }
```

<a id="discussion"></a>

## Discussion

On tvOS, it applies a projection effect accompanied with a specular highlight on the view when contained within a focused view. It also incorporates motion effects to produce a parallax effect by adjusting the projection matrix and specular offset.

## See Also

### Getting hover effects

- [automatic](automatic.md): An effect that attempts to determine the effect automatically. This is the default effect.
- [lift](lift.md): An effect that slides the pointer under the view and disappears as the view scales up and gains a shadow.
