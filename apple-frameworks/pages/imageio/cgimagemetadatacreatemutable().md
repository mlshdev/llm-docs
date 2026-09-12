> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatacreatemutable()](https://developer.apple.com/documentation/imageio/cgimagemetadatacreatemutable())

# CGImageMetadataCreateMutable() (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty, mutable image metdata opaque type.

## Declaration

```swift
func CGImageMetadataCreateMutable() -> CGMutableImageMetadata
```

<a id="return-value"></a>

## Return Value

A [CGMutableImageMetadata](cgmutableimagemetadata.md) object that contains no metadata information, or `NULL` if an error occurs. You are responsible for releasing the returned object.

## See Also

### Creating a Mutable Metadata Type

- [CGImageMetadataCreateMutableCopy(\_:)](cgimagemetadatacreatemutablecopy%28__%29.md): Creates a deep, mutable copy of the specified metadata information.

# CGImageMetadataCreateMutable (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty, mutable image metdata opaque type.

## Declaration

```objectivec
extern CGMutableImageMetadataRefCGImageMetadataCreateMutable();
```

<a id="return-value"></a>

## Return Value

A [CGMutableImageMetadataRef](cgmutableimagemetadata.md) object that contains no metadata information, or `NULL` if an error occurs. You are responsible for releasing the returned object.

## See Also

### Creating a Mutable Metadata Type

- [CGImageMetadataCreateMutableCopy](cgimagemetadatacreatemutablecopy%28__%29.md): Creates a deep, mutable copy of the specified metadata information.
