> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentmodepreference](https://developer.apple.com/documentation/corevideo/cvattachmentmodepreference)

# CVAttachmentModePreference

**Framework:** Core Video  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Defines preferred mode for an attachment key.

## Declaration

```swift
protocol CVAttachmentModePreference : Sendable
```

<a id="overview"></a>

## Overview

This protocol is used to identify the mode preferences in generic context. You should use one of the [CVAttachmentModePreferenceShouldPropagate](cvattachmentmodepreferenceshouldpropagate.md) or [CVAttachmentModePreferenceShouldNotPropagate](cvattachmentmodepreferenceshouldnotpropagate.md) instead of defining a custom conformance to this protocol.

## Topics

### Type Properties

- [preferredMode](cvattachmentmodepreference/preferredmode.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [CVAttachmentModePreferenceShouldNotPropagate](cvattachmentmodepreferenceshouldnotpropagate.md)
- [CVAttachmentModePreferenceShouldPropagate](cvattachmentmodepreferenceshouldpropagate.md)

## See Also

### Protocols

- [CVBufferRepresentable](cvbufferrepresentable.md): CVBufferRepresentable protocol is a sealed protocol intended to be implemented by the types in CoreVideo framework. This protocol facilitates Swift types that wrap a value of CVBuffer type.
- [CVAttachmentKeyDefinitions](cvattachmentkeydefinitions.md): Marks a type as a collection of attachment keys for an attachment bearer.
- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md): Allows Swift types to be used as buffer attachment value.
