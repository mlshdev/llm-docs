> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/instancemaskobservation/generatescaledmask(for:scaledtoimagefrom:)](https://developer.apple.com/documentation/vision/instancemaskobservation/generatescaledmask(for:scaledtoimagefrom:))

# generateScaledMask(for:scaledToImageFrom:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a high-resolution mask representing a combination of the instances you specify.

## Declaration

```swift
func generateScaledMask(for instances: IndexSet, scaledToImageFrom requestHandler: ImageRequestHandler) throws -> CVPixelBuffer
```

## Parameters

- `instances`: An indexed set of selected instances, where `0` is the background.
- `requestHandler`: A request handler containing an image to be masked.

<a id="return-value"></a>

## Return Value

The pixel buffer that contains the mask.

## See Also

### Generating a mask

- [generateMask(for:)](generatemask%28for_%29.md): Creates a low-resolution mask from the instances you specify.
- [generateMaskedImage(for:imageFrom:croppedToInstancesExtent:)](generatemaskedimage%28for_imagefrom_croppedtoinstancesextent_%29.md): Creates a high-resolution image with everything except for the instances you specify masked out.
