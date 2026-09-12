> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/getinfoforfile(_:application:type:)](https://developer.apple.com/documentation/appkit/nsworkspace/getinfoforfile(_:application:type:))

# getInfoForFile(\_:application:type:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Retrieves information about the specified file.

> Use -\[NSWorkspace URLForApplicationToOpenURL:\] to get the URL of an application that will open a given item, or -\[NSURL getResourceValue:forKey:error:\] with NSURLContentTypeKey to get the type of the given item.

## Declaration

```swift
func getInfoForFile(_ fullPath: String, application appName: AutoreleasingUnsafeMutablePointer<NSString?>?, type: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `fullPath`: The full path to the desired file.
- `appName`: The app the system would use to open the file.
- `type`: On input, a pointer to a string object variable; on return, if the method is successful, this variable contains a string object with the filename extension or encoded HFS file type of the file.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method successfully retrieved the information, or [false](https://developer.apple.com/documentation/swift/false) if it couldn’t find the file or the app isn’t associated with the file.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Related Documentation

- [icon(forFiles:)](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [icon(forFile:)](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.

### Requesting Information

- [urlForApplication(toOpen:)](urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [urlForApplication(toOpen:)](urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [urlForApplication(withBundleIdentifier:)](urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [urlsForApplications(toOpen:)](urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [urlsForApplications(toOpen:)](urlsforapplications%28toopen_%29-60rkm.md): Returns an array of URLs to all available applications that can open the specified content type.
- [urlsForApplications(withBundleIdentifier:)](urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [getFileSystemInfo(forPath:isRemovable:isWritable:isUnmountable:description:type:)](getfilesysteminfo%28forpath_isremovable_iswritable_isunmountable_description_type_%29.md): Returns information about the file system at the specified path.
- [isFilePackage(atPath:)](isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.

# getInfoForFile:application:type: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Retrieves information about the specified file.

> Use -\[NSWorkspace URLForApplicationToOpenURL:\] to get the URL of an application that will open a given item, or -\[NSURL getResourceValue:forKey:error:\] with NSURLContentTypeKey to get the type of the given item.

## Declaration

```objectivec
- (BOOL) getInfoForFile:(NSString *) fullPath application:(NSString **) appName type:(NSString **) type;
```

## Parameters

- `fullPath`: The full path to the desired file.
- `appName`: The app the system would use to open the file.
- `type`: On input, a pointer to a string object variable; on return, if the method is successful, this variable contains a string object with the filename extension or encoded HFS file type of the file.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this method successfully retrieved the information, or [false](https://developer.apple.com/documentation/swift/false) if it couldn’t find the file or the app isn’t associated with the file.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Related Documentation

- [iconForFiles:](icon%28forfiles_%29.md): Returns an image containing the icon for the specified files.
- [iconForFile:](icon%28forfile_%29.md): Returns an image containing the icon for the specified file.

### Requesting Information

- [URLForApplicationToOpenURL:](urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [URLForApplicationToOpenContentType:](urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [URLForApplicationWithBundleIdentifier:](urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [URLsForApplicationsToOpenURL:](urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [URLsForApplicationsToOpenContentType:](urlsforapplications%28toopen_%29-60rkm.md): Returns an array of URLs to all available applications that can open the specified content type.
- [URLsForApplicationsWithBundleIdentifier:](urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [getFileSystemInfoForPath:isRemovable:isWritable:isUnmountable:description:type:](getfilesysteminfo%28forpath_isremovable_iswritable_isunmountable_description_type_%29.md): Returns information about the file system at the specified path.
- [isFilePackageAtPath:](isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
