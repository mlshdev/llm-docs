> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlstartaccessingsecurityscopedresource(_:)](https://developer.apple.com/documentation/corefoundation/cfurlstartaccessingsecurityscopedresource(_:))

# CFURLStartAccessingSecurityScopedResource(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.

## Declaration

```swift
func CFURLStartAccessingSecurityScopedResource(_ url: CFURL!) -> Bool
```

## Parameters

- `url`: The security-scoped URL that points to the file-system resource you want to access.

<a id="return-value"></a>

## Return Value

`true` if the request to access the resource succeeded; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

When you obtain a security-scoped URL, such as by resolving a security-scoped bookmark, you cannot immediately use the resource it points to. To make the resource available to your app, by way of adding its location to your app’s sandbox, call this function (or its Cocoa equivalent, [startAccessingSecurityScopedResource()](../foundation/nsurl/startaccessingsecurityscopedresource%28%29.md)) on the security-scoped URL.

Calls to the [CFURLStartAccessingSecurityScopedResource(\_:)](cfurlstartaccessingsecurityscopedresource%28__%29.md) function (or its Cocoa equivalent) are nestable on a per-process basis. This means that if your app calls the `start` method on a URL twice, to fully relinquish access to the referenced resource you must call the corresponding `stop` method twice.

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
- [CFURLStopAccessingSecurityScopedResource(\_:)](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.

# CFURLStartAccessingSecurityScopedResource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.

## Declaration

```objectivec
extern Boolean CFURLStartAccessingSecurityScopedResource(CFURLRef url);
```

## Parameters

- `url`: The security-scoped URL that points to the file-system resource you want to access.

<a id="return-value"></a>

## Return Value

`true` if the request to access the resource succeeded; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

When you obtain a security-scoped URL, such as by resolving a security-scoped bookmark, you cannot immediately use the resource it points to. To make the resource available to your app, by way of adding its location to your app’s sandbox, call this function (or its Cocoa equivalent, [startAccessingSecurityScopedResource](../foundation/nsurl/startaccessingsecurityscopedresource%28%29.md)) on the security-scoped URL.

Calls to the [CFURLStartAccessingSecurityScopedResource](cfurlstartaccessingsecurityscopedresource%28__%29.md) function (or its Cocoa equivalent) are nestable on a per-process basis. This means that if your app calls the `start` method on a URL twice, to fully relinquish access to the referenced resource you must call the corresponding `stop` method twice.

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
- [CFURLStopAccessingSecurityScopedResource](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
