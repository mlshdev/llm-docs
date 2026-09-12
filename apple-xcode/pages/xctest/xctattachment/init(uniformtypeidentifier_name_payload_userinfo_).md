> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(uniformtypeidentifier:name:payload:userinfo:)](https://developer.apple.com/documentation/xctest/xctattachment/init(uniformtypeidentifier:name:payload:userinfo:))

# init(uniformTypeIdentifier:name:payload:userInfo:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.

## Declaration

```swift
init(uniformTypeIdentifier identifier: String?, name: String?, payload: Data?, userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `identifier`: An optional custom UTI to represent the data’s content type.
- `name`: An optional name for the attachment, to be used in Xcode’s test reports.
- `payload`: The data to wrap as an attachment.
- `userInfo`: An optional dictionary of user-provided metadata to associate with the attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.data"` if the `identifier` parameter is `nil`.

## See Also

### Creating Attachments from Data

- [init(data:)](init%28data_%29.md): Creates an attachment containing the provided data payload.
- [init(data:uniformTypeIdentifier:)](init%28data_uniformtypeidentifier_%29.md): Creates an attachment containing the provided data payload, with a custom UTI.

# initWithUniformTypeIdentifier:name:payload:userInfo: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.

## Declaration

```objectivec
- (instancetype) initWithUniformTypeIdentifier:(NSString *) identifier name:(NSString *) name payload:(NSData *) payload userInfo:(NSDictionary *) userInfo;
```

## Parameters

- `identifier`: An optional custom UTI to represent the data’s content type.
- `name`: An optional name for the attachment, to be used in Xcode’s test reports.
- `payload`: The data to wrap as an attachment.
- `userInfo`: An optional dictionary of user-provided metadata to associate with the attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.data"` if the `identifier` parameter is `nil`.

## See Also

### Creating Attachments from Data

- [attachmentWithData:](init%28data_%29.md): Creates an attachment containing the provided data payload.
- [attachmentWithData:uniformTypeIdentifier:](init%28data_uniformtypeidentifier_%29.md): Creates an attachment containing the provided data payload, with a custom UTI.
- [attachmentWithUniformTypeIdentifier:name:payload:userInfo:](attachmentwithuniformtypeidentifier_name_payload_userinfo_.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.
