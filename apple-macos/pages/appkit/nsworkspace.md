> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace](https://developer.apple.com/documentation/appkit/nsworkspace)

# NSWorkspace (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A workspace that can launch other apps and perform a variety of file-handling services.

## Declaration

```swift
class NSWorkspace
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="overview"></a>

## Overview

There is one shared [NSWorkspace](nsworkspace.md) object per app. You use the class method [shared](nsworkspace/shared.md) to access it. For example, the following statement uses an [NSWorkspace](nsworkspace.md) object to request that a file be opened in the TextEdit app:

**Swift**

```swift
NSWorkspace.shared.openFile("/Myfiles/README", withApplication: "TextEdit")
```

**Objective-C**

```objc
[[NSWorkspace sharedWorkspace] openFile:@"/Myfiles/README" withApplication:@"TextEdit"];
```

You can use the workspace object to:

- Open, manipulate, and get information about files and devices.
- Track changes to the file system, devices, and the user database.
- Get and set Finder information for files.
- Launch apps.

## Topics

### Accessing the Shared Workspace

- [shared](nsworkspace/shared.md): The shared workspace object.

### Accessing the Workspace Notification Center

- [notificationCenter](nsworkspace/notificationcenter.md): The notification center for workspace notifications.

### Opening URLs

- [open(\_:configuration:completionHandler:)](nsworkspace/open%28__configuration_completionhandler_%29.md): Opens a URL asynchronously using the provided options.
- [open(\_:withApplicationAt:configuration:completionHandler:)](nsworkspace/open%28__withapplicationat_configuration_completionhandler_%29.md): Opens one or more URLs asynchronously in the specified app using the provided options.
- [open(\_:)](nsworkspace/open%28__%29.md): Opens the location at the specified URL.

### Launching and Hiding Apps

- [openApplication(at:configuration:completionHandler:)](nsworkspace/openapplication%28at_configuration_completionhandler_%29.md): Launches the app at the specified URL and asynchronously reports back on the app’s status.
- [hideOtherApplications()](nsworkspace/hideotherapplications%28%29.md): Hides all applications other than the sender.

### Managing Open Configurations

- [NSWorkspace.OpenConfiguration](nsworkspace/openconfiguration.md): The configuration options for opening URLs or launching apps.

### Manipulating Files

- [duplicate(\_:completionHandler:)](nsworkspace/duplicate%28__completionhandler_%29.md): Duplicates the specified URLS asynchronously in the same manner as the Finder.
- [recycle(\_:completionHandler:)](nsworkspace/recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [activateFileViewerSelecting(\_:)](nsworkspace/activatefileviewerselecting%28__%29.md): Activates the Finder, and opens one or more windows selecting the specified files.
- [selectFile(\_:inFileViewerRootedAtPath:)](nsworkspace/selectfile%28__infileviewerrootedatpath_%29.md): Selects the file at the specified path.

### Manipulating Uniform Type Identifier Information

- [type(ofFile:)](nsworkspace/type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescription(forType:)](nsworkspace/localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtension(forType:)](nsworkspace/preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [filenameExtension(\_:isValidForType:)](nsworkspace/filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).
- [type(\_:conformsToType:)](nsworkspace/type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.

### Requesting Information

- [urlForApplication(toOpen:)](nsworkspace/urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [urlForApplication(toOpen:)](nsworkspace/urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [urlForApplication(withBundleIdentifier:)](nsworkspace/urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [urlsForApplications(toOpen:)](nsworkspace/urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [urlsForApplications(toOpen:)](nsworkspace/urlsforapplications%28toopen_%29-60rkm.md): Returns an array of URLs to all available applications that can open the specified content type.
- [urlsForApplications(withBundleIdentifier:)](nsworkspace/urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [getFileSystemInfo(forPath:isRemovable:isWritable:isUnmountable:description:type:)](nsworkspace/getfilesysteminfo%28forpath_isremovable_iswritable_isunmountable_description_type_%29.md): Returns information about the file system at the specified path.
- [isFilePackage(atPath:)](nsworkspace/isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](nsworkspace/frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](nsworkspace/runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](nsworkspace/menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile(\_:application:type:)](nsworkspace/getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.

### Setting Default Application Information

- [setDefaultApplication(at:toOpenFileAt:completion:)](nsworkspace/setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplication(at:toOpen:completion:)](nsworkspace/setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplication(at:toOpenContentTypeOfFileAt:completion:)](nsworkspace/setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.
- [setDefaultApplication(at:toOpenURLsWithScheme:completion:)](nsworkspace/setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.

### Managing Icons

- [icon(forFile:)](nsworkspace/icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [icon(forFiles:)](nsworkspace/icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [icon(for:)](nsworkspace/icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon(\_:forFile:options:)](nsworkspace/seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspace.IconCreationOptions](nsworkspace/iconcreationoptions.md): Constants that describe options for creating icons.

### Unmounting a Device

- [unmountAndEjectDevice(atPath:)](nsworkspace/unmountandejectdevice%28atpath_%29.md): Unmounts and ejects the device at the specified path.
- [unmountAndEjectDevice(at:)](nsworkspace/unmountandejectdevice%28at_%29.md): Attempts to eject the volume mounted at the given path.

### Managing the Desktop Image

- [desktopImageURL(for:)](nsworkspace/desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [setDesktopImageURL(\_:for:options:)](nsworkspace/setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [desktopImageOptions(for:)](nsworkspace/desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.
- [NSWorkspace.DesktopImageOptionKey](nsworkspace/desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.

### Performing Finder Spotlight Searches

- [showSearchResults(forQueryString:)](nsworkspace/showsearchresults%28forquerystring_%29.md): Displays a Spotlight search results window in Finder for the specified query string.

### Finder File Labels

- [fileLabels](nsworkspace/filelabels.md): The array of file labels, returned as strings.
- [fileLabelColors](nsworkspace/filelabelcolors.md): The array of colors for the file labels.

### Tracking Changes to the File System

- [noteFileSystemChanged(\_:)](nsworkspace/notefilesystemchanged%28__%29.md): Informs the workspace object that the file system changed at the specified path.

### Requesting Additional Time Before Logout

- [extendPowerOff(by:)](nsworkspace/extendpoweroff%28by_%29.md): Requests the system wait for the specified amount of time before turning off the power or logging out the user.

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](nsworkspace/accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](nsworkspace/accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](nsworkspace/accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](nsworkspace/accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](nsworkspace/accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [isSwitchControlEnabled](nsworkspace/isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [isVoiceOverEnabled](nsworkspace/isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

### Performing Privileged Operations

- [requestAuthorization(to:completionHandler:)](nsworkspace/requestauthorization%28to_completionhandler_%29.md): Requests authorization to perform a privileged file operation.
- [NSWorkspace.Authorization](nsworkspace/authorization.md): The authorization granted to the app by the user.
- [NSWorkspace.AuthorizationType](nsworkspace/authorizationtype.md): The types of privileged file operations that can be authorized by the user.

### Responding to Environment Notifications

- [willLaunchApplicationNotification](nsworkspace/willlaunchapplicationnotification.md): A notification that the workspace posts when the Finder is about to launch an app.
- [didLaunchApplicationNotification](nsworkspace/didlaunchapplicationnotification.md): A notification that the workspace posts when a new app starts up.
- [didTerminateApplicationNotification](nsworkspace/didterminateapplicationnotification.md): A notification that the workspace posts when an app finishes executing.
- [sessionDidBecomeActiveNotification](nsworkspace/sessiondidbecomeactivenotification.md): A notification that the workspace posts after a user session switches in.
- [sessionDidResignActiveNotification](nsworkspace/sessiondidresignactivenotification.md): A notification that the workspace posts before a user session switches out.
- [didHideApplicationNotification](nsworkspace/didhideapplicationnotification.md): A notification that the workspace posts when the Finder hides an app.
- [didUnhideApplicationNotification](nsworkspace/didunhideapplicationnotification.md): A notification that the workspace posts when the Finder unhides an app.
- [didActivateApplicationNotification](nsworkspace/didactivateapplicationnotification.md): A notification that the workspace posts when the Finder is about to activate an app.
- [didDeactivateApplicationNotification](nsworkspace/diddeactivateapplicationnotification.md): A notification that the workspace posts when the Finder deactivates an app.
- [didRenameVolumeNotification](nsworkspace/didrenamevolumenotification.md): A notification that the workspace posts when a volume changes its name or mount path.
- [didMountNotification](nsworkspace/didmountnotification.md): A notification that the workspace posts when a new device mounts.
- [willUnmountNotification](nsworkspace/willunmountnotification.md): A notification that the workspace posts when the Finder is about to unmount a device.
- [didUnmountNotification](nsworkspace/didunmountnotification.md): A notification that the workspace posts when the Finder unmounts a device.
- [didChangeFileLabelsNotification](nsworkspace/didchangefilelabelsnotification.md): A notification that the workspace posts when the Finder file labels or colors change.
- [activeSpaceDidChangeNotification](nsworkspace/activespacedidchangenotification.md): A notification that the workspace posts when a Spaces change occurs.
- [didWakeNotification](nsworkspace/didwakenotification.md): A notification that the workspace posts when the device wakes from sleep.
- [willPowerOffNotification](nsworkspace/willpoweroffnotification.md): A notification that the workspace posts when the user requests a logout or powers off the device.
- [willSleepNotification](nsworkspace/willsleepnotification.md): A notification that the workspace posts before the device goes to sleep.
- [screensDidSleepNotification](nsworkspace/screensdidsleepnotification.md): A notification that the workspace posts when the device’s screen goes to sleep.
- [screensDidWakeNotification](nsworkspace/screensdidwakenotification.md): A notification that the workspace posts when the device’s screens wake.
- [accessibilityDisplayOptionsDidChangeNotification](nsworkspace/accessibilitydisplayoptionsdidchangenotification.md): A notification that the workspace posts when any of the accessibility display options change.
- [localizedVolumeNameUserInfoKey](nsworkspace/localizedvolumenameuserinfokey.md): A string containing the user-visible name of the volume.
- [volumeURLUserInfoKey](nsworkspace/volumeurluserinfokey.md): A URL containing the mount path of the volume.
- [oldLocalizedVolumeNameUserInfoKey](nsworkspace/oldlocalizedvolumenameuserinfokey.md): A string containing the old user-visible name of the volume
- [oldVolumeURLUserInfoKey](nsworkspace/oldvolumeurluserinfokey.md): A URL containing the old mount path of the volume

### Deprecated

- [Deprecated Symbols](nsworkspace-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Structures

- [NSWorkspace.AccessibilityDisplayOptionsDidChangeMessage](nsworkspace/accessibilitydisplayoptionsdidchangemessage.md)
- [NSWorkspace.ActiveSpaceDidChangeMessage](nsworkspace/activespacedidchangemessage.md)
- [NSWorkspace.DidActivateApplicationMessage](nsworkspace/didactivateapplicationmessage.md)
- [NSWorkspace.DidChangeFileLabelsMessage](nsworkspace/didchangefilelabelsmessage.md)
- [NSWorkspace.DidDeactivateApplicationMessage](nsworkspace/diddeactivateapplicationmessage.md)
- [NSWorkspace.DidHideApplicationMessage](nsworkspace/didhideapplicationmessage.md)
- [NSWorkspace.DidLaunchApplicationMessage](nsworkspace/didlaunchapplicationmessage.md)
- [NSWorkspace.DidMountVolumeMessage](nsworkspace/didmountvolumemessage.md)
- [NSWorkspace.DidRenameVolumeMessage](nsworkspace/didrenamevolumemessage.md)
- [NSWorkspace.DidTerminateApplicationMessage](nsworkspace/didterminateapplicationmessage.md)
- [NSWorkspace.DidUnhideApplicationMessage](nsworkspace/didunhideapplicationmessage.md)
- [NSWorkspace.DidUnmountVolumeMessage](nsworkspace/didunmountvolumemessage.md)
- [NSWorkspace.DidWakeMessage](nsworkspace/didwakemessage.md)
- [NSWorkspace.ScreensDidSleepMessage](nsworkspace/screensdidsleepmessage.md)
- [NSWorkspace.ScreensDidWakeMessage](nsworkspace/screensdidwakemessage.md)
- [NSWorkspace.SessionDidBecomeActiveMessage](nsworkspace/sessiondidbecomeactivemessage.md)
- [NSWorkspace.SessionDidResignActiveMessage](nsworkspace/sessiondidresignactivemessage.md)
- [NSWorkspace.WillLaunchApplicationMessage](nsworkspace/willlaunchapplicationmessage.md)
- [NSWorkspace.WillSleepMessage](nsworkspace/willsleepmessage.md)
- [NSWorkspace.WillUnmountVolumeMessage](nsworkspace/willunmountvolumemessage.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Environment

- [NSWorkspace.OpenConfiguration](nsworkspace/openconfiguration.md): The configuration options for opening URLs or launching apps.
- [NSAppKitVersion](nsappkitversion.md): Constants for determining which version of AppKit is available.
- [LSMinimumSystemVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/lsminimumsystemversion): The minimum version of the operating system required for the app to run in macOS.

# NSWorkspace (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A workspace that can launch other apps and perform a variety of file-handling services.

## Declaration

```objectivec
@interface NSWorkspace : NSObject
```

## Mentioned In

- [Passing control from one app to another with cooperative activation](passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="overview"></a>

## Overview

There is one shared [NSWorkspace](nsworkspace.md) object per app. You use the class method [sharedWorkspace](nsworkspace/shared.md) to access it. For example, the following statement uses an [NSWorkspace](nsworkspace.md) object to request that a file be opened in the TextEdit app:

**Swift**

```swift
NSWorkspace.shared.openFile("/Myfiles/README", withApplication: "TextEdit")
```

**Objective-C**

```objc
[[NSWorkspace sharedWorkspace] openFile:@"/Myfiles/README" withApplication:@"TextEdit"];
```

You can use the workspace object to:

- Open, manipulate, and get information about files and devices.
- Track changes to the file system, devices, and the user database.
- Get and set Finder information for files.
- Launch apps.

## Topics

### Accessing the Shared Workspace

- [sharedWorkspace](nsworkspace/shared.md): The shared workspace object.

### Accessing the Workspace Notification Center

- [notificationCenter](nsworkspace/notificationcenter.md): The notification center for workspace notifications.

### Opening URLs

- [openURL:configuration:completionHandler:](nsworkspace/open%28__configuration_completionhandler_%29.md): Opens a URL asynchronously using the provided options.
- [openURLs:withApplicationAtURL:configuration:completionHandler:](nsworkspace/open%28__withapplicationat_configuration_completionhandler_%29.md): Opens one or more URLs asynchronously in the specified app using the provided options.
- [openURL:](nsworkspace/open%28__%29.md): Opens the location at the specified URL.

### Launching and Hiding Apps

- [openApplicationAtURL:configuration:completionHandler:](nsworkspace/openapplication%28at_configuration_completionhandler_%29.md): Launches the app at the specified URL and asynchronously reports back on the app’s status.
- [hideOtherApplications](nsworkspace/hideotherapplications%28%29.md): Hides all applications other than the sender.

### Managing Open Configurations

- [NSWorkspaceOpenConfiguration](nsworkspace/openconfiguration.md): The configuration options for opening URLs or launching apps.

### Manipulating Files

- [duplicateURLs:completionHandler:](nsworkspace/duplicate%28__completionhandler_%29.md): Duplicates the specified URLS asynchronously in the same manner as the Finder.
- [recycleURLs:completionHandler:](nsworkspace/recycle%28__completionhandler_%29.md): Moves the specified URLs to the trash in the same manner as the Finder.
- [activateFileViewerSelectingURLs:](nsworkspace/activatefileviewerselecting%28__%29.md): Activates the Finder, and opens one or more windows selecting the specified files.
- [selectFile:inFileViewerRootedAtPath:](nsworkspace/selectfile%28__infileviewerrootedatpath_%29.md): Selects the file at the specified path.

### Manipulating Uniform Type Identifier Information

- [typeOfFile:error:](nsworkspace/type%28offile_%29.md): Deprecated. Returns the uniform type identifier of the specified file, if it can be determined.
- [localizedDescriptionForType:](nsworkspace/localizeddescription%28fortype_%29.md): Deprecated. Returns the localized description for the specified Uniform Type Identifier (UTI).
- [preferredFilenameExtensionForType:](nsworkspace/preferredfilenameextension%28fortype_%29.md): Deprecated. Returns the preferred filename extension for the specified Uniform Type Identifier (UTI).
- [filenameExtension:isValidForType:](nsworkspace/filenameextension%28__isvalidfortype_%29.md): Deprecated. Returns whether the specified filename extension is appropriate for the Uniform Type Identifier (UTI).
- [type:conformsToType:](nsworkspace/type%28__conformstotype_%29.md): Deprecated. Returns a Boolean indicating that the first Uniform Type Identifier (UTI) conforms to the second UTI.

### Requesting Information

- [URLForApplicationToOpenURL:](nsworkspace/urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [URLForApplicationToOpenContentType:](nsworkspace/urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [URLForApplicationWithBundleIdentifier:](nsworkspace/urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [URLsForApplicationsToOpenURL:](nsworkspace/urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [URLsForApplicationsToOpenContentType:](nsworkspace/urlsforapplications%28toopen_%29-60rkm.md): Returns an array of URLs to all available applications that can open the specified content type.
- [URLsForApplicationsWithBundleIdentifier:](nsworkspace/urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [getFileSystemInfoForPath:isRemovable:isWritable:isUnmountable:description:type:](nsworkspace/getfilesysteminfo%28forpath_isremovable_iswritable_isunmountable_description_type_%29.md): Returns information about the file system at the specified path.
- [isFilePackageAtPath:](nsworkspace/isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](nsworkspace/frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](nsworkspace/runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](nsworkspace/menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile:application:type:](nsworkspace/getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.

### Setting Default Application Information

- [setDefaultApplicationAtURL:toOpenFileAtURL:completionHandler:](nsworkspace/setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplicationAtURL:toOpenContentType:completionHandler:](nsworkspace/setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplicationAtURL:toOpenContentTypeOfFileAtURL:completionHandler:](nsworkspace/setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.
- [setDefaultApplicationAtURL:toOpenURLsWithScheme:completionHandler:](nsworkspace/setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.

### Managing Icons

- [iconForFile:](nsworkspace/icon%28forfile_%29.md): Returns an image containing the icon for the specified file.
- [iconForFiles:](nsworkspace/icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [iconForContentType:](nsworkspace/icon%28for_%29.md): Returns an image containing the icon for the specified content type.
- [setIcon:forFile:options:](nsworkspace/seticon%28__forfile_options_%29.md): Sets the icon for the file or directory at the specified path.
- [NSWorkspaceIconCreationOptions](nsworkspace/iconcreationoptions.md): Constants that describe options for creating icons.

### Unmounting a Device

- [unmountAndEjectDeviceAtPath:](nsworkspace/unmountandejectdevice%28atpath_%29.md): Unmounts and ejects the device at the specified path.
- [unmountAndEjectDeviceAtURL:error:](nsworkspace/unmountandejectdevice%28at_%29.md): Attempts to eject the volume mounted at the given path.

### Managing the Desktop Image

- [desktopImageURLForScreen:](nsworkspace/desktopimageurl%28for_%29.md): Returns the URL for the desktop image for the given screen.
- [setDesktopImageURL:forScreen:options:error:](nsworkspace/setdesktopimageurl%28__for_options_%29.md): Sets the desktop image for the given screen to the image at the specified URL.
- [desktopImageOptionsForScreen:](nsworkspace/desktopimageoptions%28for_%29.md): Returns the desktop image options for the given screen.
- [NSWorkspaceDesktopImageOptionKey](nsworkspace/desktopimageoptionkey.md): Keys that indicate how to display a new desktop image.

### Performing Finder Spotlight Searches

- [showSearchResultsForQueryString:](nsworkspace/showsearchresults%28forquerystring_%29.md): Displays a Spotlight search results window in Finder for the specified query string.

### Finder File Labels

- [fileLabels](nsworkspace/filelabels.md): The array of file labels, returned as strings.
- [fileLabelColors](nsworkspace/filelabelcolors.md): The array of colors for the file labels.

### Tracking Changes to the File System

- [noteFileSystemChanged:](nsworkspace/notefilesystemchanged%28__%29.md): Informs the workspace object that the file system changed at the specified path.

### Requesting Additional Time Before Logout

- [extendPowerOffBy:](nsworkspace/extendpoweroff%28by_%29.md): Requests the system wait for the specified amount of time before turning off the power or logging out the user.

### Supporting Accessibility

- [accessibilityDisplayShouldDifferentiateWithoutColor](nsworkspace/accessibilitydisplayshoulddifferentiatewithoutcolor.md): A Boolean value that indicates whether the app avoids conveying information through color alone.
- [accessibilityDisplayShouldIncreaseContrast](nsworkspace/accessibilitydisplayshouldincreasecontrast.md): A Boolean value that indicates whether the app presents a high-contrast user interface.
- [accessibilityDisplayShouldReduceTransparency](nsworkspace/accessibilitydisplayshouldreducetransparency.md): A Boolean value that indicates whether the app avoids using semitransparent backgrounds.
- [accessibilityDisplayShouldInvertColors](nsworkspace/accessibilitydisplayshouldinvertcolors.md): A Boolean value that indicates whether the accessibility option to invert colors is in an enabled state.
- [accessibilityDisplayShouldReduceMotion](nsworkspace/accessibilitydisplayshouldreducemotion.md): A Boolean value that indicates whether the accessibility option to reduce motion is in an enabled state.
- [switchControlEnabled](nsworkspace/isswitchcontrolenabled.md): A Boolean value that indicates whether Switch Control is currently running.
- [voiceOverEnabled](nsworkspace/isvoiceoverenabled.md): A Boolean value that indicates whether VoiceOver is currently running.

### Performing Privileged Operations

- [requestAuthorizationOfType:completionHandler:](nsworkspace/requestauthorization%28to_completionhandler_%29.md): Requests authorization to perform a privileged file operation.
- [NSWorkspaceAuthorization](nsworkspace/authorization.md): The authorization granted to the app by the user.
- [NSWorkspaceAuthorizationType](nsworkspace/authorizationtype.md): The types of privileged file operations that can be authorized by the user.

### Responding to Environment Notifications

- [NSWorkspaceWillLaunchApplicationNotification](nsworkspace/willlaunchapplicationnotification.md): A notification that the workspace posts when the Finder is about to launch an app.
- [NSWorkspaceDidLaunchApplicationNotification](nsworkspace/didlaunchapplicationnotification.md): A notification that the workspace posts when a new app starts up.
- [NSWorkspaceDidTerminateApplicationNotification](nsworkspace/didterminateapplicationnotification.md): A notification that the workspace posts when an app finishes executing.
- [NSWorkspaceSessionDidBecomeActiveNotification](nsworkspace/sessiondidbecomeactivenotification.md): A notification that the workspace posts after a user session switches in.
- [NSWorkspaceSessionDidResignActiveNotification](nsworkspace/sessiondidresignactivenotification.md): A notification that the workspace posts before a user session switches out.
- [NSWorkspaceDidHideApplicationNotification](nsworkspace/didhideapplicationnotification.md): A notification that the workspace posts when the Finder hides an app.
- [NSWorkspaceDidUnhideApplicationNotification](nsworkspace/didunhideapplicationnotification.md): A notification that the workspace posts when the Finder unhides an app.
- [NSWorkspaceDidActivateApplicationNotification](nsworkspace/didactivateapplicationnotification.md): A notification that the workspace posts when the Finder is about to activate an app.
- [NSWorkspaceDidDeactivateApplicationNotification](nsworkspace/diddeactivateapplicationnotification.md): A notification that the workspace posts when the Finder deactivates an app.
- [NSWorkspaceDidRenameVolumeNotification](nsworkspace/didrenamevolumenotification.md): A notification that the workspace posts when a volume changes its name or mount path.
- [NSWorkspaceDidMountNotification](nsworkspace/didmountnotification.md): A notification that the workspace posts when a new device mounts.
- [NSWorkspaceWillUnmountNotification](nsworkspace/willunmountnotification.md): A notification that the workspace posts when the Finder is about to unmount a device.
- [NSWorkspaceDidUnmountNotification](nsworkspace/didunmountnotification.md): A notification that the workspace posts when the Finder unmounts a device.
- [NSWorkspaceDidChangeFileLabelsNotification](nsworkspace/didchangefilelabelsnotification.md): A notification that the workspace posts when the Finder file labels or colors change.
- [NSWorkspaceActiveSpaceDidChangeNotification](nsworkspace/activespacedidchangenotification.md): A notification that the workspace posts when a Spaces change occurs.
- [NSWorkspaceDidWakeNotification](nsworkspace/didwakenotification.md): A notification that the workspace posts when the device wakes from sleep.
- [NSWorkspaceWillPowerOffNotification](nsworkspace/willpoweroffnotification.md): A notification that the workspace posts when the user requests a logout or powers off the device.
- [NSWorkspaceWillSleepNotification](nsworkspace/willsleepnotification.md): A notification that the workspace posts before the device goes to sleep.
- [NSWorkspaceScreensDidSleepNotification](nsworkspace/screensdidsleepnotification.md): A notification that the workspace posts when the device’s screen goes to sleep.
- [NSWorkspaceScreensDidWakeNotification](nsworkspace/screensdidwakenotification.md): A notification that the workspace posts when the device’s screens wake.
- [NSWorkspaceAccessibilityDisplayOptionsDidChangeNotification](nsworkspace/accessibilitydisplayoptionsdidchangenotification.md): A notification that the workspace posts when any of the accessibility display options change.
- [NSWorkspaceVolumeLocalizedNameKey](nsworkspace/localizedvolumenameuserinfokey.md): A string containing the user-visible name of the volume.
- [NSWorkspaceVolumeURLKey](nsworkspace/volumeurluserinfokey.md): A URL containing the mount path of the volume.
- [NSWorkspaceVolumeOldLocalizedNameKey](nsworkspace/oldlocalizedvolumenameuserinfokey.md): A string containing the old user-visible name of the volume
- [NSWorkspaceVolumeOldURLKey](nsworkspace/oldvolumeurluserinfokey.md): A URL containing the old mount path of the volume

### Deprecated

- [Deprecated Symbols](nsworkspace-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Environment

- [NSWorkspaceOpenConfiguration](nsworkspace/openconfiguration.md): The configuration options for opening URLs or launching apps.
- [NSAppKitVersion](nsappkitversion.md): Constants for determining which version of AppKit is available.
- [LSMinimumSystemVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/lsminimumsystemversion): The minimum version of the operating system required for the app to run in macOS.
