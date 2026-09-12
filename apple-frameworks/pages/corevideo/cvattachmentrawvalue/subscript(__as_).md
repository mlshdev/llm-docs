> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentrawvalue/subscript(_:as:)](https://developer.apple.com/documentation/corevideo/cvattachmentrawvalue/subscript(_:as:))

# subscript(\_:as:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set value associated with the specified key.

## Declaration

```swift
subscript<Value>(key: String, as type: Value.Type = Value.self) -> Value? where Value : CVAttachmentValueRepresentable { get set }
```
