> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/instancemaskobservation/generatemask(for:)](https://developer.apple.com/documentation/vision/instancemaskobservation/generatemask(for:))

# generateMask(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a low-resolution mask from the instances you specify.

## Declaration

```swift
func generateMask(for instances: IndexSet) throws -> CVPixelBuffer
```

## Parameters

- `instances`: An indexed set of selected instances, where `0` is the background.

<a id="return-value"></a>

## Return Value

The pixel buffer that contains the mask.

## See Also

### Generating a mask

- [generateMaskedImage(for:imageFrom:croppedToInstancesExtent:)](generatemaskedimage%28for_imagefrom_croppedtoinstancesextent_%29.md): Creates a high-resolution image with everything except for the instances you specify masked out.
- [generateScaledMask(for:scaledToImageFrom:)](generatescaledmask%28for_scaledtoimagefrom_%29.md): Creates a high-resolution mask representing a combination of the instances you specify.
