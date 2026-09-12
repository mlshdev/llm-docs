> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlinefragment/init(string:attributes:range:)](https://developer.apple.com/documentation/uikit/nstextlinefragment/init(string:attributes:range:))

# init(string:attributes:range:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
