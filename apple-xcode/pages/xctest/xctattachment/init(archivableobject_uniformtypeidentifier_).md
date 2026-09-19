> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctattachment/init(archivableobject:uniformtypeidentifier:)

# init(archivableObject:uniformTypeIdentifier:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.

## Declaration

```swift
convenience init(archivableObject object: any NSSecureCoding, uniformTypeIdentifier identifier: String)
```

## Parameters

- `object`: An encodable object that conforms to [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding).
- `identifier`: A custom UTI to represent the encoded data’s type.

## See Also

### Creating Attachments from Objects

- [init(plistObject:)](init%28plistobject_%29.md): Creates an attachment from an object that can be represented in an XML property list.
- [init(archivableObject:)](init%28archivableobject_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`.

# attachmentWithArchivableObject:uniformTypeIdentifier: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.

## Declaration

```objectivec
+ (instancetype) attachmentWithArchivableObject:(id<NSSecureCoding>) object uniformTypeIdentifier:(NSString *) identifier;
```

## Parameters

- `object`: An encodable object that conforms to [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding).
- `identifier`: A custom UTI to represent the encoded data’s type.

## See Also

### Creating Attachments from Objects

- [attachmentWithPlistObject:](init%28plistobject_%29.md): Creates an attachment from an object that can be represented in an XML property list.
- [attachmentWithArchivableObject:](init%28archivableobject_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`.
