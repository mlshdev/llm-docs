> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication](https://developer.apple.com/documentation/appkit/nsrunningapplication)

# NSRunningApplication (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

An object that can manipulate and provide information for a single instance of an app.

## Declaration

```swift
class NSRunningApplication
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="overview"></a>

## Overview

Some properties of an app are fixed, such as the bundle identifier. Other properties may vary over time, such as whether the app is hidden. Properties that vary can be observed with key-value observing, in which case the description comment for the method notes this capability.

Properties that vary over time are inherently race-prone. For example, a hidden app may unhide itself at any time. To ameliorate this, properties persist until the next turn of the main run loop in a common mode. For example, if you repeatedly poll an unhidden app for its hidden property without allowing the run loop to run, it will continue to return [false](https://developer.apple.com/documentation/swift/false), even if the app hides, until the next turn of the run loop.

[NSRunningApplication](nsrunningapplication.md) is thread safe, in that its properties are returned atomically. However, it is still subject to the main run loop policy described above. If you access an instance of [NSRunningApplication](nsrunningapplication.md) from a background thread, be aware that its time-varying properties may change from under you as the main run loop runs (or not).

An [NSRunningApplication](nsrunningapplication.md) instance remains valid after the app exits. However, most properties lose their significance, and some properties may not be available on a terminated application.

To access the list of all running apps, use the  [runningApplications](nsworkspace/runningapplications.md) method in [NSWorkspace](nsworkspace.md).

## Topics

### Getting running application instances

- [init(processIdentifier:)](nsrunningapplication/init%28processidentifier_%29.md): Returns the running application with the given process identifier, or nil if no application has that pid.
- [runningApplications(withBundleIdentifier:)](nsrunningapplication/runningapplications%28withbundleidentifier_%29.md): Returns an array of currently running applications with the specified bundle identifier.
- [current](nsrunningapplication/current.md): Returns an `NSRunningApplication` representing this application.

### Activating applications

- [activate(options:)](nsrunningapplication/activate%28options_%29.md): Attempts to activate the application using the specified options.
- [activate(from:options:)](nsrunningapplication/activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [isActive](nsrunningapplication/isactive.md): Indicates whether the application is currently frontmost.
- [NSApplication.ActivationOptions](nsapplication/activationoptions.md): The following flags are for [activate(options:)](nsrunningapplication/activate%28options_%29.md).
- [activationPolicy](nsrunningapplication/activationpolicy.md): Indicates the activation policy of the application.
- [NSApplication.ActivationPolicy](nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

### Hiding and unhiding applications

- [hide()](nsrunningapplication/hide%28%29.md): Attempts to hide or the application.
- [unhide()](nsrunningapplication/unhide%28%29.md): Attempts to unhide or the application.
- [isHidden](nsrunningapplication/ishidden.md): Indicates whether the application is currently hidden.

### Application information

- [localizedName](nsrunningapplication/localizedname.md): Indicates the localized name of the application.
- [icon](nsrunningapplication/icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](nsrunningapplication/bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](nsrunningapplication/bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](nsrunningapplication/executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](nsrunningapplication/executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](nsrunningapplication/launchdate.md): Indicates the date when the application was launched.
- [isFinishedLaunching](nsrunningapplication/isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](nsrunningapplication/processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](nsrunningapplication/ownsmenubar.md): Returns whether the application owns the current menu bar.

### Terminating applications

- [forceTerminate()](nsrunningapplication/forceterminate%28%29.md): Attempts to force the receiver to quit.
- [terminate()](nsrunningapplication/terminate%28%29.md): Attempts to quit the receiver normally.
- [isTerminated](nsrunningapplication/isterminated.md): Indicates that the receiver’s application has terminated.
- [terminateAutomaticallyTerminableApplications()](nsrunningapplication/terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.

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

### Life Cycle

- [NSApplication](nsapplication.md): An object that manages an app’s main event loop and resources used by all of that app’s objects.
- [NSApplicationDelegate](nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.
- [NSApplicationMain(\_:\_:)](nsapplicationmain%28____%29.md): Called by the main function to create and run the application.
- [Managing ongoing background processes in your Mac](managing-ongoing-background-processes-in-your-mac.md): Configure your app to help people understand when background processes may continue after they close your app.

# NSRunningApplication (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

An object that can manipulate and provide information for a single instance of an app.

## Declaration

```objectivec
@interface NSRunningApplication : NSObject
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="overview"></a>

## Overview

Some properties of an app are fixed, such as the bundle identifier. Other properties may vary over time, such as whether the app is hidden. Properties that vary can be observed with key-value observing, in which case the description comment for the method notes this capability.

Properties that vary over time are inherently race-prone. For example, a hidden app may unhide itself at any time. To ameliorate this, properties persist until the next turn of the main run loop in a common mode. For example, if you repeatedly poll an unhidden app for its hidden property without allowing the run loop to run, it will continue to return [false](https://developer.apple.com/documentation/swift/false), even if the app hides, until the next turn of the run loop.

[NSRunningApplication](nsrunningapplication.md) is thread safe, in that its properties are returned atomically. However, it is still subject to the main run loop policy described above. If you access an instance of [NSRunningApplication](nsrunningapplication.md) from a background thread, be aware that its time-varying properties may change from under you as the main run loop runs (or not).

An [NSRunningApplication](nsrunningapplication.md) instance remains valid after the app exits. However, most properties lose their significance, and some properties may not be available on a terminated application.

To access the list of all running apps, use the  [runningApplications](nsworkspace/runningapplications.md) method in [NSWorkspace](nsworkspace.md).

## Topics

### Getting running application instances

- [runningApplicationWithProcessIdentifier:](nsrunningapplication/init%28processidentifier_%29.md): Returns the running application with the given process identifier, or nil if no application has that pid.
- [runningApplicationsWithBundleIdentifier:](nsrunningapplication/runningapplications%28withbundleidentifier_%29.md): Returns an array of currently running applications with the specified bundle identifier.
- [currentApplication](nsrunningapplication/current.md): Returns an `NSRunningApplication` representing this application.

### Activating applications

- [activateWithOptions:](nsrunningapplication/activate%28options_%29.md): Attempts to activate the application using the specified options.
- [activateFromApplication:options:](nsrunningapplication/activate%28from_options_%29.md): Attempts to activate the application using the specified options.
- [active](nsrunningapplication/isactive.md): Indicates whether the application is currently frontmost.
- [NSApplicationActivationOptions](nsapplication/activationoptions.md): The following flags are for [activateWithOptions:](nsrunningapplication/activate%28options_%29.md).
- [activationPolicy](nsrunningapplication/activationpolicy.md): Indicates the activation policy of the application.
- [NSApplicationActivationPolicy](nsapplication/activationpolicy-swift.enum.md): Activation policies (used by [activationPolicy](nsrunningapplication/activationpolicy.md)) that control whether and how an app may be activated.

### Hiding and unhiding applications

- [hide](nsrunningapplication/hide%28%29.md): Attempts to hide or the application.
- [unhide](nsrunningapplication/unhide%28%29.md): Attempts to unhide or the application.
- [hidden](nsrunningapplication/ishidden.md): Indicates whether the application is currently hidden.

### Application information

- [localizedName](nsrunningapplication/localizedname.md): Indicates the localized name of the application.
- [icon](nsrunningapplication/icon.md): Returns the icon for the receiver’s application.
- [bundleIdentifier](nsrunningapplication/bundleidentifier.md): Indicates the `CFBundleIdentifier` of the application.
- [bundleURL](nsrunningapplication/bundleurl.md): Indicates the URL to the application’s bundle.
- [executableArchitecture](nsrunningapplication/executablearchitecture.md): Indicates the executing processor architecture for the application.
- [executableURL](nsrunningapplication/executableurl.md): Indicates the URL to the application’s executable.
- [launchDate](nsrunningapplication/launchdate.md): Indicates the date when the application was launched.
- [finishedLaunching](nsrunningapplication/isfinishedlaunching.md): A Boolean value that determines whether the receiver’s process has finished launching.
- [processIdentifier](nsrunningapplication/processidentifier.md): Indicates the process identifier (pid) of the application.
- [ownsMenuBar](nsrunningapplication/ownsmenubar.md): Returns whether the application owns the current menu bar.

### Terminating applications

- [forceTerminate](nsrunningapplication/forceterminate%28%29.md): Attempts to force the receiver to quit.
- [terminate](nsrunningapplication/terminate%28%29.md): Attempts to quit the receiver normally.
- [terminated](nsrunningapplication/isterminated.md): Indicates that the receiver’s application has terminated.
- [terminateAutomaticallyTerminableApplications](nsrunningapplication/terminateautomaticallyterminableapplications%28%29.md): Terminates invisibly running applications as if triggered by system memory pressure.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Life Cycle

- [NSApplication](nsapplication.md): An object that manages an app’s main event loop and resources used by all of that app’s objects.
- [NSApplicationDelegate](nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.
- [NSApplicationMain](nsapplicationmain.md): Called by the main function to create and run the application.
- [Managing ongoing background processes in your Mac](managing-ongoing-background-processes-in-your-mac.md): Configure your app to help people understand when background processes may continue after they close your app.
