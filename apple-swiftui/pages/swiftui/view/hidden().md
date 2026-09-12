> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/hidden()](https://developer.apple.com/documentation/swiftui/view/hidden())

# hidden()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Hides this view unconditionally.

## Declaration

```swift
nonisolated func hidden() -> some View

```

<a id="return-value"></a>

## Return Value

A hidden view.

<a id="discussion"></a>

## Discussion

Hidden views are invisible and can’t receive or respond to interactions. However, they do remain in the view hierarchy and affect layout. Use this modifier if you want to include a view for layout purposes, but don’t want it to display.

```swift
HStack {
    Image(systemName: "a.circle.fill")
    Image(systemName: "b.circle.fill")
    Image(systemName: "c.circle.fill")
        .hidden()
    Image(systemName: "d.circle.fill")
}
```

The third circle takes up space, because it’s still present, but SwiftUI doesn’t draw it onscreen.

![A row of circles with the letters A, B, and D, with a gap where](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-hidden-1@2x.png)

If you want to conditionally include a view in the view hierarchy, use an `if` statement instead:

```swift
VStack {
    HStack {
        Image(systemName: "a.circle.fill")
        Image(systemName: "b.circle.fill")
        if !isHidden {
            Image(systemName: "c.circle.fill")
        }
        Image(systemName: "d.circle.fill")
    }
    Toggle("Hide", isOn: $isHidden)
}
```

Depending on the current value of the `isHidden` state variable in the example above, controlled by the [Toggle](../toggle.md) instance, SwiftUI draws the circle or completely omits it from the layout.

![Two side by side groups of items, each composed of a toggle beneath](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-hidden-2@2x.png)

## See Also

### Hiding views

- [opacity(\_:)](opacity%28__%29.md): Sets the transparency of this view.
