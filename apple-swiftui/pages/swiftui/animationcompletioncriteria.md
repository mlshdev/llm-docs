> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animationcompletioncriteria](https://developer.apple.com/documentation/swiftui/animationcompletioncriteria)

# AnimationCompletionCriteria

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The criteria that determines when an animation is considered finished.

## Declaration

```swift
struct AnimationCompletionCriteria
```

## Topics

### Getting the completion criteria

- [logicallyComplete](animationcompletioncriteria/logicallycomplete.md): The animation has logically completed, but may still be in its long tail.
- [removed](animationcompletioncriteria/removed.md): The entire animation is finished and will now be removed.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding state-based animation to an action

- [withAnimation(\_:\_:)](withanimation%28____%29.md): Returns the result of recomputing the view’s body with the provided animation.
- [withAnimation(\_:completionCriteria:\_:completion:)](withanimation%28__completioncriteria___completion_%29.md): Returns the result of recomputing the view’s body with the provided animation, and runs the completion when all animations are complete.
- [Animation](animation.md): The way a view changes over time to create a smooth visual transition from one state to another.
