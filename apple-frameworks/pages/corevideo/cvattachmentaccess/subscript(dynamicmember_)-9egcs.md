> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentaccess/subscript(dynamicmember:)-9egcs](https://developer.apple.com/documentation/corevideo/cvattachmentaccess/subscript(dynamicmember:)-9egcs)

# subscript(dynamicMember:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set attachment value as a property of this object.

## Declaration

```swift
subscript<ModePreference, Value>(dynamicMember keyPath: KeyPath<Keys.Type, CVAttachmentKeyDefinition<ModePreference, Value>>) -> Value? where ModePreference : CVAttachmentModePreference, Value : CVAttachmentValueRepresentable { get set }
```

<a id="overview"></a>

## Overview

This subscript provides access to an attachment key as a property. The key to be accessed must be defined as a static property on the `Keys` type.

```swift
extension CVPixelBufferAttachmentKeyDefinitions {
	static var pixelBufferNumber: Key<ShouldPropagate, Int> {
		"com.app.pixelBufferNumber"
	}
}

func inspect(attachments: borrowing CVAttachmentAccess<CVPixelBufferAttachmentKeyDefinitions>) {
	let value: Int? = attachments.pixelBufferNumber
}
```
