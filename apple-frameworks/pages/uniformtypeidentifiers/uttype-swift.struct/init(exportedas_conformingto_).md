> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/init(exportedas:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/init(exportedas:conformingto:))

# init(exportedAs:conformingTo:)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a type your app owns based on an identifier and a supertype that it conforms to.

## Declaration

```swift
init(exportedAs identifier: String, conformingTo parentType: UTType? = nil)
```

## Parameters

- `identifier`: The identifier of your type.
- `parentType`: A type to extend for your own type.

<a id="Discussion"></a>

## Discussion

Defining a type with this initializer asserts that you own the type definition. For example, you might define your file format in code to use it to save or open files in your app.

```swift
extension UTType {
    /// The type of my file format.
    public static let myFileFormat = UTType(exportedAs: "com.example.myfileformat")
}
```

## See Also

### Creating a type

- [init(\_:)](init%28__%29.md): Creates a type based on an identifier.
- [init(mimeType:conformingTo:)](init%28mimetype_conformingto_%29.md): Creates a type based on a MIME type and a supertype that it conforms to.
- [init(filenameExtension:conformingTo:)](init%28filenameextension_conformingto_%29.md): Creates a type based on a filename extension and an existing supertype that it conforms to.
- [init(tag:tagClass:conformingTo:)](init%28tag_tagclass_conformingto_%29.md): Creates a type based on a tag, a tag class, and a supertype that it conforms to.
- [init(importedAs:conformingTo:)](init%28importedas_conformingto_%29.md): Creates a type your app uses, but doesn’t own, based on an identifier and a supertype that it conforms to.
