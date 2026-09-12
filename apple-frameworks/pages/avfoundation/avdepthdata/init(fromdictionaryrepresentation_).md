> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/init(fromdictionaryrepresentation:)](https://developer.apple.com/documentation/avfoundation/avdepthdata/init(fromdictionaryrepresentation:))

# init(fromDictionaryRepresentation:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a depth data object from depth information such as that found in an image file.

## Declaration

```swift
convenience init(fromDictionaryRepresentation imageSourceAuxDataInfoDictionary: [AnyHashable : Any]) throws
```

## Parameters

- `imageSourceAuxDataInfoDictionary`: A dictionary of primitive depth-related information, in the format provided by the  [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function.

## Mentioned In

- [Creating auxiliary depth data manually](../creating-auxiliary-depth-data-manually.md)

<a id="Discussion"></a>

## Discussion

When using `CGImageSource` functions to read from a HEIF, JPEG, or DNG file containing depth data (as well as image data), you can use the  [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function to load primitive depth map information, then use this initializer to create an [AVDepthData](../avdepthdata.md) object, as shown below.

```swift
- (nullable AVDepthData *)depthDataFromImageData:(nonnull NSData *)imageData {
	AVDepthData *depthData = nil;

    CGImageSourceRef imageSource = CGImageSourceCreateWithData((CFDataRef)imageData, NULL);
	if (imageSource) {
		NSDictionary *auxDataDictionary = (__bridge NSDictionary *)CGImageSourceCopyAuxiliaryDataInfoAtIndex(imageSource, 0, kCGImageAuxiliaryDataTypeDisparity);
		if (auxDataDictionary) {
			depthData = [AVDepthData depthDataFromDictionaryRepresentation:auxDataDictionary error:NULL];
		}

		CFRelease(imageSource);
	}

    return depthData;
}
```

## See Also

### Creating depth data

- [dictionaryRepresentation(forAuxiliaryDataType:)](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary representation of the depth data suitable for writing into an image file.

# depthDataFromDictionaryRepresentation:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a depth data object from depth information such as that found in an image file.

## Declaration

```objectivec
+ (instancetype) depthDataFromDictionaryRepresentation:(NSDictionary *) imageSourceAuxDataInfoDictionary error:(NSError **) outError;
```

## Parameters

- `imageSourceAuxDataInfoDictionary`: A dictionary of primitive depth-related information, in the format provided by the  [CGImageSourceCopyAuxiliaryDataInfoAtIndex](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

## Mentioned In

- [Creating auxiliary depth data manually](../creating-auxiliary-depth-data-manually.md)

<a id="Discussion"></a>

## Discussion

When using `CGImageSource` functions to read from a HEIF, JPEG, or DNG file containing depth data (as well as image data), you can use the  [CGImageSourceCopyAuxiliaryDataInfoAtIndex](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md) function to load primitive depth map information, then use this initializer to create an [AVDepthData](../avdepthdata.md) object, as shown below.

```swift
- (nullable AVDepthData *)depthDataFromImageData:(nonnull NSData *)imageData {
	AVDepthData *depthData = nil;

    CGImageSourceRef imageSource = CGImageSourceCreateWithData((CFDataRef)imageData, NULL);
	if (imageSource) {
		NSDictionary *auxDataDictionary = (__bridge NSDictionary *)CGImageSourceCopyAuxiliaryDataInfoAtIndex(imageSource, 0, kCGImageAuxiliaryDataTypeDisparity);
		if (auxDataDictionary) {
			depthData = [AVDepthData depthDataFromDictionaryRepresentation:auxDataDictionary error:NULL];
		}

		CFRelease(imageSource);
	}

    return depthData;
}
```

## See Also

### Creating depth data

- [dictionaryRepresentationForAuxiliaryDataType:](dictionaryrepresentation%28forauxiliarydatatype_%29.md): Returns a dictionary representation of the depth data suitable for writing into an image file.
