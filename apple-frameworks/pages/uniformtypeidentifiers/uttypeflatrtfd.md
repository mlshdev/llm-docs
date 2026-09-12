> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeflatrtfd](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeflatrtfd)

# UTTypeFlatRTFD

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents flattened Rich Text Format Directory documents.

## Declaration

```objectivec
extern UTType * const UTTypeFlatRTFD;
```

<a id="Discussion"></a>

## Discussion

The pasteboard uses a flattened Rich Text Format Directory format.

The identifier for this type is `com.apple.flat-rtfd`.

This type conforms to [UTTypeData](uttypedata.md) and [UTTypeCompositeContent](uttypecompositecontent.md).

## See Also

### Application files

- [UTTypePDF](uttypepdf.md): A type that represents Adobe Portable Document Format (PDF) documents.
- [UTTypeRTFD](uttypertfd.md): A type that represents Rich Text Format Directory documents.
- [UTTypeEPUB](uttypeepub.md): A type that represents data in the electronic publication (EPUB) format.
