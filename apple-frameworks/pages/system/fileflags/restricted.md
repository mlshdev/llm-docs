> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/fileflags/restricted](https://developer.apple.com/documentation/system/fileflags/restricted)

# restricted

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File requires an entitlement for writing.

## Declaration

```swift
static var restricted: FileFlags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `SF_RESTRICTED`.

> **Note**

> This flag may only be changed by the superuser.
