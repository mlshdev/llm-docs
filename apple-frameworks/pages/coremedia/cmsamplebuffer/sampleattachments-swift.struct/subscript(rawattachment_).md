> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/subscript(rawattachment:)

# subscript(rawAttachment:)

**Framework:** Core Media  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Get or set a custom attachment value. The value must be a plist type.

## Declaration

```swift
subscript(rawAttachment key: String) -> (any Sendable)? { get set }
```
