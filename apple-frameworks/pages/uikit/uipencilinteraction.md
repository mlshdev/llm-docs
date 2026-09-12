> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilinteraction](https://developer.apple.com/documentation/uikit/uipencilinteraction)

# UIPencilInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

An interaction that tells your app when a person double-taps or squeezes Apple Pencil.

## Declaration

```swift
@MainActor class UIPencilInteraction
```

<a id="overview"></a>

## Overview

People can interact with certain models of Apple Pencil with a double tap or squeeze. To detect the double tap or squeeze in your app, create a [UIPencilInteraction](uipencilinteraction.md) object with a corresponding [delegate](uipencilinteraction/delegate.md) object. Then, add the interaction to your app’s view. When a person double-taps or squeezes Apple Pencil, the interaction calls the delegate’s corresponding [pencilInteraction(\_:didReceiveTap:)](uipencilinteractiondelegate/pencilinteraction%28__didreceivetap_%29.md) or [pencilInteraction(\_:didReceiveSqueeze:)](uipencilinteractiondelegate/pencilinteraction%28__didreceivesqueeze_%29.md) method.

For more information, read [Handling double taps from Apple Pencil](../applepencil/handling-double-taps-from-apple-pencil.md) and [Handling squeezes from Apple Pencil](../applepencil/handling-squeezes-from-apple-pencil.md).

## Topics

### Creating interactions

- [init(delegate:)](uipencilinteraction/init%28delegate_%29.md): Creates an interaction with the specified delegate.

### Handling interactions

- [delegate](uipencilinteraction/delegate.md): The object that handles the double-tap or squeeze interactions a person makes on Apple Pencil.
- [UIPencilInteractionDelegate](uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.

### Enabling interactions

- [isEnabled](uipencilinteraction/isenabled.md): A Boolean value that specifies whether the system reports double taps or squeezes on Apple Pencil to your app.

### Determining preferences for actions

- [preferredTapAction](uipencilinteraction/preferredtapaction.md): A person’s preferred double-tap action for Apple Pencil, as specified in the Settings app.
- [preferredSqueezeAction](uipencilinteraction/preferredsqueezeaction.md): A person’s preferred squeeze action for Apple Pencil, as specified in the Settings app.
- [UIPencilPreferredAction](uipencilpreferredaction.md): The actions Apple Pencil can perform after a person performs a double tap or squeeze.

### Determining input type

- [prefersPencilOnlyDrawing](uipencilinteraction/preferspencilonlydrawing.md): A person’s preference for drawing with Apple Pencil only, as specified in the Settings app or the system tool picker.

### Determining hover preview preferences

- [prefersHoverToolPreview](uipencilinteraction/prefershovertoolpreview.md): A person’s preference for whether holding a supported model of Apple Pencil close to the screen shows a preview of the current drawing tool, as specified in the Settings app.

### Supporting types

- [UIPencilInteraction.Tap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteraction.Squeeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.

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
- [UIInteraction](uiinteraction.md)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteractionDelegate](uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteraction.Tap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteraction.Squeeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteraction.Phase](uipencilinteraction/phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

# UIPencilInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

An interaction that tells your app when a person double-taps or squeezes Apple Pencil.

## Declaration

```objectivec
@interface UIPencilInteraction : NSObject
```

<a id="overview"></a>

## Overview

People can interact with certain models of Apple Pencil with a double tap or squeeze. To detect the double tap or squeeze in your app, create a [UIPencilInteraction](uipencilinteraction.md) object with a corresponding [delegate](uipencilinteraction/delegate.md) object. Then, add the interaction to your app’s view. When a person double-taps or squeezes Apple Pencil, the interaction calls the delegate’s corresponding [pencilInteraction:didReceiveTap:](uipencilinteractiondelegate/pencilinteraction%28__didreceivetap_%29.md) or [pencilInteraction:didReceiveSqueeze:](uipencilinteractiondelegate/pencilinteraction%28__didreceivesqueeze_%29.md) method.

For more information, read [Handling double taps from Apple Pencil](../applepencil/handling-double-taps-from-apple-pencil.md) and [Handling squeezes from Apple Pencil](../applepencil/handling-squeezes-from-apple-pencil.md).

## Topics

### Creating interactions

- [initWithDelegate:](uipencilinteraction/init%28delegate_%29.md): Creates an interaction with the specified delegate.

### Handling interactions

- [delegate](uipencilinteraction/delegate.md): The object that handles the double-tap or squeeze interactions a person makes on Apple Pencil.
- [UIPencilInteractionDelegate](uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.

### Enabling interactions

- [enabled](uipencilinteraction/isenabled.md): A Boolean value that specifies whether the system reports double taps or squeezes on Apple Pencil to your app.

### Determining preferences for actions

- [preferredTapAction](uipencilinteraction/preferredtapaction.md): A person’s preferred double-tap action for Apple Pencil, as specified in the Settings app.
- [preferredSqueezeAction](uipencilinteraction/preferredsqueezeaction.md): A person’s preferred squeeze action for Apple Pencil, as specified in the Settings app.
- [UIPencilPreferredAction](uipencilpreferredaction.md): The actions Apple Pencil can perform after a person performs a double tap or squeeze.

### Determining input type

- [prefersPencilOnlyDrawing](uipencilinteraction/preferspencilonlydrawing.md): A person’s preference for drawing with Apple Pencil only, as specified in the Settings app or the system tool picker.

### Determining hover preview preferences

- [prefersHoverToolPreview](uipencilinteraction/prefershovertoolpreview.md): A person’s preference for whether holding a supported model of Apple Pencil close to the screen shows a preview of the current drawing tool, as specified in the Settings app.

### Supporting types

- [UIPencilInteractionTap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteractionSqueeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteractionDelegate](uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteractionTap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteractionSqueeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteractionPhase](uipencilinteraction/phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.
