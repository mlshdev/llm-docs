> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuiinteractivebehavior](https://developer.apple.com/documentation/intentsui/inuiinteractivebehavior)

# INUIInteractiveBehavior (Swift)

**Framework:** IntentsUI  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating how users are able to interact with your interface.

## Declaration

```swift
enum INUIInteractiveBehavior
```

## Topics

### Enumeration Cases

- [INUIInteractiveBehavior.none](inuiinteractivebehavior/none.md): No interactions
- [INUIInteractiveBehavior.nextView](inuiinteractivebehavior/nextview.md): A behavior that displays controls for navigating to a new view.
- [INUIInteractiveBehavior.launch](inuiinteractivebehavior/launch.md): A behavior that displays an interface to launch the app.
- [INUIInteractiveBehavior.genericAction](inuiinteractivebehavior/genericaction.md): A behavior that shows an interface for performing an action.

### Initializers

- [init(rawValue:)](inuiinteractivebehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the View Controller

- [configureView(for:of:interactiveBehavior:context:completion:)](inuihostedviewcontrolling/configureview%28for_of_interactivebehavior_context_completion_%29.md)
- [configure(with:context:completion:)](inuihostedviewcontrolling/configure%28with_context_completion_%29.md): Configures your view controller’s content.

# INUIInteractiveBehavior (Objective-C)

**Framework:** IntentsUI  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating how users are able to interact with your interface.

## Declaration

```objectivec
enum INUIInteractiveBehavior : NSUInteger;
```

## Topics

### Enumeration Cases

- [INUIInteractiveBehaviorNone](inuiinteractivebehavior/none.md): No interactions
- [INUIInteractiveBehaviorNextView](inuiinteractivebehavior/nextview.md): A behavior that displays controls for navigating to a new view.
- [INUIInteractiveBehaviorLaunch](inuiinteractivebehavior/launch.md): A behavior that displays an interface to launch the app.
- [INUIInteractiveBehaviorGenericAction](inuiinteractivebehavior/genericaction.md): A behavior that shows an interface for performing an action.

## See Also

### Configuring the View Controller

- [configureViewForParameters:ofInteraction:interactiveBehavior:context:completion:](inuihostedviewcontrolling/configureview%28for_of_interactivebehavior_context_completion_%29.md)
- [configureWithInteraction:context:completion:](inuihostedviewcontrolling/configure%28with_context_completion_%29.md): Configures your view controller’s content.
