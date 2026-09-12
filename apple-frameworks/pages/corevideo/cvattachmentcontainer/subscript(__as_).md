> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentcontainer/subscript(_:as:)](https://developer.apple.com/documentation/corevideo/cvattachmentcontainer/subscript(_:as:))

# subscript(\_:as:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set attachment value associated with a string key

## Declaration

```swift
subscript<Value>(rawKey: String, as type: Value.Type = Value.self) -> (value: Value, mode: CVAttachmentMode)? where Value : CVAttachmentValueRepresentable { get set }
```
