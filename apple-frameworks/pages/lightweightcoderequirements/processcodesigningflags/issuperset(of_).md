> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processcodesigningflags/issuperset(of:)](https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags/issuperset(of:))

# isSuperset(of:)

**Framework:** LightweightCodeRequirements  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Matches when the code signing flags on the process are a superset of the specified flags.

## Declaration

```swift
static func isSuperset(of: ProcessCodeSigningFlags.DataType) -> ProcessCodeSigningFlags.OutType
```
