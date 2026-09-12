> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentrawvalue](https://developer.apple.com/documentation/corevideo/cvattachmentrawvalue)

# CVAttachmentRawValue

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A lightweight wrapper around raw attachment values.

## Declaration

```swift
struct CVAttachmentRawValue
```

<a id="overview"></a>

## Overview

This type encapsulates a raw attachment value and provides dictionary-like access to its content. The `subscript(key:)-(String)` allows access to internal values in a type safe way.

## Topics

### Initializers

- [init()](cvattachmentrawvalue/init%28%29.md): Creates an empty raw attachment value.
- [init(dictionaryLiteral:)](cvattachmentrawvalue/init%28dictionaryliteral_%29.md): Creates raw attachment value from dictionary literal.

### Subscripts

- [subscript(\_:as:)](cvattachmentrawvalue/subscript%28__as_%29.md): Get or set value associated with the specified key.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)

## See Also

### Attachment system (Swift)

- [CVAttachmentAccess](cvattachmentaccess.md): Provides access to the attachments of a buffer.
- [CVAttachmentContainer](cvattachmentcontainer.md): Provides storage for buffer attachments independent of the buffer lifetime
- [CVAttachmentKeyDefinition](cvattachmentkeydefinition.md): Associates a raw attachment key with a value type and preferred propagation mode.
- [CVAttachmentKeyDefinitionWithDefault](cvattachmentkeydefinitionwithdefault.md): Associates a raw attachment key with a default value and preferred propagation mode.
- [CVAttachmentCompositeKeyDefinition](cvattachmentcompositekeydefinition.md): Associates a set of raw attachment keys with a value type and preferred propagation mode.
- [CVAttachmentModePreferenceShouldPropagate](cvattachmentmodepreferenceshouldpropagate.md): Sets preferred mode for attachment to should propagate
- [CVAttachmentModePreferenceShouldNotPropagate](cvattachmentmodepreferenceshouldnotpropagate.md): Sets preferred mode for attachment to should not propagate
