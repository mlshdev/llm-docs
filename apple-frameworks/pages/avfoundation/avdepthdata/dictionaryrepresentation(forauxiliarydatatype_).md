> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/dictionaryrepresentation(forauxiliarydatatype:)](https://developer.apple.com/documentation/avfoundation/avdepthdata/dictionaryrepresentation(forauxiliarydatatype:))

# dictionaryRepresentation(forAuxiliaryDataType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a dictionary representation of the depth data suitable for writing into an image file.

## Declaration

```swift
func dictionaryRepresentation(forAuxiliaryDataType outAuxDataType: AutoreleasingUnsafeMutablePointer<NSString?>?) -> [AnyHashable : Any]?
```

## Parameters

- `outAuxDataType`: On output, either [kCGImageAuxiliaryDataTypeDisparity](../../imageio/kcgimageauxiliarydatatypedisparity.md) or [kCGImageAuxiliaryDataTypeDepth](../../imageio/kcgimageauxiliarydatatypedepth.md), depending on the depth data’s type.

<a id="Discussion"></a>

## Discussion

When using `CGImageDestination` functions to write depth data (along with image data) to a HEIF, JPEG, or DNG file, you can use this method to obtain a dictionary of primitive depth map information, then use the [CGImageDestinationAddAuxiliaryDataInfo(\_:\_:\_:)](../../imageio/cgimagedestinationaddauxiliarydatainfo%28______%29.md) function to embed that data into the output file.

## See Also

### Creating depth data

- [init(fromDictionaryRepresentation:)](init%28fromdictionaryrepresentation_%29.md): Creates a depth data object from depth information such as that found in an image file.

# dictionaryRepresentationForAuxiliaryDataType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a dictionary representation of the depth data suitable for writing into an image file.

## Declaration

```objectivec
- (NSDictionary *) dictionaryRepresentationForAuxiliaryDataType:(NSString **) outAuxDataType;
```

## Parameters

- `outAuxDataType`: On output, either [kCGImageAuxiliaryDataTypeDisparity](../../imageio/kcgimageauxiliarydatatypedisparity.md) or [kCGImageAuxiliaryDataTypeDepth](../../imageio/kcgimageauxiliarydatatypedepth.md), depending on the depth data’s type.

<a id="Discussion"></a>

## Discussion

When using `CGImageDestination` functions to write depth data (along with image data) to a HEIF, JPEG, or DNG file, you can use this method to obtain a dictionary of primitive depth map information, then use the [CGImageDestinationAddAuxiliaryDataInfo](../../imageio/cgimagedestinationaddauxiliarydatainfo%28______%29.md) function to embed that data into the output file.

## See Also

### Creating depth data

- [depthDataFromDictionaryRepresentation:error:](init%28fromdictionaryrepresentation_%29.md): Creates a depth data object from depth information such as that found in an image file.
