> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadataerrors](https://developer.apple.com/documentation/imageio/cgimagemetadataerrors)

# CGImageMetadataErrors (Swift)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for errors that occur when getting or setting metadata information.

## Declaration

```swift
enum CGImageMetadataErrors
```

## Topics

### Error Codes

- [CGImageMetadataErrors.unknown](cgimagemetadataerrors/unknown.md): An error that indicates an unknown condition occurred.
- [CGImageMetadataErrors.unsupportedFormat](cgimagemetadataerrors/unsupportedformat.md): An error that indicates the metadata was in an unsupported format.
- [CGImageMetadataErrors.badArgument](cgimagemetadataerrors/badargument.md): An error that indicates a parameter was malformed or contained invalid data.
- [CGImageMetadataErrors.conflictingArguments](cgimagemetadataerrors/conflictingarguments.md): An error that indicates an attempt to save conflicting metadata values.
- [CGImageMetadataErrors.prefixConflict](cgimagemetadataerrors/prefixconflict.md): An error that indicates an attempt to register a namespace with a prefix that is different than the namespace’s existing prefix.

### Initializers

- [init(rawValue:)](cgimagemetadataerrors/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### XMP Metadata

- [CGImageMetadata](cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGMutableImageMetadata](cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [CGImageMetadataTag](cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.

# CGImageMetadataErrors (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for errors that occur when getting or setting metadata information.

## Declaration

```objectivec
enum CGImageMetadataErrors : int32_t;
```

## Topics

### Error Codes

- [kCGImageMetadataErrorUnknown](cgimagemetadataerrors/unknown.md): An error that indicates an unknown condition occurred.
- [kCGImageMetadataErrorUnsupportedFormat](cgimagemetadataerrors/unsupportedformat.md): An error that indicates the metadata was in an unsupported format.
- [kCGImageMetadataErrorBadArgument](cgimagemetadataerrors/badargument.md): An error that indicates a parameter was malformed or contained invalid data.
- [kCGImageMetadataErrorConflictingArguments](cgimagemetadataerrors/conflictingarguments.md): An error that indicates an attempt to save conflicting metadata values.
- [kCGImageMetadataErrorPrefixConflict](cgimagemetadataerrors/prefixconflict.md): An error that indicates an attempt to register a namespace with a prefix that is different than the namespace’s existing prefix.

## See Also

### XMP Metadata

- [CGImageMetadataRef](cgimagemetadata.md): An immutable object that contains the XMP metadata associated with an image.
- [CGMutableImageMetadataRef](cgmutableimagemetadata.md): An opaque type for adding or modifying image metadata.
- [CGImageMetadataTagRef](cgimagemetadatatag.md): An immutable type that contains information about a single piece of image metadata.
- [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md): Discover the public namespaces and prefixes that exist in XMP metadata tags.
- [kCFErrorDomainCGImageMetadata](kcferrordomaincgimagemetadata.md): The domain for metadata-related errors that originate in the Image I/O framework.
