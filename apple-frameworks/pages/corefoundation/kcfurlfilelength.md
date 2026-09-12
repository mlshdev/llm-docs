> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfurlfilelength](https://developer.apple.com/documentation/corefoundation/kcfurlfilelength)

# kCFURLFileLength (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A `CFNumber` object holding the file’s length in bytes.

> Use CFURLCopyResourcePropertyForKey with kCFURLFileSizeKey instead.

## Declaration

```swift
let kCFURLFileLength: CFString!
```

## See Also

### Constants

- [kCFURLFileExists](kcfurlfileexists.md): Deprecated. A `CFBoolean` object indicating whether the file referred to by a URL exists.
- [kCFURLFileDirectoryContents](kcfurlfiledirectorycontents.md): Deprecated. A `CFArray` object holding `CFURL` objects for the contents of a directory referred to by a URL.
- [kCFURLFileLastModificationTime](kcfurlfilelastmodificationtime.md): Deprecated. A `CFDate` object holding the file’s modification time.
- [kCFURLFilePOSIXMode](kcfurlfileposixmode.md): Deprecated. A `CFNumber` holding the file’s POSIX mode as given in `/usr/include/sys/stat.h`.
- [kCFURLFileOwnerID](kcfurlfileownerid.md): Deprecated. A `CFNumber` holding the file owner’s UID.

# kCFURLFileLength (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A `CFNumber` object holding the file’s length in bytes.

> Use CFURLCopyResourcePropertyForKey with kCFURLFileSizeKey instead.

## Declaration

```objectivec
extern CFStringRef const kCFURLFileLength;
```

## See Also

### Constants

- [kCFURLFileExists](kcfurlfileexists.md): Deprecated. A `CFBoolean` object indicating whether the file referred to by a URL exists.
- [kCFURLFileDirectoryContents](kcfurlfiledirectorycontents.md): Deprecated. A `CFArray` object holding `CFURL` objects for the contents of a directory referred to by a URL.
- [kCFURLFileLastModificationTime](kcfurlfilelastmodificationtime.md): Deprecated. A `CFDate` object holding the file’s modification time.
- [kCFURLFilePOSIXMode](kcfurlfileposixmode.md): Deprecated. A `CFNumber` holding the file’s POSIX mode as given in `/usr/include/sys/stat.h`.
- [kCFURLFileOwnerID](kcfurlfileownerid.md): Deprecated. A `CFNumber` holding the file owner’s UID.
