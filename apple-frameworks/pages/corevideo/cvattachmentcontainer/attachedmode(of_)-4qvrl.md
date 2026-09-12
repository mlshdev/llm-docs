> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentcontainer/attachedmode(of:)-4qvrl](https://developer.apple.com/documentation/corevideo/cvattachmentcontainer/attachedmode(of:)-4qvrl)

# attachedMode(of:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the propagation mode of a stored attachment you identify with a key path to a key definition, without retrieving the value.

## Declaration

```swift
func attachedMode(of keyPath: KeyPath<Keys.Type, CVAttachmentKeyDefinition<some CVAttachmentModePreference, some CVAttachmentValueRepresentable>>) -> CVAttachmentMode?
```

## Parameters

- `keyPath`: A key path to a key definition declared on the key definitions type.

<a id="return-value"></a>

## Return Value

The propagation mode of the attachment, or `nil` if the key isn’t attached.

<a id="Discussion"></a>

## Discussion

Use this method to check for the presence of a specific key without converting its value.

The mode this method returns is the mode the attachment actually carries, which can differ from the preferred mode the key definition declares. Code that sets an attachment through the key’s raw value can ignore that preference.
