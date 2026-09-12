> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cncompositioninfo-vzoh](https://developer.apple.com/documentation/cinematic/cncompositioninfo-vzoh)

# CNCompositionInfo

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An object that enables you to add the appropriate number of tracks for a Cinematic asset.

## Declaration

```objectivec
@interface CNCompositionInfo : CNAssetInfo
```

## Topics

### Instance Methods

- [insertTimeRange:ofCinematicAssetInfo:atTime:error:](cncompositioninfo-vzoh/inserttimerange_ofcinematicassetinfo_attime_error_.md): Inserts a time range of Cinematic source asset into the corresponding tracks of a composition.

## Relationships

### Inherits From

- [CNAssetInfo](cnassetinfo-8ja4t.md)

## See Also

### Reading and rendering

- [CNAssetInfo](cnassetinfo-8ja4t.md): An object that provides Cinematic-specific information about an asset, including its tracks.
- [CNRenderingSession](cnrenderingsession-8yghc.md): An object representing the context in which rendering occurs.
- [CNRenderingSessionAttributes](cnrenderingsessionattributes.md): A structure for movie-wide attributes required for proper rendering.
- [CNRenderingSessionFrameAttributes](cnrenderingsessionframeattributes.md): Creates an object with the per frame attributes that control the appearance of a single frame of the Cinematic movie.
