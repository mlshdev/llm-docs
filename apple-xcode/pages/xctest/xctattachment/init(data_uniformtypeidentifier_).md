> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(data:uniformtypeidentifier:)](https://developer.apple.com/documentation/xctest/xctattachment/init(data:uniformtypeidentifier:))

# init(data:uniformTypeIdentifier:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing the provided data payload, with a custom UTI.

## Declaration

```swift
convenience init(data payload: Data, uniformTypeIdentifier identifier: String)
```

## Parameters

- `payload`: The data to wrap as an attachment.
- `identifier`: A custom UTI to represent the data’s content type.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.data"```.

## See Also

### Creating Attachments from Data

- [init(data:)](init%28data_%29.md): Creates an attachment containing the provided data payload.
- [init(uniformTypeIdentifier:name:payload:userInfo:)](init%28uniformtypeidentifier_name_payload_userinfo_%29.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.

# attachmentWithData:uniformTypeIdentifier: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment containing the provided data payload, with a custom UTI.

## Declaration

```objectivec
+ (instancetype) attachmentWithData:(NSData *) payload uniformTypeIdentifier:(NSString *) identifier;
```

## Parameters

- `payload`: The data to wrap as an attachment.
- `identifier`: A custom UTI to represent the data’s content type.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.data"```.

## See Also

### Creating Attachments from Data

- [attachmentWithData:](init%28data_%29.md): Creates an attachment containing the provided data payload.
- [initWithUniformTypeIdentifier:name:payload:userInfo:](init%28uniformtypeidentifier_name_payload_userinfo_%29.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.
- [attachmentWithUniformTypeIdentifier:name:payload:userInfo:](attachmentwithuniformtypeidentifier_name_payload_userinfo_.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.
