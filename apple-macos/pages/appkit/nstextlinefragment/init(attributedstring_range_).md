> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/init(attributedstring:range:)](https://developer.apple.com/documentation/appkit/nstextlinefragment/init(attributedstring:range:))

# init(attributedString:range:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new line fragment from the attributed string for the range of characters you specify.

## Declaration

```swift
init(attributedString: NSAttributedString, range: NSRange)
```

## Parameters

- `attributedString`: The attributed string.
- `range`: An [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) that specifies which characters to include.

## See Also

### Creating line fragments

- [init(coder:)](init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.
- [init(string:attributes:range:)](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.

# initWithAttributedString:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new line fragment from the attributed string for the range of characters you specify.

## Declaration

```objectivec
- (instancetype) initWithAttributedString:(NSAttributedString *) attributedString range:(NSRange) range;
```

## Parameters

- `attributedString`: The attributed string.
- `range`: An [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) that specifies which characters to include.

## See Also

### Creating line fragments

- [initWithCoder:](init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.
- [initWithString:attributes:range:](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.
