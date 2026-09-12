> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/name](https://developer.apple.com/documentation/xctest/xctattachment/name)

# name (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The attachment’s name, or `nil` if the attachment is unnamed.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set an attachment’s [name](name.md) property to a custom string to provide a descriptive name for the attachment within Xcode’s test reports.

## See Also

### Attachment Metadata

- [uniformTypeIdentifier](uniformtypeidentifier.md): The Uniform Type Identifier (UTI) of the data represented by the attachment.
- [userInfo](userinfo.md): User-provided metadata associated with the attachment.

# name (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The attachment’s name, or `nil` if the attachment is unnamed.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Set an attachment’s [name](name.md) property to a custom string to provide a descriptive name for the attachment within Xcode’s test reports.

## See Also

### Attachment Metadata

- [uniformTypeIdentifier](uniformtypeidentifier.md): The Uniform Type Identifier (UTI) of the data represented by the attachment.
- [userInfo](userinfo.md): User-provided metadata associated with the attachment.
