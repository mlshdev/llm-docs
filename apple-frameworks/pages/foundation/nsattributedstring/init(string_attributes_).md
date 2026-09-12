> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(string:attributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(string:attributes:))

# init(string:attributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string with the specified text and attributes.

## Declaration

```swift
init(string str: String, attributes attrs: [NSAttributedString.Key : Any]? = nil)
```

## Parameters

- `str`: The text for the new attributed string.
- `attrs`: The attributes for the new attributed string. This method applies the attributes to the entire string. For a list of attributes that you can include in this dictionary, see [NSAttributedString.Key](key.md).

<a id="Discussion"></a>

## Discussion

Returns an [NSAttributedString](../nsattributedstring.md) object initialized with the characters of `str` and the attributes of `attrs`.

## See Also

### Related Documentation

- [init(RTF:documentAttributes:)](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.

### Creating from another string

- [init(string:)](init%28string_%29.md): Creates an attributed string with the specified text and no attribute information.
- [init(attributedString:)](init%28attributedstring_%29.md): Creates a new attributed string from the contents of another attributed string.

# initWithString:attributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string with the specified text and attributes.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) str attributes:(NSDictionary<NSString *,id> *) attrs;
```

## Parameters

- `str`: The text for the new attributed string.
- `attrs`: The attributes for the new attributed string. This method applies the attributes to the entire string. For a list of attributes that you can include in this dictionary, see [NSAttributedStringKey](key.md).

<a id="Discussion"></a>

## Discussion

Returns an [NSAttributedString](../nsattributedstring.md) object initialized with the characters of `str` and the attributes of `attrs`.

## See Also

### Related Documentation

- [initWithRTF:documentAttributes:](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.

### Creating from another string

- [initWithString:](init%28string_%29.md): Creates an attributed string with the specified text and no attribute information.
- [initWithAttributedString:](init%28attributedstring_%29.md): Creates a new attributed string from the contents of another attributed string.
