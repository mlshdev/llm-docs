> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/init(string:attributes:range:)](https://developer.apple.com/documentation/appkit/nstextlinefragment/init(string:attributes:range:))

# init(string:attributes:range:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new line fragment using the string, attributes, and range you provide.

## Declaration

```swift
convenience init(string: String, attributes: [NSAttributedString.Key : Any] = [:], range: NSRange)
```

## Parameters

- `string`: An attributed string.
- `attributes`: A dictionary of attributes.
- `range`: The range to use from `string`.

## See Also

### Creating line fragments

- [init(attributedString:range:)](init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [init(coder:)](init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.

# initWithString:attributes:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new line fragment using the string, attributes, and range you provide.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) string attributes:(NSDictionary<NSString *,id> *) attributes range:(NSRange) range;
```

## Parameters

- `string`: An attributed string.
- `attributes`: A dictionary of attributes.
- `range`: The range to use from `string`.

## See Also

### Creating line fragments

- [initWithAttributedString:range:](init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [initWithCoder:](init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.
