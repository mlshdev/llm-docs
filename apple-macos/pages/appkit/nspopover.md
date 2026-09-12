> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover](https://developer.apple.com/documentation/appkit/nspopover)

# NSPopover (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A means to display additional content related to existing content on the screen.

## Declaration

```swift
class NSPopover
```

<a id="overview"></a>

## Overview

The popover is positioned relative to the existing content and an anchor is used to express the relation between these two units of content. A popover has an appearance that specifies its visual characteristics, as well as a behavior that determines which user interactions will cause the popover to close. A transient popover is closed in response to most user interactions, whereas a semi-transient popover is closed when the user interacts with the window containing the popover’s positioning view. Popovers with application-defined behavior are not usually closed on the developer’s behalf.

The system automatically positions each popover relative to its positioning view and moves the popover whenever its positioning view moves. A positioning rectangle within the positioning view can be specified for additional granularity.

Popovers can be detached to become a separate window when they are dragged by implementing the appropriate delegate method.

## Topics

### Accessing a Popover’s Content View Controller

- [contentViewController](nspopover/contentviewcontroller.md): The view controller that manages the content of the popover.

### Managing a Popover’s Position and Size

- [behavior](nspopover/behavior-swift.property.md): Specifies the behavior of the popover.
- [show(relativeTo:of:preferredEdge:)](nspopover/show%28relativeto_of_preferrededge_%29.md): Shows the popover anchored to the specified view.
- [positioningRect](nspopover/positioningrect.md): The rectangle within the positioning view relative to which the popover should be positioned.

### Managing a Popover’s Appearance

- [appearance](nspopover/appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](nspopover/effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](nspopover/animates.md): Specifies if the popover is to be animated.
- [contentSize](nspopover/contentsize.md): The content size of the popover.
- [isShown](nspopover/isshown.md): The display state of the popover.
- [isDetached](nspopover/isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

### Closing a Popover

- [performClose(\_:)](nspopover/performclose%28__%29.md): Attempts to close the popover.
- [close()](nspopover/close%28%29.md): Forces the popover to close without consulting its delegate.

### Getting and Setting the Delegate

- [delegate](nspopover/delegate.md): The delegate of the popover.

### Constants

- [NSPopover.Behavior](nspopover/behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [closeReasonUserInfoKey](nspopover/closereasonuserinfokey.md): The `userInfo` key containing the reason for the [willCloseNotification](nspopover/willclosenotification.md).
- [NSPopover.CloseReason](nspopover/closereason.md): Values that specify the reason for the [willCloseNotification](nspopover/willclosenotification.md) notification.
- [NSPopover.Appearance](nspopover/appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

### Notifications

- [willShowNotification](nspopover/willshownotification.md): Sent before the popover is shown.
- [didShowNotification](nspopover/didshownotification.md): Sent after the popover has finished animating onscreen.
- [willCloseNotification](nspopover/willclosenotification.md): Sent before the popover is closed.
- [didCloseNotification](nspopover/didclosenotification.md): Sent after the popover has finished animating offscreen.

### Initializers

- [init()](nspopover/init%28%29.md)
- [init(coder:)](nspopover/init%28coder_%29.md)

### Instance Properties

- [hasFullSizeContent](nspopover/hasfullsizecontent.md): A Boolean value that indicates whether the content view of the popover extends into the arrow region.

### Instance Methods

- [show(relativeTo:)](nspopover/show%28relativeto_%29.md): Shows the popover anchored to the specified toolbar item.

### Structures

- [NSPopover.DidCloseMessage](nspopover/didclosemessage.md)
- [NSPopover.DidShowMessage](nspopover/didshowmessage.md)
- [NSPopover.WillCloseMessage](nspopover/willclosemessage.md)
- [NSPopover.WillShowMessage](nspopover/willshowmessage.md)

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Popovers

- [NSPopoverDelegate](nspopoverdelegate.md): A set of optional methods that a popover delegate can implement to provide additional or custom functionality.

# NSPopover (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

A means to display additional content related to existing content on the screen.

## Declaration

```objectivec
@interface NSPopover : NSResponder
```

<a id="overview"></a>

## Overview

The popover is positioned relative to the existing content and an anchor is used to express the relation between these two units of content. A popover has an appearance that specifies its visual characteristics, as well as a behavior that determines which user interactions will cause the popover to close. A transient popover is closed in response to most user interactions, whereas a semi-transient popover is closed when the user interacts with the window containing the popover’s positioning view. Popovers with application-defined behavior are not usually closed on the developer’s behalf.

The system automatically positions each popover relative to its positioning view and moves the popover whenever its positioning view moves. A positioning rectangle within the positioning view can be specified for additional granularity.

Popovers can be detached to become a separate window when they are dragged by implementing the appropriate delegate method.

## Topics

### Accessing a Popover’s Content View Controller

- [contentViewController](nspopover/contentviewcontroller.md): The view controller that manages the content of the popover.

### Managing a Popover’s Position and Size

- [behavior](nspopover/behavior-swift.property.md): Specifies the behavior of the popover.
- [showRelativeToRect:ofView:preferredEdge:](nspopover/show%28relativeto_of_preferrededge_%29.md): Shows the popover anchored to the specified view.
- [positioningRect](nspopover/positioningrect.md): The rectangle within the positioning view relative to which the popover should be positioned.

### Managing a Popover’s Appearance

- [appearance](nspopover/appearance-swift.property.md): The appearance of the popover.
- [effectiveAppearance](nspopover/effectiveappearance.md): The appearance that will be used when the popover is displayed onscreen.
- [animates](nspopover/animates.md): Specifies if the popover is to be animated.
- [contentSize](nspopover/contentsize.md): The content size of the popover.
- [shown](nspopover/isshown.md): The display state of the popover.
- [detached](nspopover/isdetached.md): A Boolean value that indicates whether the window created by a popover’s detachment is automatically created.

### Closing a Popover

- [performClose:](nspopover/performclose%28__%29.md): Attempts to close the popover.
- [close](nspopover/close%28%29.md): Forces the popover to close without consulting its delegate.

### Getting and Setting the Delegate

- [delegate](nspopover/delegate.md): The delegate of the popover.

### Constants

- [NSPopoverBehavior](nspopover/behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [NSPopoverCloseReasonKey](nspopover/closereasonuserinfokey.md): The `userInfo` key containing the reason for the [NSPopoverWillCloseNotification](nspopover/willclosenotification.md).
- [NSPopoverCloseReasonValue](nspopover/closereason.md): Values that specify the reason for the [NSPopoverWillCloseNotification](nspopover/willclosenotification.md) notification.
- [NSPopoverAppearance](nspopover/appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

### Notifications

- [NSPopoverWillShowNotification](nspopover/willshownotification.md): Sent before the popover is shown.
- [NSPopoverDidShowNotification](nspopover/didshownotification.md): Sent after the popover has finished animating onscreen.
- [NSPopoverWillCloseNotification](nspopover/willclosenotification.md): Sent before the popover is closed.
- [NSPopoverDidCloseNotification](nspopover/didclosenotification.md): Sent after the popover has finished animating offscreen.

### Initializers

- [init](nspopover/init%28%29.md)
- [initWithCoder:](nspopover/init%28coder_%29.md)

### Instance Properties

- [hasFullSizeContent](nspopover/hasfullsizecontent.md): A Boolean value that indicates whether the content view of the popover extends into the arrow region.

### Instance Methods

- [showRelativeToToolbarItem:](nspopover/show%28relativeto_%29.md): Shows the popover anchored to the specified toolbar item.

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)

## See Also

### Popovers

- [NSPopoverDelegate](nspopoverdelegate.md): A set of optional methods that a popover delegate can implement to provide additional or custom functionality.
