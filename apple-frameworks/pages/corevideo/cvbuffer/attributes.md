> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffer/attributes](https://developer.apple.com/documentation/corevideo/cvbuffer/attributes)

# CVBuffer.Attributes

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.

## Declaration

```swift
@dynamicMemberLookup struct Attributes
```

## Topics

### Initializers

- [init(\_:)](attributes/init%28__%29.md): Deprecated. Convert CreationAttributes to Attributes
- [init(merging:)](attributes/init%28merging_%29.md): Deprecated. Resolve multiple attribute specifications into a single instance.
- [init(pixelFormatTypes:size:compatibility:bytesPerRowAlignment:planeAlignment:extendedPixels:)](attributes/init%28pixelformattypes_size_compatibility_bytesperrowalignment_planealignment_extendedpixels_%29.md): Deprecated.
- [init(rawAttributes:)](attributes/init%28rawattributes_%29.md): Deprecated. Create an instance using a freeform attribute dictionary

### Instance Properties

- [pixelFormatTypes](attributes/pixelformattypes.md): Deprecated. Allow multiple pixel formats to be specified in attributes
- [rawAttributes](attributes/rawattributes.md): Deprecated.

### Subscripts

- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-1c1om.md): Deprecated.
- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-1o2ji.md): Deprecated.
- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-21rr.md): Deprecated.
- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-3c1w8.md): Deprecated.
- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-5m9xn.md): Deprecated.
- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-6jvmi.md): Deprecated.
- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-7bidb.md): Deprecated.
- [subscript(dynamicMember:)](attributes/subscript%28dynamicmember_%29-9n8bh.md): Deprecated.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
