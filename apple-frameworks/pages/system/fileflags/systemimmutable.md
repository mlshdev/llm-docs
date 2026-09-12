> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/fileflags/systemimmutable](https://developer.apple.com/documentation/system/fileflags/systemimmutable)

# systemImmutable

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File may not be changed.

## Declaration

```swift
static var systemImmutable: FileFlags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `SF_IMMUTABLE`.

> **Note**

> This flag may only be changed by the superuser.
