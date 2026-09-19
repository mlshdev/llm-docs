> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvattachmentrawvalue/subscript(_:as:)

# subscript(\_:as:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set value associated with the specified key.

## Declaration

```swift
subscript<Value>(key: String, as type: Value.Type = Value.self) -> Value? where Value : CVAttachmentValueRepresentable { get set }
```
