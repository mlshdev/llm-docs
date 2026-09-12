> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/launchconfigurationkey/environment](https://developer.apple.com/documentation/appkit/nsworkspace/launchconfigurationkey/environment)

# environment (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+ (deprecated in 11.0)

The value is an `NSDictionary`, mapping `NSStrings` to `NSStrings`, containing environment variables to set for the new app.  Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.

> Use -\[NSWorkspaceOpenConfiguration setEnvironment:\] instead.

## Declaration

```swift
static let environment: NSWorkspace.LaunchConfigurationKey
```

## See Also

### Type Properties

- [appleEvent](appleevent.md): Deprecated. The value is the first NSAppleEventDescriptor to send to the new app. If an instance of the app is already running, this is sent to that app.
- [architecture](architecture.md): Deprecated. The value is an NSNumber containing an Mach-O Architecture constant. Ignored if a new instance of the app is not launched.
- [arguments](arguments.md): Deprecated. The value is an `NSArray` of `NSStrings`, passed to the new app in the `argv` parameter. Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.

# NSWorkspaceLaunchConfigurationEnvironment (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 11.0)

The value is an `NSDictionary`, mapping `NSStrings` to `NSStrings`, containing environment variables to set for the new app.  Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.

> Use -\[NSWorkspaceOpenConfiguration setEnvironment:\] instead.

## Declaration

```objectivec
extern NSWorkspaceLaunchConfigurationKey const NSWorkspaceLaunchConfigurationEnvironment;
```

## See Also

### Type Properties

- [NSWorkspaceLaunchConfigurationAppleEvent](appleevent.md): Deprecated. The value is the first NSAppleEventDescriptor to send to the new app. If an instance of the app is already running, this is sent to that app.
- [NSWorkspaceLaunchConfigurationArchitecture](architecture.md): Deprecated. The value is an NSNumber containing an Mach-O Architecture constant. Ignored if a new instance of the app is not launched.
- [NSWorkspaceLaunchConfigurationArguments](arguments.md): Deprecated. The value is an `NSArray` of `NSStrings`, passed to the new app in the `argv` parameter. Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.
