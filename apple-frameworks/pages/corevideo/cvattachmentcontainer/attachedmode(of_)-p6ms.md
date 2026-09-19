> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvattachmentcontainer/attachedmode(of:)-p6ms

# attachedMode(of:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the propagation mode of a stored attachment you identify by its raw key string, without retrieving the value.

## Declaration

```swift
func attachedMode(of key: String) -> CVAttachmentMode?
```

## Parameters

- `key`: The raw string that identifies the attachment.

<a id="return-value"></a>

## Return Value

The propagation mode of the attachment, or `nil` if the key isn’t attached.

<a id="Discussion"></a>

## Discussion

Use this method to check for the presence of a specific key without converting its value.

This overload takes the key as a string, which is how you reach an attachment whose key isn’t declared as a property of the key definitions type, such as a custom key your app attaches. To pass a declared key, use its [rawValue](../cvattachmentkeydefinition/rawvalue.md).
