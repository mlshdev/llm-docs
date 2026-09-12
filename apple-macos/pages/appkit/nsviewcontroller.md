> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller](https://developer.apple.com/documentation/appkit/nsviewcontroller)

# NSViewController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A controller that manages a view, typically loaded from a nib file.

## Declaration

```swift
class NSViewController
```

<a id="overview"></a>

## Overview

View controller management includes:

- Memory management of top-level objects similar to that performed by the [NSWindowController](nswindowcontroller.md) class, taking the same care to prevent reference cycles when controls are bound to the nib file’s owner.
- Declaring a generic [view](nsviewcontroller/view.md) property, to make it easy to establish bindings in the nib to an object that isn’t yet known at nib-loading time or readily available to the code that’s doing the nib loading.
- Implementing the key-value binding NSEditor informal protocol, so that apps using a view controller can easily make bound controls in the views commit or discard changes by the user.

In macOS 10.10 and later, a view controller offers a full set of life cycle methods, allowing you to manage the content of a window in a way that is on a par with iOS view controller management. These methods, presented in order here to reflect a typical cycle, are:

*View life cycle:*

1. [viewDidLoad()](nsviewcontroller/viewdidload%28%29.md)
2. [viewWillAppear()](nsviewcontroller/viewwillappear%28%29.md)
3. [viewDidAppear()](nsviewcontroller/viewdidappear%28%29.md)

*User interaction cycle:*

1. [updateViewConstraints()](nsviewcontroller/updateviewconstraints%28%29.md)
2. [viewWillLayout()](nsviewcontroller/viewwilllayout%28%29.md)
3. [viewDidLayout()](nsviewcontroller/viewdidlayout%28%29.md)
4. [viewWillDisappear()](nsviewcontroller/viewwilldisappear%28%29.md)
5. [viewDidDisappear()](nsviewcontroller/viewdiddisappear%28%29.md)

In addition, in macOS 10.10 and later, a view controller participates in the responder chain. You can implement action methods directly in the view controller. Corresponding actions that originate in the view controller’s view proceed up the responder chain and are handled by those methods.

Prior to OS X v10.10, a typical usage pattern for loading a nib file was to subclass [NSViewController](nsviewcontroller.md) and override its [loadView()](nsviewcontroller/loadview%28%29.md) method to call `[super loadView]`. But in macOS 10.10 and later, the [loadView()](nsviewcontroller/loadview%28%29.md) method automatically looks for a nib file with the same name as the view controller. To take advantage of this behavior, name a nib file after its corresponding view controller and pass `nil` to both parameters of the [init(nibName:bundle:)](nsviewcontroller/init%28nibname_bundle_%29.md) method.

A view controller employs lazy loading of its view: Immediately after a view controller is loaded into memory, the value of its [isViewLoaded](nsviewcontroller/isviewloaded.md) property is [false](https://developer.apple.com/documentation/swift/false). The value changes to [true](https://developer.apple.com/documentation/swift/true) after the [loadView()](nsviewcontroller/loadview%28%29.md) method returns and just before the system calls the [viewDidLoad()](nsviewcontroller/viewdidload%28%29.md) method.

A view controller is meant to be highly reusable, such as for dynamically representing various objects. For example, the  [addAccessoryController(\_:)](nspagelayout/addaccessorycontroller%28__%29.md) methods of the [NSPageLayout](nspagelayout.md) and [NSPrintPanel](nsprintpanel.md) classes take an [NSViewController](nsviewcontroller.md) instance as the argument, and set the [representedObject](nsviewcontroller/representedobject.md) property to the [NSPrintInfo](nsprintinfo.md) object that is to be shown to the user. This allows a developer to easily create new printing accessory views using bindings and the [NSPrintInfo](nsprintinfo.md) class’s key-value coding and key-value observing compliance. When the user dismisses a printing dialog, the  [NSPageLayout](nspagelayout.md) and [NSPrintPanel](nsprintpanel.md) classes each send NSEditor messages to each accessory view controller to ensure that the user’s changes have been committed or discarded properly. The titles of the accessories are retrieved from the view controllers and shown to the user in menus that the user can choose from.

## Topics

### Creating A View Controller

- [init(nibName:bundle:)](nsviewcontroller/init%28nibname_bundle_%29.md): Returns a view controller object initialized to the nib file in the specified bundle.
- [loadView()](nsviewcontroller/loadview%28%29.md): Instantiates a view from a nib file and sets the value of the [view](nsviewcontroller/view.md) property.

### Represented Object

- [representedObject](nsviewcontroller/representedobject.md): The object whose value is presented in the receiver’s primary view.

### Nib Properties

- [nibBundle](nsviewcontroller/nibbundle.md): The nib bundle to be loaded to instantiate the receiver’s primary view.
- [nibName](nsviewcontroller/nibname.md): The name of the nib file to be loaded to instantiate the receiver’s primary view.

### View Properties

- [view](nsviewcontroller/view.md): The view controller’s primary view.
- [title](nsviewcontroller/title.md): The localized title of the receiver’s primary view.

### View Property Wrappers

- [NSViewController.ViewLoading](nsviewcontroller/viewloading.md): A property wrapper that loads the view controller’s view before accessing the property.

### NSEditor Conformance

- [commitEditing(withDelegate:didCommit:contextInfo:)](nsviewcontroller/commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempt to commit any currently edited results of the receiver.
- [commitEditing()](nsviewcontroller/commitediting%28%29.md): Returns whether the receiver was able to commit any pending edits.
- [discardEditing()](nsviewcontroller/discardediting%28%29.md): Causes the receiver to discard any changes, restoring the previous values.

### Using a Storyboard

- [storyboard](nsviewcontroller/storyboard.md): The storyboard from which the view controller was loaded.
- [dismiss(\_:)](nsviewcontroller/dismiss%28__%29-3n76y.md)

### Responding to View Events

- [viewDidLoad()](nsviewcontroller/viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded()](nsviewcontroller/loadviewifneeded%28%29.md)
- [isViewLoaded](nsviewcontroller/isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](nsviewcontroller/viewifloaded.md)
- [viewWillAppear()](nsviewcontroller/viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear()](nsviewcontroller/viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear()](nsviewcontroller/viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear()](nsviewcontroller/viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.

### Managing View Layout

- [preferredContentSize](nsviewcontroller/preferredcontentsize.md): The desired size of the view controller’s view, in screen units.
- [updateViewConstraints()](nsviewcontroller/updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
- [viewWillLayout()](nsviewcontroller/viewwilllayout%28%29.md): Called just before the [layout()](nsview/layout%28%29.md) method of the view controller’s view is called.
- [viewDidLayout()](nsviewcontroller/viewdidlayout%28%29.md): Called immediately after the [layout()](nsview/layout%28%29.md) method of the view controller’s view is called.

### Managing Child View Controllers in a Custom Container

- [addChild(\_:)](nsviewcontroller/addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [children](nsviewcontroller/children.md) array.
- [children](nsviewcontroller/children.md): An array of view controllers that are hierarchical children of the view controller.
- [transition(from:to:options:completionHandler:)](nsviewcontroller/transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChild(\_:at:)](nsviewcontroller/insertchild%28__at_%29.md): Inserts a specified child view controller into the [children](nsviewcontroller/children.md) array at a specified position.
- [removeChild(at:)](nsviewcontroller/removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParent()](nsviewcontroller/removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChange(for:)](nsviewcontroller/preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](nsviewcontroller/preferredcontentsize.md) property of a child view controller or a presented view controller.

### Presenting Another View Controller’s Content

- [present(\_:animator:)](nsviewcontroller/present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismiss(\_:)](nsviewcontroller/dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:)](nsviewcontroller/present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:hasFullSizeContent:)](nsviewcontroller/present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentAsModalWindow(\_:)](nsviewcontroller/presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentAsSheet(\_:)](nsviewcontroller/presentassheet%28__%29.md): Presents another view controller as a sheet.
- [present(inWidget:)](nsviewcontroller/present%28inwidget_%29.md): Deprecated.

### Getting Related View Controllers

- [parent](nsviewcontroller/parent.md): The immediate ancestor view controller of the view controller.
- [presentedViewControllers](nsviewcontroller/presentedviewcontrollers.md): The view controllers, if any, that are currently presented by the view controller.
- [presentingViewController](nsviewcontroller/presentingviewcontroller.md): The view controller that presented the view controller or that presented its farthest ancestor view controller.

### Configuring an App Extension View Controller

- [extensionContext](nsviewcontroller/extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredScreenOrigin](nsviewcontroller/preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMaximumSize](nsviewcontroller/preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](nsviewcontroller/preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransition(to:)](nsviewcontroller/viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](nsviewcontroller/sourceitemview.md)

### Constants

- [NSViewController.TransitionOptions](nsviewcontroller/transitionoptions.md): Animation options for view transitions in a view controller.

### Initializers

- [init(coder:)](nsviewcontroller/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Inherited By

- [NSCollectionViewItem](nscollectionviewitem.md)
- [NSPageController](nspagecontroller.md)
- [NSSplitViewController](nssplitviewcontroller.md)
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)
- [NSTabViewController](nstabviewcontroller.md)
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](nseditor.md)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](nssegueperforming.md)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [PlaygroundLiveViewable](https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content Controllers

- [NSWindowController](nswindowcontroller.md): A controller that manages a window, usually a window stored in a nib file.
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md): An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.

# NSViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A controller that manages a view, typically loaded from a nib file.

## Declaration

```objectivec
@interface NSViewController : NSResponder
```

<a id="overview"></a>

## Overview

View controller management includes:

- Memory management of top-level objects similar to that performed by the [NSWindowController](nswindowcontroller.md) class, taking the same care to prevent reference cycles when controls are bound to the nib file’s owner.
- Declaring a generic [view](nsviewcontroller/view.md) property, to make it easy to establish bindings in the nib to an object that isn’t yet known at nib-loading time or readily available to the code that’s doing the nib loading.
- Implementing the key-value binding NSEditor informal protocol, so that apps using a view controller can easily make bound controls in the views commit or discard changes by the user.

In macOS 10.10 and later, a view controller offers a full set of life cycle methods, allowing you to manage the content of a window in a way that is on a par with iOS view controller management. These methods, presented in order here to reflect a typical cycle, are:

*View life cycle:*

1. [viewDidLoad](nsviewcontroller/viewdidload%28%29.md)
2. [viewWillAppear](nsviewcontroller/viewwillappear%28%29.md)
3. [viewDidAppear](nsviewcontroller/viewdidappear%28%29.md)

*User interaction cycle:*

1. [updateViewConstraints](nsviewcontroller/updateviewconstraints%28%29.md)
2. [viewWillLayout](nsviewcontroller/viewwilllayout%28%29.md)
3. [viewDidLayout](nsviewcontroller/viewdidlayout%28%29.md)
4. [viewWillDisappear](nsviewcontroller/viewwilldisappear%28%29.md)
5. [viewDidDisappear](nsviewcontroller/viewdiddisappear%28%29.md)

In addition, in macOS 10.10 and later, a view controller participates in the responder chain. You can implement action methods directly in the view controller. Corresponding actions that originate in the view controller’s view proceed up the responder chain and are handled by those methods.

Prior to OS X v10.10, a typical usage pattern for loading a nib file was to subclass [NSViewController](nsviewcontroller.md) and override its [loadView](nsviewcontroller/loadview%28%29.md) method to call `[super loadView]`. But in macOS 10.10 and later, the [loadView](nsviewcontroller/loadview%28%29.md) method automatically looks for a nib file with the same name as the view controller. To take advantage of this behavior, name a nib file after its corresponding view controller and pass `nil` to both parameters of the [initWithNibName:bundle:](nsviewcontroller/init%28nibname_bundle_%29.md) method.

A view controller employs lazy loading of its view: Immediately after a view controller is loaded into memory, the value of its [viewLoaded](nsviewcontroller/isviewloaded.md) property is [false](https://developer.apple.com/documentation/swift/false). The value changes to [true](https://developer.apple.com/documentation/swift/true) after the [loadView](nsviewcontroller/loadview%28%29.md) method returns and just before the system calls the [viewDidLoad](nsviewcontroller/viewdidload%28%29.md) method.

A view controller is meant to be highly reusable, such as for dynamically representing various objects. For example, the  [addAccessoryController:](nspagelayout/addaccessorycontroller%28__%29.md) methods of the [NSPageLayout](nspagelayout.md) and [NSPrintPanel](nsprintpanel.md) classes take an [NSViewController](nsviewcontroller.md) instance as the argument, and set the [representedObject](nsviewcontroller/representedobject.md) property to the [NSPrintInfo](nsprintinfo.md) object that is to be shown to the user. This allows a developer to easily create new printing accessory views using bindings and the [NSPrintInfo](nsprintinfo.md) class’s key-value coding and key-value observing compliance. When the user dismisses a printing dialog, the  [NSPageLayout](nspagelayout.md) and [NSPrintPanel](nsprintpanel.md) classes each send NSEditor messages to each accessory view controller to ensure that the user’s changes have been committed or discarded properly. The titles of the accessories are retrieved from the view controllers and shown to the user in menus that the user can choose from.

## Topics

### Creating A View Controller

- [initWithNibName:bundle:](nsviewcontroller/init%28nibname_bundle_%29.md): Returns a view controller object initialized to the nib file in the specified bundle.
- [loadView](nsviewcontroller/loadview%28%29.md): Instantiates a view from a nib file and sets the value of the [view](nsviewcontroller/view.md) property.

### Represented Object

- [representedObject](nsviewcontroller/representedobject.md): The object whose value is presented in the receiver’s primary view.

### Nib Properties

- [nibBundle](nsviewcontroller/nibbundle.md): The nib bundle to be loaded to instantiate the receiver’s primary view.
- [nibName](nsviewcontroller/nibname.md): The name of the nib file to be loaded to instantiate the receiver’s primary view.

### View Properties

- [view](nsviewcontroller/view.md): The view controller’s primary view.
- [title](nsviewcontroller/title.md): The localized title of the receiver’s primary view.

### NSEditor Conformance

- [commitEditingWithDelegate:didCommitSelector:contextInfo:](nsviewcontroller/commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempt to commit any currently edited results of the receiver.
- [commitEditing](nsviewcontroller/commitediting%28%29.md): Returns whether the receiver was able to commit any pending edits.
- [discardEditing](nsviewcontroller/discardediting%28%29.md): Causes the receiver to discard any changes, restoring the previous values.

### Using a Storyboard

- [storyboard](nsviewcontroller/storyboard.md): The storyboard from which the view controller was loaded.
- [dismissController:](nsviewcontroller/dismiss%28__%29-3n76y.md)

### Responding to View Events

- [viewDidLoad](nsviewcontroller/viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [loadViewIfNeeded](nsviewcontroller/loadviewifneeded%28%29.md)
- [viewLoaded](nsviewcontroller/isviewloaded.md): A Boolean value indicating whether the view controller’s view is loaded into memory.
- [viewIfLoaded](nsviewcontroller/viewifloaded.md)
- [viewWillAppear](nsviewcontroller/viewwillappear%28%29.md): Called after the view controller’s view has been loaded into memory is about to be added to the view hierarchy in the window.
- [viewDidAppear](nsviewcontroller/viewdidappear%28%29.md): Called when the view controller’s view is fully transitioned onto the screen.
- [viewWillDisappear](nsviewcontroller/viewwilldisappear%28%29.md): Called when the view controller’s view is about to be removed from the view hierarchy in the window.
- [viewDidDisappear](nsviewcontroller/viewdiddisappear%28%29.md): Called after the view controller’s view is removed from the view hierarchy in a window.

### Managing View Layout

- [preferredContentSize](nsviewcontroller/preferredcontentsize.md): The desired size of the view controller’s view, in screen units.
- [updateViewConstraints](nsviewcontroller/updateviewconstraints%28%29.md): Called during Auto Layout constraint updating to enable the view controller to mediate the process.
- [viewWillLayout](nsviewcontroller/viewwilllayout%28%29.md): Called just before the [layout](nsview/layout%28%29.md) method of the view controller’s view is called.
- [viewDidLayout](nsviewcontroller/viewdidlayout%28%29.md): Called immediately after the [layout](nsview/layout%28%29.md) method of the view controller’s view is called.

### Managing Child View Controllers in a Custom Container

- [addChildViewController:](nsviewcontroller/addchild%28__%29.md): A convenience method for adding a child view controller at the end of the [childViewControllers](nsviewcontroller/children.md) array.
- [childViewControllers](nsviewcontroller/children.md): An array of view controllers that are hierarchical children of the view controller.
- [transitionFromViewController:toViewController:options:completionHandler:](nsviewcontroller/transition%28from_to_options_completionhandler_%29.md): Performs a transition between two sibling child view controllers of the view controller.
- [insertChildViewController:atIndex:](nsviewcontroller/insertchild%28__at_%29.md): Inserts a specified child view controller into the [childViewControllers](nsviewcontroller/children.md) array at a specified position.
- [removeChildViewControllerAtIndex:](nsviewcontroller/removechild%28at_%29.md): Removes a specified child controller from the view controller.
- [removeFromParentViewController](nsviewcontroller/removefromparent%28%29.md): Removes the called view controller from its parent view controller.
- [preferredContentSizeDidChangeForViewController:](nsviewcontroller/preferredcontentsizedidchange%28for_%29.md): Called when there is a change in value of the [preferredContentSize](nsviewcontroller/preferredcontentsize.md) property of a child view controller or a presented view controller.

### Presenting Another View Controller’s Content

- [presentViewController:animator:](nsviewcontroller/present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismissViewController:](nsviewcontroller/dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:](nsviewcontroller/present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:hasFullSizeContent:](nsviewcontroller/present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentViewControllerAsModalWindow:](nsviewcontroller/presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentViewControllerAsSheet:](nsviewcontroller/presentassheet%28__%29.md): Presents another view controller as a sheet.
- [presentViewControllerInWidget:](nsviewcontroller/present%28inwidget_%29.md): Deprecated.

### Getting Related View Controllers

- [parentViewController](nsviewcontroller/parent.md): The immediate ancestor view controller of the view controller.
- [presentedViewControllers](nsviewcontroller/presentedviewcontrollers.md): The view controllers, if any, that are currently presented by the view controller.
- [presentingViewController](nsviewcontroller/presentingviewcontroller.md): The view controller that presented the view controller or that presented its farthest ancestor view controller.

### Configuring an App Extension View Controller

- [extensionContext](nsviewcontroller/extensioncontext.md): For a view controller that is part of an app extension, the app extension context.
- [preferredScreenOrigin](nsviewcontroller/preferredscreenorigin.md): For a view controller that is part of an app extension, the preferred screen origin.
- [preferredMaximumSize](nsviewcontroller/preferredmaximumsize.md): For a view controller that is part of an app extension, the largest allowable size for the app extension’s primary view, in screen units.
- [preferredMinimumSize](nsviewcontroller/preferredminimumsize.md): For a view controller that is part of an app extension, the smallest allowable size for the app extension’s primary view, in screen units.
- [viewWillTransitionToSize:](nsviewcontroller/viewwilltransition%28to_%29.md): For a view controller that is part of an app extension, called when its view is about to be resized.
- [sourceItemView](nsviewcontroller/sourceitemview.md)

### Constants

- [NSViewControllerTransitionOptions](nsviewcontroller/transitionoptions.md): Animation options for view transitions in a view controller.

### Initializers

- [initWithCoder:](nsviewcontroller/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Inherited By

- [NSCollectionViewItem](nscollectionviewitem.md)
- [NSPageController](nspagecontroller.md)
- [NSSplitViewController](nssplitviewcontroller.md)
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)
- [NSTabViewController](nstabviewcontroller.md)
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSEditor](nseditor.md)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSSeguePerforming](nssegueperforming.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [PlaygroundLiveViewable](https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewable)

## See Also

### Content Controllers

- [NSWindowController](nswindowcontroller.md): A controller that manages a window, usually a window stored in a nib file.
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md): An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.
