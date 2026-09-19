> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/changelist/entry/infochange

# USDLayer.ChangeList.Entry.InfoChange

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Old and new values for a changed info field.

## Declaration

```swift
struct InfoChange
```

## Topics

### Instance Properties

- [newValue](infochange/newvalue.md): The value after the change, or `nil` if the field was removed.
- [oldValue](infochange/oldvalue.md): The value before the change, or `nil` if the field was added.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
