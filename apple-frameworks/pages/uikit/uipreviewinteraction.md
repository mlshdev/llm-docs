> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewinteraction](https://developer.apple.com/documentation/uikit/uipreviewinteraction)

# UIPreviewInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A class that registers a view to provide a custom user experience in response to 3D Touch interactions.

## Declaration

```swift
@MainActor class UIPreviewInteraction
```

<a id="overview"></a>

## Overview

A 3D Touch interaction results in a *preview interaction* that comprises two phases, the first also called *preview*, followed by *commit*. The interaction progresses through these phases as a person applies more force with a touch. The following image shows the relationship between the force of a person’s touch and the phases of the preview interaction.

![An illustration showing the preview interaction as it progresses through the preview phase and into the commit phases in response to increasing touch force.](https://developer.apple.com/images/com.apple.uikit/media-2793214@2x.png)

When using view controller previewing, *peek* represents the preview phase, and *pop* the commit phase.

> **Note**

>  If you want to provide the system default view controller previewing behavior (*peek* and *pop*), use the [registerForPreviewing(with:sourceView:)](uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) and [unregisterForPreviewing(withContext:)](uiviewcontroller/unregisterforpreviewing%28withcontext_%29.md) methods on [UIViewController](uiviewcontroller.md) instead of [UIPreviewInteraction](uipreviewinteraction.md). See `Working With 3D Touch Previews and Preview Quick Actions` for further details.

A preview interaction is responsible for managing 3D Touch interactions for a specified view. It uses a delegate object to communicate the progress and status of the interaction to your code.

To use a preview interaction in your app:

1. Create a [UIPreviewInteraction](uipreviewinteraction.md) object, passing the view into the default initializer.
2. Create a delegate object that conforms to the [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md) protocol, and implement the appropriate methods.
3. Assign the delegate object to the [delegate](uipreviewinteraction/delegate.md) property on the preview interaction object.

For more information about the state transitions through which a preview interaction progresses, see [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md).

## Topics

### Creating a preview interaction

- [init(view:)](uipreviewinteraction/init%28view_%29.md): Returns a newly initialized preview interaction for the specified view.

### Preparing preview interactions

- [delegate](uipreviewinteraction/delegate.md): An object that acts as the delegate of the preview interaction.
- [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.

### Handling preview interactions

- [view](uipreviewinteraction/view.md): The view from which the preview interaction receives touch events.
- [cancel()](uipreviewinteraction/cancel%28%29.md): Cancels the current preview interaction.
- [location(in:)](uipreviewinteraction/location%28in_%29.md): Returns the location of the touch that started the interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### 3D Touch interactions

- [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.
- [UIPreviewActionItem](uipreviewactionitem.md): A set of methods that defines the styles you can apply to peek quick actions and peek quick action groups, and defines a read-only accessor for the user-visible title of a peek quick action.

# UIPreviewInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A class that registers a view to provide a custom user experience in response to 3D Touch interactions.

## Declaration

```objectivec
@interface UIPreviewInteraction : NSObject
```

<a id="overview"></a>

## Overview

A 3D Touch interaction results in a *preview interaction* that comprises two phases, the first also called *preview*, followed by *commit*. The interaction progresses through these phases as a person applies more force with a touch. The following image shows the relationship between the force of a person’s touch and the phases of the preview interaction.

![An illustration showing the preview interaction as it progresses through the preview phase and into the commit phases in response to increasing touch force.](https://developer.apple.com/images/com.apple.uikit/media-2793214@2x.png)

When using view controller previewing, *peek* represents the preview phase, and *pop* the commit phase.

> **Note**

>  If you want to provide the system default view controller previewing behavior (*peek* and *pop*), use the [registerForPreviewingWithDelegate:sourceView:](uiviewcontroller/registerforpreviewing%28with_sourceview_%29.md) and [unregisterForPreviewingWithContext:](uiviewcontroller/unregisterforpreviewing%28withcontext_%29.md) methods on [UIViewController](uiviewcontroller.md) instead of [UIPreviewInteraction](uipreviewinteraction.md). See `Working With 3D Touch Previews and Preview Quick Actions` for further details.

A preview interaction is responsible for managing 3D Touch interactions for a specified view. It uses a delegate object to communicate the progress and status of the interaction to your code.

To use a preview interaction in your app:

1. Create a [UIPreviewInteraction](uipreviewinteraction.md) object, passing the view into the default initializer.
2. Create a delegate object that conforms to the [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md) protocol, and implement the appropriate methods.
3. Assign the delegate object to the [delegate](uipreviewinteraction/delegate.md) property on the preview interaction object.

For more information about the state transitions through which a preview interaction progresses, see [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md).

## Topics

### Creating a preview interaction

- [initWithView:](uipreviewinteraction/init%28view_%29.md): Returns a newly initialized preview interaction for the specified view.

### Preparing preview interactions

- [delegate](uipreviewinteraction/delegate.md): An object that acts as the delegate of the preview interaction.
- [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.

### Handling preview interactions

- [view](uipreviewinteraction/view.md): The view from which the preview interaction receives touch events.
- [cancelInteraction](uipreviewinteraction/cancel%28%29.md): Cancels the current preview interaction.
- [locationInCoordinateSpace:](uipreviewinteraction/location%28in_%29.md): Returns the location of the touch that started the interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### 3D Touch interactions

- [UIPreviewInteractionDelegate](uipreviewinteractiondelegate.md): A set of methods for communicating the progress of a preview interaction.
- [UIPreviewActionItem](uipreviewactionitem.md): A set of methods that defines the styles you can apply to peek quick actions and peek quick action groups, and defines a read-only accessor for the user-visible title of a peek quick action.
