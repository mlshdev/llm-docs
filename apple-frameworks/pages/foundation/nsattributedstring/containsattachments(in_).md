> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/containsattachments(in:)](https://developer.apple.com/documentation/foundation/nsattributedstring/containsattachments(in:))

# containsAttachments(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.

## Declaration

```swift
func containsAttachments(in range: NSRange) -> Bool
```

## Parameters

- `range`: The range.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attributed string contains a property configured as [attachment](key/attachment.md) with [character](https://developer.apple.com/documentation/appkit/nstextattachment/character) in `range`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting metrics for the string

- [size()](size%28%29.md): Returns the size necessary to draw the string.
- [boundingRect(with:options:context:)](boundingrect%28with_options_context_%29.md): Returns the bounding rectangle necessary to draw the string.

# containsAttachmentsInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.

## Declaration

```objectivec
- (BOOL) containsAttachmentsInRange:(NSRange) range;
```

## Parameters

- `range`: The range.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attributed string contains a property configured as [attachment](key/attachment.md) with [NSAttachmentCharacter](https://developer.apple.com/documentation/appkit/nstextattachment/character) in `range`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting metrics for the string

- [size](size%28%29.md): Returns the size necessary to draw the string.
- [boundingRectWithSize:options:context:](boundingrect%28with_options_context_%29.md): Returns the bounding rectangle necessary to draw the string.
