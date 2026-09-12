> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference)

# UTTypeReference (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that represents a type of data to load, send, or receive.

## Declaration

```swift
class UTTypeReference
```

<a id="overview"></a>

## Overview

The [UTTypeReference](uttypereference.md) object may represent files on disk, abstract data types with no on-disk representation, or entirely unrelated hierarchical classification systems, such as hardware. Each instance has a unique [identifier](uttype-swift.struct/identifier.md), and helpful properties, [preferredFilenameExtension](uttype-swift.struct/preferredfilenameextension.md) and [preferredMIMEType](uttype-swift.struct/preferredmimetype.md).

> **Note**

>  The system includes static declarations for many common types, which you can look up by identifier, filename extension, or MIME type.

The [UTTypeReference](uttypereference.md) object may provide additional information related to the type. For example, it may include a localized user-facing description, a reference URL to technical documentation about the type, or its version number. You can look up types by their conformance to get either a type or a list of types that are relevant to your use case.

To define your own types in your app’s `Info.plist`, see [Defining file and data types for your app](defining-file-and-data-types-for-your-app.md).

## Topics

### Looking up a type

- [types(tag:tagClass:conformingTo:)](uttypereference/types%28tag_tagclass_conformingto_%29.md): Returns an array of types from the provided tag and tag class.

### Creating a type

