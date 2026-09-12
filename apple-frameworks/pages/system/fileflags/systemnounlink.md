> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/fileflags/systemnounlink](https://developer.apple.com/documentation/system/fileflags/systemnounlink)

# systemNoUnlink

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File may not be removed or renamed.

## Declaration

```swift
static var systemNoUnlink: FileFlags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `SF_NOUNLINK`.

> **Note**

> This flag may only be changed by the superuser.
