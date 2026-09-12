> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openfile(_:from:at:in:)](https://developer.apple.com/documentation/appkit/nsworkspace/openfile(_:from:at:in:))

# openFile(\_:from:at:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Opens a file using the default app for its type and animates the action using a custom icon.

> Use [open(\_:)](open%28__%29.md) instead.

## Declaration

```swift
func openFile(_ fullPath: String, from image: NSImage?, at point: NSPoint, in view: NSView?) -> Bool
```

## Parameters

- `fullPath`: The full path to the file.
- `image`: The icon for the file.
- `point`: The point in `aView` at which to display the icon.
- `view`: The view in which to display the icon.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully opened; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use of this method is discouraged. The method currently provides the same behavior as the [openFile(\_:)](openfile%28__%29.md) method. The Finder provides an animation before opening the file to give the user feedback that the file is to be opened. To provide this animation, `anImage` should contain an icon for the file, and its image should be displayed at `point`, specified in the coordinates of `aView`.

The sending app is deactivated before the request is sent.

It is safe to call this method from any thread in your app in macOS 10.6 and later.

## See Also

### Methods

- [open(\_:options:configuration:)](open%28__options_configuration_%29.md): Deprecated.
- [open(\_:withApplicationAt:options:configuration:)](open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile(\_:)](openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile(\_:withApplication:)](openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile(\_:withApplication:andDeactivate:)](openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [launchApplication(\_:)](launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplication(\_:showIcon:autolaunch:)](launchapplication%28__showicon_autolaunch_%29.md): Deprecated. Launches the specified app using additional options.
- [launchApplication(at:options:configuration:)](launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation(\_:source:destination:files:tag:)](performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPath(forApplication:)](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForApplication(withBundleIdentifier:)](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchApplication(withBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:)](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [open(\_:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:)](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [mountedRemovableMedia()](mountedremovablemedia%28%29.md): Deprecated. Returns the full pathnames of all currently mounted removable disks.
- [mountedLocalVolumePaths()](mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia()](mountedremovablemedia%28%29.md).

# openFile:fromImage:at:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Opens a file using the default app for its type and animates the action using a custom icon.

> Use [openURL:](open%28__%29.md) instead.

## Declaration

```objectivec
- (BOOL) openFile:(NSString *) fullPath fromImage:(NSImage *) image at:(NSPoint) point inView:(NSView *) view;
```

## Parameters

- `fullPath`: The full path to the file.
- `image`: The icon for the file.
- `point`: The point in `aView` at which to display the icon.
- `view`: The view in which to display the icon.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully opened; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use of this method is discouraged. The method currently provides the same behavior as the [openFile:](openfile%28__%29.md) method. The Finder provides an animation before opening the file to give the user feedback that the file is to be opened. To provide this animation, `anImage` should contain an icon for the file, and its image should be displayed at `point`, specified in the coordinates of `aView`.

The sending app is deactivated before the request is sent.

It is safe to call this method from any thread in your app in macOS 10.6 and later.

## See Also

### Methods

- [openURL:options:configuration:error:](open%28__options_configuration_%29.md): Deprecated.
- [openURLs:withApplicationAtURL:options:configuration:error:](open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile:](openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile:withApplication:](openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile:withApplication:andDeactivate:](openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [launchApplication:](launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplication:showIcon:autolaunch:](launchapplication%28__showicon_autolaunch_%29.md): Deprecated. Launches the specified app using additional options.
- [launchApplicationAtURL:options:configuration:error:](launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation:source:destination:files:tag:](performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPathForApplication:](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForAppBundleWithIdentifier:](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchAppWithBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [openURLs:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [openTempFile:](opentempfile_.md): Deprecated. Opens the specified temporary file using the default app for its type.
- [findApplications](findapplications.md): Deprecated. Examines all apps and updates the records of registered services and file types.
