> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(attributedstring:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(attributedstring:))

# init(attributedString:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new attributed string from the contents of another attributed string.

## Declaration

```swift
init(attributedString attrStr: NSAttributedString)
```

## Parameters

- `attrStr`: An attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../nsattributedstring.md) object initialized with the characters and attributes of `attrStr`.

## See Also

### Related Documentation

- [init(RTF:documentAttributes:)](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.

### Creating from another string

- [init(string:)](init%28string_%29.md): Creates an attributed string with the specified text and no attribute information.
- [init(string:attributes:)](init%28string_attributes_%29.md): Creates an attributed string with the specified text and attributes.

# initWithAttributedString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new attributed string from the contents of another attributed string.

## Declaration

```objectivec
- (instancetype) initWithAttributedString:(NSAttributedString *) attrStr;
```

## Parameters

- `attrStr`: An attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../nsattributedstring.md) object initialized with the characters and attributes of `attrStr`.

## See Also

### Related Documentation

- [initWithRTF:documentAttributes:](init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.

### Creating from another string

- [initWithString:](init%28string_%29.md): Creates an attributed string with the specified text and no attribute information.
- [initWithString:attributes:](init%28string_attributes_%29.md): Creates an attributed string with the specified text and attributes.
