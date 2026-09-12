> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/launchconfigurationkey](https://developer.apple.com/documentation/appkit/nsworkspace/launchconfigurationkey)

# NSWorkspace.LaunchConfigurationKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.6+ (deprecated in 11.0)

The following keys can be used in the configuration dictionary of the [launchApplication(at:options:configuration:)](launchapplication%28at_options_configuration_%29.md) method.  Each key is optional, and if omitted, default behavior is applied.

> Use [NSWorkspace.OpenConfiguration](openconfiguration.md) instead.

## Declaration

```swift
struct LaunchConfigurationKey
```

## Topics

### Type Properties

- [appleEvent](launchconfigurationkey/appleevent.md): Deprecated. The value is the first NSAppleEventDescriptor to send to the new app. If an instance of the app is already running, this is sent to that app.
- [architecture](launchconfigurationkey/architecture.md): Deprecated. The value is an NSNumber containing an Mach-O Architecture constant. Ignored if a new instance of the app is not launched.
- [arguments](launchconfigurationkey/arguments.md): Deprecated. The value is an `NSArray` of `NSStrings`, passed to the new app in the `argv` parameter. Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.
- [environment](launchconfigurationkey/environment.md): Deprecated. The value is an `NSDictionary`, mapping `NSStrings` to `NSStrings`, containing environment variables to set for the new app. Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.

### Initializers

- [init(rawValue:)](launchconfigurationkey/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Types

- [NSWorkspace.LaunchOptions](launchoptions.md): Constants specifying how you want to launch an app
- [NSWorkspace.FileOperationName](fileoperationname.md): Deprecated. Constants that define types of file operations.

# NSWorkspaceLaunchConfigurationKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.6+ (deprecated in 11.0)

The following keys can be used in the configuration dictionary of the [launchApplicationAtURL:options:configuration:error:](launchapplication%28at_options_configuration_%29.md) method.  Each key is optional, and if omitted, default behavior is applied.

> Use [NSWorkspaceOpenConfiguration](openconfiguration.md) instead.

## Declaration

```objectivec
typedef NSString * NSWorkspaceLaunchConfigurationKey;
```

## Topics

### Type Properties

- [NSWorkspaceLaunchConfigurationAppleEvent](launchconfigurationkey/appleevent.md): Deprecated. The value is the first NSAppleEventDescriptor to send to the new app. If an instance of the app is already running, this is sent to that app.
- [NSWorkspaceLaunchConfigurationArchitecture](launchconfigurationkey/architecture.md): Deprecated. The value is an NSNumber containing an Mach-O Architecture constant. Ignored if a new instance of the app is not launched.
- [NSWorkspaceLaunchConfigurationArguments](launchconfigurationkey/arguments.md): Deprecated. The value is an `NSArray` of `NSStrings`, passed to the new app in the `argv` parameter. Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.
- [NSWorkspaceLaunchConfigurationEnvironment](launchconfigurationkey/environment.md): Deprecated. The value is an `NSDictionary`, mapping `NSStrings` to `NSStrings`, containing environment variables to set for the new app. Ignored if a new instance of the app is not launched. This constant is not available to sandboxed apps.

## See Also

### Types

- [NSWorkspaceLaunchOptions](launchoptions.md): Constants specifying how you want to launch an app
- [NSWorkspaceFileOperationName](fileoperationname.md): Deprecated. Constants that define types of file operations.
