> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/init(mimetype:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/init(mimetype:conformingto:))

# init(mimeType:conformingTo:)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type based on a MIME type and a supertype that it conforms to.

## Declaration

```swift
init?(mimeType: String, conformingTo supertype: UTType = .data)
```

## Parameters

- `mimeType`: A string that represents the MIME type.
- `supertype`: Another [UTType](../uttype-swift.struct.md) instance that the resulting type must conform to; for example, [UTTypeData](../uttypedata.md).

<a id="Discussion"></a>

## Discussion

This initializer is equivalent to calling:

```swift
UTType(tag: mimeType,
       tagClass: .mimeType,
       conformingTo: supertype)
```

The initializer may provide a dynamic type if the parameters are valid, but the system doesn’t find any types with the MIME type and conformance. The initializer returns `nil` if the parameters aren’t valid.

## See Also

### Creating a type

- [init(\_:)](init%28__%29.md): Creates a type based on an identifier.
- [init(filenameExtension:conformingTo:)](init%28filenameextension_conformingto_%29.md): Creates a type based on a filename extension and an existing supertype that it conforms to.
- [init(tag:tagClass:conformingTo:)](init%28tag_tagclass_conformingto_%29.md): Creates a type based on a tag, a tag class, and a supertype that it conforms to.
- [init(exportedAs:conformingTo:)](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [init(importedAs:conformingTo:)](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.
