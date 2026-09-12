> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/apply(tiledextent:inputs:arguments:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/apply(tiledextent:inputs:arguments:))

# apply(tiledExtent:inputs:arguments:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Call this method on your Core Image Processor Kernel subclass to create a new image based on an array of tile extents that together cover the output.

## Declaration

```swift
class func apply(tiledExtent tileExtents: [CIVector], inputs: [CIImage]?, arguments args: [String : Any]?) throws -> CIImage
```

## Parameters

- `tileExtents`: The array of bounding rectangles that the `CIImageProcessorKernel` can produce. Each rectangle in the array is an object created using `/CIVector/vectorWithCGRect:` This method will return `CIImage.emptyImage` if the rectangles in the array have gaps or overlaps.
- `inputs`: An array of [CIImage](../ciimage.md) objects to use as input.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md)

<a id="discussion"></a>

## Discussion

Each tile is a CGRect encoded as a CIVector using +\[CIVector vectorWithCGRect:\]. The overall output extent is computed as the union of all tile extents.

This method will return `nil` and an error if:

- calling [outputFormat](outputformat.md) on your subclass returns an unsupported format.
- calling [formatForInput(at:)](formatforinput%28at_%29.md) on your subclass returns an unsupported format.
- your subclass does not implement [process(with:arguments:output:)](process%28with_arguments_output_%29.md)

# applyWithTiledExtent:inputs:arguments:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Call this method on your Core Image Processor Kernel subclass to create a new image based on an array of tile extents that together cover the output.

## Declaration

```objectivec
+ (CIImage *) applyWithTiledExtent:(NSArray<CIVector *> *) tileExtents inputs:(NSArray<CIImage *> *) inputs arguments:(NSDictionary<NSString *,id> *) args error:(NSError **) error;
```

## Parameters

- `tileExtents`: The array of bounding rectangles that the `CIImageProcessorKernel` can produce. Each rectangle in the array is an object created using `/CIVector/vectorWithCGRect:` This method will return `CIImage.emptyImage` if the rectangles in the array have gaps or overlaps.
- `inputs`: An array of [CIImage](../ciimage.md) objects to use as input.
- `error`: Pointer to the `NSError` object into which processing errors will be written.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md). On failure, this method returns `nil`.

<a id="discussion"></a>

## Discussion

Each tile is a CGRect encoded as a CIVector using +\[CIVector vectorWithCGRect:\]. The overall output extent is computed as the union of all tile extents.

This method will return `nil` and an error if:

- calling [outputFormat](outputformat.md) on your subclass returns an unsupported format.
- calling [formatForInputAtIndex:](formatforinput%28at_%29.md) on your subclass returns an unsupported format.
- your subclass does not implement [processWithInputs:arguments:output:error:](process%28with_arguments_output_%29.md)
