> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentcontainer/subscript(dynamicmember:)-fjtq](https://developer.apple.com/documentation/corevideo/cvattachmentcontainer/subscript(dynamicmember:)-fjtq)

# subscript(dynamicMember:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set composite attachment value as a property of this object.

## Declaration

```swift
subscript<ModePreference, Value>(dynamicMember keyPath: KeyPath<Keys.Type, CVAttachmentCompositeKeyDefinition<ModePreference, Value>>) -> Value? where ModePreference : CVAttachmentModePreference, Value : CVAttachmentValueRepresentable { get set }
```
