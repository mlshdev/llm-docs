> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/rtfd](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/rtfd)

# rtfd

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents Rich Text Format Directory documents.

## Declaration

```swift
static var rtfd: UTType { get }
```

<a id="Discussion"></a>

## Discussion

RTFD is RTF with content embedded in its on-disk format.

The identifier for this type is `com.apple.rtfd`.

This type conforms to [UTTypePackage](../uttypepackage.md) and [UTTypeCompositeContent](../uttypecompositecontent.md).

## See Also

### Application files

- [pdf](pdf.md): A type that represents Adobe Portable Document Format (PDF) documents.
- [flatRTFD](flatrtfd.md): A type that represents flattened Rich Text Format Directory documents.
- [epub](epub.md): A type that represents data in the electronic publication (EPUB) format.
