> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/changelist/entry](https://developer.apple.com/documentation/usdkit/usdlayer/changelist/entry)

# USDLayer.ChangeList.Entry

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A single change entry describing modifications at a path.

## Declaration

```swift
struct Entry
```

## Topics

### Structures

- [USDLayer.ChangeList.Entry.Flags](entry/flags-swift.struct.md): Boolean flags describing structural changes to a spec.
- [USDLayer.ChangeList.Entry.InfoChange](entry/infochange.md): Old and new values for a changed info field.

### Instance Properties

- [flags](entry/flags-swift.property.md): Structural change flags for this entry.
- [infoChanged](entry/infochanged.md): Info field changes, keyed by field name. Each `InfoChange` contains the old and new values.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
