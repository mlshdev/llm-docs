> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/preferredfilenameextension](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/preferredfilenameextension)

# preferredFilenameExtension

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The preferred filename extension for the type.

## Declaration

```swift
var preferredFilenameExtension: String? { get }
```

<a id="Discussion"></a>

## Discussion

If available, the preferred (first available) tag of class [filenameExtension](../uttagclass/filenameextension.md).

Many types require the generation of a filename; for example, when saving a file to disk. If not `nil`, the value of this property is the best available filename extension for this type.

The value of this property is equivalent to, but more efficient than:

```swift
type.tags[.filenameExtension]?.first
```

## See Also

### Obtaining tags

- [preferredMIMEType](preferredmimetype.md): The preferred MIME type for the type.
- [tags](tags.md): The tag specification dictionary of the type.
