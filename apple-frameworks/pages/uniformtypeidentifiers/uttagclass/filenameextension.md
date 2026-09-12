> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttagclass/filenameextension](https://developer.apple.com/documentation/uniformtypeidentifiers/uttagclass/filenameextension)

# filenameExtension

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type property that returns the tag class used to map a type to a filename extension.

## Declaration

```swift
static var filenameExtension: UTTagClass { get }
```

<a id="Discussion"></a>

## Discussion

The tag class for filename extensions such as `txt`.

Don’t include the leading period (`.`) character in the tag; it isn’t part of the filename extension.

The raw value of this tag class is `public.filename-extension`.

## See Also

### Getting a declared types mapping

- [mimeType](mimetype.md): A type property that returns the tag class used to map a type to a MIME type.
