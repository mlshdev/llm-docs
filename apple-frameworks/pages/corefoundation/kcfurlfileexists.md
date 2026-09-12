> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfurlfileexists](https://developer.apple.com/documentation/corefoundation/kcfurlfileexists)

# kCFURLFileExists (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A `CFBoolean` object indicating whether the file referred to by a URL exists.

> Use CFURLResourceIsReachable instead.

## Declaration

```swift
let kCFURLFileExists: CFString!
```

## See Also

### Constants

- [kCFURLFileDirectoryContents](kcfurlfiledirectorycontents.md): Deprecated. A `CFArray` object holding `CFURL` objects for the contents of a directory referred to by a URL.
- [kCFURLFileLength](kcfurlfilelength.md): Deprecated. A `CFNumber` object holding the file’s length in bytes.
- [kCFURLFileLastModificationTime](kcfurlfilelastmodificationtime.md): Deprecated. A `CFDate` object holding the file’s modification time.
- [kCFURLFilePOSIXMode](kcfurlfileposixmode.md): Deprecated. A `CFNumber` holding the file’s POSIX mode as given in `/usr/include/sys/stat.h`.
- [kCFURLFileOwnerID](kcfurlfileownerid.md): Deprecated. A `CFNumber` holding the file owner’s UID.

# kCFURLFileExists (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A `CFBoolean` object indicating whether the file referred to by a URL exists.

> Use CFURLResourceIsReachable instead.

## Declaration

```objectivec
extern CFStringRef const kCFURLFileExists;
```

## See Also

### Constants

- [kCFURLFileDirectoryContents](kcfurlfiledirectorycontents.md): Deprecated. A `CFArray` object holding `CFURL` objects for the contents of a directory referred to by a URL.
- [kCFURLFileLength](kcfurlfilelength.md): Deprecated. A `CFNumber` object holding the file’s length in bytes.
- [kCFURLFileLastModificationTime](kcfurlfilelastmodificationtime.md): Deprecated. A `CFDate` object holding the file’s modification time.
- [kCFURLFilePOSIXMode](kcfurlfileposixmode.md): Deprecated. A `CFNumber` holding the file’s POSIX mode as given in `/usr/include/sys/stat.h`.
- [kCFURLFileOwnerID](kcfurlfileownerid.md): Deprecated. A `CFNumber` holding the file owner’s UID.
