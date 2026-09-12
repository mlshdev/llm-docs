> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/urlsforapplications(toopen:)-60rkm](https://developer.apple.com/documentation/appkit/nsworkspace/urlsforapplications(toopen:)-60rkm)

# urlsForApplications(toOpen:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an array of URLs to all available applications that can open the specified content type.

## Declaration

```swift
func urlsForApplications(toOpen contentType: UTType) -> [URL]
```

## Parameters

- `contentType`: The content type to open.

<a id="return-value"></a>

## Return Value

An array of URLs to available apps that can open the specified `contentType`. Returns an empty array if no app can open the content type.

<a id="Discussion"></a>

## Discussion

The system sorts the resulting array according to each app’s suitability to open the `contentType`. The returned array lists the best match first.

## See Also

### Requesting Information

- [urlForApplication(toOpen:)](urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [urlForApplication(toOpen:)](urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [urlForApplication(withBundleIdentifier:)](urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [urlsForApplications(toOpen:)](urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [urlsForApplications(withBundleIdentifier:)](urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [getFileSystemInfo(forPath:isRemovable:isWritable:isUnmountable:description:type:)](getfilesysteminfo%28forpath_isremovable_iswritable_isunmountable_description_type_%29.md): Returns information about the file system at the specified path.
- [isFilePackage(atPath:)](isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile(\_:application:type:)](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.

# URLsForApplicationsToOpenContentType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an array of URLs to all available applications that can open the specified content type.

## Declaration

```objectivec
- (NSArray<NSURL *> *) URLsForApplicationsToOpenContentType:(UTType *) contentType;
```

## Parameters

- `contentType`: The content type to open.

<a id="return-value"></a>

## Return Value

An array of URLs to available apps that can open the specified `contentType`. Returns an empty array if no app can open the content type.

<a id="Discussion"></a>

## Discussion

The system sorts the resulting array according to each app’s suitability to open the `contentType`. The returned array lists the best match first.

## See Also

### Requesting Information

- [URLForApplicationToOpenURL:](urlforapplication%28toopen_%29-7qkzf.md): Returns the URL to the default app to open the specified URL.
- [URLForApplicationToOpenContentType:](urlforapplication%28toopen_%29-95cvp.md): Returns the URL to the default app to open the specified content type.
- [URLForApplicationWithBundleIdentifier:](urlforapplication%28withbundleidentifier_%29.md): Returns the URL to the default app with the specified bundle identifier.
- [URLsForApplicationsToOpenURL:](urlsforapplications%28toopen_%29-ualk.md): Returns an array of URLs to all available applications that can open the URL.
- [URLsForApplicationsWithBundleIdentifier:](urlsforapplications%28withbundleidentifier_%29.md): Returns an array of URLs to all available applications that can open the specified bundle identifier.
- [getFileSystemInfoForPath:isRemovable:isWritable:isUnmountable:description:type:](getfilesysteminfo%28forpath_isremovable_iswritable_isunmountable_description_type_%29.md): Returns information about the file system at the specified path.
- [isFilePackageAtPath:](isfilepackage%28atpath_%29.md): Determines whether the specified path is a file package.
- [frontmostApplication](frontmostapplication.md): Returns the frontmost app, which is the app that receives key events.
- [runningApplications](runningapplications.md): Returns an array of running apps.
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile:application:type:](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.
