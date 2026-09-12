> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/animation(_:body:)](https://developer.apple.com/documentation/swiftui/view/animation(_:body:))

# animation(\_:body:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies the given animation to all animatable values within the `body` closure.

## Declaration

```swift
nonisolated func animation<V>(_ animation: Animation?, @ContentBuilder body: (PlaceholderContentView<Self>) -> V) -> some View where V : View

```

<a id="discussion"></a>

## Discussion

Any modifiers applied to the content of `body` will be applied to this view, and the `animation` will only be used on the modifiers defined in the `body`.

The following code animates the opacity changing with an easeInOut animation, while the contents of MyView are animated with the implicit transaction’s animation:

```swift
MyView(isActive: isActive)
    .animation(.easeInOut) { content in
        content.opacity(isActive ? 1.0 : 0.0)
    }
```

## See Also

### Adding state-based animation to a view

- [animation(\_:)](animation%28__%29.md): Conforms when `Self` conforms to `Equatable`. Applies the given animation to this view when this view changes.
- [animation(\_:value:)](animation%28__value_%29.md): Applies the given animation to this view when the specified value changes.
