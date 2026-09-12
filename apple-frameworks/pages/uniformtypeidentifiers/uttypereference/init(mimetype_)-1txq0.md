> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/init(mimetype:)-1txq0](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/init(mimetype:)-1txq0)

# init(mimeType:) (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type based on a MIME type.

## Declaration

```swift
convenience init?(mimeType: String)
```

## Parameters

- `mimeType`: A string that represents the MIME type.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the system doesn’t know the MIME type.

## See Also

### Creating a type

- [init(\_:)](init%28__%29.md): Creates a type based on an identifier.
- [init(mimeType:conformingTo:)](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(filenameExtension:)](init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [init(filenameExtension:conformingTo:)](init%28filenameextension_conformingto_%29.md): Creates a type that represents the specified filename extension and conforms to an existing type.
- [init(tag:tagClass:conformingToType:)](init%28tag_tagclass_conformingtotype_%29.md): Creates a type that represents the specified tag and tag class and which conforms to an existing type.
- [init(exportedAs:)](init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [init(exportedAs:conformingTo:)](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [init(importedAs:)](init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [init(importedAs:conformingTo:)](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.

# typeWithMIMEType: (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type based on a MIME type.

## Declaration

```objectivec
+ (instancetype) typeWithMIMEType:(NSString *) mimeType;
```

## Parameters

- `mimeType`: A string that represents the MIME type.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the system doesn’t know the MIME type.

## See Also

### Creating a type

- [typeWithIdentifier:](init%28__%29.md): Creates a type based on an identifier.
- [typeWithMIMEType:conformingToType:](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [typeWithFilenameExtension:](init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [typeWithFilenameExtension:conformingToType:](init%28filenameextension_conformingto_%29.md): Creates a type that represents the specified filename extension and conforms to an existing type.
- [exportedTypeWithIdentifier:](init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [exportedTypeWithIdentifier:conformingToType:](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [importedTypeWithIdentifier:](init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [importedTypeWithIdentifier:conformingToType:](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.
