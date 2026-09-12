> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlstopaccessingsecurityscopedresource(_:)](https://developer.apple.com/documentation/corefoundation/cfurlstopaccessingsecurityscopedresource(_:))

# CFURLStopAccessingSecurityScopedResource(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.

## Declaration

```swift
func CFURLStopAccessingSecurityScopedResource(_ url: CFURL!)
```

## Parameters

- `url`: The security-scoped URL that points to the file-system resource you want to stop accessing.

<a id="Discussion"></a>

## Discussion

When you no longer need access to a file or directory pointed to by a security-scoped URL, such as one returned by resolving a security-scoped bookmark, call this function (or its Cocoa equivalent, [stopAccessingSecurityScopedResource()](../foundation/nsurl/stopaccessingsecurityscopedresource%28%29.md)) on the URL.

> **Warning**

>  You must balance every call to the [CFURLStartAccessingSecurityScopedResource(\_:)](cfurlstartaccessingsecurityscopedresource%28__%29.md) method with a corresponding call to the [CFURLStopAccessingSecurityScopedResource(\_:)](cfurlstopaccessingsecurityscopedresource%28__%29.md) method. If you fail to relinquish your access when you no longer need a file-system resource, your app leaks kernel resources. If sufficient kernel resources are leaked, your app loses its ability to add file-system locations to its sandbox, such as via Powerbox or security-scoped bookmarks, until relaunched.

> **Version note**

>  Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromAliasRecord(\_:\_:)](cfurlcreatebookmarkdatafromaliasrecord%28____%29.md): Deprecated. Initializes and returns bookmark data derived from an alias record.
- [CFURLCreateBookmarkDataFromFile(\_:\_:\_:)](cfurlcreatebookmarkdatafromfile%28______%29.md): Initializes and returns bookmark data derived from a file pointed to by a specified URL.
- [CFURLWriteBookmarkDataToFile(\_:\_:\_:\_:)](cfurlwritebookmarkdatatofile%28________%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [CFURLStartAccessingSecurityScopedResource(\_:)](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.

# CFURLStopAccessingSecurityScopedResource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.

## Declaration

```objectivec
extern void CFURLStopAccessingSecurityScopedResource(CFURLRef url);
```

## Parameters

- `url`: The security-scoped URL that points to the file-system resource you want to stop accessing.

<a id="Discussion"></a>

## Discussion

When you no longer need access to a file or directory pointed to by a security-scoped URL, such as one returned by resolving a security-scoped bookmark, call this function (or its Cocoa equivalent, [stopAccessingSecurityScopedResource](../foundation/nsurl/stopaccessingsecurityscopedresource%28%29.md)) on the URL.

> **Warning**

>  You must balance every call to the [CFURLStartAccessingSecurityScopedResource](cfurlstartaccessingsecurityscopedresource%28__%29.md) method with a corresponding call to the [CFURLStopAccessingSecurityScopedResource](cfurlstopaccessingsecurityscopedresource%28__%29.md) method. If you fail to relinquish your access when you no longer need a file-system resource, your app leaks kernel resources. If sufficient kernel resources are leaked, your app loses its ability to add file-system locations to its sandbox, such as via Powerbox or security-scoped bookmarks, until relaunched.

> **Version note**

>  Security-scoped bookmarks are not available in versions of macOS prior to OS X v10.7.3.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromAliasRecord](cfurlcreatebookmarkdatafromaliasrecord%28____%29.md): Deprecated. Initializes and returns bookmark data derived from an alias record.
- [CFURLCreateBookmarkDataFromFile](cfurlcreatebookmarkdatafromfile%28______%29.md): Initializes and returns bookmark data derived from a file pointed to by a specified URL.
- [CFURLWriteBookmarkDataToFile](cfurlwritebookmarkdatatofile%28________%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [CFURLStartAccessingSecurityScopedResource](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
