> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/init(filenameextension:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/init(filenameextension:conformingto:))

# init(filenameExtension:conformingTo:) (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type that represents the specified filename extension and conforms to an existing type.

## Declaration

```swift
convenience init?(filenameExtension: String, conformingTo supertype: UTType)
```

## Parameters

- `filenameExtension`: The filename extension.
- `supertype`: The type the resulting type must conform to, such as [data](../uttype-swift.struct/data.md) or [package](../uttype-swift.struct/package.md).

<a id="Discussion"></a>

## Discussion

If the system recognizes the filename extension, the intializer returns the corresponding type; otherwise, the initializer returns a dynamic type whose [isDeclared](../uttype-swift.struct/isdeclared.md) and [isPublic](../uttype-swift.struct/ispublic.md) properties are both set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a type

- [init(\_:)](init%28__%29.md): Creates a type based on an identifier.
- [init(mimeType:)](init%28mimetype_%29-1txq0.md): Creates a type based on a MIME type.
- [init(mimeType:conformingTo:)](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(filenameExtension:)](init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [init(tag:tagClass:conformingToType:)](init%28tag_tagclass_conformingtotype_%29.md): Creates a type that represents the specified tag and tag class and which conforms to an existing type.
- [init(exportedAs:)](init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [init(exportedAs:conformingTo:)](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [init(importedAs:)](init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [init(importedAs:conformingTo:)](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.

# typeWithFilenameExtension:conformingToType: (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type that represents the specified filename extension and conforms to an existing type.

## Declaration

```objectivec
+ (instancetype) typeWithFilenameExtension:(NSString *) filenameExtension conformingToType:(UTType *) supertype;
```

## Parameters

- `filenameExtension`: The filename extension.
- `supertype`: The type the resulting type must conform to, such as [data](../uttype-swift.struct/data.md) or [package](../uttype-swift.struct/package.md).

<a id="Discussion"></a>

## Discussion

If the system recognizes the filename extension, the intializer returns the corresponding type; otherwise, the initializer returns a dynamic type whose [isDeclared](../uttype-swift.struct/isdeclared.md) and [isPublic](../uttype-swift.struct/ispublic.md) properties are both set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a type

- [typeWithIdentifier:](init%28__%29.md): Creates a type based on an identifier.
- [typeWithMIMEType:](init%28mimetype_%29-1txq0.md): Creates a type based on a MIME type.
- [typeWithMIMEType:conformingToType:](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [typeWithFilenameExtension:](init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [exportedTypeWithIdentifier:](init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [exportedTypeWithIdentifier:conformingToType:](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [importedTypeWithIdentifier:](init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [importedTypeWithIdentifier:conformingToType:](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.
