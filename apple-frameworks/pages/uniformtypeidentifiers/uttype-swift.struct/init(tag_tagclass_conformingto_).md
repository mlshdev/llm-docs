> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/init(tag:tagclass:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/init(tag:tagclass:conformingto:))

# init(tag:tagClass:conformingTo:)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type based on a tag, a tag class, and a supertype that it conforms to.

## Declaration

```swift
init?(tag: String, tagClass: UTTagClass, conformingTo supertype: UTType?)
```

## Parameters

- `tag`: The tag, such as a filename extension.
- `tagClass`: The tag class, such as [UTTagClassFilenameExtension](../uttagclassfilenameextension.md).
- `supertype`: Another type that the resulting type must conform to; for example, [UTTypeData](../uttypedata.md).

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the system doesn’t know the tag.

## See Also

### Creating a type

- [init(\_:)](init%28__%29.md): Creates a type based on an identifier.
- [init(mimeType:conformingTo:)](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(filenameExtension:conformingTo:)](init%28filenameextension_conformingto_%29.md): Creates a type based on a filename extension and an existing supertype that it conforms to.
- [init(exportedAs:conformingTo:)](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [init(importedAs:conformingTo:)](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.
