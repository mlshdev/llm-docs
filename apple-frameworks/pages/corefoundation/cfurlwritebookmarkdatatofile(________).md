> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlwritebookmarkdatatofile(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlwritebookmarkdatatofile(_:_:_:_:))

# CFURLWriteBookmarkDataToFile(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an alias file on disk at a specified location with specified bookmark data.

## Declaration

```swift
func CFURLWriteBookmarkDataToFile(_ bookmarkRef: CFData!, _ fileURL: CFURL!, _ options: CFURLBookmarkFileCreationOptions, _ errorRef: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `bookmarkRef`: The bookmark data containing information for the alias file.
- `fileURL`: The desired location of the alias file.
- `options`: Options taken into account when creating the alias file.
- `errorRef`: The error that occurred in the case that the alias file cannot be created.

<a id="return-value"></a>

## Return Value

`true` if the alias file is successfully created; otherwise, `false`.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromAliasRecord(\_:\_:)](cfurlcreatebookmarkdatafromaliasrecord%28____%29.md): Deprecated. Initializes and returns bookmark data derived from an alias record.
- [CFURLCreateBookmarkDataFromFile(\_:\_:\_:)](cfurlcreatebookmarkdatafromfile%28______%29.md): Initializes and returns bookmark data derived from a file pointed to by a specified URL.
- [CFURLStartAccessingSecurityScopedResource(\_:)](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [CFURLStopAccessingSecurityScopedResource(\_:)](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.

# CFURLWriteBookmarkDataToFile (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an alias file on disk at a specified location with specified bookmark data.

## Declaration

```objectivec
extern Boolean CFURLWriteBookmarkDataToFile(CFDataRef bookmarkRef, CFURLRef fileURL, CFURLBookmarkFileCreationOptions options, CFErrorRef*errorRef);
```

## Parameters

- `bookmarkRef`: The bookmark data containing information for the alias file.
- `fileURL`: The desired location of the alias file.
- `options`: Options taken into account when creating the alias file.
- `errorRef`: The error that occurred in the case that the alias file cannot be created.

<a id="return-value"></a>

## Return Value

`true` if the alias file is successfully created; otherwise, `false`.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromAliasRecord](cfurlcreatebookmarkdatafromaliasrecord%28____%29.md): Deprecated. Initializes and returns bookmark data derived from an alias record.
- [CFURLCreateBookmarkDataFromFile](cfurlcreatebookmarkdatafromfile%28______%29.md): Initializes and returns bookmark data derived from a file pointed to by a specified URL.
- [CFURLStartAccessingSecurityScopedResource](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [CFURLStopAccessingSecurityScopedResource](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
