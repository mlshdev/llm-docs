> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamerrordomain/custom](https://developer.apple.com/documentation/corefoundation/cfstreamerrordomain/custom)

# CFStreamErrorDomain.custom (Swift)

**Framework:** Core Foundation  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The error code is a custom error code.

> These constants are returned by [CFReadStreamGetError(\_:)](../cfreadstreamgeterror%28__%29.md) and [CFWriteStreamGetError(\_:)](../cfwritestreamgeterror%28__%29.md); use [CFReadStreamCopyError(\_:)](../cfreadstreamcopyerror%28__%29.md) and [CFWriteStreamCopyError(\_:)](../cfwritestreamcopyerror%28__%29.md) instead.

## Declaration

```swift
case custom
```

## See Also

### Constants

- [CFStreamErrorDomain.POSIX](posix.md): The error code is an error code defined in `errno.h`.
- [CFStreamErrorDomain.macOSStatus](macosstatus.md): The error is an OSStatus value defined in `MacErrors.h`.

# kCFStreamErrorDomainCustom (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The error code is a custom error code.

> These constants are returned by [CFReadStreamGetError](../cfreadstreamgeterror%28__%29.md) and [CFWriteStreamGetError](../cfwritestreamgeterror%28__%29.md); use [CFReadStreamCopyError](../cfreadstreamcopyerror%28__%29.md) and [CFWriteStreamCopyError](../cfwritestreamcopyerror%28__%29.md) instead.

## Declaration

```objectivec
kCFStreamErrorDomainCustom
```

## See Also

### Constants

- [kCFStreamErrorDomainPOSIX](posix.md): The error code is an error code defined in `errno.h`.
- [kCFStreamErrorDomainMacOSStatus](macosstatus.md): The error is an OSStatus value defined in `MacErrors.h`.
