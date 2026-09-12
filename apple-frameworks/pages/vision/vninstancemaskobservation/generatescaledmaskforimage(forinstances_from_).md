> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vninstancemaskobservation/generatescaledmaskforimage(forinstances:from:)](https://developer.apple.com/documentation/vision/vninstancemaskobservation/generatescaledmaskforimage(forinstances:from:))

# generateScaledMaskForImage(forInstances:from:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a high-resolution mask where everything becomes transparent black, except for the instances you specify.

## Declaration

```swift
func generateScaledMaskForImage(forInstances instances: IndexSet, from requestHandler: VNImageRequestHandler) throws -> CVPixelBuffer
```

## Parameters

- `instances`: The collection of instances.
- `requestHandler`: The image request callback.

<a id="return-value"></a>

## Return Value

The pixel buffer that contains the image.

## See Also

### Creating a Mask

- [generateMask(forInstances:)](generatemask%28forinstances_%29.md): Creates a low-resolution mask from the instances you specify.
- [generateMaskedImage(ofInstances:from:croppedToInstancesExtent:)](generatemaskedimage%28ofinstances_from_croppedtoinstancesextent_%29.md): Creates a high-resolution image where everything becomes transparent black, except for the instances you specify.

# generateScaledMaskForImageForInstances:fromRequestHandler:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a high-resolution mask where everything becomes transparent black, except for the instances you specify.

## Declaration

```objectivec
- (CVPixelBufferRef) generateScaledMaskForImageForInstances:(NSIndexSet *) instances fromRequestHandler:(VNImageRequestHandler *) requestHandler error:(NSError **) error;
```

## Parameters

- `instances`: The collection of instances.
- `requestHandler`: The image request callback.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The pixel buffer that contains the image. On failure, this method returns `nil`.

## See Also

### Creating a Mask

- [generateMaskForInstances:error:](generatemask%28forinstances_%29.md): Creates a low-resolution mask from the instances you specify.
- [generateMaskedImageOfInstances:fromRequestHandler:croppedToInstancesExtent:error:](generatemaskedimage%28ofinstances_from_croppedtoinstancesextent_%29.md): Creates a high-resolution image where everything becomes transparent black, except for the instances you specify.
