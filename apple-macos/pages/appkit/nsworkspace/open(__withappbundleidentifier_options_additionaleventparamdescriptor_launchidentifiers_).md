> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/open(_:withappbundleidentifier:options:additionaleventparamdescriptor:launchidentifiers:)](https://developer.apple.com/documentation/appkit/nsworkspace/open(_:withappbundleidentifier:options:additionaleventparamdescriptor:launchidentifiers:))

# open(\_:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Opens one or more files from an array of URLs.

> Use [open(\_:withApplicationAt:configuration:completionHandler:)](open%28__withapplicationat_configuration_completionhandler_%29.md) instead.

## Declaration

```swift
func open(_ urls: [URL], withAppBundleIdentifier bundleIdentifier: String?, options: NSWorkspace.LaunchOptions = [], additionalEventParamDescriptor descriptor: NSAppleEventDescriptor?, launchIdentifiers identifiers: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> Bool
```

## Parameters

- `urls`: An array of `NSURL` objects, each one identifying a URL for the app to open.
- `bundleIdentifier`: A bundle identifier string or `nil` to use the default system bindings. This value corresponds to the value in the `CFBundleIdentifier` key of the app’s `Info.plist` file. For example, the bundle identifier of the TextEdit app is `com.apple.TextEdit`.
- `options`: Options to use when launching the app. Values for this parameter are described in [NSWorkspace.LaunchOptions](launchoptions.md).
- `descriptor`: Additional options specified in an AppleEvent-style descriptor. For example, you could use this parameter to specify additional documents to open when the app is launched.
- `identifiers`: The `launchIdentifiers` are currently unused, and you should pass `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app was found and launched; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

It is safe to call this method from any thread of your app.

## See Also

### Methods

- [open(\_:options:configuration:)](open%28__options_configuration_%29.md): Deprecated.
- [open(\_:withApplicationAt:options:configuration:)](open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile(\_:)](openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile(\_:withApplication:)](openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile(\_:withApplication:andDeactivate:)](openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [openFile(\_:from:at:in:)](openfile%28__from_at_in_%29.md): Deprecated. Opens a file using the default app for its type and animates the action using a custom icon.
- [launchApplication(\_:)](launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplication(\_:showIcon:autolaunch:)](launchapplication%28__showicon_autolaunch_%29.md): Deprecated. Launches the specified app using additional options.
- [launchApplication(at:options:configuration:)](launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation(\_:source:destination:files:tag:)](performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPath(forApplication:)](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForApplication(withBundleIdentifier:)](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchApplication(withBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:)](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [mountedRemovableMedia()](mountedremovablemedia%28%29.md): Deprecated. Returns the full pathnames of all currently mounted removable disks.
- [mountedLocalVolumePaths()](mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia()](mountedremovablemedia%28%29.md).

# openURLs:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Opens one or more files from an array of URLs.

> Use [openURLs:withApplicationAtURL:configuration:completionHandler:](open%28__withapplicationat_configuration_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (BOOL) openURLs:(NSArray<NSURL *> *) urls withAppBundleIdentifier:(NSString *) bundleIdentifier options:(NSWorkspaceLaunchOptions) options additionalEventParamDescriptor:(NSAppleEventDescriptor *) descriptor launchIdentifiers:(NSArray<NSNumber *> **) identifiers;
```

## Parameters

- `urls`: An array of `NSURL` objects, each one identifying a URL for the app to open.
- `bundleIdentifier`: A bundle identifier string or `nil` to use the default system bindings. This value corresponds to the value in the `CFBundleIdentifier` key of the app’s `Info.plist` file. For example, the bundle identifier of the TextEdit app is `com.apple.TextEdit`.
- `options`: Options to use when launching the app. Values for this parameter are described in [NSWorkspaceLaunchOptions](launchoptions.md).
- `descriptor`: Additional options specified in an AppleEvent-style descriptor. For example, you could use this parameter to specify additional documents to open when the app is launched.
- `identifiers`: The `launchIdentifiers` are currently unused, and you should pass `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app was found and launched; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

It is safe to call this method from any thread of your app.

## See Also

### Methods

- [openURL:options:configuration:error:](open%28__options_configuration_%29.md): Deprecated.
- [openURLs:withApplicationAtURL:options:configuration:error:](open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile:](openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile:withApplication:](openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile:withApplication:andDeactivate:](openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [openFile:fromImage:at:inView:](openfile%28__from_at_in_%29.md): Deprecated. Opens a file using the default app for its type and animates the action using a custom icon.
- [launchApplication:](launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplication:showIcon:autolaunch:](launchapplication%28__showicon_autolaunch_%29.md): Deprecated. Launches the specified app using additional options.
- [launchApplicationAtURL:options:configuration:error:](launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation:source:destination:files:tag:](performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPathForApplication:](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForAppBundleWithIdentifier:](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchAppWithBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [openTempFile:](opentempfile_.md): Deprecated. Opens the specified temporary file using the default app for its type.
- [findApplications](findapplications.md): Deprecated. Examines all apps and updates the records of registered services and file types.
