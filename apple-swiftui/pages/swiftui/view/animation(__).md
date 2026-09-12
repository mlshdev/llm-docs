> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/animation(_:)](https://developer.apple.com/documentation/swiftui/view/animation(_:))

# animation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Applies the given animation to this view when this view changes.

## Declaration

```swift
nonisolated func animation(_ animation: Animation?) -> some View

```

## Parameters

- `animation`: The animation to apply. If `animation` is `nil`, the view doesn’t animate.

<a id="return-value"></a>

## Return Value

A view that applies `animation` to this view whenever it changes.

## See Also

### Adding state-based animation to a view

- [animation(\_:value:)](animation%28__value_%29.md): Applies the given animation to this view when the specified value changes.
- [animation(\_:body:)](animation%28__body_%29.md): Applies the given animation to all animatable values within the `body` closure.
