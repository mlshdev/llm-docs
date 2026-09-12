> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/init(importedas:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/init(importedas:conformingto:))

# init(importedAs:conformingTo:)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.

## Declaration

```swift
init(importedAs identifier: String, conformingTo parentType: UTType? = nil)
```

## Parameters

- `identifier`: The identifier of your type.
- `parentType`: A type to extend with this type.

<a id="Discussion"></a>

## Discussion

Define a type with this initializer when you’re supporting a type that another app owns. For example, the following code uses another app’s type information to open or save files in its app:

```swift
extension UTType {
    /// The type of a supported file format.
    public static var anotherFormat: UTType {
        UTType(importedAs: "com.example.anotherformat")
    }
}
```

## See Also

### Creating a type

- [init(\_:)](init%28__%29.md): Creates a type based on an identifier.
- [init(mimeType:conformingTo:)](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(filenameExtension:conformingTo:)](init%28filenameextension_conformingto_%29.md): Creates a type based on a filename extension and an existing supertype that it conforms to.
- [init(tag:tagClass:conformingTo:)](init%28tag_tagclass_conformingto_%29.md): Creates a type based on a tag, a tag class, and a supertype that it conforms to.
- [init(exportedAs:conformingTo:)](init%28exportedas_conformingto_%29.md): Creates a type your app owns based on an identifier and a supertype that it conforms to.
