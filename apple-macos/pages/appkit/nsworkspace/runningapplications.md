> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/runningapplications](https://developer.apple.com/documentation/appkit/nsworkspace/runningapplications)

# runningApplications (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Returns an array of running apps.

## Declaration

```swift
var runningApplications: [NSRunningApplication] { get }
```

<a id="return-value"></a>

## Return Value

An array of  [NSRunningApplication](../nsrunningapplication.md) instances. This value is key-value observing compliant.

<a id="Discussion"></a>

## Discussion

The order of the array is unspecified, but it is stable, meaning that the relative order of particular apps will not change across multiple calls to `runningApplications`. See [NSRunningApplication](../nsrunningapplication.md) for more information on `NSRunningApplication`.

Similar to the [NSRunningApplication](../nsrunningapplication.md) class’s properties, this property will only change when the main run loop runs in a common mode.  Instead of polling, use key-value observing to be notified of changes to this array property.

You can safely call this method from any of your app’s threads. The method returns its value atomically.

## See Also

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
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile(\_:application:type:)](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.

# runningApplications (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Returns an array of running apps.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSRunningApplication *> * runningApplications;
```

<a id="return-value"></a>

## Return Value

An array of  [NSRunningApplication](../nsrunningapplication.md) instances. This value is key-value observing compliant.

<a id="Discussion"></a>

## Discussion

The order of the array is unspecified, but it is stable, meaning that the relative order of particular apps will not change across multiple calls to `runningApplications`. See [NSRunningApplication](../nsrunningapplication.md) for more information on `NSRunningApplication`.

Similar to the [NSRunningApplication](../nsrunningapplication.md) class’s properties, this property will only change when the main run loop runs in a common mode.  Instead of polling, use key-value observing to be notified of changes to this array property.

You can safely call this method from any of your app’s threads. The method returns its value atomically.

## See Also

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
- [menuBarOwningApplication](menubarowningapplication.md): Returns the app that owns the currently displayed menu bar.
- [getInfoForFile:application:type:](getinfoforfile%28__application_type_%29.md): Deprecated. Retrieves information about the specified file.
