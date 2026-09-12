> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/containsattachments](https://developer.apple.com/documentation/foundation/nsattributedstring/containsattachments)

# containsAttachments (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the attribute string contains any attachment attributes.

> Use [containsAttachments(in:)](containsattachments%28in_%29.md) instead.

## Declaration

```swift
var containsAttachments: Bool { get }
```

<a id="return-value"></a>

## Return Value

YES if the attributed string contains any attachment attributes, otherwise NO.

<a id="Discussion"></a>

## Discussion

This method checks only for attachment attributes, not for `NSAttachmentCharacter`.

# containsAttachments (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the attribute string contains any attachment attributes.

> Use [containsAttachmentsInRange:](containsattachments%28in_%29.md) instead.

## Declaration

```objectivec
@property (readonly) BOOL containsAttachments;
```

<a id="return-value"></a>

## Return Value

YES if the attributed string contains any attachment attributes, otherwise NO.

<a id="Discussion"></a>

## Discussion

This method checks only for attachment attributes, not for `NSAttachmentCharacter`.

## See Also

### Deprecated Properties

- [textFileTypes](textfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as text.
- [textUnfilteredFileTypes](textunfilteredfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as a text.
- [textPasteboardTypes](textpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [textUnfilteredPasteboardTypes](textunfilteredpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
