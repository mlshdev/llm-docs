> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlinefragment/init(attributedstring:range:)](https://developer.apple.com/documentation/uikit/nstextlinefragment/init(attributedstring:range:))

# init(attributedString:range:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new line fragment from the attributed string for the range of characters you specify.

## Declaration

```swift
init(attributedString: NSAttributedString, range: NSRange)
```

## Parameters

- `attributedString`: The attributed string.
- `range`: An [NSRange](../../foundation/nsrange-c.struct.md) that specifies which characters to include.

## See Also

### Creating line fragments

- [init(coder:)](init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.
- [init(string:attributes:range:)](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.

# initWithAttributedString:range: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new line fragment from the attributed string for the range of characters you specify.

## Declaration

```objectivec
- (instancetype) initWithAttributedString:(NSAttributedString *) attributedString range:(NSRange) range;
```

## Parameters

- `attributedString`: The attributed string.
- `range`: An [NSRange](../../foundation/nsrange-c.struct.md) that specifies which characters to include.

## See Also

### Creating line fragments

- [initWithCoder:](init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.
- [initWithString:attributes:range:](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.
