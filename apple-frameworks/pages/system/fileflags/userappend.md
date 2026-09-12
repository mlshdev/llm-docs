> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/fileflags/userappend](https://developer.apple.com/documentation/system/fileflags/userappend)

# userAppend

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Writes to the file may only append.

## Declaration

```swift
static var userAppend: FileFlags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `UF_APPEND`.

> **Note**

> This flag may be changed by the file owner or superuser.
