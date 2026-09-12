> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/launchapplication(_:showicon:autolaunch:)](https://developer.apple.com/documentation/appkit/nsworkspace/launchapplication(_:showicon:autolaunch:))

# launchApplication(\_:showIcon:autolaunch:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Launches the specified app using additional options.

> Use [openApplication(at:configuration:completionHandler:)](openapplication%28at_configuration_completionhandler_%29.md) instead.

## Declaration

```swift
func launchApplication(_ appName: String, showIcon: Bool, autolaunch: Bool) -> Bool
```

## Parameters

- `appName`: The name of the app to open.
- `showIcon`: If [false](https://developer.apple.com/documentation/swift/false), the app’s icon is not placed on the screen. (The icon still exists, though.)
- `autolaunch`: If [true](https://developer.apple.com/documentation/swift/true), the autolaunch default is set as though the specified app were autolaunched at startup.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app was successfully launched or was already running; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use of this method is discouraged. Its current behavior is the same as the [launchApplication(\_:)](launchapplication%28__%29.md) method.

Returns [true](https://developer.apple.com/documentation/swift/true) if the app is successfully launched or already running, and [false](https://developer.apple.com/documentation/swift/false) if it can’t be launched.

Before this method begins, it posts an [willLaunchApplicationNotification](willlaunchapplicationnotification.md) to the `NSWorkspace` object’s notification center. When the operation is complete, it posts an [didLaunchApplicationNotification](didlaunchapplicationnotification.md).

It is safe to call this method from any thread in your app in macOS 10.6 and later.

## See Also

### Methods

- [open(\_:options:configuration:)](open%28__options_configuration_%29.md): Deprecated.
- [open(\_:withApplicationAt:options:configuration:)](open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile(\_:)](openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile(\_:withApplication:)](openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile(\_:withApplication:andDeactivate:)](openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [openFile(\_:from:at:in:)](openfile%28__from_at_in_%29.md): Deprecated. Opens a file using the default app for its type and animates the action using a custom icon.
- [launchApplication(\_:)](launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplication(at:options:configuration:)](launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation(\_:source:destination:files:tag:)](performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPath(forApplication:)](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForApplication(withBundleIdentifier:)](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchApplication(withBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:)](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [open(\_:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:)](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [mountedRemovableMedia()](mountedremovablemedia%28%29.md): Deprecated. Returns the full pathnames of all currently mounted removable disks.
- [mountedLocalVolumePaths()](mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia()](mountedremovablemedia%28%29.md).

# launchApplication:showIcon:autolaunch: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Launches the specified app using additional options.

> Use [openApplicationAtURL:configuration:completionHandler:](openapplication%28at_configuration_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (BOOL) launchApplication:(NSString *) appName showIcon:(BOOL) showIcon autolaunch:(BOOL) autolaunch;
```

## Parameters

- `appName`: The name of the app to open.
- `showIcon`: If [false](https://developer.apple.com/documentation/swift/false), the app’s icon is not placed on the screen. (The icon still exists, though.)
- `autolaunch`: If [true](https://developer.apple.com/documentation/swift/true), the autolaunch default is set as though the specified app were autolaunched at startup.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app was successfully launched or was already running; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use of this method is discouraged. Its current behavior is the same as the [launchApplication:](launchapplication%28__%29.md) method.

Returns [true](https://developer.apple.com/documentation/swift/true) if the app is successfully launched or already running, and [false](https://developer.apple.com/documentation/swift/false) if it can’t be launched.

Before this method begins, it posts an [NSWorkspaceWillLaunchApplicationNotification](willlaunchapplicationnotification.md) to the `NSWorkspace` object’s notification center. When the operation is complete, it posts an [NSWorkspaceDidLaunchApplicationNotification](didlaunchapplicationnotification.md).

It is safe to call this method from any thread in your app in macOS 10.6 and later.

## See Also

### Methods

- [openURL:options:configuration:error:](open%28__options_configuration_%29.md): Deprecated.
- [openURLs:withApplicationAtURL:options:configuration:error:](open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile:](openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile:withApplication:](openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile:withApplication:andDeactivate:](openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [openFile:fromImage:at:inView:](openfile%28__from_at_in_%29.md): Deprecated. Opens a file using the default app for its type and animates the action using a custom icon.
- [launchApplication:](launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplicationAtURL:options:configuration:error:](launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation:source:destination:files:tag:](performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPathForApplication:](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForAppBundleWithIdentifier:](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchAppWithBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [openURLs:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [openTempFile:](opentempfile_.md): Deprecated. Opens the specified temporary file using the default app for its type.
- [findApplications](findapplications.md): Deprecated. Examines all apps and updates the records of registered services and file types.
