> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentcontainer](https://developer.apple.com/documentation/corevideo/cvattachmentcontainer)

# CVAttachmentContainer

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Provides storage for buffer attachments independent of the buffer lifetime

## Declaration

```swift
@dynamicMemberLookup struct CVAttachmentContainer<Keys> where Keys : CVAttachmentKeyDefinitions
```

<a id="overview"></a>

## Overview

This object can be used to hold a copy of all buffer attachments. The attachment values can be accessed as properties of this object similar to [CVAttachmentAccess](cvattachmentaccess.md).

## Topics

### Initializers

- [init(propagated:nonPropagated:)](cvattachmentcontainer/init%28propagated_nonpropagated_%29.md)

### Instance Methods

- [attachedMode(of:)](cvattachmentcontainer/attachedmode%28of_%29-4qvrl.md): Returns the propagation mode of a stored attachment you identify with a key path to a key definition, without retrieving the value.
- [attachedMode(of:)](cvattachmentcontainer/attachedmode%28of_%29-7vger.md): Returns the propagation mode of a stored attachment you identify with a key path to a key definition that supplies a default, without retrieving it.
- [attachedMode(of:)](cvattachmentcontainer/attachedmode%28of_%29-p6ms.md): Returns the propagation mode of a stored attachment you identify by its raw key string, without retrieving the value.
- [removeAll()](cvattachmentcontainer/removeall%28%29.md): Removes all attachments.
- [update(from:)](cvattachmentcontainer/update%28from_%29.md): Updates propagated and non-propagated attachment values using the provided container.

### Subscripts

- [subscript(\_:as:)](cvattachmentcontainer/subscript%28__as_%29.md): Get or set attachment value associated with a string key
- [subscript(dynamicMember:)](cvattachmentcontainer/subscript%28dynamicmember_%29-3qlmo.md): Get or set attachment value as a property of this object.
- [subscript(dynamicMember:)](cvattachmentcontainer/subscript%28dynamicmember_%29-8zxr1.md): Get or set attachment value as a property of this object with default value.
- [subscript(dynamicMember:)](cvattachmentcontainer/subscript%28dynamicmember_%29-fjtq.md): Get or set composite attachment value as a property of this object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attachment system (Swift)

- [CVAttachmentAccess](cvattachmentaccess.md): Provides access to the attachments of a buffer.
- [CVAttachmentRawValue](cvattachmentrawvalue.md): A lightweight wrapper around raw attachment values.
- [CVAttachmentKeyDefinition](cvattachmentkeydefinition.md): Associates a raw attachment key with a value type and preferred propagation mode.
- [CVAttachmentKeyDefinitionWithDefault](cvattachmentkeydefinitionwithdefault.md): Associates a raw attachment key with a default value and preferred propagation mode.
- [CVAttachmentCompositeKeyDefinition](cvattachmentcompositekeydefinition.md): Associates a set of raw attachment keys with a value type and preferred propagation mode.
- [CVAttachmentModePreferenceShouldPropagate](cvattachmentmodepreferenceshouldpropagate.md): Sets preferred mode for attachment to should propagate
- [CVAttachmentModePreferenceShouldNotPropagate](cvattachmentmodepreferenceshouldnotpropagate.md): Sets preferred mode for attachment to should not propagate
