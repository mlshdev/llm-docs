> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication](https://developer.apple.com/documentation/appkit/nsapplication)

# NSApplication (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages an app’s main event loop and resources used by all of that app’s objects.

## Declaration

```swift
class NSApplication
```

## Mentioned In

- [Choosing a Specific Appearance for Your macOS App](choosing-a-specific-appearance-for-your-macos-app.md)
- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="overview"></a>

## Overview

Every app uses a single instance of [NSApplication](nsapplication.md) to control the main event loop, keep track of the app’s windows and menus, distribute events to the appropriate objects (that’s, itself or one of its windows), set up autorelease pools, and receive notification of app-level events. An [NSApplication](nsapplication.md) object has a delegate (an object that you assign) that’s notified when the app starts or terminates, is hidden or activated, should open a file selected by the user, and so forth. By setting the delegate and implementing the delegate methods, you customize the behavior of your app without having to subclass [NSApplication](nsapplication.md). In your app’s `main()` function, create the [NSApplication](nsapplication.md) instance by calling the [shared](nsapplication/shared.md) class method. After creating the application object, the `main()` function should load your app’s main nib file and then start the event loop by sending the application object a [run()](nsapplication/run%28%29.md) message. If you create an Application project in Xcode, this `main()` function is created for you. The `main()` function Xcode creates begins by calling a function named `NSApplicationMain()`, which is functionally similar to the following:

```objc
void NSApplicationMain(int argc, char *argv[]) {
    [NSApplication sharedApplication];
    [NSBundle loadNibNamed:@"myMain" owner:NSApp];
    [NSApp run];
}
```

The [shared](nsapplication/shared.md) class method initializes the display environment and connects your program to the window server and the display server. The [NSApplication](nsapplication.md) object maintains a list of all the [NSWindow](nswindow.md) objects the app uses, so it can retrieve any of the app’s [NSView](nsview.md) objects. The [shared](nsapplication/shared.md) method also initializes the global variable `NSApp`, which you use to retrieve the [NSApplication](nsapplication.md) instance. [shared](nsapplication/shared.md) only performs the initialization once. If you invoke it more than once, it returns the application object it created previously.

The shared [NSApplication](nsapplication.md) object performs the important task of receiving events from the window server and distributing them to the proper [NSResponder](nsresponder.md) objects. `NSApp` translates an event into an [NSEvent](nsevent.md) object, then forwards the event object to the affected [NSWindow](nswindow.md) object. All keyboard and mouse events go directly to the [NSWindow](nswindow.md) object associated with the event. The only exception to this rule is if the Command key is pressed when a key-down event occurs; in this case, every [NSWindow](nswindow.md) object has an opportunity to respond to the event. When a window object receives an [NSEvent](nsevent.md) object from `NSApp`, it distributes it to the objects in its view hierarchy.

[NSApplication](nsapplication.md) is also responsible for dispatching certain Apple events received by the app. For example, macOS sends Apple events to your app at various times, such as when the app is launched or reopened. [NSApplication](nsapplication.md) installs Apple event handlers to handle these events by sending a message to the appropriate object. You can also use the [NSAppleEventManager](https://developer.apple.com/documentation/foundation/nsappleeventmanager) class to register your own Apple event handlers. The [applicationWillFinishLaunching(\_:)](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) method is generally the best place to do so. For more information on how events are handled and how you can modify the default behavior, including information on working with Apple events in scriptable apps, see [How Cocoa Applications Handle Apple Events](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_handle_AEs/SAppsHandleAEs.html#//apple_ref/doc/uid/20001239) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

The [NSApplication](nsapplication.md) class sets up `@autorelease` block during initialization and inside the event loop—specifically, within its initialization (or [shared](nsapplication/shared.md)) and [run()](nsapplication/run%28%29.md) methods. Similarly, the methods AppKit adds to [Bundle](https://developer.apple.com/documentation/foundation/bundle) employ `@autorelease` blocks during the loading of nib files. These `@autorelease` blocks aren’t accessible outside the scope of the respective [NSApplication](nsapplication.md) and [Bundle](https://developer.apple.com/documentation/foundation/bundle) methods. Typically, an app creates objects either while the event loop is running or by loading objects from nib files, so this lack of access usually isn’t a problem. However, if you do need to use Cocoa classes within the `main()` function itself (other than to load nib files or to instantiate [NSApplication](nsapplication.md)), you should create an `@autorelease` block to contain the code using the classes.

<a id="The-delegate-and-notifications"></a>

### The delegate and notifications

You can assign a delegate to your [NSApplication](nsapplication.md) object. The delegate responds to certain messages on behalf of the object. Some of these messages, such as [application(\_:openFile:)](nsapplicationdelegate/application%28__openfile_%29.md), ask the delegate to perform an action. Another message, [applicationShouldTerminate(\_:)](nsapplicationdelegate/applicationshouldterminate%28__%29.md), lets the delegate determine whether the app should be allowed to quit. The [NSApplication](nsapplication.md) class sends these messages directly to its delegate.

[NSApplication](nsapplication.md) also posts notifications to the app’s default notification center. Any object may register to receive one or more of the notifications posted by [NSApplication](nsapplication.md) by sending the message [addObserver(\_:selector:name:object:)](https://developer.apple.com/documentation/foundation/notificationcenter/addobserver%28_:selector:name:object:%29) to the default notification center (an instance of the `NSNotificationCenter` class). The delegate of [NSApplication](nsapplication.md) is automatically registered to receive these notifications if it implements certain delegate methods. For example, [NSApplication](nsapplication.md) posts notifications when it’s about to be done launching the app and when it’s done launching the app ([willFinishLaunchingNotification](nsapplication/willfinishlaunchingnotification.md) and [didFinishLaunchingNotification](nsapplication/didfinishlaunchingnotification.md)). The delegate has an opportunity to respond to these notifications by implementing the methods [applicationWillFinishLaunching(\_:)](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) and [applicationDidFinishLaunching(\_:)](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md). If the delegate wants to be informed of both events, it implements both methods. If it needs to know only when the app is finished launching, it implements only [applicationDidFinishLaunching(\_:)](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md).

<a id="System-services"></a>

### System services

`NSApplication` interacts with the system services architecture to provide services to your app through the Services menu.

<a id="Subclassing-notes"></a>

### Subclassing notes

You rarely should find a real need to create a custom `NSApplication` subclass. Unlike some object-oriented libraries, Cocoa doesn’t require you to subclass `NSApplication` to customize app behavior. Instead it gives you many other ways to customize an app. This section discusses both some of the possible reasons to subclass `NSApplication` and some of the reasons *not* to subclass `NSApplication`.

To use a custom subclass of `NSApplication`, send [shared](nsapplication/shared.md) to your subclass rather than directly to `NSApplication`. If you create your app in Xcode, you can accomplish this by setting your custom app class to be the principal class. In Xcode, double-click the app target in the Groups and Files list to open the Info window for the target. Then display the Properties pane of the window and replace “NSApplication” in the Principal Class field with the name of your custom class. The `NSApplicationMain` function sends [shared](nsapplication/shared.md) to the principal class to obtain the global app instance (`NSApp`)—which in this case will be an instance of your custom subclass of `NSApplication`.

> **Important**

>  Many AppKit classes rely on the `NSApplication` class and may not work properly until this class is fully initialized. As a result, you should not, for example, attempt to invoke methods of other AppKit classes from an initialization method of an `NSApplication` subclass.

<a id="Methods-to-override"></a>

#### Methods to override

Generally, you subclass `NSApplication` to provide your own special responses to messages that are routinely sent to the global app object (`NSApp`). `NSApplication` doesn’t have primitive methods in the sense of methods that you must override in your subclass. Here are four methods that are possible candidates for overriding:

- Override [run()](nsapplication/run%28%29.md) if you want the app to manage the main event loop differently than it does by default. (This a critical and complex task, however, that you should only attempt with good reason).
- Override [sendEvent(\_:)](nsapplication/sendevent%28__%29.md) if you want to change how events are dispatched or perform some special event processing.
- Override [requestUserAttention(\_:)](nsapplication/requestuserattention%28__%29.md) if you want to modify how your app attracts the attention of the user (for example, offering an alternative to the bouncing app icon in the Dock).
- Override [target(forAction:)](nsapplication/target%28foraction_%29.md) to substitute another object for the target of an action message.

<a id="Special-considerations"></a>

#### Special considerations

The global app object uses `@autorelease` blocks in its [run()](nsapplication/run%28%29.md) method; if you override this method, you’ll need to create your own `@autorelease` blocks.

Do not override [shared](nsapplication/shared.md). The default implementation, which is essential to app behavior, is too complex to duplicate on your own.

<a id="Alternatives-to-subclassing"></a>

#### Alternatives to subclassing

`NSApplication` defines numerous [Delegation](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Delegation.html#//apple_ref/doc/uid/TP40008195-CH14) methods that offer opportunities for modifying specific aspects of app behavior. Instead of making a custom subclass of `NSApplication`, your app delegate may be able to implement one or more of these methods to accomplish your design goals. In general, a better design than subclassing `NSApplication` is to put the code that expresses your app’s special behavior into one or more custom objects called controllers. Methods defined in your controllers can be invoked from a small dispatcher object without being closely tied to the global app object.

## Topics

### Getting the shared app object

- [shared](nsapplication/shared.md): Returns the application instance, creating it if it doesn’t exist yet.
- [NSApp](nsapp.md): The global variable for the shared app instance.

### Managing the app’s behavior

- [delegate](nsapplication/delegate.md): The app delegate object.
- [NSApplicationDelegate](nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.

### Managing the event loop

- [nextEvent(matching:until:inMode:dequeue:)](nsapplication/nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEvents(matching:before:)](nsapplication/discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](nsapplication/currentevent.md): The last event object that the app retrieved from the event queue.
- [isRunning](nsapplication/isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run()](nsapplication/run%28%29.md): Starts the main event loop.
- [finishLaunching()](nsapplication/finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop(\_:)](nsapplication/stop%28__%29.md): Stops the main event loop.
- [sendEvent(\_:)](nsapplication/sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent(\_:atStart:)](nsapplication/postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.

### Posting actions

- [tryToPerform(\_:with:)](nsapplication/trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction(\_:to:from:)](nsapplication/sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [target(forAction:)](nsapplication/target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.
- [target(forAction:to:from:)](nsapplication/target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.

### Terminating the app

- [terminate(\_:)](nsapplication/terminate%28__%29.md): Terminates the receiver.
- [reply(toApplicationShouldTerminate:)](nsapplication/reply%28toapplicationshouldterminate_%29.md): Responds to `NSTerminateLater` once the app knows whether it can terminate.

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate()](nsapplication/activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate()](nsapplication/deactivate%28%29.md): Deactivates the receiver.
- [isActive](nsapplication/isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivation(to:)](nsapplication/yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivation(toApplicationWithBundleIdentifier:)](nsapplication/yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplication.ActivationOptions](nsapplication/activationoptions.md): The following flags are for [activate(options:)](nsrunningapplication/activate%28options_%29.md).

### Managing relaunch on login

- [disableRelaunchOnLogin()](nsapplication/disablerelaunchonlogin%28%29.md): Disables relaunching the app on login.
- [enableRelaunchOnLogin()](nsapplication/enablerelaunchonlogin%28%29.md): Enables relaunching the app on login.

### Managing remote notifications

- [registerForRemoteNotifications()](nsapplication/registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications()](nsapplication/unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](nsapplication/enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotifications(matching:)](nsapplication/registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [isRegisteredForRemoteNotifications](nsapplication/isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSApplication.RemoteNotificationType](nsapplication/remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.

### Managing the app’s appearance

- [appearance](nsapplication/appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](nsapplication/effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](nsapplication/currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](nsapplication/presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplication.PresentationOptions](nsapplication/presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](nsapplication/applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

### Managing windows, panels, and menus

- [App Windows](app-windows.md): Show, hide, minimize, arrange, and update your app’s windows.
- [Modal Windows and Panels](modal-windows-and-panels.md): Display a modal window or show one of the standard app panels, such as the app’s About panel.
- [Menus](menus.md): Access the app’s main menu items and update the window and services menus.

### User interface layout direction

- [userInterfaceLayoutDirection](nsapplication/userinterfacelayoutdirection.md): The layout direction of the user interface.
- [NSUserInterfaceLayoutDirection](nsuserinterfacelayoutdirection.md): Specifies the directional flow of the user interface.

### Accessing the dock tile

- [dockTile](nsapplication/docktile.md): The app’s Dock tile.
- [applicationIconImage](nsapplication/applicationiconimage.md): The image used for the app’s icon.

### Customizing the Touch Bar

- [toggleTouchBarCustomizationPalette(\_:)](nsapplication/toggletouchbarcustomizationpalette%28__%29.md): Show or hides the interface for customizing the Touch Bar.

### Managing user attention requests

- [requestUserAttention(\_:)](nsapplication/requestuserattention%28__%29.md): Starts a user attention request.
- [NSApplication.RequestUserAttentionType](nsapplication/requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest(\_:)](nsapplication/canceluserattentionrequest%28__%29.md) and [requestUserAttention(\_:)](nsapplication/requestuserattention%28__%29.md).
- [cancelUserAttentionRequest(\_:)](nsapplication/canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [reply(toOpenOrPrint:)](nsapplication/reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplication.DelegateReply](nsapplication/delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

### Providing help information

- [registerUserInterfaceItemSearchHandler(\_:)](nsapplication/registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString(\_:inUserInterfaceItemString:range:found:)](nsapplication/searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler(\_:)](nsapplication/unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp(\_:)](nsapplication/showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode(\_:)](nsapplication/activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](nsapplication/helpmenu.md): The help menu used by the app.

### Providing services

- [validRequestor(forSendType:returnType:)](nsapplication/validrequestor%28forsendtype_returntype_%29.md): Indicates whether the receiver can send and receive the specified pasteboard types.
- [servicesProvider](nsapplication/servicesprovider.md): The object that provides the services the current app advertises in the Services menu of other apps.

### Determining access to the keyboard

- [isFullKeyboardAccessEnabled](nsapplication/isfullkeyboardaccessenabled.md): A Boolean value indicating whether Full Keyboard Access is enabled in the Keyboard preference pane.

### Hiding apps

- [hideOtherApplications(\_:)](nsapplication/hideotherapplications%28__%29.md): Hides all apps, except the receiver.
- [unhideAllApplications(\_:)](nsapplication/unhideallapplications%28__%29.md): Unhides all apps, including the receiver.

### Managing threads

- [detachDrawingThread(\_:toTarget:with:)](nsapplication/detachdrawingthread%28__totarget_with_%29.md): Creates and executes a new thread based on the specified target and selector.

### Logging exceptions

- [reportException(\_:)](nsapplication/reportexception%28__%29.md): Logs a given exception by calling `NSLog()`.

### Configuring the activation policy

- [activationPolicy()](nsapplication/activationpolicy%28%29.md): Returns the app’s activation policy.
- [setActivationPolicy(\_:)](nsapplication/setactivationpolicy%28__%29.md): Attempts to modify the app’s activation policy.
- [NSApplication.ActivationPolicy](nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

### Scripting your app

- [orderedDocuments](nsapplication/ordereddocuments.md): An array of document objects arranged according to the front-to-back ordering of their associated windows.
- [orderedWindows](nsapplication/orderedwindows.md): An array of window objects arranged according to their front-to-back ordering on the screen.

### Notifications

These notifications apply to `NSApplication`. See Notifications in [NSWorkspace](nsworkspace.md) for additional, similar notifications.

- [didBecomeActiveNotification](nsapplication/didbecomeactivenotification.md): Posted immediately after the app becomes active.
- [didChangeScreenParametersNotification](nsapplication/didchangescreenparametersnotification.md): Posted when the configuration of the displays attached to the computer is changed.
- [didFinishLaunchingNotification](nsapplication/didfinishlaunchingnotification.md): Posted at the end of the [finishLaunching()](nsapplication/finishlaunching%28%29.md) method to indicate that the app has completed launching and is ready to run.
- [didHideNotification](nsapplication/didhidenotification.md): Posted at the end of the [hide(\_:)](nsapplication/hide%28__%29.md) method to indicate that the app is now hidden.
- [didResignActiveNotification](nsapplication/didresignactivenotification.md): Posted immediately after the app gives up its active status to another app.
- [didUnhideNotification](nsapplication/didunhidenotification.md): Posted at the end of the [unhideWithoutActivation()](nsapplication/unhidewithoutactivation%28%29.md) method to indicate that the app is now visible.
- [didUpdateNotification](nsapplication/didupdatenotification.md): Posted at the end of the [updateWindows()](nsapplication/updatewindows%28%29.md) method to indicate that the app has finished updating its windows.
- [willBecomeActiveNotification](nsapplication/willbecomeactivenotification.md): Posted immediately before the app becomes active.
- [willFinishLaunchingNotification](nsapplication/willfinishlaunchingnotification.md): Posted at the start of the [finishLaunching()](nsapplication/finishlaunching%28%29.md) method to indicate that the app has completed its initialization process and is about to finish launching.
- [willHideNotification](nsapplication/willhidenotification.md): Posted at the start of the [hide(\_:)](nsapplication/hide%28__%29.md) method to indicate that the app is about to be hidden.
- [willResignActiveNotification](nsapplication/willresignactivenotification.md): Posted immediately before the app gives up its active status to another app.
- [willTerminateNotification](nsapplication/willterminatenotification.md): Sends a notification to terminate the app.
- [willUnhideNotification](nsapplication/willunhidenotification.md): Posted at the start of the [unhideWithoutActivation()](nsapplication/unhidewithoutactivation%28%29.md) method to indicate that the app is about to become visible.
- [willUpdateNotification](nsapplication/willupdatenotification.md): Posted at the start of the [updateWindows()](nsapplication/updatewindows%28%29.md) method to indicate that the app is about to update its windows.
- [didFinishRestoringWindowsNotification](nsapplication/didfinishrestoringwindowsnotification.md): Posted when the app has finished restoring windows.
- [didChangeOcclusionStateNotification](nsapplication/didchangeocclusionstatenotification.md): Posted when the app’s occlusion state changes.

### Loading Cocoa bundles

- [loadApplication()](nsapplication/loadapplication%28%29.md)

### Displaying high dynamic resolution (HDR) content

- [applicationShouldSuppressHighDynamicRangeContent](nsapplication/applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.
- [NSApplication.ShouldBeginSuppressingHighDynamicRangeContent](nsapplication/shouldbeginsuppressinghighdynamicrangecontent.md)
- [NSApplication.ShouldEndSuppressingHighDynamicRangeContent](nsapplication/shouldendsuppressinghighdynamicrangecontent.md)

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nsapplication-deprecated-symbols.md): Review symbols that are no longer supported, and find the replacements to use instead.

### Structures

- [NSApplication.DidBecomeActiveMessage](nsapplication/didbecomeactivemessage.md)
- [NSApplication.DidChangeOcclusionStateMessage](nsapplication/didchangeocclusionstatemessage.md)
- [NSApplication.DidChangeScreenParametersMessage](nsapplication/didchangescreenparametersmessage.md)
- [NSApplication.DidFinishRestoringWindowsMessage](nsapplication/didfinishrestoringwindowsmessage.md)
- [NSApplication.DidHideMessage](nsapplication/didhidemessage.md)
- [NSApplication.DidResignActiveMessage](nsapplication/didresignactivemessage.md)
- [NSApplication.DidUnhideMessage](nsapplication/didunhidemessage.md)
- [NSApplication.DidUpdateWindowsMessage](nsapplication/didupdatewindowsmessage.md)
- [NSApplication.ProtectedDataDidBecomeAvailableMessage](nsapplication/protecteddatadidbecomeavailablemessage.md)
- [NSApplication.ProtectedDataWillBecomeUnavailableMessage](nsapplication/protecteddatawillbecomeunavailablemessage.md)
- [NSApplication.WillBecomeActiveMessage](nsapplication/willbecomeactivemessage.md)
- [NSApplication.WillFinishLaunchingMessage](nsapplication/willfinishlaunchingmessage.md)
- [NSApplication.WillHideMessage](nsapplication/willhidemessage.md)
- [NSApplication.WillResignActiveMessage](nsapplication/willresignactivemessage.md)
- [NSApplication.WillTerminateMessage](nsapplication/willterminatemessage.md)
- [NSApplication.WillUnhideMessage](nsapplication/willunhidemessage.md)
- [NSApplication.WillUpdateWindowsMessage](nsapplication/willupdatewindowsmessage.md)

### Instance Methods

- [addSceneRepresentation(\_:)](nsapplication/addscenerepresentation%28__%29.md): Adds the specified SwiftUI scene representation to the current application.

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Life Cycle

- [NSRunningApplication](nsrunningapplication.md): An object that can manipulate and provide information for a single instance of an app.
- [NSApplicationDelegate](nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.
- [NSApplicationMain(\_:\_:)](nsapplicationmain%28____%29.md): Called by the main function to create and run the application.
- [Managing ongoing background processes in your Mac](managing-ongoing-background-processes-in-your-mac.md): Configure your app to help people understand when background processes may continue after they close your app.

# NSApplication (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that manages an app’s main event loop and resources used by all of that app’s objects.

## Declaration

```objectivec
@interface NSApplication : NSResponder
```

## Mentioned In

- [Choosing a Specific Appearance for Your macOS App](choosing-a-specific-appearance-for-your-macos-app.md)
- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="overview"></a>

## Overview

Every app uses a single instance of [NSApplication](nsapplication.md) to control the main event loop, keep track of the app’s windows and menus, distribute events to the appropriate objects (that’s, itself or one of its windows), set up autorelease pools, and receive notification of app-level events. An [NSApplication](nsapplication.md) object has a delegate (an object that you assign) that’s notified when the app starts or terminates, is hidden or activated, should open a file selected by the user, and so forth. By setting the delegate and implementing the delegate methods, you customize the behavior of your app without having to subclass [NSApplication](nsapplication.md). In your app’s `main()` function, create the [NSApplication](nsapplication.md) instance by calling the [sharedApplication](nsapplication/shared.md) class method. After creating the application object, the `main()` function should load your app’s main nib file and then start the event loop by sending the application object a [run](nsapplication/run%28%29.md) message. If you create an Application project in Xcode, this `main()` function is created for you. The `main()` function Xcode creates begins by calling a function named `NSApplicationMain()`, which is functionally similar to the following:

```objc
void NSApplicationMain(int argc, char *argv[]) {
    [NSApplication sharedApplication];
    [NSBundle loadNibNamed:@"myMain" owner:NSApp];
    [NSApp run];
}
```

The [sharedApplication](nsapplication/shared.md) class method initializes the display environment and connects your program to the window server and the display server. The [NSApplication](nsapplication.md) object maintains a list of all the [NSWindow](nswindow.md) objects the app uses, so it can retrieve any of the app’s [NSView](nsview.md) objects. The [sharedApplication](nsapplication/shared.md) method also initializes the global variable `NSApp`, which you use to retrieve the [NSApplication](nsapplication.md) instance. [sharedApplication](nsapplication/shared.md) only performs the initialization once. If you invoke it more than once, it returns the application object it created previously.

The shared [NSApplication](nsapplication.md) object performs the important task of receiving events from the window server and distributing them to the proper [NSResponder](nsresponder.md) objects. `NSApp` translates an event into an [NSEvent](nsevent.md) object, then forwards the event object to the affected [NSWindow](nswindow.md) object. All keyboard and mouse events go directly to the [NSWindow](nswindow.md) object associated with the event. The only exception to this rule is if the Command key is pressed when a key-down event occurs; in this case, every [NSWindow](nswindow.md) object has an opportunity to respond to the event. When a window object receives an [NSEvent](nsevent.md) object from `NSApp`, it distributes it to the objects in its view hierarchy.

[NSApplication](nsapplication.md) is also responsible for dispatching certain Apple events received by the app. For example, macOS sends Apple events to your app at various times, such as when the app is launched or reopened. [NSApplication](nsapplication.md) installs Apple event handlers to handle these events by sending a message to the appropriate object. You can also use the [NSAppleEventManager](https://developer.apple.com/documentation/foundation/nsappleeventmanager) class to register your own Apple event handlers. The [applicationWillFinishLaunching:](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) method is generally the best place to do so. For more information on how events are handled and how you can modify the default behavior, including information on working with Apple events in scriptable apps, see [How Cocoa Applications Handle Apple Events](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_handle_AEs/SAppsHandleAEs.html#//apple_ref/doc/uid/20001239) in [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164).

The [NSApplication](nsapplication.md) class sets up `@autorelease` block during initialization and inside the event loop—specifically, within its initialization (or [sharedApplication](nsapplication/shared.md)) and [run](nsapplication/run%28%29.md) methods. Similarly, the methods AppKit adds to [NSBundle](https://developer.apple.com/documentation/foundation/bundle) employ `@autorelease` blocks during the loading of nib files. These `@autorelease` blocks aren’t accessible outside the scope of the respective [NSApplication](nsapplication.md) and [NSBundle](https://developer.apple.com/documentation/foundation/bundle) methods. Typically, an app creates objects either while the event loop is running or by loading objects from nib files, so this lack of access usually isn’t a problem. However, if you do need to use Cocoa classes within the `main()` function itself (other than to load nib files or to instantiate [NSApplication](nsapplication.md)), you should create an `@autorelease` block to contain the code using the classes.

<a id="The-delegate-and-notifications"></a>

### The delegate and notifications

You can assign a delegate to your [NSApplication](nsapplication.md) object. The delegate responds to certain messages on behalf of the object. Some of these messages, such as [application:openFile:](nsapplicationdelegate/application%28__openfile_%29.md), ask the delegate to perform an action. Another message, [applicationShouldTerminate:](nsapplicationdelegate/applicationshouldterminate%28__%29.md), lets the delegate determine whether the app should be allowed to quit. The [NSApplication](nsapplication.md) class sends these messages directly to its delegate.

[NSApplication](nsapplication.md) also posts notifications to the app’s default notification center. Any object may register to receive one or more of the notifications posted by [NSApplication](nsapplication.md) by sending the message [addObserver:selector:name:object:](https://developer.apple.com/documentation/foundation/notificationcenter/addobserver%28_:selector:name:object:%29) to the default notification center (an instance of the `NSNotificationCenter` class). The delegate of [NSApplication](nsapplication.md) is automatically registered to receive these notifications if it implements certain delegate methods. For example, [NSApplication](nsapplication.md) posts notifications when it’s about to be done launching the app and when it’s done launching the app ([NSApplicationWillFinishLaunchingNotification](nsapplication/willfinishlaunchingnotification.md) and [NSApplicationDidFinishLaunchingNotification](nsapplication/didfinishlaunchingnotification.md)). The delegate has an opportunity to respond to these notifications by implementing the methods [applicationWillFinishLaunching:](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md) and [applicationDidFinishLaunching:](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md). If the delegate wants to be informed of both events, it implements both methods. If it needs to know only when the app is finished launching, it implements only [applicationDidFinishLaunching:](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md).

<a id="System-services"></a>

### System services

`NSApplication` interacts with the system services architecture to provide services to your app through the Services menu.

<a id="Subclassing-notes"></a>

### Subclassing notes

You rarely should find a real need to create a custom `NSApplication` subclass. Unlike some object-oriented libraries, Cocoa doesn’t require you to subclass `NSApplication` to customize app behavior. Instead it gives you many other ways to customize an app. This section discusses both some of the possible reasons to subclass `NSApplication` and some of the reasons *not* to subclass `NSApplication`.

To use a custom subclass of `NSApplication`, send [sharedApplication](nsapplication/shared.md) to your subclass rather than directly to `NSApplication`. If you create your app in Xcode, you can accomplish this by setting your custom app class to be the principal class. In Xcode, double-click the app target in the Groups and Files list to open the Info window for the target. Then display the Properties pane of the window and replace “NSApplication” in the Principal Class field with the name of your custom class. The `NSApplicationMain` function sends [sharedApplication](nsapplication/shared.md) to the principal class to obtain the global app instance (`NSApp`)—which in this case will be an instance of your custom subclass of `NSApplication`.

> **Important**

>  Many AppKit classes rely on the `NSApplication` class and may not work properly until this class is fully initialized. As a result, you should not, for example, attempt to invoke methods of other AppKit classes from an initialization method of an `NSApplication` subclass.

<a id="Methods-to-override"></a>

#### Methods to override

Generally, you subclass `NSApplication` to provide your own special responses to messages that are routinely sent to the global app object (`NSApp`). `NSApplication` doesn’t have primitive methods in the sense of methods that you must override in your subclass. Here are four methods that are possible candidates for overriding:

- Override [run](nsapplication/run%28%29.md) if you want the app to manage the main event loop differently than it does by default. (This a critical and complex task, however, that you should only attempt with good reason).
- Override [sendEvent:](nsapplication/sendevent%28__%29.md) if you want to change how events are dispatched or perform some special event processing.
- Override [requestUserAttention:](nsapplication/requestuserattention%28__%29.md) if you want to modify how your app attracts the attention of the user (for example, offering an alternative to the bouncing app icon in the Dock).
- Override [targetForAction:](nsapplication/target%28foraction_%29.md) to substitute another object for the target of an action message.

<a id="Special-considerations"></a>

#### Special considerations

The global app object uses `@autorelease` blocks in its [run](nsapplication/run%28%29.md) method; if you override this method, you’ll need to create your own `@autorelease` blocks.

Do not override [sharedApplication](nsapplication/shared.md). The default implementation, which is essential to app behavior, is too complex to duplicate on your own.

<a id="Alternatives-to-subclassing"></a>

#### Alternatives to subclassing

`NSApplication` defines numerous [Delegation](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Delegation.html#//apple_ref/doc/uid/TP40008195-CH14) methods that offer opportunities for modifying specific aspects of app behavior. Instead of making a custom subclass of `NSApplication`, your app delegate may be able to implement one or more of these methods to accomplish your design goals. In general, a better design than subclassing `NSApplication` is to put the code that expresses your app’s special behavior into one or more custom objects called controllers. Methods defined in your controllers can be invoked from a small dispatcher object without being closely tied to the global app object.

## Topics

### Getting the shared app object

- [sharedApplication](nsapplication/shared.md): Returns the application instance, creating it if it doesn’t exist yet.
- [NSApp](nsapp.md): The global variable for the shared app instance.

### Managing the app’s behavior

- [delegate](nsapplication/delegate.md): The app delegate object.
- [NSApplicationDelegate](nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.

### Managing the event loop

- [nextEventMatchingMask:untilDate:inMode:dequeue:](nsapplication/nextevent%28matching_until_inmode_dequeue_%29.md): Returns the next event matching a given mask, or `nil` if no such event is found before a specified expiration date.
- [discardEventsMatchingMask:beforeEvent:](nsapplication/discardevents%28matching_before_%29.md): Removes all events matching the given mask and generated before the specified event.
- [currentEvent](nsapplication/currentevent.md): The last event object that the app retrieved from the event queue.
- [running](nsapplication/isrunning.md): A Boolean value indicating whether the main event loop is running.
- [run](nsapplication/run%28%29.md): Starts the main event loop.
- [finishLaunching](nsapplication/finishlaunching%28%29.md): Activates the app, opens any files specified by the `NSOpen` user default, and unhighlights the app’s icon.
- [stop:](nsapplication/stop%28__%29.md): Stops the main event loop.
- [sendEvent:](nsapplication/sendevent%28__%29.md): Dispatches an event to other objects.
- [postEvent:atStart:](nsapplication/postevent%28__atstart_%29.md): Adds a given event to the receiver’s event queue.
- [NSEventTrackingRunLoopMode](nseventtrackingrunloopmode.md): The mode set when tracking events modally, such as a mouse-dragging loop.

### Posting actions

- [tryToPerform:with:](nsapplication/trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction:to:from:](nsapplication/sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [targetForAction:](nsapplication/target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.
- [targetForAction:to:from:](nsapplication/target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.

### Terminating the app

- [terminate:](nsapplication/terminate%28__%29.md): Terminates the receiver.
- [replyToApplicationShouldTerminate:](nsapplication/reply%28toapplicationshouldterminate_%29.md): Responds to `NSTerminateLater` once the app knows whether it can terminate.

### Activating and deactivating the app

- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md): Request focus for your app, and coordinate passing control from one app to another.
- [activate](nsapplication/activate%28%29.md): Activates the receiver app, if appropriate.
- [deactivate](nsapplication/deactivate%28%29.md): Deactivates the receiver.
- [active](nsapplication/isactive.md): A Boolean value indicating whether this is the active app.
- [yieldActivationToApplication:](nsapplication/yieldactivation%28to_%29.md): Explicitly allows another app to make itself active.
- [yieldActivationToApplicationWithBundleIdentifier:](nsapplication/yieldactivation%28toapplicationwithbundleidentifier_%29.md): Explicitly allows another app to make itself active.
- [NSApplicationActivationOptions](nsapplication/activationoptions.md): The following flags are for [activateWithOptions:](nsrunningapplication/activate%28options_%29.md).

### Managing relaunch on login

- [disableRelaunchOnLogin](nsapplication/disablerelaunchonlogin%28%29.md): Disables relaunching the app on login.
- [enableRelaunchOnLogin](nsapplication/enablerelaunchonlogin%28%29.md): Enables relaunching the app on login.

### Managing remote notifications

- [registerForRemoteNotifications](nsapplication/registerforremotenotifications%28%29.md): Register for notifications sent by Apple Push Notification service (APNs).
- [unregisterForRemoteNotifications](nsapplication/unregisterforremotenotifications%28%29.md): Unregister for notifications received from Apple Push Notification service.
- [enabledRemoteNotificationTypes](nsapplication/enabledremotenotificationtypes.md): The types of push notifications that the app accepts.
- [registerForRemoteNotificationTypes:](nsapplication/registerforremotenotifications%28matching_%29.md): Register to receive notifications of the specified types from a provider through the Apple Push Notification service.
- [registeredForRemoteNotifications](nsapplication/isregisteredforremotenotifications.md): A Boolean value indicating whether the app is registered with Apple Push Notification service (APNs).
- [NSRemoteNotificationType](nsapplication/remotenotificationtype.md): These constants determine whether apps launched by remote notifications display a badge.

### Managing the app’s appearance

- [appearance](nsapplication/appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](nsapplication/effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](nsapplication/currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](nsapplication/presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplicationPresentationOptions](nsapplication/presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](nsapplication/applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

### Managing windows, panels, and menus

- [App Windows](app-windows.md): Show, hide, minimize, arrange, and update your app’s windows.
- [Modal Windows and Panels](modal-windows-and-panels.md): Display a modal window or show one of the standard app panels, such as the app’s About panel.
- [Menus](menus.md): Access the app’s main menu items and update the window and services menus.

### User interface layout direction

- [userInterfaceLayoutDirection](nsapplication/userinterfacelayoutdirection.md): The layout direction of the user interface.
- [NSUserInterfaceLayoutDirection](nsuserinterfacelayoutdirection.md): Specifies the directional flow of the user interface.

### Accessing the dock tile

- [dockTile](nsapplication/docktile.md): The app’s Dock tile.
- [applicationIconImage](nsapplication/applicationiconimage.md): The image used for the app’s icon.

### Customizing the Touch Bar

- [toggleTouchBarCustomizationPalette:](nsapplication/toggletouchbarcustomizationpalette%28__%29.md): Show or hides the interface for customizing the Touch Bar.

### Managing user attention requests

- [requestUserAttention:](nsapplication/requestuserattention%28__%29.md): Starts a user attention request.
- [NSRequestUserAttentionType](nsapplication/requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest:](nsapplication/canceluserattentionrequest%28__%29.md) and [requestUserAttention:](nsapplication/requestuserattention%28__%29.md).
- [cancelUserAttentionRequest:](nsapplication/canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [replyToOpenOrPrint:](nsapplication/reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplicationDelegateReply](nsapplication/delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

### Providing help information

- [registerUserInterfaceItemSearchHandler:](nsapplication/registeruserinterfaceitemsearchhandler%28__%29.md): Register an object that provides help data to your app.
- [searchString:inUserInterfaceItemString:searchRange:foundRange:](nsapplication/searchstring%28__inuserinterfaceitemstring_range_found_%29.md): Searches for the string in the user interface.
- [unregisterUserInterfaceItemSearchHandler:](nsapplication/unregisteruserinterfaceitemsearchhandler%28__%29.md): Unregister an object that provides help data to your app.
- [showHelp:](nsapplication/showhelp%28__%29.md): If your project is properly registered, and the necessary keys have been set in the property list, this method launches Help Viewer and displays the first page of your app’s help book.
- [activateContextHelpMode:](nsapplication/activatecontexthelpmode%28__%29.md): Places the receiver in context-sensitive help mode.
- [helpMenu](nsapplication/helpmenu.md): The help menu used by the app.

### Providing services

- [validRequestorForSendType:returnType:](nsapplication/validrequestor%28forsendtype_returntype_%29.md): Indicates whether the receiver can send and receive the specified pasteboard types.
- [servicesProvider](nsapplication/servicesprovider.md): The object that provides the services the current app advertises in the Services menu of other apps.

### Determining access to the keyboard

- [fullKeyboardAccessEnabled](nsapplication/isfullkeyboardaccessenabled.md): A Boolean value indicating whether Full Keyboard Access is enabled in the Keyboard preference pane.

### Hiding apps

- [hideOtherApplications:](nsapplication/hideotherapplications%28__%29.md): Hides all apps, except the receiver.
- [unhideAllApplications:](nsapplication/unhideallapplications%28__%29.md): Unhides all apps, including the receiver.

### Managing threads

- [detachDrawingThread:toTarget:withObject:](nsapplication/detachdrawingthread%28__totarget_with_%29.md): Creates and executes a new thread based on the specified target and selector.

### Logging exceptions

- [reportException:](nsapplication/reportexception%28__%29.md): Logs a given exception by calling `NSLog()`.

### Configuring the activation policy

- [activationPolicy](nsapplication/activationpolicy%28%29.md): Returns the app’s activation policy.
- [setActivationPolicy:](nsapplication/setactivationpolicy%28__%29.md): Attempts to modify the app’s activation policy.
- [NSApplicationActivationPolicy](nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

### Scripting your app

- [orderedDocuments](nsapplication/ordereddocuments.md): An array of document objects arranged according to the front-to-back ordering of their associated windows.
- [orderedWindows](nsapplication/orderedwindows.md): An array of window objects arranged according to their front-to-back ordering on the screen.

### Notifications

These notifications apply to `NSApplication`. See Notifications in [NSWorkspace](nsworkspace.md) for additional, similar notifications.

- [NSApplicationDidBecomeActiveNotification](nsapplication/didbecomeactivenotification.md): Posted immediately after the app becomes active.
- [NSApplicationDidChangeScreenParametersNotification](nsapplication/didchangescreenparametersnotification.md): Posted when the configuration of the displays attached to the computer is changed.
- [NSApplicationDidFinishLaunchingNotification](nsapplication/didfinishlaunchingnotification.md): Posted at the end of the [finishLaunching](nsapplication/finishlaunching%28%29.md) method to indicate that the app has completed launching and is ready to run.
- [NSApplicationDidHideNotification](nsapplication/didhidenotification.md): Posted at the end of the [hide:](nsapplication/hide%28__%29.md) method to indicate that the app is now hidden.
- [NSApplicationDidResignActiveNotification](nsapplication/didresignactivenotification.md): Posted immediately after the app gives up its active status to another app.
- [NSApplicationDidUnhideNotification](nsapplication/didunhidenotification.md): Posted at the end of the [unhideWithoutActivation](nsapplication/unhidewithoutactivation%28%29.md) method to indicate that the app is now visible.
- [NSApplicationDidUpdateNotification](nsapplication/didupdatenotification.md): Posted at the end of the [updateWindows](nsapplication/updatewindows%28%29.md) method to indicate that the app has finished updating its windows.
- [NSApplicationWillBecomeActiveNotification](nsapplication/willbecomeactivenotification.md): Posted immediately before the app becomes active.
- [NSApplicationWillFinishLaunchingNotification](nsapplication/willfinishlaunchingnotification.md): Posted at the start of the [finishLaunching](nsapplication/finishlaunching%28%29.md) method to indicate that the app has completed its initialization process and is about to finish launching.
- [NSApplicationWillHideNotification](nsapplication/willhidenotification.md): Posted at the start of the [hide:](nsapplication/hide%28__%29.md) method to indicate that the app is about to be hidden.
- [NSApplicationWillResignActiveNotification](nsapplication/willresignactivenotification.md): Posted immediately before the app gives up its active status to another app.
- [NSApplicationWillTerminateNotification](nsapplication/willterminatenotification.md): Sends a notification to terminate the app.
- [NSApplicationWillUnhideNotification](nsapplication/willunhidenotification.md): Posted at the start of the [unhideWithoutActivation](nsapplication/unhidewithoutactivation%28%29.md) method to indicate that the app is about to become visible.
- [NSApplicationWillUpdateNotification](nsapplication/willupdatenotification.md): Posted at the start of the [updateWindows](nsapplication/updatewindows%28%29.md) method to indicate that the app is about to update its windows.
- [NSApplicationDidFinishRestoringWindowsNotification](nsapplication/didfinishrestoringwindowsnotification.md): Posted when the app has finished restoring windows.
- [NSApplicationDidChangeOcclusionStateNotification](nsapplication/didchangeocclusionstatenotification.md): Posted when the app’s occlusion state changes.
- [NSApplicationProtectedDataDidBecomeAvailableNotification](nsapplicationprotecteddatadidbecomeavailablenotification.md): Posted when protected data becomes available.
- [NSApplicationProtectedDataWillBecomeUnavailableNotification](nsapplicationprotecteddatawillbecomeunavailablenotification.md): Posted when protected data is about to become unavailable.

### Loading Cocoa bundles

- [NSApplicationLoad](nsapplicationload.md): Startup function to call when running Cocoa code from a Carbon application.

### Displaying high dynamic resolution (HDR) content

- [applicationShouldSuppressHighDynamicRangeContent](nsapplication/applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.
- [NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification](nsapplicationshouldbeginsuppressinghighdynamicrangecontentnotification.md)
- [NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification](nsapplicationshouldendsuppressinghighdynamicrangecontentnotification.md)

### Deprecated

Avoid using deprecated classes and protocols in your apps.

- [Deprecated Symbols](nsapplication-deprecated-symbols.md): Review symbols that are no longer supported, and find the replacements to use instead.

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Life Cycle

- [NSRunningApplication](nsrunningapplication.md): An object that can manipulate and provide information for a single instance of an app.
- [NSApplicationDelegate](nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.
- [NSApplicationMain](nsapplicationmain.md): Called by the main function to create and run the application.
- [Managing ongoing background processes in your Mac](managing-ongoing-background-processes-in-your-mac.md): Configure your app to help people understand when background processes may continue after they close your app.
