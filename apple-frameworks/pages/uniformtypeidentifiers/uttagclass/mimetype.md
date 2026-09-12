> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttagclass/mimetype](https://developer.apple.com/documentation/uniformtypeidentifiers/uttagclass/mimetype)

# mimeType

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type property that returns the tag class used to map a type to a MIME type.

## Declaration

```swift
static var mimeType: UTTagClass { get }
```

<a id="Discussion"></a>

## Discussion

The tag class for MIME types such as `text/plain`. The raw value of this tag class is `public.mime-type`.

## See Also

### Getting a declared types mapping

- [filenameExtension](filenameextension.md): A type property that returns the tag class used to map a type to a filename extension.
