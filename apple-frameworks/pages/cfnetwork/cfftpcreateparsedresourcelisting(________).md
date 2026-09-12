> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfftpcreateparsedresourcelisting(_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfftpcreateparsedresourcelisting(_:_:_:_:))

# CFFTPCreateParsedResourceListing(\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Parses an FTP listing to a dictionary.

> Use NSURLSessionAPI for ftp requests

## Declaration

```swift
func CFFTPCreateParsedResourceListing(_ alloc: CFAllocator?, _ buffer: UnsafePointer<UInt8>, _ bufferLength: CFIndex, _ parsed: UnsafeMutablePointer<Unmanaged<CFDictionary>?>?) -> CFIndex
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the dictionary. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `buffer`: A pointer to a buffer holding zero or more lines of resource listing.
- `bufferLength`: The length in bytes of the buffer pointed to by `buffer`.
- `parsed`: Upon return, contains a dictionary containing the parsed resource information. If parsing fails, a `NULL` pointer is returned.

<a id="return-value"></a>

## Return Value

The number of bytes parsed, `0` if no bytes were available for parsing, or `-1` if parsing failed.

<a id="Discussion"></a>

## Discussion

This function examines the contents of buffer as an FTP directory listing and parses into a CFDictionary the information for a single file or folder. The CFDictionary is returned in the `parsed` parameter, and the number of bytes used from buffer is returned.

## See Also

### FTP

- [kCFFTPResourceGroup](kcfftpresourcegroup.md): Deprecated. CFDictionary key for getting the CFString containing the name of a group that shares the FTP resource.
- [kCFFTPResourceLink](kcfftpresourcelink.md): Deprecated. CFDictionary key for getting the CFString containing the symbolic link information. If the item is a symbolic link, the CFString contains the path to the item that the link references.
- [kCFFTPResourceModDate](kcfftpresourcemoddate.md): Deprecated. CFDictionary key for getting the CFDate containing the last date and time the FTP resource was modified.
- [kCFFTPResourceMode](kcfftpresourcemode.md): Deprecated. CFDictionary key for getting the CFNumber containing the access permissions, defined in `sys/types.h`, of the FTP resource.
- [kCFFTPResourceName](kcfftpresourcename.md): Deprecated. CFDictionary key for getting the CFString containing the name of the FTP resource.
- [kCFFTPResourceOwner](kcfftpresourceowner.md): Deprecated. CFDictionary key for getting the CFString containing the name of the owner of the FTP resource.
- [kCFFTPResourceSize](kcfftpresourcesize.md): Deprecated. CFDictionary key for getting the CFNumber containing the size in bytes of the FTP resource.
- [kCFFTPResourceType](kcfftpresourcetype.md): Deprecated. CFDictionary key for getting the CFNumber containing the type of the FTP resource as defined in `sys/dirent.h`.

# CFFTPCreateParsedResourceListing (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Parses an FTP listing to a dictionary.

> Use NSURLSessionAPI for ftp requests

## Declaration

```objectivec
extern CFIndex CFFTPCreateParsedResourceListing(CFAllocatorRef alloc, const UInt8 *buffer, CFIndex bufferLength, CFDictionaryRef*parsed);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the dictionary. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `buffer`: A pointer to a buffer holding zero or more lines of resource listing.
- `bufferLength`: The length in bytes of the buffer pointed to by `buffer`.
- `parsed`: Upon return, contains a dictionary containing the parsed resource information. If parsing fails, a `NULL` pointer is returned.

<a id="return-value"></a>

## Return Value

The number of bytes parsed, `0` if no bytes were available for parsing, or `-1` if parsing failed.

<a id="Discussion"></a>

## Discussion

This function examines the contents of buffer as an FTP directory listing and parses into a CFDictionary the information for a single file or folder. The CFDictionary is returned in the `parsed` parameter, and the number of bytes used from buffer is returned.

## See Also

### FTP

- [kCFFTPResourceGroup](kcfftpresourcegroup.md): Deprecated. CFDictionary key for getting the CFString containing the name of a group that shares the FTP resource.
- [kCFFTPResourceLink](kcfftpresourcelink.md): Deprecated. CFDictionary key for getting the CFString containing the symbolic link information. If the item is a symbolic link, the CFString contains the path to the item that the link references.
- [kCFFTPResourceModDate](kcfftpresourcemoddate.md): Deprecated. CFDictionary key for getting the CFDate containing the last date and time the FTP resource was modified.
- [kCFFTPResourceMode](kcfftpresourcemode.md): Deprecated. CFDictionary key for getting the CFNumber containing the access permissions, defined in `sys/types.h`, of the FTP resource.
- [kCFFTPResourceName](kcfftpresourcename.md): Deprecated. CFDictionary key for getting the CFString containing the name of the FTP resource.
- [kCFFTPResourceOwner](kcfftpresourceowner.md): Deprecated. CFDictionary key for getting the CFString containing the name of the owner of the FTP resource.
- [kCFFTPResourceSize](kcfftpresourcesize.md): Deprecated. CFDictionary key for getting the CFNumber containing the size in bytes of the FTP resource.
- [kCFFTPResourceType](kcfftpresourcetype.md): Deprecated. CFDictionary key for getting the CFNumber containing the type of the FTP resource as defined in `sys/dirent.h`.
