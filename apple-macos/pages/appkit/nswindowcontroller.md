> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller](https://developer.apple.com/documentation/appkit/nswindowcontroller)

# NSWindowController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A controller that manages a window, usually a window stored in a nib file.

## Declaration

```swift
class NSWindowController
```

<a id="overview"></a>

## Overview

Managing a window entails:

- Loading and displaying the window
- Closing the window when appropriate
- Customizing the window’s title
- Storing the window’s frame (size and location) in the defaults database
- Cascading the window in relation to other document windows of the app

A window controller can manage a window by itself or as a role player in AppKit’s document-based architecture, which also includes [NSDocument](nsdocument.md) and [NSDocumentController](nsdocumentcontroller.md) objects. In this architecture, a window controller is created and managed by a “document” (an instance of an `NSDocument` subclass) and, in turn, keeps a reference to the document.

The relationship between a window controller and a nib file is important. Although a window controller can manage a programmatically created window, it usually manages a window in a nib file. The nib file can contain other top-level objects, including other windows, but the window controller’s responsibility is this primary window. The window controller is usually the owner of the nib file, even when it is part of a document-based app. Regardless of who is the file’s owner, the window controller is responsible for freeing all top-level objects in the nib file it loads.

For simple documents—that is, documents with only one nib file containing a window—you need to do little directly with `NSWindowController`; AppKit creates one for you. However, if the default window controller is not sufficient, you can create a custom subclass of `NSWindowController`. For documents with multiple windows or panels, your document must create separate instances of `NSWindowController` (or of custom subclasses of `NSWindowController`), one for each window or panel. An example is a CAD app that has different windows for side, top, and front views of drawn objects. What you do in your [NSDocument](nsdocument.md) subclass determines whether the default `NSWindowController` or separately created and configured `NSWindowController` objects are used.

<a id="Subclassing-NSWindowController"></a>

### Subclassing NSWindowController

You should create a subclass of `NSWindowController` when you want to augment the default behavior, such as to give the window a custom title or to perform some setup tasks before the window is loaded. In your class’s initialization method, be sure to invoke on `super` either one of the `initWithWindowNibName:...` initializers or the [init(window:)](nswindowcontroller/init%28window_%29.md) initializer. The initializer you choose depends on whether the window object originates in a nib file or is programmatically created.

You can also implement an [NSWindowController](nswindowcontroller.md) subclass to avoid requiring client code to get the corresponding nib’s filename and pass it to [init(windowNibName:)](nswindowcontroller/init%28windownibname_%29.md) or [init(windowNibName:owner:)](nswindowcontroller/init%28windownibname_owner_%29.md) when instantiating the window controller. The best way to do this is to override [windowNibName](nswindowcontroller/windownibname.md) to return the nib’s filename and instantiate the window controller by passing `nil` to [init(window:)](nswindowcontroller/init%28window_%29.md). Using the [init(window:)](nswindowcontroller/init%28window_%29.md) designated initializer simplifies compliance with Swift initializer requirements.

Typically, you override one of the methods listed below.

| Method Name | Description |
| --- | --- |
| [windowWillLoad()](nswindowcontroller/windowwillload%28%29.md) | Override to perform tasks before the window nib file is loaded. |
| [windowDidLoad()](nswindowcontroller/windowdidload%28%29.md) | Override to perform tasks after the window nib file is loaded. |
| [windowTitle(forDocumentDisplayName:)](nswindowcontroller/windowtitle%28fordocumentdisplayname_%29.md) | Override to customize the window title. |

You can also override [loadWindow()](nswindowcontroller/loadwindow%28%29.md) to get different nib-searching or nib-loading behavior, although there is usually no need to do this.

## Topics

### Initializing Window Controllers

- [init(window:)](nswindowcontroller/init%28window_%29.md): Returns a window controller initialized with a given window.
- [init(windowNibName:)](nswindowcontroller/init%28windownibname_%29.md): Returns a window controller initialized with a nib file.
- [init(windowNibName:owner:)](nswindowcontroller/init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.
- [init(windowNibPath:owner:)](nswindowcontroller/init%28windownibpath_owner_%29.md): Returns a window controller initialized with a nib file at an absolute path and a specified owner.

### Loading and Displaying the Window

- [loadWindow()](nswindowcontroller/loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [showWindow(\_:)](nswindowcontroller/showwindow%28__%29.md): Displays the window associated with the receiver.
- [isWindowLoaded](nswindowcontroller/iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](nswindowcontroller/window.md): The window owned by the receiver.
- [windowDidLoad()](nswindowcontroller/windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad()](nswindowcontroller/windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.

### Accessing the Document

- [document](nswindowcontroller/document.md): The document associated with the window controller.
- [setDocumentEdited(\_:)](nswindowcontroller/setdocumentedited%28__%29.md): Sets the document edited flag for the window controller.

### Closing the Window

- [close()](nswindowcontroller/close%28%29.md): Closes the window if it was loaded.
- [shouldCloseDocument](nswindowcontroller/shouldclosedocument.md): A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.

### Getting Nib and Storyboard Information

- [owner](nswindowcontroller/owner.md): The owner of the nib file containing the window managed by the receiver.
- [storyboard](nswindowcontroller/storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibName](nswindowcontroller/windownibname.md): The name of the nib file that stores the window associated with the receiver.
- [windowNibPath](nswindowcontroller/windownibpath.md): The full path of the nib file that stores the window associated with the receiver.

### Accessing Window Attributes and Content

- [shouldCascadeWindows](nswindowcontroller/shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](nswindowcontroller/windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName()](nswindowcontroller/synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitle(forDocumentDisplayName:)](nswindowcontroller/windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](nswindowcontroller/contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController(\_:)](nswindowcontroller/dismisscontroller%28__%29.md): Dismisses the window controller.

### Window Property Wrappers

- [NSWindowController.WindowLoading](nswindowcontroller/windowloading.md): A property wrapper that loads the receiver’s window.

### Initializers

- [init(coder:)](nswindowcontroller/init%28coder_%29.md)

### Instance Properties

- [previewRepresentableActivityItems](nswindowcontroller/previewrepresentableactivityitems.md)

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](nssegueperforming.md)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content Controllers

- [NSViewController](nsviewcontroller.md): A controller that manages a view, typically loaded from a nib file.
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md): An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.

# NSWindowController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A controller that manages a window, usually a window stored in a nib file.

## Declaration

```objectivec
@interface NSWindowController : NSResponder
```

<a id="overview"></a>

## Overview

Managing a window entails:

- Loading and displaying the window
- Closing the window when appropriate
- Customizing the window’s title
- Storing the window’s frame (size and location) in the defaults database
- Cascading the window in relation to other document windows of the app

A window controller can manage a window by itself or as a role player in AppKit’s document-based architecture, which also includes [NSDocument](nsdocument.md) and [NSDocumentController](nsdocumentcontroller.md) objects. In this architecture, a window controller is created and managed by a “document” (an instance of an `NSDocument` subclass) and, in turn, keeps a reference to the document.

The relationship between a window controller and a nib file is important. Although a window controller can manage a programmatically created window, it usually manages a window in a nib file. The nib file can contain other top-level objects, including other windows, but the window controller’s responsibility is this primary window. The window controller is usually the owner of the nib file, even when it is part of a document-based app. Regardless of who is the file’s owner, the window controller is responsible for freeing all top-level objects in the nib file it loads.

For simple documents—that is, documents with only one nib file containing a window—you need to do little directly with `NSWindowController`; AppKit creates one for you. However, if the default window controller is not sufficient, you can create a custom subclass of `NSWindowController`. For documents with multiple windows or panels, your document must create separate instances of `NSWindowController` (or of custom subclasses of `NSWindowController`), one for each window or panel. An example is a CAD app that has different windows for side, top, and front views of drawn objects. What you do in your [NSDocument](nsdocument.md) subclass determines whether the default `NSWindowController` or separately created and configured `NSWindowController` objects are used.

<a id="Subclassing-NSWindowController"></a>

### Subclassing NSWindowController

You should create a subclass of `NSWindowController` when you want to augment the default behavior, such as to give the window a custom title or to perform some setup tasks before the window is loaded. In your class’s initialization method, be sure to invoke on `super` either one of the `initWithWindowNibName:...` initializers or the [initWithWindow:](nswindowcontroller/init%28window_%29.md) initializer. The initializer you choose depends on whether the window object originates in a nib file or is programmatically created.

You can also implement an [NSWindowController](nswindowcontroller.md) subclass to avoid requiring client code to get the corresponding nib’s filename and pass it to [initWithWindowNibName:](nswindowcontroller/init%28windownibname_%29.md) or [initWithWindowNibName:owner:](nswindowcontroller/init%28windownibname_owner_%29.md) when instantiating the window controller. The best way to do this is to override [windowNibName](nswindowcontroller/windownibname.md) to return the nib’s filename and instantiate the window controller by passing `nil` to [initWithWindow:](nswindowcontroller/init%28window_%29.md). Using the [initWithWindow:](nswindowcontroller/init%28window_%29.md) designated initializer simplifies compliance with Swift initializer requirements.

Typically, you override one of the methods listed below.

| Method Name | Description |
| --- | --- |
| [windowWillLoad](nswindowcontroller/windowwillload%28%29.md) | Override to perform tasks before the window nib file is loaded. |
| [windowDidLoad](nswindowcontroller/windowdidload%28%29.md) | Override to perform tasks after the window nib file is loaded. |
| [windowTitleForDocumentDisplayName:](nswindowcontroller/windowtitle%28fordocumentdisplayname_%29.md) | Override to customize the window title. |

You can also override [loadWindow](nswindowcontroller/loadwindow%28%29.md) to get different nib-searching or nib-loading behavior, although there is usually no need to do this.

## Topics

### Initializing Window Controllers

- [initWithWindow:](nswindowcontroller/init%28window_%29.md): Returns a window controller initialized with a given window.
- [initWithWindowNibName:](nswindowcontroller/init%28windownibname_%29.md): Returns a window controller initialized with a nib file.
- [initWithWindowNibName:owner:](nswindowcontroller/init%28windownibname_owner_%29.md): Returns a window controller initialized with a nib file and a specified owner for that nib file.
- [initWithWindowNibPath:owner:](nswindowcontroller/init%28windownibpath_owner_%29.md): Returns a window controller initialized with a nib file at an absolute path and a specified owner.

### Loading and Displaying the Window

- [loadWindow](nswindowcontroller/loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [showWindow:](nswindowcontroller/showwindow%28__%29.md): Displays the window associated with the receiver.
- [windowLoaded](nswindowcontroller/iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](nswindowcontroller/window.md): The window owned by the receiver.
- [windowDidLoad](nswindowcontroller/windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad](nswindowcontroller/windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.

### Accessing the Document

- [document](nswindowcontroller/document.md): The document associated with the window controller.
- [setDocumentEdited:](nswindowcontroller/setdocumentedited%28__%29.md): Sets the document edited flag for the window controller.

### Closing the Window

- [close](nswindowcontroller/close%28%29.md): Closes the window if it was loaded.
- [shouldCloseDocument](nswindowcontroller/shouldclosedocument.md): A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.

### Getting Nib and Storyboard Information

- [owner](nswindowcontroller/owner.md): The owner of the nib file containing the window managed by the receiver.
- [storyboard](nswindowcontroller/storyboard.md): The storyboard file from which the window controller was loaded.
- [windowNibName](nswindowcontroller/windownibname.md): The name of the nib file that stores the window associated with the receiver.
- [windowNibPath](nswindowcontroller/windownibpath.md): The full path of the nib file that stores the window associated with the receiver.

### Accessing Window Attributes and Content

- [shouldCascadeWindows](nswindowcontroller/shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](nswindowcontroller/windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName](nswindowcontroller/synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitleForDocumentDisplayName:](nswindowcontroller/windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](nswindowcontroller/contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController:](nswindowcontroller/dismisscontroller%28__%29.md): Dismisses the window controller.

### Initializers

- [initWithCoder:](nswindowcontroller/init%28coder_%29.md)

### Instance Properties

- [previewRepresentableActivityItems](nswindowcontroller/previewrepresentableactivityitems.md)

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [NSSeguePerforming](nssegueperforming.md)

## See Also

### Content Controllers

- [NSViewController](nsviewcontroller.md): A controller that manages a view, typically loaded from a nib file.
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md): An object that manages a custom view—known as an accessory view—in the title bar–toolbar area of a window.
