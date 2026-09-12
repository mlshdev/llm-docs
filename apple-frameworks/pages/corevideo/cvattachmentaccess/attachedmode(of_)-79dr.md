> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentaccess/attachedmode(of:)-79dr](https://developer.apple.com/documentation/corevideo/cvattachmentaccess/attachedmode(of:)-79dr)

# attachedMode(of:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the propagation mode of an attachment you identify with a key path to a key definition that supplies a default, without retrieving the value.

## Declaration

```swift
func attachedMode(of keyPath: KeyPath<Keys.Type, CVAttachmentKeyDefinitionWithDefault<some CVAttachmentModePreference, some CVAttachmentValueRepresentable & Equatable & Sendable>>) -> CVAttachmentMode?
```

## Parameters

- `keyPath`: A key path to a key definition that supplies a default value.

<a id="return-value"></a>

## Return Value

The propagation mode of the attachment, or `nil` if the key isn’t attached.

<a id="Discussion"></a>

## Discussion

Use this method to check for the presence of a specific key without converting its value.

Because this kind of key supplies a default, reading it as a property always produces a value, whether or not the buffer carries an attachment for it. This method returns `nil` in the second case, which makes it the way to tell an attached value from a defaulted one.
