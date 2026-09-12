> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtimedmetadatagroup/copyformatdescription()](https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/copyformatdescription())

# copyFormatDescription() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a format description based on the receiver’s items.

## Declaration

```swift
func copyFormatDescription() -> CMMetadataFormatDescription?
```

<a id="return-value"></a>

## Return Value

An instance of [CMMetadataFormatDescription](../../coremedia/cmmetadataformatdescription.md) sufficient to describe the contents of all the items referenced by the object.

<a id="Discussion"></a>

## Discussion

The returned format description is suitable for use as the format hint parameter when creating an instance of [AVAssetWriterInput](../avassetwriterinput.md).

Each item referenced by the receiver must carry a non-`nil` value for its `dataType` property.  An exception will be thrown if any item does not have a data type.

# copyFormatDescription (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a format description based on the receiver’s items.

## Declaration

```objectivec
- (CMMetadataFormatDescriptionRef) copyFormatDescription;
```

<a id="return-value"></a>

## Return Value

An instance of [CMMetadataFormatDescriptionRef](../../coremedia/cmmetadataformatdescription.md) sufficient to describe the contents of all the items referenced by the object.

<a id="Discussion"></a>

## Discussion

The returned format description is suitable for use as the format hint parameter when creating an instance of [AVAssetWriterInput](../avassetwriterinput.md).

Each item referenced by the receiver must carry a non-`nil` value for its `dataType` property.  An exception will be thrown if any item does not have a data type.
