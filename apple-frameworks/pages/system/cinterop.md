> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/cinterop](https://developer.apple.com/documentation/system/cinterop)

# CInterop

**Framework:** System  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A namespace for C and platform types

## Declaration

```swift
enum CInterop
```

## Topics

### Type Aliases

- [CInterop.Char](cinterop/char.md): The C `char` type
- [CInterop.DeviceID](cinterop/deviceid.md)
- [CInterop.FileFlags](cinterop/fileflags.md)
- [CInterop.GroupID](cinterop/groupid.md)
- [CInterop.Inode](cinterop/inode.md)
- [CInterop.Mode](cinterop/mode.md)
- [CInterop.PlatformChar](cinterop/platformchar.md): The platform’s preferred character type. On Unix, this is an 8-bit C `char` (which may be signed or unsigned, depending on platform). On Windows, this is `UInt16` (a “wide” character).
- [CInterop.PlatformUnicodeEncoding](cinterop/platformunicodeencoding.md): The platform’s preferred Unicode encoding. On Unix this is UTF-8 and on Windows it is UTF-16. Native strings may contain invalid Unicode, which will be handled by either error-correction or failing, depending on API.
- [CInterop.Stat](cinterop/stat.md): The C `stat` struct.
- [CInterop.UserID](cinterop/userid.md)

### Type Methods

- [stat(\_:\_:)](cinterop/stat%28____%29.md): Calls the C `stat()` function.
