> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvproresrawmetadata/extensions](https://developer.apple.com/documentation/corevideo/cvproresrawmetadata/extensions)

# extensions

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

ProRes RAW metadata extensions. This Data contains a big-endian UInt32 representing the size of the item in bytes followed by a 4-character code (‘psim’) followed by a variable-length pascal string identifying the metadata (like a key string) followed by the metadata payload.

## Declaration

```swift
var extensions: Data?
```
