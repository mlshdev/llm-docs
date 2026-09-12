> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(string:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(string:))

# init(string:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string with the specified text and no attribute information.

## Declaration

```swift
init(string str: String)
```

## Parameters

- `str`: The text for the new attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../nsattributedstring.md) object initialized with the characters of `str` and no attribute information.

## See Also

### Related Documentation

- [init(RTF:documentAttributes:)](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [Attributed String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AttributedStrings/AttributedStrings.html#//apple_ref/doc/uid/10000036i)

### Creating from another string

- [init(string:attributes:)](init%28string_attributes_%29.md): Creates an attributed string with the specified text and attributes.
- [init(attributedString:)](init%28attributedstring_%29.md): Creates a new attributed string from the contents of another attributed string.

# initWithString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string with the specified text and no attribute information.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) str;
```

## Parameters

- `str`: The text for the new attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../nsattributedstring.md) object initialized with the characters of `str` and no attribute information.

## See Also

### Related Documentation

- [initWithRTF:documentAttributes:](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [Attributed String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AttributedStrings/AttributedStrings.html#//apple_ref/doc/uid/10000036i)

### Creating from another string

- [initWithString:attributes:](init%28string_attributes_%29.md): Creates an attributed string with the specified text and attributes.
- [initWithAttributedString:](init%28attributedstring_%29.md): Creates a new attributed string from the contents of another attributed string.
