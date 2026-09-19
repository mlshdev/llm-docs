> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/fileflags/nodump

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
