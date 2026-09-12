> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/userinfo](https://developer.apple.com/documentation/xctest/xctattachment/userinfo)

# userInfo (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

User-provided metadata associated with the attachment.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a custom dictionary to this property to store attachment-specific metadata along with the attachment.

> **Note**

>  The contents of the [userInfo](userinfo.md) dictionary are not represented in Xcode test reports.

## See Also

### Attachment Metadata

- [name](name.md): The attachment’s name, or `nil` if the attachment is unnamed.
- [uniformTypeIdentifier](uniformtypeidentifier.md): The Uniform Type Identifier (UTI) of the data represented by the attachment.

# userInfo (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

User-provided metadata associated with the attachment.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

Assign a custom dictionary to this property to store attachment-specific metadata along with the attachment.

> **Note**

>  The contents of the [userInfo](userinfo.md) dictionary are not represented in Xcode test reports.

## See Also

### Attachment Metadata

- [name](name.md): The attachment’s name, or `nil` if the attachment is unnamed.
- [uniformTypeIdentifier](uniformtypeidentifier.md): The Uniform Type Identifier (UTI) of the data represented by the attachment.
