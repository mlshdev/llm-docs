> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/performfileoperation(_:source:destination:files:tag:)](https://developer.apple.com/documentation/appkit/nsworkspace/performfileoperation(_:source:destination:files:tag:))

# performFileOperation(\_:source:destination:files:tag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Performs a file operation on a set of files in a particular directory.

## Declaration

```swift
func performFileOperation(_ operation: NSWorkspace.FileOperationName, source: String, destination: String, files: [Any], tag: UnsafeMutablePointer<Int>?) -> Bool
```

## Parameters

- `operation`: The file operation to perform. The possible values for this parameter are described in `File Operations`.
- `source`: The full path to the directory containing the files on which to operate.
- `destination`: The full path to the destination directory of the operation.
- `files`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects specifying the names of the files and directories to be manipulated. Each string must not contain any path information other than the name of the file or directory. In other words, all of the files and directories must be located in the source directory and not in one if its subdirectories.
- `tag`: On input, a integer variable; on return, this variable contains a negative integer if the operation fails, 0 if the operation was performed synchronously and succeeded, or a positive integer if the operation was performed asynchronously. If the value is a positive integer, the value is a tag that identifies the requested file operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation succeeded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some operations—such as moving, copying, and linking files—require a destination directory to be specified. If not, `destination` should be the empty string (`@""`). Before this method returns, it posts an [didPerformFileOperationNotification](didperformfileoperationnotification.md) to the `NSWorkspace` object’s notification center.

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
- [fullPath(forApplication:)](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForApplication(withBundleIdentifier:)](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchApplication(withBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:)](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [open(\_:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:)](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [mountedRemovableMedia()](mountedremovablemedia%28%29.md): Deprecated. Returns the full pathnames of all currently mounted removable disks.
- [mountedLocalVolumePaths()](mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia()](mountedremovablemedia%28%29.md).

# performFileOperation:source:destination:files:tag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Performs a file operation on a set of files in a particular directory.

## Declaration

```objectivec
- (BOOL) performFileOperation:(NSWorkspaceFileOperationName) operation source:(NSString *) source destination:(NSString *) destination files:(NSArray *) files tag:(NSInteger *) tag;
```

## Parameters

- `operation`: The file operation to perform. The possible values for this parameter are described in `File Operations`.
- `source`: The full path to the directory containing the files on which to operate.
- `destination`: The full path to the destination directory of the operation.
- `files`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects specifying the names of the files and directories to be manipulated. Each string must not contain any path information other than the name of the file or directory. In other words, all of the files and directories must be located in the source directory and not in one if its subdirectories.
- `tag`: On input, a integer variable; on return, this variable contains a negative integer if the operation fails, 0 if the operation was performed synchronously and succeeded, or a positive integer if the operation was performed asynchronously. If the value is a positive integer, the value is a tag that identifies the requested file operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation succeeded; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some operations—such as moving, copying, and linking files—require a destination directory to be specified. If not, `destination` should be the empty string (`@""`). Before this method returns, it posts an [NSWorkspaceDidPerformFileOperationNotification](didperformfileoperationnotification.md) to the `NSWorkspace` object’s notification center.

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
- [fullPathForApplication:](fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForAppBundleWithIdentifier:](absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchAppWithBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:](launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [openURLs:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [openTempFile:](opentempfile_.md): Deprecated. Opens the specified temporary file using the default app for its type.
- [findApplications](findapplications.md): Deprecated. Examines all apps and updates the records of registered services and file types.
