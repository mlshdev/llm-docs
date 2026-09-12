> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(adaptiveimageglyph:attributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(adaptiveimageglyph:attributes:))

# init(adaptiveImageGlyph:attributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.

## Declaration

```swift
convenience init(adaptiveImageGlyph: NSAdaptiveImageGlyph, attributes: [NSAttributedString.Key : Any] = [:])
```

## Parameters

- `adaptiveImageGlyph`: The adaptive image glyph to place in the string. Typically, you get this type from the text input system.
- `attributes`: The attributes to apply to the adaptive image glyph. Specify an empty dictionary to create the string without any extra attributes.

<a id="return-value"></a>

## Return Value

An attributed string containing the adaptive image glyph.

## See Also

### Creating a string with an attachment

- [init(attachment:)](init%28attachment_%29.md): Creates an attributed string with an attachment.
- [init(attachment:attributes:)](init%28attachment_attributes_%29.md): Creates an attributed string with an attachment and applies the specified attributes to it.

# attributedStringWithAdaptiveImageGlyph:attributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.

## Declaration

```objectivec
+ (instancetype) attributedStringWithAdaptiveImageGlyph:(NSAdaptiveImageGlyph *) adaptiveImageGlyph attributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `adaptiveImageGlyph`: The adaptive image glyph to place in the string. Typically, you get this type from the text input system.
- `attributes`: The attributes to apply to the adaptive image glyph. Specify an empty dictionary to create the string without any extra attributes.

<a id="return-value"></a>

## Return Value

An attributed string containing the adaptive image glyph.

## See Also

### Creating a string with an attachment

- [attributedStringWithAttachment:](init%28attachment_%29.md): Creates an attributed string with an attachment.
- [attributedStringWithAttachment:attributes:](init%28attachment_attributes_%29.md): Creates an attributed string with an attachment and applies the specified attributes to it.
