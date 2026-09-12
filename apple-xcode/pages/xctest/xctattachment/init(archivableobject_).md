> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(archivableobject:)](https://developer.apple.com/documentation/xctest/xctattachment/init(archivableobject:))

# init(archivableObject:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment from an object that conforms to `NSSecureCoding`.

## Declaration

```swift
convenience init(archivableObject object: any NSSecureCoding)
```

## Parameters

- `object`: An encodable object that conforms to [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding).

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.data"```.

## See Also

### Creating Attachments from Objects

- [init(plistObject:)](init%28plistobject_%29.md): Creates an attachment from an object that can be represented in an XML property list.
- [init(archivableObject:uniformTypeIdentifier:)](init%28archivableobject_uniformtypeidentifier_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.

# attachmentWithArchivableObject: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment from an object that conforms to `NSSecureCoding`.

## Declaration

```objectivec
+ (instancetype) attachmentWithArchivableObject:(id<NSSecureCoding>) object;
```

## Parameters

- `object`: An encodable object that conforms to [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding).

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.data"```.

## See Also

### Creating Attachments from Objects

- [attachmentWithPlistObject:](init%28plistobject_%29.md): Creates an attachment from an object that can be represented in an XML property list.
- [attachmentWithArchivableObject:uniformTypeIdentifier:](init%28archivableobject_uniformtypeidentifier_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.
