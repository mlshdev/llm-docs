> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/init(filenameextension:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/init(filenameextension:conformingto:))

# init(filenameExtension:conformingTo:)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type based on a filename extension and an existing supertype that it conforms to.

## Declaration

```swift
init?(filenameExtension: String, conformingTo supertype: UTType = .data)
```

## Parameters

- `filenameExtension`: The filename extension.
- `supertype`: Another type that the resulting type must conform to; for example, [UTTypeData](../uttypedata.md) or [UTTypePackage](../uttypepackage.md).

<a id="Discussion"></a>

## Discussion

If the system finds no types with the provided filename extension and conformance, but the inputs are otherwise valid, it may provide a dynamic type. The initializer returns `nil` if the parameters aren’t valid.

This initializer is equivalent to calling:

```swift
UTType(tag: filenameExtension,
       tagClass: .filenameExtension,
       conformingTo: supertype)
```

To get the type of a file on disk, use [contentType](../../foundation/urlresourcevalues/contenttype.md).

> **Important**

>  You can’t always derive the type of a file system item based solely on its filename extension.

A type depends on other attributes in addition to the filename extension, including whether the item is a directory.

## See Also

### Creating a type

- [init(\_:)](init%28__%29.md): Creates a type based on an identifier.
- [init(mimeType:conformingTo:)](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(tag:tagClass:conformingTo:)](init%28tag_tagclass_conformingto_%29.md): Creates a type based on a tag, a tag class, and a supertype that it conforms to.
- [init(exportedAs:conformingTo:)](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
- [init(importedAs:conformingTo:)](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.
