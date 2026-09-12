> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/withanimation(_:_:)](https://developer.apple.com/documentation/swiftui/withanimation(_:_:))

# withAnimation(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the result of recomputing the view’s body with the provided animation.

## Declaration

```swift
func withAnimation<Result>(_ animation: Animation? = .default, _ body: () throws -> Result) rethrows -> Result
```

## Mentioned In

- [Applying Liquid Glass to custom views](applying-liquid-glass-to-custom-views.md)
- [Managing user interface state](managing-user-interface-state.md)

<a id="discussion"></a>

## Discussion

This function sets the given [Animation](animation.md) as the [animation](transaction/animation.md) property of the thread’s current [Transaction](transaction.md).

## See Also

### Adding state-based animation to an action

- [withAnimation(\_:completionCriteria:\_:completion:)](withanimation%28__completioncriteria___completion_%29.md): Returns the result of recomputing the view’s body with the provided animation, and runs the completion when all animations are complete.
- [AnimationCompletionCriteria](animationcompletioncriteria.md): The criteria that determines when an animation is considered finished.
- [Animation](animation.md): The way a view changes over time to create a smooth visual transition from one state to another.
