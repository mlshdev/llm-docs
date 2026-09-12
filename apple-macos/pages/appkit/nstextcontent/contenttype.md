> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontent/contenttype](https://developer.apple.com/documentation/appkit/nstextcontent/contenttype)

# contentType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The semantic meaning for a text input area.

## Declaration

```swift
var contentType: NSTextContentType? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to give the system information about the expected semantic meaning for the content that people enter. For example, you might specify [emailAddress](../nstextcontenttype/emailaddress.md) for a text field that people fill in to receive an email confirmation.

For possible values you can use, see [NSTextContentType](../nstextcontenttype.md); by default, the value of this property is `nil`.

## See Also

### Specifying content type

- [NSTextContentType](../nstextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.

# contentType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The semantic meaning for a text input area.

## Declaration

```objectivec
@property (copy, nullable) NSTextContentType contentType;
```

<a id="Discussion"></a>

## Discussion

Use this property to give the system information about the expected semantic meaning for the content that people enter. For example, you might specify [NSTextContentTypeEmailAddress](../nstextcontenttype/emailaddress.md) for a text field that people fill in to receive an email confirmation.

For possible values you can use, see [NSTextContentType](../nstextcontenttype.md); by default, the value of this property is `nil`.

## See Also

### Specifying content type

- [NSTextContentType](../nstextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.
