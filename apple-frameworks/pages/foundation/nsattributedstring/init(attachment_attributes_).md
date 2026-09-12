> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(attachment:attributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(attachment:attributes:))

# init(attachment:attributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an attributed string with an attachment and applies the specified attributes to it.

## Declaration

```swift
convenience init(attachment: NSTextAttachment, attributes: [NSAttributedString.Key : Any] = [:])
```

## Parameters

- `attachment`: The attrachment to place in the string.
- `attributes`: The attributes to apply to the attachment. Specify an empty dictionary to create the string without any extra attributes.

<a id="return-value"></a>

## Return Value

An attributed string containing the attachment.

## See Also

### Creating a string with an attachment

- [init(attachment:)](init%28attachment_%29.md): Creates an attributed string with an attachment.
- [init(adaptiveImageGlyph:attributes:)](init%28adaptiveimageglyph_attributes_%29.md): Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.

# attributedStringWithAttachment:attributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an attributed string with an attachment and applies the specified attributes to it.

## Declaration

```objectivec
+ (instancetype) attributedStringWithAttachment:(NSTextAttachment *) attachment attributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attachment`: The attrachment to place in the string.
- `attributes`: The attributes to apply to the attachment. Specify an empty dictionary to create the string without any extra attributes.

<a id="return-value"></a>

## Return Value

An attributed string containing the attachment.

## See Also

### Creating a string with an attachment

- [attributedStringWithAttachment:](init%28attachment_%29.md): Creates an attributed string with an attachment.
- [attributedStringWithAdaptiveImageGlyph:attributes:](init%28adaptiveimageglyph_attributes_%29.md): Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.
