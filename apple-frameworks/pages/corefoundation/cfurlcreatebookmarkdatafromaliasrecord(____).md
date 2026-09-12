> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcreatebookmarkdatafromaliasrecord(_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcreatebookmarkdatafromaliasrecord(_:_:))

# CFURLCreateBookmarkDataFromAliasRecord(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 11.0)

Initializes and returns bookmark data derived from an alias record.

> The Carbon Alias Manager is deprecated. This function should only be used to convert Carbon AliasRecords to bookmark data.

## Declaration

```swift
func CFURLCreateBookmarkDataFromAliasRecord(_ allocatorRef: CFAllocator!, _ aliasRecordDataRef: CFData!) -> Unmanaged<CFData>!
```

## Parameters

- `allocatorRef`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `aliasRecordDataRef`: The alias record.

<a id="return-value"></a>

## Return Value

The bookmark data for the alias record.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromFile(\_:\_:\_:)](cfurlcreatebookmarkdatafromfile%28______%29.md): Initializes and returns bookmark data derived from a file pointed to by a specified URL.
- [CFURLWriteBookmarkDataToFile(\_:\_:\_:\_:)](cfurlwritebookmarkdatatofile%28________%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [CFURLStartAccessingSecurityScopedResource(\_:)](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [CFURLStopAccessingSecurityScopedResource(\_:)](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.

# CFURLCreateBookmarkDataFromAliasRecord (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 11.0)

Initializes and returns bookmark data derived from an alias record.

> The Carbon Alias Manager is deprecated. This function should only be used to convert Carbon AliasRecords to bookmark data.

## Declaration

```objectivec
extern CFDataRefCFURLCreateBookmarkDataFromAliasRecord(CFAllocatorRef allocatorRef, CFDataRef aliasRecordDataRef);
```

## Parameters

- `allocatorRef`: The allocator to use to allocate memory for the new `CFURL` object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `aliasRecordDataRef`: The alias record.

<a id="return-value"></a>

## Return Value

The bookmark data for the alias record.

## See Also

### Working with Bookmark Data

- [CFURLCreateBookmarkData](cfurlcreatebookmarkdata%28____________%29.md): Returns bookmark data for a URL, created with specified options and resource values.
- [CFURLCreateBookmarkDataFromFile](cfurlcreatebookmarkdatafromfile%28______%29.md): Initializes and returns bookmark data derived from a file pointed to by a specified URL.
- [CFURLWriteBookmarkDataToFile](cfurlwritebookmarkdatatofile%28________%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [CFURLStartAccessingSecurityScopedResource](cfurlstartaccessingsecurityscopedresource%28__%29.md): In an app that has adopted App Sandbox, makes the resource pointed to by a security-scoped URL available to the app.
- [CFURLStopAccessingSecurityScopedResource](cfurlstopaccessingsecurityscopedresource%28__%29.md): In an app that adopts App Sandbox, revokes access to the resource pointed to by a security-scoped URL.
