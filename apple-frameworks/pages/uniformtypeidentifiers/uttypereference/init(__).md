> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/init(_:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/init(_:))

# init(\_:) (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type based on an identifier.

## Declaration

```swift
convenience init?(_ identifier: String)
```

## Parameters

- `identifier`: The identifier of your type.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the system doesn’t know the type identifier.

## See Also

### Creating a type

- [init(mimeType:)](init%28mimetype_%29-1txq0.md): Creates a type based on a MIME type.
- [init(mimeType:conformingTo:)](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(filenameExtension:)](init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [init(filenameExtension:conformingTo:)](init%28filenameextension_conformingto_%29.md): Creates a type that represents the specified filename extension and conforms to an existing type.
- [init(tag:tagClass:conformingToType:)](init%28tag_tagclass_conformingtotype_%29.md): Creates a type that represents the specified tag and tag class and which conforms to an existing type.
- [init(exportedAs:)](init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [init(exportedAs:conformingTo:)](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [init(importedAs:)](init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [init(importedAs:conformingTo:)](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.

# typeWithIdentifier: (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type based on an identifier.

## Declaration

```objectivec
+ (instancetype) typeWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The identifier of your type.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the system doesn’t know the type identifier.

## See Also

### Creating a type

- [typeWithMIMEType:](init%28mimetype_%29-1txq0.md): Creates a type based on a MIME type.
- [typeWithMIMEType:conformingToType:](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [typeWithFilenameExtension:](init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [typeWithFilenameExtension:conformingToType:](init%28filenameextension_conformingto_%29.md): Creates a type that represents the specified filename extension and conforms to an existing type.
- [exportedTypeWithIdentifier:](init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [exportedTypeWithIdentifier:conformingToType:](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [importedTypeWithIdentifier:](init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [importedTypeWithIdentifier:conformingToType:](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.
