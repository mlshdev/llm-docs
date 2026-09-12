> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/instancemaskobservation/generatemaskedimage(for:imagefrom:croppedtoinstancesextent:)](https://developer.apple.com/documentation/vision/instancemaskobservation/generatemaskedimage(for:imagefrom:croppedtoinstancesextent:))

# generateMaskedImage(for:imageFrom:croppedToInstancesExtent:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a high-resolution image with everything except for the instances you specify masked out.

## Declaration

```swift
func generateMaskedImage(for instances: IndexSet, imageFrom requestHandler: ImageRequestHandler, croppedToInstancesExtent: Bool = false) throws -> CVPixelBuffer
```

## Parameters

- `instances`: An indexed set of selected instances, where `0` is the background.
- `requestHandler`: A request handler containing an image to be masked.
- `croppedToInstancesExtent`: Crops the image to the smallest rectangle containing all instances. Default is `false`.

<a id="return-value"></a>

## Return Value

The pixel buffer that contains the image.

<a id="Discussion"></a>

## Discussion

## See Also

### Generating a mask

- [generateMask(for:)](generatemask%28for_%29.md): Creates a low-resolution mask from the instances you specify.
- [generateScaledMask(for:scaledToImageFrom:)](generatescaledmask%28for_scaledtoimagefrom_%29.md): Creates a high-resolution mask representing a combination of the instances you specify.
