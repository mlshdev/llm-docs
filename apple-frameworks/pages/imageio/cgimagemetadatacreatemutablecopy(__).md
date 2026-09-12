> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatacreatemutablecopy(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatacreatemutablecopy(_:))

# CGImageMetadataCreateMutableCopy(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a deep, mutable copy of the specified metadata information.

## Declaration

```swift
func CGImageMetadataCreateMutableCopy(_ metadata: CGImageMetadata) -> CGMutableImageMetadata?
```

## Parameters

- `metadata`: The metadata information to copy. This function makes a deep copy of all [CGImageMetadataTag](cgimagemetadatatag.md) structures in this parameter, including the values for the tags.

<a id="return-value"></a>

## Return Value

A new [CGMutableImageMetadata](cgmutableimagemetadata.md) type that contains a deep copy of the tags in the metadata parameter.

<a id="Discussion"></a>

## Discussion

Typically, you call this function before modifying the metadata information for an image. Use it to create a copy of the image’s existing metadata information, and then add or modify that metadata before saving it with the image.

## See Also

### Creating a Mutable Metadata Type

- [CGImageMetadataCreateMutable()](cgimagemetadatacreatemutable%28%29.md): Creates an empty, mutable image metdata opaque type.

# CGImageMetadataCreateMutableCopy (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a deep, mutable copy of the specified metadata information.

## Declaration

```objectivec
extern CGMutableImageMetadataRefCGImageMetadataCreateMutableCopy(CGImageMetadataRef metadata);
```

## Parameters

- `metadata`: The metadata information to copy. This function makes a deep copy of all [CGImageMetadataTagRef](cgimagemetadatatag.md) structures in this parameter, including the values for the tags.

<a id="return-value"></a>

## Return Value

A new [CGMutableImageMetadataRef](cgmutableimagemetadata.md) type that contains a deep copy of the tags in the metadata parameter.

<a id="Discussion"></a>

## Discussion

Typically, you call this function before modifying the metadata information for an image. Use it to create a copy of the image’s existing metadata information, and then add or modify that metadata before saving it with the image.

## See Also

### Creating a Mutable Metadata Type

- [CGImageMetadataCreateMutable](cgimagemetadatacreatemutable%28%29.md): Creates an empty, mutable image metdata opaque type.
