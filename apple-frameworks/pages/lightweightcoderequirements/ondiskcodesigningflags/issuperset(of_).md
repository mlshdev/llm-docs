> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/ondiskcodesigningflags/issuperset(of:)](https://developer.apple.com/documentation/lightweightcoderequirements/ondiskcodesigningflags/issuperset(of:))

# isSuperset(of:)

**Framework:** LightweightCodeRequirements  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Matches when the code signing flags on the file/slice are a superset of the specified flags.

## Declaration

```swift
static func isSuperset(of: OnDiskCodeSigningFlags.DataType) -> OnDiskCodeSigningFlags.OutType
```
