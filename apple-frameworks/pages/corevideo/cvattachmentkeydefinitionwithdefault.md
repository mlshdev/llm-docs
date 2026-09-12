> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentkeydefinitionwithdefault](https://developer.apple.com/documentation/corevideo/cvattachmentkeydefinitionwithdefault)

# CVAttachmentKeyDefinitionWithDefault

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Associates a raw attachment key with a default value and preferred propagation mode.

## Declaration

```swift
struct CVAttachmentKeyDefinitionWithDefault<ModePreference, Value> where ModePreference : CVAttachmentModePreference, Value : CVAttachmentValueRepresentable, Value : Equatable, Value : Sendable
```

## Topics

### Initializers

- [init(\_:default:)](cvattachmentkeydefinitionwithdefault/init%28__default_%29.md)

### Instance Properties

- [defaultValue](cvattachmentkeydefinitionwithdefault/defaultvalue.md)
- [rawValue](cvattachmentkeydefinitionwithdefault/rawvalue.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attachment system (Swift)

- [CVAttachmentAccess](cvattachmentaccess.md): Provides access to the attachments of a buffer.
- [CVAttachmentContainer](cvattachmentcontainer.md): Provides storage for buffer attachments independent of the buffer lifetime
- [CVAttachmentRawValue](cvattachmentrawvalue.md): A lightweight wrapper around raw attachment values.
- [CVAttachmentKeyDefinition](cvattachmentkeydefinition.md): Associates a raw attachment key with a value type and preferred propagation mode.
- [CVAttachmentCompositeKeyDefinition](cvattachmentcompositekeydefinition.md): Associates a set of raw attachment keys with a value type and preferred propagation mode.
- [CVAttachmentModePreferenceShouldPropagate](cvattachmentmodepreferenceshouldpropagate.md): Sets preferred mode for attachment to should propagate
- [CVAttachmentModePreferenceShouldNotPropagate](cvattachmentmodepreferenceshouldnotpropagate.md): Sets preferred mode for attachment to should not propagate
