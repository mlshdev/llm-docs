> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/launchoptions](https://developer.apple.com/documentation/appkit/nsworkspace/launchoptions)

# NSWorkspace.LaunchOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants specifying how you want to launch an app

## Declaration

```swift
struct LaunchOptions
```

## Topics

### Options

- [andPrint](launchoptions/andprint.md): Deprecated. Print items instead of opening them.
- [withErrorPresentation](launchoptions/witherrorpresentation.md): Deprecated. Display an error panel to the user if a failure occurs.
- [inhibitingBackgroundOnly](launchoptions/inhibitingbackgroundonly.md): Deprecated. Causes launch to fail if the target is background-only.
- [withoutAddingToRecents](launchoptions/withoutaddingtorecents.md): Deprecated. Do not add the app or documents to the Recents menu.
- [withoutActivation](launchoptions/withoutactivation.md): Deprecated. Launch the app but do not bring it into the foreground.
- [async](launchoptions/async.md): Deprecated. Launch the app and return the results asynchronously.
- [allowingClassicStartup](launchoptions/allowingclassicstartup.md): Deprecated. Start up the Classic compatibility environment, if it is required by the app.
- [preferringClassic](launchoptions/preferringclassic.md): Deprecated. Force the app to launch in the Classic compatibility environment.
- [newInstance](launchoptions/newinstance.md): Deprecated. Create a new instance of the app, even if one is already running.
- [andHide](launchoptions/andhide.md): Deprecated. Tell the app to hide itself as soon as it finishes launching.
- [andHideOthers](launchoptions/andhideothers.md): Deprecated. Hide all apps except the newly launched one.
- [default](launchoptions/default.md): Deprecated. Launch the app asynchronously and launch it in the Classic environment, if required.

### Initializers

- [init(rawValue:)](launchoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Types

- [NSWorkspace.LaunchConfigurationKey](launchconfigurationkey.md): Deprecated. The following keys can be used in the configuration dictionary of the [launchApplication(at:options:configuration:)](launchapplication%28at_options_configuration_%29.md) method. Each key is optional, and if omitted, default behavior is applied.
- [NSWorkspace.FileOperationName](fileoperationname.md): Deprecated. Constants that define types of file operations.

# NSWorkspaceLaunchOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants specifying how you want to launch an app

## Declaration

```objectivec
enum NSWorkspaceLaunchOptions : NSUInteger;
```

## Topics

### Options

- [NSWorkspaceLaunchAndPrint](launchoptions/andprint.md): Deprecated. Print items instead of opening them.
- [NSWorkspaceLaunchWithErrorPresentation](launchoptions/witherrorpresentation.md): Deprecated. Display an error panel to the user if a failure occurs.
- [NSWorkspaceLaunchInhibitingBackgroundOnly](launchoptions/inhibitingbackgroundonly.md): Deprecated. Causes launch to fail if the target is background-only.
- [NSWorkspaceLaunchWithoutAddingToRecents](launchoptions/withoutaddingtorecents.md): Deprecated. Do not add the app or documents to the Recents menu.
- [NSWorkspaceLaunchWithoutActivation](launchoptions/withoutactivation.md): Deprecated. Launch the app but do not bring it into the foreground.
- [NSWorkspaceLaunchAsync](launchoptions/async.md): Deprecated. Launch the app and return the results asynchronously.
- [NSWorkspaceLaunchAllowingClassicStartup](launchoptions/allowingclassicstartup.md): Deprecated. Start up the Classic compatibility environment, if it is required by the app.
- [NSWorkspaceLaunchPreferringClassic](launchoptions/preferringclassic.md): Deprecated. Force the app to launch in the Classic compatibility environment.
- [NSWorkspaceLaunchNewInstance](launchoptions/newinstance.md): Deprecated. Create a new instance of the app, even if one is already running.
- [NSWorkspaceLaunchAndHide](launchoptions/andhide.md): Deprecated. Tell the app to hide itself as soon as it finishes launching.
- [NSWorkspaceLaunchAndHideOthers](launchoptions/andhideothers.md): Deprecated. Hide all apps except the newly launched one.
- [NSWorkspaceLaunchDefault](launchoptions/default.md): Deprecated. Launch the app asynchronously and launch it in the Classic environment, if required.

## See Also

### Types

- [NSWorkspaceLaunchConfigurationKey](launchconfigurationkey.md): Deprecated. The following keys can be used in the configuration dictionary of the [launchApplicationAtURL:options:configuration:error:](launchapplication%28at_options_configuration_%29.md) method. Each key is optional, and if omitted, default behavior is applied.
- [NSWorkspaceFileOperationName](fileoperationname.md): Deprecated. Constants that define types of file operations.
