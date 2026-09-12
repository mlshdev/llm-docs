> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/open(_:withapplicationat:options:configuration:)](https://developer.apple.com/documentation/appkit/nsworkspace/open(_:withapplicationat:options:configuration:))

# open(\_:withApplicationAt:options:configuration:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

> Use [open(\_:withApplicationAt:configuration:completionHandler:)](open%28__withapplicationat_configuration_completionhandler_%29.md) instead.

## Declaration

```swift
func open(_ urls: [URL], withApplicationAt applicationURL: URL, options: NSWorkspace.LaunchOptions = [], configuration: [NSWorkspace.LaunchConfigurationKey : Any]) throws -> NSRunningApplication
```

## See Also

### Methods

- [open(\_:options:configuration:)](open%28__options_configuration_%29.md): Deprecated.
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
- [open(\_:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:)](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [mountedRemovableMedia()](mountedremovablemedia%28%29.md): Deprecated. Returns the full pathnames of all currently mounted removable disks.
- [mountedLocalVolumePaths()](mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia()](mountedremovablemedia%28%29.md).

# openURLs:withApplicationAtURL:options:configuration:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

> Use [openURLs:withApplicationAtURL:configuration:completionHandler:](open%28__withapplicationat_configuration_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSRunningApplication *) openURLs:(NSArray<NSURL *> *) urls withApplicationAtURL:(NSURL *) applicationURL options:(NSWorkspaceLaunchOptions) options configuration:(NSDictionary<NSString *,id> *) configuration error:(NSError **) error;
```

## See Also

### Methods

- [openURL:options:configuration:error:](open%28__options_configuration_%29.md): Deprecated.
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
- [openURLs:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [openTempFile:](opentempfile_.md): Deprecated. Opens the specified temporary file using the default app for its type.
- [findApplications](findapplications.md): Deprecated. Examines all apps and updates the records of registered services and file types.
