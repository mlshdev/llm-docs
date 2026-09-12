> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfftpresourcesize](https://developer.apple.com/documentation/cfnetwork/kcfftpresourcesize)

# kCFFTPResourceSize (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

CFDictionary key for getting the CFNumber containing the size in bytes of the FTP resource.

> Use NSURLSessionAPI for ftp requests

## Declaration

```swift
let kCFFTPResourceSize: CFString
```

## See Also

### FTP

- [CFFTPCreateParsedResourceListing(\_:\_:\_:\_:)](cfftpcreateparsedresourcelisting%28________%29.md): Deprecated. Parses an FTP listing to a dictionary.
- [kCFFTPResourceGroup](kcfftpresourcegroup.md): Deprecated. CFDictionary key for getting the CFString containing the name of a group that shares the FTP resource.
- [kCFFTPResourceLink](kcfftpresourcelink.md): Deprecated. CFDictionary key for getting the CFString containing the symbolic link information. If the item is a symbolic link, the CFString contains the path to the item that the link references.
- [kCFFTPResourceModDate](kcfftpresourcemoddate.md): Deprecated. CFDictionary key for getting the CFDate containing the last date and time the FTP resource was modified.
- [kCFFTPResourceMode](kcfftpresourcemode.md): Deprecated. CFDictionary key for getting the CFNumber containing the access permissions, defined in `sys/types.h`, of the FTP resource.
- [kCFFTPResourceName](kcfftpresourcename.md): Deprecated. CFDictionary key for getting the CFString containing the name of the FTP resource.
- [kCFFTPResourceOwner](kcfftpresourceowner.md): Deprecated. CFDictionary key for getting the CFString containing the name of the owner of the FTP resource.
- [kCFFTPResourceType](kcfftpresourcetype.md): Deprecated. CFDictionary key for getting the CFNumber containing the type of the FTP resource as defined in `sys/dirent.h`.

# kCFFTPResourceSize (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

CFDictionary key for getting the CFNumber containing the size in bytes of the FTP resource.

> Use NSURLSessionAPI for ftp requests

## Declaration

```objectivec
extern CFStringRef const kCFFTPResourceSize;
```

## See Also

### FTP

- [CFFTPCreateParsedResourceListing](cfftpcreateparsedresourcelisting%28________%29.md): Deprecated. Parses an FTP listing to a dictionary.
- [kCFFTPResourceGroup](kcfftpresourcegroup.md): Deprecated. CFDictionary key for getting the CFString containing the name of a group that shares the FTP resource.
- [kCFFTPResourceLink](kcfftpresourcelink.md): Deprecated. CFDictionary key for getting the CFString containing the symbolic link information. If the item is a symbolic link, the CFString contains the path to the item that the link references.
- [kCFFTPResourceModDate](kcfftpresourcemoddate.md): Deprecated. CFDictionary key for getting the CFDate containing the last date and time the FTP resource was modified.
- [kCFFTPResourceMode](kcfftpresourcemode.md): Deprecated. CFDictionary key for getting the CFNumber containing the access permissions, defined in `sys/types.h`, of the FTP resource.
- [kCFFTPResourceName](kcfftpresourcename.md): Deprecated. CFDictionary key for getting the CFString containing the name of the FTP resource.
- [kCFFTPResourceOwner](kcfftpresourceowner.md): Deprecated. CFDictionary key for getting the CFString containing the name of the owner of the FTP resource.
- [kCFFTPResourceType](kcfftpresourcetype.md): Deprecated. CFDictionary key for getting the CFNumber containing the type of the FTP resource as defined in `sys/dirent.h`.
