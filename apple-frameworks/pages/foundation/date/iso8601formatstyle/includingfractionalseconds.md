> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/iso8601formatstyle/includingfractionalseconds](https://developer.apple.com/documentation/foundation/date/iso8601formatstyle/includingfractionalseconds)

# includingFractionalSeconds

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

If set, the style includes fractional seconds when formatting. Before Swift 6.2, if true when parsing, fractional seconds must be present. If false when parsing, fractional seconds must not be present. After Swift 6.2, fractional seconds may be present in the String regardless of the setting of this property.

## Declaration

```swift
var includingFractionalSeconds: Bool { get }
```
