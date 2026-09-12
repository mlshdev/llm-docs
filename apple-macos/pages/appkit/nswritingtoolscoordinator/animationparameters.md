> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/animationparameters](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/animationparameters)

# NSWritingToolsCoordinator.AnimationParameters (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 15.2+

An object you use to configure additional tasks or animations to run alongside the Writing Tools animations.

## Declaration

```swift
class AnimationParameters
```

<a id="overview"></a>

## Overview

When Writing Tools replaces text in one of your context objects, it provides an `NSWritingToolsCoordinator.AnimationParameters` object for you to use to configure any additional animations. During a Writing Tools session, you hide the text under evaluation and provide a targeted preview of your content. Writing Tools animations changes to that preview, but you might need to provide additional animations for other parts of your view’s content. For example, you might need to animate any layout changes caused by the insertion or removal of text in other parts of your view. Use this object to configure those animations.

You don’t create an `NSWritingToolsCoordinator.AnimationParameters` object directly. Instead, the system creates one and passes it to the [writingToolsCoordinator(\_:replace:in:proposedText:reason:animationParameters:completion:)](delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md) method of your [NSWritingToolsCoordinator.Delegate](delegate-swift.protocol.md) object. Use that object to specify the blocks to run during and after the system animations.

## Topics

### Getting the animation values

- [duration](animationparameters/duration.md): The number of seconds it takes the system animations to run.
- [delay](animationparameters/delay.md): The number of seconds the system waits before starting its animations.

### Creating custom animations

- [progressHandler](animationparameters/progresshandler.md): A custom block that runs at the same time as the system animations.
- [completionHandler](animationparameters/completionhandler.md): A custom block to run when the system animations finish.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Writing Tools for custom views

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md): Adopt a simplified version of the Writing Tools experience in a custom view using the pasteboard and macOS services.
- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md): Integrate Writing Tools support, including support for inline replacement animations, to your custom text views on macOS.
- [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md): An object that manages interactions between Writing Tools and your custom text view.
- [NSWritingToolsCoordinator.Delegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.
- [NSWritingToolsCoordinator.Context](context.md): A data object that you use to share your custom view’s text with Writing Tools.
- [Enhancing your custom text engine with Writing Tools](../enhancing-your-custom-text-engine-with-writing-tools.md): Add Writing Tools support to your custom text engine to enhance the text editing experience.

# NSWritingToolsCoordinatorAnimationParameters (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 15.2+

An object you use to configure additional tasks or animations to run alongside the Writing Tools animations.

## Declaration

```objectivec
@interface NSWritingToolsCoordinatorAnimationParameters : NSObject
```

<a id="overview"></a>

## Overview

When Writing Tools replaces text in one of your context objects, it provides an `NSWritingToolsCoordinator.AnimationParameters` object for you to use to configure any additional animations. During a Writing Tools session, you hide the text under evaluation and provide a targeted preview of your content. Writing Tools animations changes to that preview, but you might need to provide additional animations for other parts of your view’s content. For example, you might need to animate any layout changes caused by the insertion or removal of text in other parts of your view. Use this object to configure those animations.

You don’t create an `NSWritingToolsCoordinator.AnimationParameters` object directly. Instead, the system creates one and passes it to the [writingToolsCoordinator:replaceRange:inContext:proposedText:reason:animationParameters:completion:](delegate-swift.protocol/writingtoolscoordinator%28__replace_in_proposedtext_reason_animationparameters_completion_%29.md) method of your [NSWritingToolsCoordinatorDelegate](delegate-swift.protocol.md) object. Use that object to specify the blocks to run during and after the system animations.

## Topics

### Getting the animation values

- [duration](animationparameters/duration.md): The number of seconds it takes the system animations to run.
- [delay](animationparameters/delay.md): The number of seconds the system waits before starting its animations.

### Creating custom animations

- [progressHandler](animationparameters/progresshandler.md): A custom block that runs at the same time as the system animations.
- [completionHandler](animationparameters/completionhandler.md): A custom block to run when the system animations finish.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Writing Tools for custom views

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md): Adopt a simplified version of the Writing Tools experience in a custom view using the pasteboard and macOS services.
- [Adding Writing Tools support to a custom AppKit view](../adding-writing-tools-support-to-a-custom-nsview.md): Integrate Writing Tools support, including support for inline replacement animations, to your custom text views on macOS.
- [NSWritingToolsCoordinator](../nswritingtoolscoordinator.md): An object that manages interactions between Writing Tools and your custom text view.
- [NSWritingToolsCoordinatorDelegate](delegate-swift.protocol.md): An interface that you use to manage interactions between Writing Tools and your custom text view.
- [NSWritingToolsCoordinatorContext](context.md): A data object that you use to share your custom view’s text with Writing Tools.
- [Enhancing your custom text engine with Writing Tools](../enhancing-your-custom-text-engine-with-writing-tools.md): Add Writing Tools support to your custom text engine to enhance the text editing experience.
