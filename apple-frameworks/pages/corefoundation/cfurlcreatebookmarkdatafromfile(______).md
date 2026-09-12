> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatebookmarkdatafromfile(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatebookmarkdatafromfile(_:_:_:))

# CFURLCreateBookmarkDataFromFile(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns bookmark data derived from a file pointed to by a specified URL.

## Declaration

```swift
func CFURLCreateBookmarkDataFromFile(_ allocator: CFAllocator!, _ fileURL: CFURL!, _ errorRef: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<CFData>!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fileURL`: The file URL.
- `errorRef`: The error that occurred in the case that the bookmark data cannot be created.

<a id="return-value"></a>

## Return Value

The bookmark data for the file, or `NULL` if an error occurs.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromAliasRecord(\_:\_:)](cfurlcreatebookmarkdatafromaliasrecord%28____%29.md): Deprecated. Initializes and returns bookmark data derived from an alias record.
- [CFURLWriteBookmarkDataToFile(\_:\_:\_:\_:)](cfurlwritebookmarkdatatofile%28________%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [CFURLStartAccessingSecurityScopedResource(\_:)](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [CFURLStopAccessingSecurityScopedResource(\_:)](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.

# CFURLCreateBookmarkDataFromFile (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns bookmark data derived from a file pointed to by a specified URL.

## Declaration

```objectivec
extern CFDataRefCFURLCreateBookmarkDataFromFile(CFAllocatorRef allocator, CFURLRef fileURL, CFErrorRef*errorRef);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fileURL`: The file URL.
- `errorRef`: The error that occurred in the case that the bookmark data cannot be created.

<a id="return-value"></a>

## Return Value

The bookmark data for the file, or `NULL` if an error occurs.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromAliasRecord](cfurlcreatebookmarkdatafromaliasrecord%28____%29.md): Deprecated. Initializes and returns bookmark data derived from an alias record.
- [CFURLWriteBookmarkDataToFile](cfurlwritebookmarkdatatofile%28________%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [CFURLStartAccessingSecurityScopedResource](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [CFURLStopAccessingSecurityScopedResource](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
