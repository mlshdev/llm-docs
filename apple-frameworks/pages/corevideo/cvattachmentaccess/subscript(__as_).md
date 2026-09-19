> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvattachmentaccess/subscript(_:as:)

# subscript(\_:as:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set attachment value associated with a string key

## Declaration

```swift
subscript<Value>(rawKey: String, as type: Value.Type = Value.self) -> (value: Value, mode: CVAttachmentMode)? where Value : CVAttachmentValueRepresentable { get set }
```
