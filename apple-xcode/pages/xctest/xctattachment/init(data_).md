> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(data:)](https://developer.apple.com/documentation/xctest/xctattachment/init(data:))

# init(data:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing the provided data payload.

## Declaration

```swift
convenience init(data payload: Data)
```

## Parameters

- `payload`: The data to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.data"```.

## See Also

### Creating Attachments from Data

- [init(data:uniformTypeIdentifier:)](init%28data_uniformtypeidentifier_%29.md): Creates an attachment containing the provided data payload, with a custom UTI.
- [init(uniformTypeIdentifier:name:payload:userInfo:)](init%28uniformtypeidentifier_name_payload_userinfo_%29.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.

# attachmentWithData: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment containing the provided data payload.

## Declaration

```objectivec
+ (instancetype) attachmentWithData:(NSData *) payload;
```

## Parameters

- `payload`: The data to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.data"```.

## See Also

### Creating Attachments from Data

- [attachmentWithData:uniformTypeIdentifier:](init%28data_uniformtypeidentifier_%29.md): Creates an attachment containing the provided data payload, with a custom UTI.
- [initWithUniformTypeIdentifier:name:payload:userInfo:](init%28uniformtypeidentifier_name_payload_userinfo_%29.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.
- [attachmentWithUniformTypeIdentifier:name:payload:userInfo:](attachmentwithuniformtypeidentifier_name_payload_userinfo_.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.
