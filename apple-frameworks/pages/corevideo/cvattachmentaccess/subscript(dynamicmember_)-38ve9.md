> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentaccess/subscript(dynamicmember:)-38ve9](https://developer.apple.com/documentation/corevideo/cvattachmentaccess/subscript(dynamicmember:)-38ve9)

# subscript(dynamicMember:)

**Framework:** Core Video  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set attachment value as a property of this object with default value.

## Declaration

```swift
subscript<ModePreference, Value>(dynamicMember keyPath: KeyPath<Keys.Type, CVAttachmentKeyDefinitionWithDefault<ModePreference, Value>>) -> Value where ModePreference : CVAttachmentModePreference, Value : CVAttachmentValueRepresentable, Value : Equatable, Value : Sendable { get set }
```

<a id="overview"></a>

## Overview

This subscript provides access to an attachment key as a property. The key to be accessed must be defined as a static property on the `Keys` type.

```swift
extension CVPixelBufferAttachmentKeyDefinitions {
	static var isSpecialPicture: KeyWithDefault<ShouldPropagate, Bool> {
		.init("com.app.isSpecialPicture", default: false)
	}
}

func inspect(attachments: borrowing CVAttachmentAccess<CVPixelBufferAttachmentKeyDefinitions>) {
	if attachments.isSpecialPicture {
		...
	}
}
```
