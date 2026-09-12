> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace-deprecated-symbols](https://developer.apple.com/documentation/appkit/nsworkspace-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

<a id="overview"></a>

## Overview

The table below describes keys for an `NSDictionary` object containing information about an app. This dictionary is returned by [activeApplication()](nsworkspace/activeapplication%28%29.md) and [launchedApplications](nsworkspace/launchedapplications.md), and is also provided in the `userInfo` of `NSWorkspace` notifications for app launch and termination.

Note that these constants are considered legacy.

> **Note**

>  It is strongly suggested that you use the `NSWorkspace` class’s [runningApplications](nsworkspace/runningapplications.md) method and the [NSRunningApplication](nsrunningapplication.md) class to retrieve this information in apps target macOS 10.6 and later, rather than the [activeApplication()](nsworkspace/activeapplication%28%29.md) and [launchedApplications](nsworkspace/launchedapplications.md) methods.

| Key | Value |
| --- | --- |
| `@"NSApplicationPath"` | The full path to the app, as a `NSString` object. |
| `@"NSApplicationName"` | The app’s name, as an `NSString` object. |
| `@"NSApplicationBundleIdentifier"` | The app’s bundle identifier, as an `NSString` object. |
| `@"NSApplicationProcessIdentifier"` | The app’s process ID, as an `NSNumber` object. |
| `@"NSApplicationProcessSerialNumberHigh"` | The high long of the process serial number (PSN), as an `NSNumber` object. |
| `@"NSApplicationProcessSerialNumberLow"` | The low long of the process serial number (PSN), as an `NSNumber` object. |

## Topics

### Methods

- [open(\_:options:configuration:)](nsworkspace/open%28__options_configuration_%29.md): Deprecated.
- [open(\_:withApplicationAt:options:configuration:)](nsworkspace/open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile(\_:)](nsworkspace/openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile(\_:withApplication:)](nsworkspace/openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile(\_:withApplication:andDeactivate:)](nsworkspace/openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [openFile(\_:from:at:in:)](nsworkspace/openfile%28__from_at_in_%29.md): Deprecated. Opens a file using the default app for its type and animates the action using a custom icon.
- [launchApplication(\_:)](nsworkspace/launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplication(\_:showIcon:autolaunch:)](nsworkspace/launchapplication%28__showicon_autolaunch_%29.md): Deprecated. Launches the specified app using additional options.
- [launchApplication(at:options:configuration:)](nsworkspace/launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation(\_:source:destination:files:tag:)](nsworkspace/performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPath(forApplication:)](nsworkspace/fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForApplication(withBundleIdentifier:)](nsworkspace/absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchApplication(withBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:)](nsworkspace/launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [open(\_:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:)](nsworkspace/open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [mountedRemovableMedia()](nsworkspace/mountedremovablemedia%28%29.md): Deprecated. Returns the full pathnames of all currently mounted removable disks.
- [mountedLocalVolumePaths()](nsworkspace/mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia()](nsworkspace/mountedremovablemedia%28%29.md).
- [activeApplication()](nsworkspace/activeapplication%28%29.md): Deprecated. Returns a dictionary with information about the current active app.
- [icon(forFileType:)](nsworkspace/icon%28forfiletype_%29.md): Deprecated. Returns an image containing the icon for files of the specified type.

### Types

- [NSWorkspace.LaunchOptions](nsworkspace/launchoptions.md): Constants specifying how you want to launch an app
- [NSWorkspace.LaunchConfigurationKey](nsworkspace/launchconfigurationkey.md): Deprecated. The following keys can be used in the configuration dictionary of the [launchApplication(at:options:configuration:)](nsworkspace/launchapplication%28at_options_configuration_%29.md) method. Each key is optional, and if omitted, default behavior is applied.
- [NSWorkspace.FileOperationName](nsworkspace/fileoperationname.md): Deprecated. Constants that define types of file operations.

### Constants

- [applicationUserInfoKey](nsworkspace/applicationuserinfokey.md): The value corresponding to this key is an instance of [NSRunningApplication](nsrunningapplication.md) that reflects the affected app.

### Notifications

- [didPerformFileOperationNotification](nsworkspace/didperformfileoperationnotification.md): Deprecated. Posted when a file operation has been performed in the receiving app.

# Deprecated Symbols (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

<a id="overview"></a>

## Overview

The table below describes keys for an `NSDictionary` object containing information about an app. This dictionary is returned by [activeApplication](nsworkspace/activeapplication%28%29.md) and [launchedApplications](nsworkspace/launchedapplications.md), and is also provided in the `userInfo` of `NSWorkspace` notifications for app launch and termination.

Note that these constants are considered legacy.

> **Note**

>  It is strongly suggested that you use the `NSWorkspace` class’s [runningApplications](nsworkspace/runningapplications.md) method and the [NSRunningApplication](nsrunningapplication.md) class to retrieve this information in apps target macOS 10.6 and later, rather than the [activeApplication](nsworkspace/activeapplication%28%29.md) and [launchedApplications](nsworkspace/launchedapplications.md) methods.

| Key | Value |
| --- | --- |
| `@"NSApplicationPath"` | The full path to the app, as a `NSString` object. |
| `@"NSApplicationName"` | The app’s name, as an `NSString` object. |
| `@"NSApplicationBundleIdentifier"` | The app’s bundle identifier, as an `NSString` object. |
| `@"NSApplicationProcessIdentifier"` | The app’s process ID, as an `NSNumber` object. |
| `@"NSApplicationProcessSerialNumberHigh"` | The high long of the process serial number (PSN), as an `NSNumber` object. |
| `@"NSApplicationProcessSerialNumberLow"` | The low long of the process serial number (PSN), as an `NSNumber` object. |

## Topics

### Methods

- [openURL:options:configuration:error:](nsworkspace/open%28__options_configuration_%29.md): Deprecated.
- [openURLs:withApplicationAtURL:options:configuration:error:](nsworkspace/open%28__withapplicationat_options_configuration_%29.md): Deprecated.
- [openFile:](nsworkspace/openfile%28__%29.md): Deprecated. Opens the specified file specified using the default app associated with its type.
- [openFile:withApplication:](nsworkspace/openfile%28__withapplication_%29.md): Deprecated. Opens a file using the specified app.
- [openFile:withApplication:andDeactivate:](nsworkspace/openfile%28__withapplication_anddeactivate_%29.md): Deprecated. Opens the specified file and optionally deactivates the sending app.
- [openFile:fromImage:at:inView:](nsworkspace/openfile%28__from_at_in_%29.md): Deprecated. Opens a file using the default app for its type and animates the action using a custom icon.
- [launchApplication:](nsworkspace/launchapplication%28__%29.md): Deprecated. Launches the specified app.
- [launchApplication:showIcon:autolaunch:](nsworkspace/launchapplication%28__showicon_autolaunch_%29.md): Deprecated. Launches the specified app using additional options.
- [launchApplicationAtURL:options:configuration:error:](nsworkspace/launchapplication%28at_options_configuration_%29.md): Deprecated. Launches the app at the specified URL.
- [performFileOperation:source:destination:files:tag:](nsworkspace/performfileoperation%28__source_destination_files_tag_%29.md): Deprecated. Performs a file operation on a set of files in a particular directory.
- [fullPathForApplication:](nsworkspace/fullpath%28forapplication_%29.md): Deprecated. Returns the full path for the specified app.
- [absolutePathForAppBundleWithIdentifier:](nsworkspace/absolutepathforapplication%28withbundleidentifier_%29.md): Deprecated. Returns the absolute file system path of an app bundle.
- [launchAppWithBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifier:](nsworkspace/launchapplication%28withbundleidentifier_options_additionaleventparamdescriptor_launchidentifier_%29.md): Deprecated. Launches the app corresponding to the specified `bundleIdentifier`.
- [openURLs:withAppBundleIdentifier:options:additionalEventParamDescriptor:launchIdentifiers:](nsworkspace/open%28__withappbundleidentifier_options_additionaleventparamdescriptor_launchidentifiers_%29.md): Deprecated. Opens one or more files from an array of URLs.
- [openTempFile:](nsworkspace/opentempfile_.md): Deprecated. Opens the specified temporary file using the default app for its type.
- [findApplications](nsworkspace/findapplications.md): Deprecated. Examines all apps and updates the records of registered services and file types.
- [noteUserDefaultsChanged](nsworkspace/noteuserdefaultschanged.md): Deprecated. Informs the `NSWorkspace` object that the defaults database has changed.
- [slideImage:from:to:](nsworkspace/slideimage_from_to_.md): Deprecated. Animates a sliding image from one point to another.
- [checkForRemovableMedia](nsworkspace/checkforremovablemedia.md): Deprecated. Polls the system’s drives for any disks that have been inserted but not yet mounted.
- [noteFileSystemChanged](nsworkspace/notefilesystemchanged.md): Deprecated. Informs the `NSWorkspace` object that the file system has changed.
- [fileSystemChanged](nsworkspace/filesystemchanged.md): Deprecated. Returns a Boolean value indicating whether a change to the file system has been registered with a [noteFileSystemChanged](nsworkspace/notefilesystemchanged.md) message since the last [fileSystemChanged](nsworkspace/filesystemchanged.md) message.
- [userDefaultsChanged](nsworkspace/userdefaultschanged.md): Deprecated. Returns a Boolean value indicating whether a change to the defaults database has been registered with a [noteUserDefaultsChanged](nsworkspace/noteuserdefaultschanged.md) message since the last [userDefaultsChanged](nsworkspace/userdefaultschanged.md) message.
- [mountNewRemovableMedia](nsworkspace/mountnewremovablemedia.md): Deprecated. Returns the full pathnames of any newly mounted disks.
- [mountedRemovableMedia](nsworkspace/mountedremovablemedia%28%29.md): Deprecated. Returns the full pathnames of all currently mounted removable disks.
- [mountedLocalVolumePaths](nsworkspace/mountedlocalvolumepaths%28%29.md): Deprecated. Returns the mount points of all local volumes, not just the removable ones returned by [mountedRemovableMedia](nsworkspace/mountedremovablemedia%28%29.md).
- [activeApplication](nsworkspace/activeapplication%28%29.md): Deprecated. Returns a dictionary with information about the current active app.
- [launchedApplications](nsworkspace/launchedapplications.md): Deprecated. Returns an array of dictionaries, one entry for each running app.
- [iconForFileType:](nsworkspace/icon%28forfiletype_%29.md): Deprecated. Returns an image containing the icon for files of the specified type.

### Types

- [NSWorkspaceLaunchOptions](nsworkspace/launchoptions.md): Constants specifying how you want to launch an app
- [NSWorkspaceLaunchConfigurationKey](nsworkspace/launchconfigurationkey.md): Deprecated. The following keys can be used in the configuration dictionary of the [launchApplicationAtURL:options:configuration:error:](nsworkspace/launchapplication%28at_options_configuration_%29.md) method. Each key is optional, and if omitted, default behavior is applied.
- [NSWorkspaceFileOperationName](nsworkspace/fileoperationname.md): Deprecated. Constants that define types of file operations.

### Constants

- [NSPlainFileType](nsplainfiletype.md): Deprecated. Plain (untyped) file.
- [NSDirectoryFileType](nsdirectoryfiletype.md): Deprecated. Directory.
- [NSApplicationFileType](nsapplicationfiletype.md): Deprecated. Cocoa app.
- [NSFilesystemFileType](nsfilesystemfiletype.md): Deprecated. File-system mount point.
- [NSShellCommandFileType](nsshellcommandfiletype.md): Deprecated. Executable shell command.
- [NSWorkspaceApplicationKey](nsworkspace/applicationuserinfokey.md): The value corresponding to this key is an instance of [NSRunningApplication](nsrunningapplication.md) that reflects the affected app.

### Notifications

- [NSWorkspaceDidPerformFileOperationNotification](nsworkspace/didperformfileoperationnotification.md): Deprecated. Posted when a file operation has been performed in the receiving app.
