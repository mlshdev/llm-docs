> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/animation(_:value:)](https://developer.apple.com/documentation/swiftui/view/animation(_:value:))

# animation(\_:value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies the given animation to this view when the specified value changes.

## Declaration

```swift
nonisolated func animation<V>(_ animation: Animation?, value: V) -> some View where V : Equatable

```

## Parameters

- `animation`: The animation to apply. If `animation` is `nil`, the view doesn’t animate.
- `value`: A value to monitor for changes.

<a id="return-value"></a>

## Return Value

A view that applies `animation` to this view whenever `value` changes.

## Mentioned In

- [Managing user interface state](../managing-user-interface-state.md)

## See Also

### Adding state-based animation to a view

- [animation(\_:)](animation%28__%29.md): Conforms when `Self` conforms to `Equatable`. Applies the given animation to this view when this view changes.
- [animation(\_:body:)](animation%28__body_%29.md): Applies the given animation to all animatable values within the `body` closure.
