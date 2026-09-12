> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/mountedremovablemedia()](https://developer.apple.com/documentation/appkit/nsworkspace/mountedremovablemedia())

# mountedRemovableMedia() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns the full pathnames of all currently mounted removable disks.

> Do not use.

## Declaration

```swift
func mountedRemovableMedia() -> [Any]?
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the full pathname of a mounted removable disk.

<a id="Discussion"></a>

## Discussion

If the computer provides an interrupt or other notification when the user inserts a disk into a drive, the Finder will mount the disk immediately. However, if no notification is given, the Finder won’t be aware that a disk needs to be mounted. On such systems, an app should invoke either [mountNewRemovableMedia](mountnewremovablemedia.md) or [checkForRemovableMedia](checkforremovablemedia.md) before invoking [mountedRemovableMedia()](mountedremovablemedia%28%29.md). Either of these methods cause the Finder to poll the drives to see if a disk is present. If a disk has been inserted but not yet mounted, these methods will cause the Finder to mount it.

The Disk button in an Open or Save panel invokes [mountedRemovableMedia()](mountedremovablemedia%28%29.md) and [mountNewRemovableMedia](mountnewremovablemedia.md) as part of its operation, so most apps won’t need to invoke these methods directly.

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
- [open(\_:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:)](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [mountedLocalVolumePaths()](mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia()](mountedremovablemedia%28%29.md).

# mountedRemovableMedia (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns the full pathnames of all currently mounted removable disks.

> Do not use.

## Declaration

```objectivec
- (NSArray *) mountedRemovableMedia;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the full pathname of a mounted removable disk.

<a id="Discussion"></a>

## Discussion

If the computer provides an interrupt or other notification when the user inserts a disk into a drive, the Finder will mount the disk immediately. However, if no notification is given, the Finder won’t be aware that a disk needs to be mounted. On such systems, an app should invoke either [mountNewRemovableMedia](mountnewremovablemedia.md) or [checkForRemovableMedia](checkforremovablemedia.md) before invoking [mountedRemovableMedia](mountedremovablemedia%28%29.md). Either of these methods cause the Finder to poll the drives to see if a disk is present. If a disk has been inserted but not yet mounted, these methods will cause the Finder to mount it.

The Disk button in an Open or Save panel invokes [mountedRemovableMedia](mountedremovablemedia%28%29.md) and [mountNewRemovableMedia](mountnewremovablemedia.md) as part of its operation, so most apps won’t need to invoke these methods directly.

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
- [openURLs:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:](open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [openTempFile:](opentempfile_.md): Deprecated. Opens the specified temporary file using the default app for its type.
