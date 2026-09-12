> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/getfilesysteminfo(forpath:isremovable:iswritable:isunmountable:description:type:)](https://developer.apple.com/documentation/appkit/nsworkspace/getfilesysteminfo(forpath:isremovable:iswritable:isunmountable:description:type:))

# getFileSystemInfo(forPath:isRemovable:isWritable:isUnmountable:description:type:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns information about the file system at the specified path.

## Declaration

```swift
func getFileSystemInfo(forPath fullPath: String, isRemovable removableFlag: UnsafeMutablePointer<ObjCBool>?, isWritable writableFlag: UnsafeMutablePointer<ObjCBool>?, isUnmountable unmountableFlag: UnsafeMutablePointer<ObjCBool>?, description: AutoreleasingUnsafeMutablePointer<NSString?>?, type fileSystemType: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `fullPath`: The path to the file system mount point.
- `removableFlag`: On input, a Boolean variable; on return, this variable contains [true](https://developer.apple.com/documentation/swift/true) if the file system is on removable media.
- `writableFlag`: On input, a Boolean variable; on return, this variable contains [true](https://developer.apple.com/documentation/swift/true) if the file system writable.
- `unmountableFlag`: On input, a Boolean variable; on return, this variable contains [true](https://developer.apple.com/documentation/swift/true) if the file system is unmountable.
- `description`: On input, a pointer to a string object variable; on return, if the method was successful, this variable contains a string object that describes the file system. You should not rely on this description for program logic but can use it in message strings. Values can include  “hard,” “nfs,” and “foreign.”
- `fileSystemType`: On input, a pointer to a string object variable; on return, if the method was successful, this variable contains the file system type. Values can include “HFS,” “UFS,” or other values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the information was returned; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Requesting Information

- [urlForApplication(toOpen:)](urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [urlForApplication(toOpen:)](urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [urlForApplication(withBundleIdentifier:)](urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [urlsForApplications(toOpen:)](urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [urlsForApplications(toOpen:)](urlsforapplications%28toopen_%29-60rkm.md): Returns an array of URLs to all available applications that can open the specified content type.
- [urlsForApplications(withBundleIdentifier:)](urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [isFilePackage(atPath:)](isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile(\_:application:type:)](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.

# getFileSystemInfoForPath:isRemovable:isWritable:isUnmountable:description:type: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns information about the file system at the specified path.

## Declaration

```objectivec
- (BOOL) getFileSystemInfoForPath:(NSString *) fullPath isRemovable:(BOOL *) removableFlag isWritable:(BOOL *) writableFlag isUnmountable:(BOOL *) unmountableFlag description:(NSString **) description type:(NSString **) fileSystemType;
```

## Parameters

- `fullPath`: The path to the file system mount point.
- `removableFlag`: On input, a Boolean variable; on return, this variable contains [true](https://developer.apple.com/documentation/swift/true) if the file system is on removable media.
- `writableFlag`: On input, a Boolean variable; on return, this variable contains [true](https://developer.apple.com/documentation/swift/true) if the file system writable.
- `unmountableFlag`: On input, a Boolean variable; on return, this variable contains [true](https://developer.apple.com/documentation/swift/true) if the file system is unmountable.
- `description`: On input, a pointer to a string object variable; on return, if the method was successful, this variable contains a string object that describes the file system. You should not rely on this description for program logic but can use it in message strings. Values can include  “hard,” “nfs,” and “foreign.”
- `fileSystemType`: On input, a pointer to a string object variable; on return, if the method was successful, this variable contains the file system type. Values can include “HFS,” “UFS,” or other values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the information was returned; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

## See Also

### Requesting Information

- [URLForApplicationToOpenURL:](urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [URLForApplicationToOpenContentType:](urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [URLForApplicationWithBundleIdentifier:](urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [URLsForApplicationsToOpenURL:](urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [URLsForApplicationsToOpenContentType:](urlsforapplications%28toopen_%29-60rkm.md): Returns an array of URLs to all available applications that can open the specified content type.
- [URLsForApplicationsWithBundleIdentifier:](urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [isFilePackageAtPath:](isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile:application:type:](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.
