> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvattachmentcontainer/subscript(dynamicmember:)-8zxr1

# subscript(dynamicMember:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set attachment value as a property of this object with default value.

## Declaration

```swift
subscript<ModePreference, Value>(dynamicMember keyPath: KeyPath<Keys.Type, CVAttachmentKeyDefinitionWithDefault<ModePreference, Value>>) -> Value where ModePreference : CVAttachmentModePreference, Value : CVAttachmentValueRepresentable, Value : Equatable, Value : Sendable { get set }
```
