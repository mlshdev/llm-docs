> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsclient/openfilesystemextensionssettings()](https://developer.apple.com/documentation/fskit/fsclient/openfilesystemextensionssettings())

# openFileSystemExtensionsSettings() (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Opens the File System Extensions settings in System Settings.

## Declaration

```swift
func openFileSystemExtensionsSettings() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` (Swift) or `YES` (Obj-C) if the settings were successfully opened; otherwise, `false` (Swift) or `NO`(Obj-C).

<a id="discussion"></a>

## Discussion

Calling this method allows someone using your app to navigate to the File System Extensions pane in System Settings. From this pane, they can view, enable, and disable file system extensions.

# openFileSystemExtensionsSettings (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Opens the File System Extensions settings in System Settings.

## Declaration

```objectivec
- (BOOL) openFileSystemExtensionsSettings;
```

<a id="return-value"></a>

## Return Value

`true` (Swift) or `YES` (Obj-C) if the settings were successfully opened; otherwise, `false` (Swift) or `NO`(Obj-C).

<a id="discussion"></a>

## Discussion

Calling this method allows someone using your app to navigate to the File System Extensions pane in System Settings. From this pane, they can view, enable, and disable file system extensions.
