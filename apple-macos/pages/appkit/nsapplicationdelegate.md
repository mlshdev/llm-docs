> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate](https://developer.apple.com/documentation/appkit/nsapplicationdelegate)

# NSApplicationDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that manage your app’s life cycle and its interaction with common system services.

## Declaration

```swift
protocol NSApplicationDelegate : NSObjectProtocol
```

## Topics

### Launching Applications

- [applicationWillFinishLaunching(\_:)](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [applicationDidFinishLaunching(\_:)](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.
- [NSApplicationDidFinishLaunching User Info Keys](nsapplicationdidfinishlaunching-user-info-keys.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

### Managing Active Status

- [applicationWillBecomeActive(\_:)](nsapplicationdelegate/applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationDidBecomeActive(\_:)](nsapplicationdelegate/applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationWillResignActive(\_:)](nsapplicationdelegate/applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.
- [applicationDidResignActive(\_:)](nsapplicationdelegate/applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.

### Terminating Applications

- [applicationShouldTerminate(\_:)](nsapplicationdelegate/applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [NSApplication.TerminateReply](nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed(\_:)](nsapplicationdelegate/applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.
- [applicationWillTerminate(\_:)](nsapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.

### Hiding Applications

- [applicationWillHide(\_:)](nsapplicationdelegate/applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.
- [applicationDidHide(\_:)](nsapplicationdelegate/applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillUnhide(\_:)](nsapplicationdelegate/applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.
- [applicationDidUnhide(\_:)](nsapplicationdelegate/applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.

### Managing Windows

- [applicationWillUpdate(\_:)](nsapplicationdelegate/applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [applicationDidUpdate(\_:)](nsapplicationdelegate/applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.
- [applicationShouldHandleReopen(\_:hasVisibleWindows:)](nsapplicationdelegate/applicationshouldhandlereopen%28__hasvisiblewindows_%29.md): Returns a Boolean value that indicates if the app responds to reopen AppleEvents.

### Managing the Dock Menu

- [applicationDockMenu(\_:)](nsapplicationdelegate/applicationdockmenu%28__%29.md): Returns the app’s dock menu.

### Localizing Keyboard Shortcuts

- [applicationShouldAutomaticallyLocalizeKeyEquivalents(\_:)](nsapplicationdelegate/applicationshouldautomaticallylocalizekeyequivalents%28__%29.md): Returns a Boolean value that tells the system whether to remap menu shortcuts to support localized keyboards.

### Displaying Errors

- [application(\_:willPresentError:)](nsapplicationdelegate/application%28__willpresenterror_%29.md): Returns an error for the app to display to the user.

### Managing the Screen

- [applicationDidChangeScreenParameters(\_:)](nsapplicationdelegate/applicationdidchangescreenparameters%28__%29.md): Tells the delegate about changes to the configuration of any attached displays.

### Continuing User Activities

- [application(\_:willContinueUserActivityWithType:)](nsapplicationdelegate/application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application(\_:continue:restorationHandler:)](nsapplicationdelegate/application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application(\_:didFailToContinueUserActivityWithType:error:)](nsapplicationdelegate/application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.
- [application(\_:didUpdate:)](nsapplicationdelegate/application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.

### Handling Push Notifications

- [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](nsapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app registered for Apple Push Services.
- [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](nsapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate that the app was unable to register for Apple Push Services.
- [application(\_:didReceiveRemoteNotification:)](nsapplicationdelegate/application%28__didreceiveremotenotification_%29.md): Tells the delegate when the app receives a remote notification.

### Handling CloudKit Invitations

- [application(\_:userDidAcceptCloudKitShareWith:)](nsapplicationdelegate/application%28__userdidacceptcloudkitsharewith_%29.md): Tells the delegate when the user accepts a CloudKit sharing invitation.

### Handling SiriKit Intents

- [application(\_:handlerFor:)](nsapplicationdelegate/application%28__handlerfor_%29.md): Returns an intent handler that’s capable of handling the specified intent.

### Opening Files

- [application(\_:open:)](nsapplicationdelegate/application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application(\_:openFile:)](nsapplicationdelegate/application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application(\_:openFileWithoutUI:)](nsapplicationdelegate/application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application(\_:openTempFile:)](nsapplicationdelegate/application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application(\_:openFiles:)](nsapplicationdelegate/application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile(\_:)](nsapplicationdelegate/applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile(\_:)](nsapplicationdelegate/applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.

### Printing

- [application(\_:printFile:)](nsapplicationdelegate/application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.
- [application(\_:printFiles:withSettings:showPrintPanels:)](nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md): Returns a value that indicates if the app prints the specified files.
- [NSApplication.PrintReply](nsapplication/printreply.md): Constants that indicate the outcome of a print request.

### Restoring Application State

- [applicationSupportsSecureRestorableState(\_:)](nsapplicationdelegate/applicationsupportssecurerestorablestate%28__%29.md): Returns a Boolean value that indicates if the app supports secure state restoration.
- [applicationProtectedDataDidBecomeAvailable(\_:)](nsapplicationdelegate/applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected data is now available.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](nsapplicationdelegate/applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application(\_:willEncodeRestorableState:)](nsapplicationdelegate/application%28__willencoderestorablestate_%29.md): Tells the delegate that the app is about to encode its restorable state.
- [application(\_:didDecodeRestorableState:)](nsapplicationdelegate/application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.

### Handling Changes to the Occlusion State

- [applicationDidChangeOcclusionState(\_:)](nsapplicationdelegate/applicationdidchangeocclusionstate%28__%29.md): Tells the delegate about changes to the app’s occlusion state.

### Scripting Your App

- [application(\_:delegateHandlesKey:)](nsapplicationdelegate/application%28__delegatehandleskey_%29.md): Returns a Boolean value that indicates if the app supports the specified scripting key.

### Type Methods

- [main()](nsapplicationdelegate/main%28%29.md): Provides the top-level entry point for the app.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Life Cycle

- [NSApplication](nsapplication.md): An object that manages an app’s main event loop and resources used by all of that app’s objects.
- [NSRunningApplication](nsrunningapplication.md): An object that can manipulate and provide information for a single instance of an app.
- [NSApplicationMain(\_:\_:)](nsapplicationmain%28____%29.md): Called by the main function to create and run the application.
- [Managing ongoing background processes in your Mac](managing-ongoing-background-processes-in-your-mac.md): Configure your app to help people understand when background processes may continue after they close your app.

# NSApplicationDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that manage your app’s life cycle and its interaction with common system services.

## Declaration

```objectivec
@protocol NSApplicationDelegate <NSObject>
```

## Topics

### Launching Applications

- [applicationWillFinishLaunching:](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [applicationDidFinishLaunching:](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.
- [NSApplicationDidFinishLaunching User Info Keys](nsapplicationdidfinishlaunching-user-info-keys.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

### Managing Active Status

- [applicationWillBecomeActive:](nsapplicationdelegate/applicationwillbecomeactive%28__%29.md): Tells the delegate that the app is about to become active.
- [applicationDidBecomeActive:](nsapplicationdelegate/applicationdidbecomeactive%28__%29.md): Tells the delegate that the app is now active.
- [applicationWillResignActive:](nsapplicationdelegate/applicationwillresignactive%28__%29.md): Tells the delegate that the app is about to become inactive and will lose focus.
- [applicationDidResignActive:](nsapplicationdelegate/applicationdidresignactive%28__%29.md): Tells the delegate that the app is no longer active and doesn’t have focus.

### Terminating Applications

- [applicationShouldTerminate:](nsapplicationdelegate/applicationshouldterminate%28__%29.md): Returns a value that indicates if the app should terminate.
- [NSApplicationTerminateReply](nsapplication/terminatereply.md): Constants that determine whether an app should terminate.
- [applicationShouldTerminateAfterLastWindowClosed:](nsapplicationdelegate/applicationshouldterminateafterlastwindowclosed%28__%29.md): Returns a Boolean value that indicates if the app terminates once the last window closes.
- [applicationWillTerminate:](nsapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate that the app is about to terminate.

### Hiding Applications

- [applicationWillHide:](nsapplicationdelegate/applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.
- [applicationDidHide:](nsapplicationdelegate/applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillUnhide:](nsapplicationdelegate/applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.
- [applicationDidUnhide:](nsapplicationdelegate/applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.

### Managing Windows

- [applicationWillUpdate:](nsapplicationdelegate/applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [applicationDidUpdate:](nsapplicationdelegate/applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.
- [applicationShouldHandleReopen:hasVisibleWindows:](nsapplicationdelegate/applicationshouldhandlereopen%28__hasvisiblewindows_%29.md): Returns a Boolean value that indicates if the app responds to reopen AppleEvents.

### Managing the Dock Menu

- [applicationDockMenu:](nsapplicationdelegate/applicationdockmenu%28__%29.md): Returns the app’s dock menu.

### Localizing Keyboard Shortcuts

- [applicationShouldAutomaticallyLocalizeKeyEquivalents:](nsapplicationdelegate/applicationshouldautomaticallylocalizekeyequivalents%28__%29.md): Returns a Boolean value that tells the system whether to remap menu shortcuts to support localized keyboards.

### Displaying Errors

- [application:willPresentError:](nsapplicationdelegate/application%28__willpresenterror_%29.md): Returns an error for the app to display to the user.

### Managing the Screen

- [applicationDidChangeScreenParameters:](nsapplicationdelegate/applicationdidchangescreenparameters%28__%29.md): Tells the delegate about changes to the configuration of any attached displays.

### Continuing User Activities

- [application:willContinueUserActivityWithType:](nsapplicationdelegate/application%28__willcontinueuseractivitywithtype_%29.md): Returns a Boolean value that indicates if the app can continue the specified activity.
- [application:continueUserActivity:restorationHandler:](nsapplicationdelegate/application%28__continue_restorationhandler_%29.md): Returns a Boolean value that indicates if the app successfully recreates the specified activity.
- [application:didFailToContinueUserActivityWithType:error:](nsapplicationdelegate/application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the app couldn’t continue the specified activity.
- [application:didUpdateUserActivity:](nsapplicationdelegate/application%28__didupdate_%29.md): Tells the delegate that there are changes to the specified activity.

### Handling Push Notifications

- [application:didRegisterForRemoteNotificationsWithDeviceToken:](nsapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app registered for Apple Push Services.
- [application:didFailToRegisterForRemoteNotificationsWithError:](nsapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate that the app was unable to register for Apple Push Services.
- [application:didReceiveRemoteNotification:](nsapplicationdelegate/application%28__didreceiveremotenotification_%29.md): Tells the delegate when the app receives a remote notification.

### Handling CloudKit Invitations

- [application:userDidAcceptCloudKitShareWithMetadata:](nsapplicationdelegate/application%28__userdidacceptcloudkitsharewith_%29.md): Tells the delegate when the user accepts a CloudKit sharing invitation.

### Handling SiriKit Intents

- [application:handlerForIntent:](nsapplicationdelegate/application%28__handlerfor_%29.md): Returns an intent handler that’s capable of handling the specified intent.

### Opening Files

- [application:openURLs:](nsapplicationdelegate/application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application:openFile:](nsapplicationdelegate/application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application:openFileWithoutUI:](nsapplicationdelegate/application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application:openTempFile:](nsapplicationdelegate/application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application:openFiles:](nsapplicationdelegate/application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile:](nsapplicationdelegate/applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile:](nsapplicationdelegate/applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.

### Printing

- [application:printFile:](nsapplicationdelegate/application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.
- [application:printFiles:withSettings:showPrintPanels:](nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md): Returns a value that indicates if the app prints the specified files.
- [NSApplicationPrintReply](nsapplication/printreply.md): Constants that indicate the outcome of a print request.

### Restoring Application State

- [applicationSupportsSecureRestorableState:](nsapplicationdelegate/applicationsupportssecurerestorablestate%28__%29.md): Returns a Boolean value that indicates if the app supports secure state restoration.
- [applicationProtectedDataDidBecomeAvailable:](nsapplicationdelegate/applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected data is now available.
- [applicationProtectedDataWillBecomeUnavailable:](nsapplicationdelegate/applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that protected data is about to become unavailable.
- [application:willEncodeRestorableState:](nsapplicationdelegate/application%28__willencoderestorablestate_%29.md): Tells the delegate that the app is about to encode its restorable state.
- [application:didDecodeRestorableState:](nsapplicationdelegate/application%28__diddecoderestorablestate_%29.md): Tells the delegate when the app finished decoding its restorable state.

### Handling Changes to the Occlusion State

- [applicationDidChangeOcclusionState:](nsapplicationdelegate/applicationdidchangeocclusionstate%28__%29.md): Tells the delegate about changes to the app’s occlusion state.

### Scripting Your App

- [application:delegateHandlesKey:](nsapplicationdelegate/application%28__delegatehandleskey_%29.md): Returns a Boolean value that indicates if the app supports the specified scripting key.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Life Cycle

- [NSApplication](nsapplication.md): An object that manages an app’s main event loop and resources used by all of that app’s objects.
- [NSRunningApplication](nsrunningapplication.md): An object that can manipulate and provide information for a single instance of an app.
- [NSApplicationMain](nsapplicationmain.md): Called by the main function to create and run the application.
- [Managing ongoing background processes in your Mac](managing-ongoing-background-processes-in-your-mac.md): Configure your app to help people understand when background processes may continue after they close your app.
