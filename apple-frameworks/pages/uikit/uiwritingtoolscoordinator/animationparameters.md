> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/animationparameters](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/animationparameters)

# UIWritingToolsCoordinator.AnimationParameters (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An object you use to configure additional tasks or animations to run alongside the Writing Tools animations.

## Declaration

```swift
class AnimationParameters
```

<a id="overview"></a>

## Overview

When Writing Tools replaces text in one of your context objects, it provides a `UIWritingToolsCoordinator.AnimationParameters` object for you to use to configure any additional animations. During a Writing Tools session, you hide the text under evaluation and provide a targeted preview of your content. Writing Tools animations changes to that preview, but you might need to provide additional animations for other parts of your view’s content. For example, you might need to animate any layout changes caused by the insertion or removal of text in other parts of your view. Use this object to configure those animations.

You don’t create a `UIWritingToolsCoordinator.AnimationParameters` object directly. Instead, the system creates one and passes it to the `UIWritingToolsCoordinator/writingToolsCoordinator(_:replaceRange:inContext:proposedText:reason:animationParameters:completion:)` method of your [UIWritingToolsCoordinator.Delegate](delegate-swift.protocol.md) object. Use that object to specify the blocks to run during and after the system animations.

## Topics

### Getting the animation values

- [duration](animationparameters/duration.md): The number of seconds it takes the system animations to run.
- [delay](animationparameters/delay.md): The number of seconds the system waits before starting its animations.

### Creating custom animations

- [progressHandler](animationparameters/progresshandler.md): A custom block that runs at the same time as the system animations.
- [completionHandler](animationparameters/completionhandler.md): A custom block to run when the system animations finish.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Writing Tools for custom views

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md): Add Writing Tools support, including support for inline replacement animations, to your custom iOS views that contain text.
- [UIWritingToolsCoordinator](../uiwritingtoolscoordinator.md): An object that manages interactions between Writing Tools and your custom text view.
- [UIWritingToolsCoordinator.Delegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.
- [UIWritingToolsCoordinator.Context](context.md): A data object that you use to share your custom view’s text with Writing Tools.

# UIWritingToolsCoordinatorAnimationParameters (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

An object you use to configure additional tasks or animations to run alongside the Writing Tools animations.

## Declaration

```objectivec
@interface UIWritingToolsCoordinatorAnimationParameters : NSObject
```

<a id="overview"></a>

## Overview

When Writing Tools replaces text in one of your context objects, it provides a `UIWritingToolsCoordinator.AnimationParameters` object for you to use to configure any additional animations. During a Writing Tools session, you hide the text under evaluation and provide a targeted preview of your content. Writing Tools animations changes to that preview, but you might need to provide additional animations for other parts of your view’s content. For example, you might need to animate any layout changes caused by the insertion or removal of text in other parts of your view. Use this object to configure those animations.

You don’t create a `UIWritingToolsCoordinator.AnimationParameters` object directly. Instead, the system creates one and passes it to the `UIWritingToolsCoordinator/writingToolsCoordinator(_:replaceRange:inContext:proposedText:reason:animationParameters:completion:)` method of your [UIWritingToolsCoordinatorDelegate](delegate-swift.protocol.md) object. Use that object to specify the blocks to run during and after the system animations.

## Topics

### Getting the animation values

- [duration](animationparameters/duration.md): The number of seconds it takes the system animations to run.
- [delay](animationparameters/delay.md): The number of seconds the system waits before starting its animations.

### Creating custom animations

- [progressHandler](animationparameters/progresshandler.md): A custom block that runs at the same time as the system animations.
- [completionHandler](animationparameters/completionhandler.md): A custom block to run when the system animations finish.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Writing Tools for custom views

- [Adding Writing Tools support to a custom UIKit view](../adding-writing-tools-support-to-a-custom-uiview.md): Add Writing Tools support, including support for inline replacement animations, to your custom iOS views that contain text.
- [UIWritingToolsCoordinator](../uiwritingtoolscoordinator.md): An object that manages interactions between Writing Tools and your custom text view.
- [UIWritingToolsCoordinatorDelegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.
- [UIWritingToolsCoordinatorContext](context.md): A data object that you use to share your custom view’s text with Writing Tools.