- [init(\_:)](uttypereference/init%28__%29.md): Creates a type based on an identifier.
- [init(mimeType:)](uttypereference/init%28mimetype_%29-1txq0.md): Creates a type based on a MIME type.
- [init(mimeType:conformingTo:)](uttypereference/init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(filenameExtension:)](uttypereference/init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [init(filenameExtension:conformingTo:)](uttypereference/init%28filenameextension_conformingto_%29.md): Creates a type that represents the specified filename extension and conforms to an existing type.
- [init(tag:tagClass:conformingToType:)](uttypereference/init%28tag_tagclass_conformingtotype_%29.md): Creates a type that represents the specified tag and tag class and which conforms to an existing type.
- [init(exportedAs:)](uttypereference/init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [init(exportedAs:conformingTo:)](uttypereference/init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [init(importedAs:)](uttypereference/init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [init(importedAs:conformingTo:)](uttypereference/init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.

### Identifying a type

- [identifier](uttype-swift.struct/identifier.md): The string that represents the type.

### Obtaining tags

- [preferredFilenameExtension](uttype-swift.struct/preferredfilenameextension.md): The preferred filename extension for the type.
- [preferredMIMEType](uttype-swift.struct/preferredmimetype.md): The preferred MIME type for the type.
- [tags](uttype-swift.struct/tags.md): The tag specification dictionary of the type.

### Obtaining additional type information

- [isDeclared](uttypereference/isdeclared.md): A Boolean value that indicates whether the system declares the type.
- [isDynamic](uttypereference/isdynamic.md): A Boolean value that indicates whether the system generates the type.
- [isPublic](uttypereference/ispublic.md): A Boolean value that indicates whether the type is in the public domain.
- [referenceURL](uttype-swift.struct/referenceurl.md): The reference URL for the type.
- [version](uttype-swift.struct/version.md): The type’s version, if available.

### Checking a type’s relationship to another type

- [supertypes](uttype-swift.struct/supertypes.md): The set of types the type directly or indirectly conforms to.
- [conforms(to:)](uttypereference/conforms%28to_%29.md): Returns a Boolean value that indicates whether a type conforms to the type.
- [isSubtype(of:)](uttypereference/issubtype%28of_%29.md): Returns a Boolean value that indicates whether a type is higher in a hierarchy than the type.
- [isSupertype(of:)](uttypereference/issupertype%28of_%29.md): Returns a Boolean value that indicates whether a type is lower in a hierarchy than the type.

### Describing a type

- [localizedDescription](uttype-swift.struct/localizeddescription.md): A localized description of the type.

### Type Properties

- [shazamCustomCatalog](uttype-swift.struct/shazamcustomcatalog.md): A type that represents a custom catalog.
- [shazamSignature](uttype-swift.struct/shazamsignature.md): A type that represents a signature.

### Initializers

- [init(MIMEType:)](uttypereference/init%28mimetype_%29-7gu84.md)
- [init(MIMEType:conformingToType:)](uttypereference/init%28mimetype_conformingtotype_%29.md)
- [init(coder:)](uttypereference/init%28coder_%29.md)
- [init(filenameExtension:conformingToType:)](uttypereference/init%28filenameextension_conformingtotype_%29.md)
- [init(identifier:)](uttypereference/init%28identifier_%29.md)
- [init(identifier:allowUndeclared:)](uttypereference/init%28identifier_allowundeclared_%29.md)
- [init(tag:tagClass:conformingTo:)](uttypereference/init%28tag_tagclass_conformingto_%29.md)

### Default Implementations

- [UTTypeReference Implementations](uttypereference/uttypereference-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Uniform type identifiers

- [UTType](uttype-swift.struct.md): A structure that represents a type of data to load, send, or receive.
- [UTTagClass](uttagclass.md): A type that represents tag classes.

# UTType (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that represents a type of data to load, send, or receive.

## Declaration

```objectivec
@interface UTType : NSObject
```

<a id="overview"></a>

## Overview

The [UTType](uttypereference.md) object may represent files on disk, abstract data types with no on-disk representation, or entirely unrelated hierarchical classification systems, such as hardware. Each instance has a unique [identifier](uttype-swift.struct/identifier.md), and helpful properties, [preferredFilenameExtension](uttype-swift.struct/preferredfilenameextension.md) and [preferredMIMEType](uttype-swift.struct/preferredmimetype.md).

> **Note**

>  The system includes static declarations for many common types, which you can look up by identifier, filename extension, or MIME type.

The [UTType](uttypereference.md) object may provide additional information related to the type. For example, it may include a localized user-facing description, a reference URL to technical documentation about the type, or its version number. You can look up types by their conformance to get either a type or a list of types that are relevant to your use case.

To define your own types in your app’s `Info.plist`, see [Defining file and data types for your app](defining-file-and-data-types-for-your-app.md).

## Topics

### Looking up a type

- [typesWithTag:tagClass:conformingToType:](uttypereference/types%28tag_tagclass_conformingto_%29.md): Returns an array of types from the provided tag and tag class.

### Creating a type

- [typeWithIdentifier:](uttypereference/init%28__%29.md): Creates a type based on an identifier.
- [typeWithMIMEType:](uttypereference/init%28mimetype_%29-1txq0.md): Creates a type based on a MIME type.
- [typeWithMIMEType:conformingToType:](uttypereference/init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [typeWithFilenameExtension:](uttypereference/init%28filenameextension_%29.md): Creates a type that represents the specified filename extension.
- [typeWithFilenameExtension:conformingToType:](uttypereference/init%28filenameextension_conformingto_%29.md): Creates a type that represents the specified filename extension and conforms to an existing type.
- [exportedTypeWithIdentifier:](uttypereference/init%28exportedas_%29.md): Creates a type your app owns based on an identifier.
- [exportedTypeWithIdentifier:conformingToType:](uttypereference/init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [importedTypeWithIdentifier:](uttypereference/init%28importedas_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier.
- [importedTypeWithIdentifier:conformingToType:](uttypereference/init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.

### Identifying a type

- [identifier](uttypereference/identifier.md): The string that represents the type.

### Obtaining tags

- [preferredFilenameExtension](uttypereference/preferredfilenameextension.md): The preferred filename extension for the type.
- [preferredMIMEType](uttypereference/preferredmimetype.md): The preferred MIME type for the type.
- [tags](uttypereference/tags.md): The tag specification dictionary of the type.

### Obtaining additional type information

- [declared](uttypereference/isdeclared.md): A Boolean value that indicates whether the system declares the type.
- [dynamic](uttypereference/isdynamic.md): A Boolean value that indicates whether the system generates the type.
- [publicType](uttypereference/ispublic.md): A Boolean value that indicates whether the type is in the public domain.
- [referenceURL](uttypereference/referenceurl.md): The reference URL for the type.
- [version](uttypereference/version.md): The type’s version, if available.

### Checking a type’s relationship to another type

- [supertypes](uttypereference/supertypes.md): The set of types the type directly or indirectly conforms to.
- [conformsToType:](uttypereference/conforms%28to_%29.md): Returns a Boolean value that indicates whether a type conforms to the type.
- [isSubtypeOfType:](uttypereference/issubtype%28of_%29.md): Returns a Boolean value that indicates whether a type is higher in a hierarchy than the type.
- [isSupertypeOfType:](uttypereference/issupertype%28of_%29.md): Returns a Boolean value that indicates whether a type is lower in a hierarchy than the type.

### Describing a type

- [localizedDescription](uttypereference/localizeddescription.md): A localized description of the type.

### Type Properties

- [SHCustomCatalogContentType](uttype-c.class/shcustomcatalogcontenttype.md): A type representing the @c SHCustomCatalog file format with the .shazamcatalog extension
- [SHSignatureContentType](uttype-c.class/shsignaturecontenttype.md): A type representing the @c SHSignature file format with the .shazamsignature extension

### Type Methods

- [typeWithIdentifier:allowUndeclared:](uttypereference/init%28identifier_allowundeclared_%29.md)
- [typeWithTag:tagClass:conformingToType:](uttypereference/init%28tag_tagclass_conformingto_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
