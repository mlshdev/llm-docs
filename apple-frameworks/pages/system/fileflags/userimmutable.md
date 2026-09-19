> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/fileflags/userimmutable

# userImmutable

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File may not be changed.

## Declaration

```swift
static var userImmutable: FileFlags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `UF_IMMUTABLE`.

> **Note**

> This flag may be changed by the file owner or superuser.
