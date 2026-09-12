> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uispringloadedinteractioneffectstate](https://developer.apple.com/documentation/uikit/uispringloadedinteractioneffectstate)

# UISpringLoadedInteractionEffectState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The spring-loaded interaction states that determine the style of the interaction view.

## Declaration

```swift
enum UISpringLoadedInteractionEffectState
```

## Topics

### States

- [UISpringLoadedInteractionEffectState.activated](uispringloadedinteractioneffectstate/activated.md): An interaction state that indicates that the view was spring loaded.
- [UISpringLoadedInteractionEffectState.activating](uispringloadedinteractioneffectstate/activating.md): An interaction state that indicates that spring loading is about to start.
- [UISpringLoadedInteractionEffectState.inactive](uispringloadedinteractioneffectstate/inactive.md): An interaction state that indicates that spring loading is not engaged.
- [UISpringLoadedInteractionEffectState.possible](uispringloadedinteractioneffectstate/possible.md): An interaction state that indicates that spring loading is available.

### Initializers

- [init(rawValue:)](uispringloadedinteractioneffectstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing state

- [state](uispringloadedinteractioncontext/state.md): The current view style for the spring-loaded interaction.
- [targetItem](uispringloadedinteractioncontext/targetitem.md): The specific subview, or associated model object, of the target view to use for the spring-loaded interaction.
- [targetView](uispringloadedinteractioncontext/targetview.md): The view to which the current spring-loaded interaction view style is applied.

# UISpringLoadedInteractionEffectState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The spring-loaded interaction states that determine the style of the interaction view.

## Declaration

```objectivec
enum UISpringLoadedInteractionEffectState : NSInteger;
```

## Topics

### States

- [UISpringLoadedInteractionEffectStateActivated](uispringloadedinteractioneffectstate/activated.md): An interaction state that indicates that the view was spring loaded.
- [UISpringLoadedInteractionEffectStateActivating](uispringloadedinteractioneffectstate/activating.md): An interaction state that indicates that spring loading is about to start.
- [UISpringLoadedInteractionEffectStateInactive](uispringloadedinteractioneffectstate/inactive.md): An interaction state that indicates that spring loading is not engaged.
- [UISpringLoadedInteractionEffectStatePossible](uispringloadedinteractioneffectstate/possible.md): An interaction state that indicates that spring loading is available.

## See Also

### Managing state

- [state](uispringloadedinteractioncontext/state.md): The current view style for the spring-loaded interaction.
- [targetItem](uispringloadedinteractioncontext/targetitem.md): The specific subview, or associated model object, of the target view to use for the spring-loaded interaction.
- [targetView](uispringloadedinteractioncontext/targetview.md): The view to which the current spring-loaded interaction view style is applied.
