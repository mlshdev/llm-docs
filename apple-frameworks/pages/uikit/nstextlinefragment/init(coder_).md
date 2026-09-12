> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlinefragment/init(coder:)](https://developer.apple.com/documentation/uikit/nstextlinefragment/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new line fragment with from data in an unarchiver.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: A decoder that conforms to the [NSCoder](../../foundation/nscoder.md) protocol.

## See Also

### Creating line fragments

- [init(attributedString:range:)](init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [init(string:attributes:range:)](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new line fragment with from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: A decoder that conforms to the [NSCoder](../../foundation/nscoder.md) protocol.

## See Also

### Creating line fragments

- [initWithAttributedString:range:](init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [initWithString:attributes:range:](init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.
