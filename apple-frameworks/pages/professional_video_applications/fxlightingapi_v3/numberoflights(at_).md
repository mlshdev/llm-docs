> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxlightingapi_v3/numberoflights(at:)](https://developer.apple.com/documentation/professional_video_applications/fxlightingapi_v3/numberoflights(at:))

# numberOfLights(at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Retrieves the number of lights at the passed-in time.

## Declaration

```swift
func numberOfLights(at time: CMTime) -> Int
```

## Parameters

- `time`: The time at which you wish to obtain the number of lights.

## See Also

### Getting Lighting Information

- [lightInfo(\_:forLight:at:)](lightinfo%28__forlight_at_%29.md): Provides information about a light at a particular time.
- [FxLight](../fxlight.md): A structure that contains lighting information.

# numberOfLightsAtTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Retrieves the number of lights at the passed-in time.

## Declaration

```objectivec
- (NSUInteger) numberOfLightsAtTime:(CMTime) time;
```

## Parameters

- `time`: The time at which you wish to obtain the number of lights.

## See Also

### Getting Lighting Information

- [lightInfo:forLight:atTime:error:](lightinfo%28__forlight_at_%29.md): Provides information about a light at a particular time.
- [FxLight](../fxlight.md): A structure that contains lighting information.
