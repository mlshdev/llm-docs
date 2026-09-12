> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/noteuserdefaultschanged](https://developer.apple.com/documentation/appkit/nsworkspace/noteuserdefaultschanged)

# noteUserDefaultsChanged

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Informs the `NSWorkspace` object that the defaults database has changed.

> Register for the [NSUserDefaultsDidChangeNotification](https://developer.apple.com/documentation/foundation/userdefaults/didchangenotification) notification instead.

## Declaration

```objectivec
- (void) noteUserDefaultsChanged;
```

<a id="Discussion"></a>

## Discussion

The `NSWorkspace` object then reads all the defaults it is interested in and reconfigures itself appropriately. For example, this method is used by the Preferences app to notify the Finder whether the user prefers to see hidden files. Currently has no effect.

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
