> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/fileflags/nodump](https://developer.apple.com/documentation/system/fileflags/nodump)

# noDump

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Do not dump the file during backups.

## Declaration

```swift
static var noDump: FileFlags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `UF_NODUMP`.

> **Note**

> This flag may be changed by the file owner or superuser.
