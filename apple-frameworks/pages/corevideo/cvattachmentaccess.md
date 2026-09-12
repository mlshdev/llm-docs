> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentaccess](https://developer.apple.com/documentation/corevideo/cvattachmentaccess)

# CVAttachmentAccess

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Provides access to the attachments of a buffer.

## Declaration

```swift
@dynamicMemberLookup struct CVAttachmentAccess<Keys> where Keys : CVAttachmentKeyDefinitions
```

<a id="overview"></a>

## Overview

Lifetime of an instance of this type is tied to the lifetime of the buffer carrying attachments. The properties of this object are dynamically resolved to the static properties of the `Keys` type.

For example, when custom attachment keys are defined as follows:

```swift
extension CVImageBufferAttachmentKeyDefinitions {
	static var imageBufferName: Key<ShouldPropagate, String> {
		"com.app.imageBufferName"
	}
}
extension CVPixelBufferAttachmentKeyDefinitions {
	static var pixelBufferNumber: Key<ShouldPropagate, Int> {
		"com.app.pixelBufferNumber"
	}
}
```

Both keys can be accessed as a property of an CVAttachmentAccess instance. As CVImageBufferAttachmentKeyDefinitions is the superclass of CVPixelBufferAttachmentKeyDefinitions.

```swift
func inspect(attachments: borrowing CVAttachmentAccess<CVPixelBufferAttachmentKeyDefinitions>) {
	let value1: String? = attachments.imageBufferName
	let value2: Int? = attachments.pixelBufferNumber
}
```

It is also possible to access the keys by directly specifying raw string value:

```swift
let num: Int? = pixelBuffer.attachments["com.app.pixelBufferNumber"]
pixelBuffer.attachments["com.app.pixelBufferNumber"] = (100, .shouldPropagate)

// To set an attachment value by ignoring the preferred mode requires using rawValue of the key
pixelBuffer.attachments[CVPixelBufferAttachmentKeyDefinitions.displayDimensions.rawValue] = (CGSize(width: 600, height: 400), .shouldNotPropagate)
```

## Topics

### Instance Methods

- [attachedMode(of:)](cvattachmentaccess/attachedmode%28of_%29-79dr.md): Returns the propagation mode of an attachment you identify with a key path to a key definition that supplies a default, without retrieving the value.
- [attachedMode(of:)](cvattachmentaccess/attachedmode%28of_%29-9g9h6.md): Returns the propagation mode of an attachment you identify with a key path to a key definition, without retrieving the value.
- [attachedMode(of:)](cvattachmentaccess/attachedmode%28of_%29-m49.md): Returns the propagation mode of an attachment you identify by its raw key string, without retrieving the value.
- [copy()](cvattachmentaccess/copy%28%29.md): Creates a copy all propagated and non-propagated attachments.
- [propagate(from:)](cvattachmentaccess/propagate%28from_%29.md): Copies all propagated attachment values from another buffer.
- [removeAll()](cvattachmentaccess/removeall%28%29.md): Removes all attachments.
- [update(from:)](cvattachmentaccess/update%28from_%29.md): Updates propagated and non-propagated attachment values using the provided container.

### Subscripts

- [subscript(\_:as:)](cvattachmentaccess/subscript%28__as_%29.md): Get or set attachment value associated with a string key
- [subscript(dynamicMember:)](cvattachmentaccess/subscript%28dynamicmember_%29-1ya6s.md): Get or set composite attachment value as a property of this object.
- [subscript(dynamicMember:)](cvattachmentaccess/subscript%28dynamicmember_%29-38ve9.md): Get or set attachment value as a property of this object with default value.
- [subscript(dynamicMember:)](cvattachmentaccess/subscript%28dynamicmember_%29-9egcs.md): Get or set attachment value as a property of this object.

## See Also

### Attachment system (Swift)

- [CVAttachmentContainer](cvattachmentcontainer.md): Provides storage for buffer attachments independent of the buffer lifetime
- [CVAttachmentRawValue](cvattachmentrawvalue.md): A lightweight wrapper around raw attachment values.
- [CVAttachmentKeyDefinition](cvattachmentkeydefinition.md): Associates a raw attachment key with a value type and preferred propagation mode.
- [CVAttachmentKeyDefinitionWithDefault](cvattachmentkeydefinitionwithdefault.md): Associates a raw attachment key with a default value and preferred propagation mode.
- [CVAttachmentCompositeKeyDefinition](cvattachmentcompositekeydefinition.md): Associates a set of raw attachment keys with a value type and preferred propagation mode.
- [CVAttachmentModePreferenceShouldPropagate](cvattachmentmodepreferenceshouldpropagate.md): Sets preferred mode for attachment to should propagate
- [CVAttachmentModePreferenceShouldNotPropagate](cvattachmentmodepreferenceshouldnotpropagate.md): Sets preferred mode for attachment to should not propagate
