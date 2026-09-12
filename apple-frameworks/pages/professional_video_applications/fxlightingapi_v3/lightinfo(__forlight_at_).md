> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxlightingapi_v3/lightinfo(_:forlight:at:)](https://developer.apple.com/documentation/professional_video_applications/fxlightingapi_v3/lightinfo(_:forlight:at:))

# lightInfo(\_:forLight:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides information about a light at a particular time.

## Declaration

```swift
func lightInfo(_ light: UnsafeMutablePointer<FxLight>!, forLight lightIndex: Int, at time: CMTime) throws
```

## Parameters

- `light`: A pointer to an FxLight structure to receive information about a particular light in the scene.
- `lightIndex`: The index of the light whose information you wish to retrieve.
- `time`: The time for which you want lighting information.

## See Also

### Getting Lighting Information

- [numberOfLights(at:)](numberoflights%28at_%29.md): Retrieves the number of lights at the passed-in time.
- [FxLight](../fxlight.md): A structure that contains lighting information.

# lightInfo:forLight:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides information about a light at a particular time.

## Declaration

```objectivec
- (BOOL) lightInfo:(FxLight *) light forLight:(NSUInteger) lightIndex atTime:(CMTime) time error:(NSError * *) error;
```

## Parameters

- `light`: A pointer to an FxLight structure to receive information about a particular light in the scene.
- `lightIndex`: The index of the light whose information you wish to retrieve.
- `time`: The time for which you want lighting information.
- `error`: If any errors occur during processing, this contains a pointer to an error object upon return.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Getting Lighting Information

- [numberOfLightsAtTime:](numberoflights%28at_%29.md): Retrieves the number of lights at the passed-in time.
- [FxLight](../fxlight.md): A structure that contains lighting information.
