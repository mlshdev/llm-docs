> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(attachment:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(attachment:))

# init(attachment:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string with an attachment.

## Declaration

```swift
init(attachment: NSTextAttachment)
```

## Parameters

- `attachment`: The attrachment to place in the string.

<a id="return-value"></a>

## Return Value

An attributed string containing the attachment.

<a id="Discussion"></a>

## Discussion

This is a convenience method for creating an attributed string containing an attachment using [character](https://developer.apple.com/documentation/appkit/nstextattachment/character) as the base character.

## See Also

### Creating a string with an attachment

- [init(attachment:attributes:)](init%28attachment_attributes_%29.md): Creates an attributed string with an attachment and applies the specified attributes to it.
- [init(adaptiveImageGlyph:attributes:)](init%28adaptiveimageglyph_attributes_%29.md): Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.

# attributedStringWithAttachment: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string with an attachment.

## Declaration

```objectivec
+ (NSAttributedString *) attributedStringWithAttachment:(NSTextAttachment *) attachment;
```

## Parameters

- `attachment`: The attrachment to place in the string.

<a id="return-value"></a>

## Return Value

An attributed string containing the attachment.

<a id="Discussion"></a>

## Discussion

This is a convenience method for creating an attributed string containing an attachment using [NSAttachmentCharacter](https://developer.apple.com/documentation/appkit/nstextattachment/character) as the base character.

## See Also

### Creating a string with an attachment

- [attributedStringWithAttachment:attributes:](init%28attachment_attributes_%29.md): Creates an attributed string with an attachment and applies the specified attributes to it.
- [attributedStringWithAdaptiveImageGlyph:attributes:](init%28adaptiveimageglyph_attributes_%29.md): Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.
