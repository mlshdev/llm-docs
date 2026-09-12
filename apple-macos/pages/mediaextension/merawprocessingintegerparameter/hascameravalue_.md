> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingintegerparameter/hascameravalue:](https://developer.apple.com/documentation/mediaextension/merawprocessingintegerparameter/hascameravalue:)

# hasCameraValue:

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

The optional camera value for this parameter.

## Declaration

```objectivec
- (BOOL) hasCameraValue:(NSInteger *) outCameraValue;
```

## Parameters

- `outCameraValue`: The returned camera value for the parameter.

<a id="return-value"></a>

## Return Value

`YES` if a camera value exists for this parameter; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This value represents the “as shot” configured camera value for a parameter at the time the media was captured. If the return value is `YES` and `outCameraValue` isn’t nil, the value held by `outCameraValue` will be set to the camera value. If the return value is `NO` and `outCameraValue` isn’t nil, the value held by `outCameraValue` will be set to 0.

## See Also

### Inspecting a parameter

- [hasNeutralValue:](hasneutralvalue_.md): The optional neutral value for this parameter.
