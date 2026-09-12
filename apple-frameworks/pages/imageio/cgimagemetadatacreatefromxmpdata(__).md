> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatacreatefromxmpdata(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatacreatefromxmpdata(_:))

# CGImageMetadataCreateFromXMPData(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a collection of metadata tags from the specified XMP data.

## Declaration

```swift
func CGImageMetadataCreateFromXMPData(_ data: CFData) -> CGImageMetadata?
```

## Parameters

- `data`: An object containin XMP data. The contents of this object must represent a complete XMP tree. The XMP data may include packet headers.

<a id="return-value"></a>

## Return Value

A [CGImageMetadata](cgimagemetadata.md) object that contains the parsed metadata information, or `NULL` if an error occurs. You are responsible for releasing the returned object.

<a id="Discussion"></a>

## Discussion

Use this function to parse the raw XMP data from an image and build a parseable set of metadata tags. Use the returned object to enumerate the tags or search for individual tags within the collection.

# CGImageMetadataCreateFromXMPData (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a collection of metadata tags from the specified XMP data.

## Declaration

```objectivec
extern CGImageMetadataRefCGImageMetadataCreateFromXMPData(CFDataRef data);
```

## Parameters

- `data`: An object containin XMP data. The contents of this object must represent a complete XMP tree. The XMP data may include packet headers.

<a id="return-value"></a>

## Return Value

A [CGImageMetadataRef](cgimagemetadata.md) object that contains the parsed metadata information, or `NULL` if an error occurs. You are responsible for releasing the returned object.

<a id="Discussion"></a>

## Discussion

Use this function to parse the raw XMP data from an image and build a parseable set of metadata tags. Use the returned object to enumerate the tags or search for individual tags within the collection.
