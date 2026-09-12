> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfurlisaliasfilekey](https://developer.apple.com/documentation/corefoundation/kcfurlisaliasfilekey)

# kCFURLIsAliasFileKey (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key for determining whether the file is an alias, returned as a `CFBoolean` object.

## Declaration

```swift
let kCFURLIsAliasFileKey: CFString!
```

## See Also

### Constants

- [kCFURLFileAllocatedSizeKey](kcfurlfileallocatedsizekey.md): Key for the total size allocated on disk for the file, returned as an `CFNumber` object.
- [kCFURLFileSizeKey](kcfurlfilesizekey.md): Key for the file’s size in bytes, returned as a `CFNumber` object.
- [kCFURLIsMountTriggerKey](kcfurlismounttriggerkey.md): Key for determining whether the URL is a file system trigger directory, returned as a `CFBoolean` object. Traversing or opening a file system trigger directory causes an attempt to mount a file system on the directory.
- [kCFURLTotalFileAllocatedSizeKey](kcfurltotalfileallocatedsizekey.md): Key for the total allocated size of the file in bytes, returned as a `CFNumber` object. This includes the size of any file metadata.
- [kCFURLTotalFileSizeKey](kcfurltotalfilesizekey.md): Key for the total displayable size of the file in bytes, returned as a `CFNumber` object. This includes the size of any file metadata.

# kCFURLIsAliasFileKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key for determining whether the file is an alias, returned as a `CFBoolean` object.

## Declaration

```objectivec
extern CFStringRef const kCFURLIsAliasFileKey;
```

## See Also

### Constants

- [kCFURLFileAllocatedSizeKey](kcfurlfileallocatedsizekey.md): Key for the total size allocated on disk for the file, returned as an `CFNumber` object.
- [kCFURLFileSizeKey](kcfurlfilesizekey.md): Key for the file’s size in bytes, returned as a `CFNumber` object.
- [kCFURLIsMountTriggerKey](kcfurlismounttriggerkey.md): Key for determining whether the URL is a file system trigger directory, returned as a `CFBoolean` object. Traversing or opening a file system trigger directory causes an attempt to mount a file system on the directory.
- [kCFURLTotalFileAllocatedSizeKey](kcfurltotalfileallocatedsizekey.md): Key for the total allocated size of the file in bytes, returned as a `CFNumber` object. This includes the size of any file metadata.
- [kCFURLTotalFileSizeKey](kcfurltotalfilesizekey.md): Key for the total displayable size of the file in bytes, returned as a `CFNumber` object. This includes the size of any file metadata.
