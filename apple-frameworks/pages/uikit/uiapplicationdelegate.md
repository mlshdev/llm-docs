> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate)

# UIApplicationDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods to manage shared behaviors for your app.

## Declaration

```swift
@MainActor protocol UIApplicationDelegate : NSObjectProtocol
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)
- [About app development with UIKit](about-app-development-with-uikit.md)

<a id="overview"></a>

## Overview

Your app delegate object manages your app’s shared behaviors. The app delegate is effectively the root object of your app, and it works in conjunction with [UIApplication](uiapplication.md) to manage some interactions with the system. Like the [UIApplication](uiapplication.md) object, UIKit creates your app delegate object early in your app’s launch cycle so it’s always present.

Use your app delegate object to handle the following tasks:

- Initializing your app’s central data structures
- Configuring your app’s scenes
- Responding to notifications originating from outside the app, such as low-memory warnings, download completion notifications, and more
- Responding to events that target the app itself, and aren’t specific to your app’s scenes, views, or view controllers
- Registering for any required services at launch time, such as Apple Push Notification service

For more information about how you use the app delegate object to initialize your app at launch time, see [Responding to the launch of your app](responding-to-the-launch-of-your-app.md).

<a id="Life-cycle-management-in-iOS-12-and-earlier"></a>

### Life-cycle management in iOS 12 and earlier

In iOS 12 and earlier, you use your app delegate to manage major life cycle events in your app. Specifically, you use methods of the app delegate to update the state of your app when it enters the foreground or moves to the background.

- For information on what to do when your app enters the foreground, see [Preparing your UI to run in the foreground](preparing-your-ui-to-run-in-the-foreground.md).
- For information on what to do when your app enters the background, see [Preparing your UI to run in the background](preparing-your-ui-to-run-in-the-background.md).
- For general information about the life cycle of your app, see [Managing your app’s life cycle](managing-your-app-s-life-cycle.md).

## Topics

### Initializing the app

- [application(\_:willFinishLaunchingWithOptions:)](uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [application(\_:didFinishLaunchingWithOptions:)](uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [UIApplication.LaunchOptionsKey](uiapplication/launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
- [didFinishLaunchingNotification](uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.

### Configuring and discarding scenes

- [application(\_:configurationForConnecting:options:)](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md): Retrieves the configuration data for UIKit to use when creating a new scene.
- [application(\_:didDiscardSceneSessions:)](uiapplicationdelegate/application%28__diddiscardscenesessions_%29.md): Tells the delegate that the user closed one or more of the app’s scenes from the app switcher.

### Responding to app life-cycle events

- [applicationDidBecomeActive(\_:)](uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive(\_:)](uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground(\_:)](uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground(\_:)](uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate(\_:)](uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [didBecomeActiveNotification](uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [didEnterBackgroundNotification](uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [willEnterForegroundNotification](uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [willResignActiveNotification](uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [willTerminateNotification](uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable(\_:)](uiapplicationdelegate/applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable(\_:)](uiapplicationdelegate/applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationDidReceiveMemoryWarning(\_:)](uiapplicationdelegate/applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [applicationSignificantTimeChange(\_:)](uiapplicationdelegate/applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [protectedDataDidBecomeAvailableNotification](uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [protectedDataWillBecomeUnavailableNotification](uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [didReceiveMemoryWarningNotification](uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [significantTimeChangeNotification](uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.

### Managing app state restoration

- [application(\_:shouldSaveSecureApplicationState:)](uiapplicationdelegate/application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application(\_:shouldRestoreSecureApplicationState:)](uiapplicationdelegate/application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application(\_:viewControllerWithRestorationIdentifierPath:coder:)](uiapplicationdelegate/application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application(\_:willEncodeRestorableStateWith:)](uiapplicationdelegate/application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application(\_:didDecodeRestorableStateWith:)](uiapplicationdelegate/application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [stateRestorationBundleVersionKey](uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [stateRestorationSystemVersionKey](uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [stateRestorationTimestampKey](uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [stateRestorationUserInterfaceIdiomKey](uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [stateRestorationViewControllerStoryboardKey](uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.

### Downloading data in the background

- [application(\_:handleEventsForBackgroundURLSession:completionHandler:)](uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md): Tells the delegate that events related to a URL session are waiting to be processed.
- [UIBackgroundFetchResult](uibackgroundfetchresult.md): Constants that indicate the result of a background fetch operation.

### Handling remote notification registration

- [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](uiapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application(\_:didFailToRegisterForRemoteNotificationsWithError:)](uiapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.
- [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md): Tells the app that a remote notification arrived that indicates there is data to be fetched.

### Continuing user activity and handling quick actions

- [application(\_:willContinueUserActivityWithType:)](uiapplicationdelegate/application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application(\_:continue:restorationHandler:)](uiapplicationdelegate/application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application(\_:didUpdate:)](uiapplicationdelegate/application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application(\_:didFailToContinueUserActivityWithType:error:)](uiapplicationdelegate/application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application(\_:performActionFor:completionHandler:)](uiapplicationdelegate/application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

### Interacting with WatchKit

- [application(\_:handleWatchKitExtensionRequest:reply:)](uiapplicationdelegate/application%28__handlewatchkitextensionrequest_reply_%29.md): Asks the delegate to respond to a request from a paired watchOS app.

### Interacting with HealthKit

- [applicationShouldRequestHealthAuthorization(\_:)](uiapplicationdelegate/applicationshouldrequesthealthauthorization%28__%29.md): Tells the delegate when your app should ask the user for access to his or her HealthKit data.

### Opening a URL-specified resource

- [application(\_:open:options:)](uiapplicationdelegate/application%28__open_options_%29.md): Deprecated. Asks the delegate to open a resource specified by a URL, and provides a dictionary of launch options.
- [UIApplication.OpenURLOptionsKey](uiapplication/openurloptionskey.md): Deprecated. Keys you use to access values in the options dictionary when opening a URL.

### Disallowing specified app extension types

- [application(\_:shouldAllowExtensionPointIdentifier:)](uiapplicationdelegate/application%28__shouldallowextensionpointidentifier_%29.md): Asks the delegate to grant permission to use app extensions that are based on a specified extension point identifier.
- [UIApplication.ExtensionPointIdentifier](uiapplication/extensionpointidentifier.md): A structure that identifies types of extensions.
- [keyboard](uiapplication/extensionpointidentifier/keyboard.md): The identifier for custom keyboards.

### Handling SiriKit intents

- [application(\_:handlerFor:)](uiapplicationdelegate/application%28__handlerfor_%29.md): Asks the delegate for an intent handler capable of handling the specified intent.

### Handling CloudKit invitations

- [application(\_:userDidAcceptCloudKitShareWith:)](uiapplicationdelegate/application%28__userdidacceptcloudkitsharewith_%29.md): Deprecated. Tells the delegate that the app now has access to shared information in CloudKit.

### Localizing keyboard shortcuts

- [applicationShouldAutomaticallyLocalizeKeyCommands(\_:)](uiapplicationdelegate/applicationshouldautomaticallylocalizekeycommands%28__%29.md): Returns a Boolean value that tells the system whether to remap menu shortcuts to support localized keyboards.

### Managing interface geometry

- [application(\_:supportedInterfaceOrientationsFor:)](uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientation](uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [UIInterfaceOrientationMask](uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.
- [invalidInterfaceOrientationException](uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.

### Providing a window for storyboarding

- [window](uiapplicationdelegate/window.md): The window to use when presenting a storyboard.

### Providing the main entry point

- [main()](uiapplicationdelegate/main%28%29.md): Provides the top-level entry point for the app.

### Deprecated

- [applicationDidFinishLaunching(\_:)](uiapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Deprecated. Tells the delegate when the app has finished launching.
- [Deprecated symbols](uiapplicationdelegate-deprecated-symbols.md): Symbols that are no longer supported.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Life cycle

- [Managing your app’s life cycle](managing-your-app-s-life-cycle.md): Respond to system notifications when your app is in the foreground or background, and handle other significant system-related events.
- [Responding to the launch of your app](responding-to-the-launch-of-your-app.md): Initialize your app’s data structures, prepare your app to run, and respond to any launch-time requests from the system.
- [UIApplication](uiapplication.md): The centralized point of control and coordination for apps running in iOS.
- [Scenes](scenes.md): Manage multiple instances of your app’s UI simultaneously, and direct resources to the appropriate instance of your UI.
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md): Adopt the scene-based life cycle to replace the app delegate life cycle in UIKit.

# UIApplicationDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods to manage shared behaviors for your app.

## Declaration

```objectivec
@protocol UIApplicationDelegate <NSObject>
```

## Mentioned In

- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md)
- [About app development with UIKit](about-app-development-with-uikit.md)

<a id="overview"></a>

## Overview

Your app delegate object manages your app’s shared behaviors. The app delegate is effectively the root object of your app, and it works in conjunction with [UIApplication](uiapplication.md) to manage some interactions with the system. Like the [UIApplication](uiapplication.md) object, UIKit creates your app delegate object early in your app’s launch cycle so it’s always present.

Use your app delegate object to handle the following tasks:

- Initializing your app’s central data structures
- Configuring your app’s scenes
- Responding to notifications originating from outside the app, such as low-memory warnings, download completion notifications, and more
- Responding to events that target the app itself, and aren’t specific to your app’s scenes, views, or view controllers
- Registering for any required services at launch time, such as Apple Push Notification service

For more information about how you use the app delegate object to initialize your app at launch time, see [Responding to the launch of your app](responding-to-the-launch-of-your-app.md).

<a id="Life-cycle-management-in-iOS-12-and-earlier"></a>

### Life-cycle management in iOS 12 and earlier

In iOS 12 and earlier, you use your app delegate to manage major life cycle events in your app. Specifically, you use methods of the app delegate to update the state of your app when it enters the foreground or moves to the background.

- For information on what to do when your app enters the foreground, see [Preparing your UI to run in the foreground](preparing-your-ui-to-run-in-the-foreground.md).
- For information on what to do when your app enters the background, see [Preparing your UI to run in the background](preparing-your-ui-to-run-in-the-background.md).
- For general information about the life cycle of your app, see [Managing your app’s life cycle](managing-your-app-s-life-cycle.md).

## Topics

### Initializing the app

- [application:willFinishLaunchingWithOptions:](uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [application:didFinishLaunchingWithOptions:](uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [UIApplicationLaunchOptionsKey](uiapplication/launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
- [UIApplicationDidFinishLaunchingNotification](uiapplication/didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.

### Configuring and discarding scenes

- [application:configurationForConnectingSceneSession:options:](uiapplicationdelegate/application%28__configurationforconnecting_options_%29.md): Retrieves the configuration data for UIKit to use when creating a new scene.
- [application:didDiscardSceneSessions:](uiapplicationdelegate/application%28__diddiscardscenesessions_%29.md): Tells the delegate that the user closed one or more of the app’s scenes from the app switcher.

### Responding to app life-cycle events

- [applicationDidBecomeActive:](uiapplicationdelegate/applicationdidbecomeactive%28__%29.md): Deprecated. Tells the delegate that the app has become active.
- [applicationWillResignActive:](uiapplicationdelegate/applicationwillresignactive%28__%29.md): Deprecated. Tells the delegate that the app is about to become inactive.
- [applicationDidEnterBackground:](uiapplicationdelegate/applicationdidenterbackground%28__%29.md): Deprecated. Tells the delegate that the app is now in the background.
- [applicationWillEnterForeground:](uiapplicationdelegate/applicationwillenterforeground%28__%29.md): Deprecated. Tells the delegate that the app is about to enter the foreground.
- [applicationWillTerminate:](uiapplicationdelegate/applicationwillterminate%28__%29.md): Tells the delegate when the app is about to terminate.
- [UIApplicationDidBecomeActiveNotification](uiapplication/didbecomeactivenotification.md): A notification that posts when the app becomes active.
- [UIApplicationDidEnterBackgroundNotification](uiapplication/didenterbackgroundnotification.md): A notification that posts when the app enters the background.
- [UIApplicationWillEnterForegroundNotification](uiapplication/willenterforegroundnotification.md): A notification that posts shortly before your app’s UI transitions to the foreground.
- [UIApplicationWillResignActiveNotification](uiapplication/willresignactivenotification.md): A notification that posts when the app is no longer active and loses focus.
- [UIApplicationWillTerminateNotification](uiapplication/willterminatenotification.md): A notification that posts when the app is about to terminate.

### Responding to environment changes

- [applicationProtectedDataDidBecomeAvailable:](uiapplicationdelegate/applicationprotecteddatadidbecomeavailable%28__%29.md): Tells the delegate that protected files are available now.
- [applicationProtectedDataWillBecomeUnavailable:](uiapplicationdelegate/applicationprotecteddatawillbecomeunavailable%28__%29.md): Tells the delegate that the protected files are about to become unavailable.
- [applicationDidReceiveMemoryWarning:](uiapplicationdelegate/applicationdidreceivememorywarning%28__%29.md): Tells the delegate when the app receives a memory warning from the system.
- [applicationSignificantTimeChange:](uiapplicationdelegate/applicationsignificanttimechange%28__%29.md): Tells the delegate when there is a significant change in the time.
- [UIApplicationProtectedDataDidBecomeAvailable](uiapplication/protecteddatadidbecomeavailablenotification.md): A notification that posts when the protected files become available for your code to access.
- [UIApplicationProtectedDataWillBecomeUnavailable](uiapplication/protecteddatawillbecomeunavailablenotification.md): A notification that posts shortly before protected files are locked down and become inaccessible.
- [UIApplicationDidReceiveMemoryWarningNotification](uiapplication/didreceivememorywarningnotification.md): A notification that posts when the app receives a warning from the operating system about low memory availability.
- [UIApplicationSignificantTimeChangeNotification](uiapplication/significanttimechangenotification.md): A notification that posts when there’s a significant change in time.

### Managing app state restoration

- [application:shouldSaveSecureApplicationState:](uiapplicationdelegate/application%28__shouldsavesecureapplicationstate_%29.md): Asks the delegate whether to securely preserve the app’s state.
- [application:shouldRestoreSecureApplicationState:](uiapplicationdelegate/application%28__shouldrestoresecureapplicationstate_%29.md): Asks the delegate whether to restore the app’s saved state.
- [application:viewControllerWithRestorationIdentifierPath:coder:](uiapplicationdelegate/application%28__viewcontrollerwithrestorationidentifierpath_coder_%29.md): Asks the delegate to provide the specified view controller.
- [application:willEncodeRestorableStateWithCoder:](uiapplicationdelegate/application%28__willencoderestorablestatewith_%29.md): Tells your delegate to save any high-level state information at the beginning of the state preservation process.
- [application:didDecodeRestorableStateWithCoder:](uiapplicationdelegate/application%28__diddecoderestorablestatewith_%29.md): Tells your delegate to restore any high-level state information as part of the state restoration process.
- [UIApplicationStateRestorationBundleVersionKey](uiapplication/staterestorationbundleversionkey.md): The version of your app responsible for creating the restoration archive.
- [UIApplicationStateRestorationSystemVersionKey](uiapplication/staterestorationsystemversionkey.md): The version of the system on which your app created the restoration archive.
- [UIApplicationStateRestorationTimestampKey](uiapplication/staterestorationtimestampkey.md): The time your app created the restoration archive.
- [UIApplicationStateRestorationUserInterfaceIdiomKey](uiapplication/staterestorationuserinterfaceidiomkey.md): The user interface idiom that was in effect when your app created the restoration archive.
- [UIStateRestorationViewControllerStoryboardKey](uiapplication/staterestorationviewcontrollerstoryboardkey.md): A reference to the storyboard that contains the view controller.

### Downloading data in the background

- [application:handleEventsForBackgroundURLSession:completionHandler:](uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md): Tells the delegate that events related to a URL session are waiting to be processed.
- [UIBackgroundFetchResult](uibackgroundfetchresult.md): Constants that indicate the result of a background fetch operation.

### Handling remote notification registration

- [application:didRegisterForRemoteNotificationsWithDeviceToken:](uiapplicationdelegate/application%28__didregisterforremotenotificationswithdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [application:didFailToRegisterForRemoteNotificationsWithError:](uiapplicationdelegate/application%28__didfailtoregisterforremotenotificationswitherror_%29.md): Tells the delegate when Apple Push Notification service cannot successfully complete the registration process.
- [application:didReceiveRemoteNotification:fetchCompletionHandler:](uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md): Tells the app that a remote notification arrived that indicates there is data to be fetched.

### Continuing user activity and handling quick actions

- [application:willContinueUserActivityWithType:](uiapplicationdelegate/application%28__willcontinueuseractivitywithtype_%29.md): Deprecated. Tells the delegate if your app takes responsibility for notifying users when a continuation activity takes longer than expected.
- [application:continueUserActivity:restorationHandler:](uiapplicationdelegate/application%28__continue_restorationhandler_%29.md): Deprecated. Tells the delegate that the data for continuing an activity is available.
- [application:didUpdateUserActivity:](uiapplicationdelegate/application%28__didupdate_%29.md): Deprecated. Tells the delegate that the activity was updated.
- [application:didFailToContinueUserActivityWithType:error:](uiapplicationdelegate/application%28__didfailtocontinueuseractivitywithtype_error_%29.md): Deprecated. Tells the delegate that the activity couldn’t be continued.
- [application:performActionForShortcutItem:completionHandler:](uiapplicationdelegate/application%28__performactionfor_completionhandler_%29.md): Deprecated. Tells the delegate that the user selected a Home screen quick action for your app, except when you’ve intercepted the interaction in a launch method.

### Interacting with WatchKit

- [application:handleWatchKitExtensionRequest:reply:](uiapplicationdelegate/application%28__handlewatchkitextensionrequest_reply_%29.md): Asks the delegate to respond to a request from a paired watchOS app.

### Interacting with HealthKit

- [applicationShouldRequestHealthAuthorization:](uiapplicationdelegate/applicationshouldrequesthealthauthorization%28__%29.md): Tells the delegate when your app should ask the user for access to his or her HealthKit data.

### Opening a URL-specified resource

- [application:openURL:options:](uiapplicationdelegate/application%28__open_options_%29.md): Deprecated. Asks the delegate to open a resource specified by a URL, and provides a dictionary of launch options.
- [UIApplicationOpenURLOptionsKey](uiapplication/openurloptionskey.md): Deprecated. Keys you use to access values in the options dictionary when opening a URL.

### Disallowing specified app extension types

- [application:shouldAllowExtensionPointIdentifier:](uiapplicationdelegate/application%28__shouldallowextensionpointidentifier_%29.md): Asks the delegate to grant permission to use app extensions that are based on a specified extension point identifier.
- [UIApplicationExtensionPointIdentifier](uiapplication/extensionpointidentifier.md): A structure that identifies types of extensions.
- [UIApplicationKeyboardExtensionPointIdentifier](uiapplication/extensionpointidentifier/keyboard.md): The identifier for custom keyboards.

### Handling SiriKit intents

- [application:handlerForIntent:](uiapplicationdelegate/application%28__handlerfor_%29.md): Asks the delegate for an intent handler capable of handling the specified intent.

### Handling CloudKit invitations

- [application:userDidAcceptCloudKitShareWithMetadata:](uiapplicationdelegate/application%28__userdidacceptcloudkitsharewith_%29.md): Deprecated. Tells the delegate that the app now has access to shared information in CloudKit.

### Localizing keyboard shortcuts

- [applicationShouldAutomaticallyLocalizeKeyCommands:](uiapplicationdelegate/applicationshouldautomaticallylocalizekeycommands%28__%29.md): Returns a Boolean value that tells the system whether to remap menu shortcuts to support localized keyboards.

### Managing interface geometry

- [application:supportedInterfaceOrientationsForWindow:](uiapplicationdelegate/application%28__supportedinterfaceorientationsfor_%29.md): Deprecated. Asks the delegate for the interface orientations to use for the view controllers in the specified window.
- [UIInterfaceOrientation](uiinterfaceorientation.md): Constants that specify the orientation of the app’s user interface.
- [UIInterfaceOrientationMask](uiinterfaceorientationmask.md): Constants that specify a view controller’s supported interface orientations.
- [UIApplicationInvalidInterfaceOrientationException](uiapplication/invalidinterfaceorientationexception.md): An exception that’s thrown if a view controller or the app returns an invalid set of supported interface orientations.

### Providing a window for storyboarding

- [window](uiapplicationdelegate/window.md): The window to use when presenting a storyboard.

### Deprecated

- [applicationDidFinishLaunching:](uiapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Deprecated. Tells the delegate when the app has finished launching.
- [Deprecated symbols](uiapplicationdelegate-deprecated-symbols.md): Symbols that are no longer supported.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Life cycle

- [Managing your app’s life cycle](managing-your-app-s-life-cycle.md): Respond to system notifications when your app is in the foreground or background, and handle other significant system-related events.
- [Responding to the launch of your app](responding-to-the-launch-of-your-app.md): Initialize your app’s data structures, prepare your app to run, and respond to any launch-time requests from the system.
- [UIApplication](uiapplication.md): The centralized point of control and coordination for apps running in iOS.
- [Scenes](scenes.md): Manage multiple instances of your app’s UI simultaneously, and direct resources to the appropriate instance of your UI.
- [Transitioning to the UIKit scene-based life cycle](transitioning-to-the-uikit-scene-based-life-cycle.md): Adopt the scene-based life cycle to replace the app delegate life cycle in UIKit.
