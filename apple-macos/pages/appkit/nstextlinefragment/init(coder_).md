> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/init(coder:)](https://developer.apple.com/documentation/appkit/nstextlinefragment/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new line fragment with from data in an unarchiver.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: A decoder that conforms to the [NSCoder](https://developer.apple.com/documentation/foundation/nscoder) protocol.

## See Also

### Creating line fragments

- [init(attributedString:range:)](init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [init(string:attributes:range:)](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new line fragment with from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: A decoder that conforms to the [NSCoder](https://developer.apple.com/documentation/foundation/nscoder) protocol.

## See Also

### Creating line fragments

- [initWithAttributedString:range:](init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [initWithString:attributes:range:](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.
