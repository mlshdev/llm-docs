> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstitlebaraccessoryviewcontroller](https://developer.apple.com/documentation/appkit/nstitlebaraccessoryviewcontroller)

# NSTitlebarAccessoryViewController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.

## Declaration

```swift
class NSTitlebarAccessoryViewController
```

<a id="overview"></a>

## Overview

Because a title bar accessory view controller is contained in a visual effect view (that is, [NSVisualEffectView](nsvisualeffectview.md)), it automatically handles the blur behind the accessory view and the size and location changes for the content of the view when a window goes in and out of full screen mode. If you’re currently using [NSToolbar](nstoolbar.md) fullscreen accessory APIs, such as [fullScreenAccessoryView](nstoolbar/fullscreenaccessoryview.md), you should use [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md) APIs instead.

Typically, you create an `NSTitlebarAccessoryViewController` object, give it your custom view, set the [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md) property to ensure that it displays correctly in relation to the title bar, and add the view controller to your window. For more information about [NSWindow](nswindow.md) methods you can use to add and remove a title bar accessory view controller, see Managing Title Bars.

Don’t override the `view` property in your `NSTitlebarAccessoryViewController` subclass. Instead, you can override [loadView()](nsviewcontroller/loadview%28%29.md), and set the `view` property in that method.

> **Note**

>  `NSTitlebarAccessoryViewController` observes the view’s frame for changes. Depending on the value of [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md), you can change either the height or the width of the view. Specifically, you can change the view’s height when [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md) is [NSLayoutConstraint.Attribute.bottom](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/bottom), and you can change the view’s width when the [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md) is [NSLayoutConstraint.Attribute.right](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/right) or [NSLayoutConstraint.Attribute.left](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/left). The remaining size direction is automatically set to the maximum size as required for the window.

## Topics

### Configuring a title bar accessory view controller

- [fullScreenMinHeight](nstitlebaraccessoryviewcontroller/fullscreenminheight.md): The visual minimum height of an accessory view that displays below the title bar when the window is in full screen mode.
- [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md): The location of the accessory view, in relation to the window’s title bar.

### Configuring the scroll edge effect

- [preferredScrollEdgeEffectStyle](nstitlebaraccessoryviewcontroller/preferredscrolledgeeffectstyle.md): The titlebar accessory’s preferred effect for content scrolling behind it.
- [NSScrollEdgeEffectStyle](nsscrolledgeeffectstyle.md): Styles for a scroll view’s edge effect.

### Responding to view events

- [viewDidAppear()](nstitlebaraccessoryviewcontroller/viewdidappear%28%29.md): Called when the title bar accessory view controller’s view is fully transitioned onto the screen.
- [viewDidDisappear()](nstitlebaraccessoryviewcontroller/viewdiddisappear%28%29.md): Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.
- [viewWillAppear()](nstitlebaraccessoryviewcontroller/viewwillappear%28%29.md): Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

### Instance Properties

- [automaticallyAdjustsSize](nstitlebaraccessoryviewcontroller/automaticallyadjustssize.md)
- [isHidden](nstitlebaraccessoryviewcontroller/ishidden.md)

## Relationships

### Inherits From

- [NSViewController](nsviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAnimationDelegate](nsanimationdelegate.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](nssegueperforming.md)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content Controllers

- [NSWindowController](nswindowcontroller.md): A controller that manages a window, usually a window stored in a nib file.
- [NSViewController](nsviewcontroller.md): A controller that manages a view, typically loaded from a nib file.

# NSTitlebarAccessoryViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.

## Declaration

```objectivec
@interface NSTitlebarAccessoryViewController : NSViewController
```

<a id="overview"></a>

## Overview

Because a title bar accessory view controller is contained in a visual effect view (that is, [NSVisualEffectView](nsvisualeffectview.md)), it automatically handles the blur behind the accessory view and the size and location changes for the content of the view when a window goes in and out of full screen mode. If you’re currently using [NSToolbar](nstoolbar.md) fullscreen accessory APIs, such as [fullScreenAccessoryView](nstoolbar/fullscreenaccessoryview.md), you should use [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md) APIs instead.

Typically, you create an `NSTitlebarAccessoryViewController` object, give it your custom view, set the [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md) property to ensure that it displays correctly in relation to the title bar, and add the view controller to your window. For more information about [NSWindow](nswindow.md) methods you can use to add and remove a title bar accessory view controller, see Managing Title Bars.

Don’t override the `view` property in your `NSTitlebarAccessoryViewController` subclass. Instead, you can override [loadView](nsviewcontroller/loadview%28%29.md), and set the `view` property in that method.

> **Note**

>  `NSTitlebarAccessoryViewController` observes the view’s frame for changes. Depending on the value of [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md), you can change either the height or the width of the view. Specifically, you can change the view’s height when [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md) is [NSLayoutAttributeBottom](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/bottom), and you can change the view’s width when the [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md) is [NSLayoutAttributeRight](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/right) or [NSLayoutAttributeLeft](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/left). The remaining size direction is automatically set to the maximum size as required for the window.

## Topics

### Configuring a title bar accessory view controller

- [fullScreenMinHeight](nstitlebaraccessoryviewcontroller/fullscreenminheight.md): The visual minimum height of an accessory view that displays below the title bar when the window is in full screen mode.
- [layoutAttribute](nstitlebaraccessoryviewcontroller/layoutattribute.md): The location of the accessory view, in relation to the window’s title bar.

### Configuring the scroll edge effect

- [preferredScrollEdgeEffectStyle](nstitlebaraccessoryviewcontroller/preferredscrolledgeeffectstyle.md): The titlebar accessory’s preferred effect for content scrolling behind it.
- [NSScrollEdgeEffectStyle](nsscrolledgeeffectstyle.md): Styles for a scroll view’s edge effect.

### Responding to view events

- [viewDidAppear](nstitlebaraccessoryviewcontroller/viewdidappear%28%29.md): Called when the title bar accessory view controller’s view is fully transitioned onto the screen.
- [viewDidDisappear](nstitlebaraccessoryviewcontroller/viewdiddisappear%28%29.md): Called after the title bar accessory view controller’s view is removed from the window’s view hierarchy.
- [viewWillAppear](nstitlebaraccessoryviewcontroller/viewwillappear%28%29.md): Called after the title bar accessory view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.

### Instance Properties

- [automaticallyAdjustsSize](nstitlebaraccessoryviewcontroller/automaticallyadjustssize.md)
- [hidden](nstitlebaraccessoryviewcontroller/ishidden.md)

## Relationships

### Inherits From

- [NSViewController](nsviewcontroller.md)

### Conforms To

- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAnimationDelegate](nsanimationdelegate.md)

## See Also

### Content Controllers

- [NSWindowController](nswindowcontroller.md): A controller that manages a window, usually a window stored in a nib file.
- [NSViewController](nsviewcontroller.md): A controller that manages a view, typically loaded from a nib file.
