> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxpathapi_v3/numberofpaths(at:)](https://developer.apple.com/documentation/professional_video_applications/fxpathapi_v3/numberofpaths(at:))

# numberOfPaths(at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides the number of paths on the object to which your filter is applied, or on your generator.

## Declaration

```swift
func numberOfPaths(at time: CMTime) -> Int
```

## Parameters

- `time`: The time at which you wish to know the number of paths.

<a id="return-value"></a>

## Return Value

The number of paths available to the plugin.

## See Also

### Getting Path Information

- [pathID(\_:for:)](pathid%28__for_%29.md): Gets the unique ID of the path at the index requested.
- [name(\_:ofPath:)](name%28__ofpath_%29.md): Provides the name the user has entered for the path with the given ID.
- [isPath(\_:open:at:)](ispath%28__open_at_%29.md): Tells whether the path is opened or closed.
- [isPath(\_:inverted:at:)](ispath%28__inverted_at_%29.md): Tells whether the path is inverted or not.
- [style(\_:ofPath:)](style%28__ofpath_%29.md): Provides the style of the path — linear, bezier, or b-spline.
- [length(\_:ofPath:at:)](length%28__ofpath_at_%29.md): Provides you the length of the entire path.
- [length(\_:ofSegment:ofPath:at:)](length%28__ofsegment_ofpath_at_%29.md): Provides the length of one segment of the entire path.
- [number(ofVertices:inPath:at:)](number%28ofvertices_inpath_at_%29.md): Provides the number of vertices in the given path at the given time.
- [vertex(\_:at:ofPath:at:)](vertex%28__at_ofpath_at_%29.md): Provides information about a single vertex on the path at the given time.
- [point(\_:atPercentageOfDistance:alongPath:at:)](point%28__atpercentageofdistance_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s length equal to the value of `percentDist`.
- [point(\_:atPercentageOfParameter:alongPath:at:)](point%28__atpercentageofparameter_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.
- [blendMode(\_:ofPath:)](blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo(\_:forPath:at:)](pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.

# numberOfPathsAtTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the number of paths on the object to which your filter is applied, or on your generator.

## Declaration

```objectivec
- (NSUInteger) numberOfPathsAtTime:(CMTime) time;
```

## Parameters

- `time`: The time at which you wish to know the number of paths.

<a id="return-value"></a>

## Return Value

The number of paths available to the plugin.

## See Also

### Getting Path Information

- [pathID:forIndex:error:](pathid%28__for_%29.md): Gets the unique ID of the path at the index requested.
- [name:ofPath:error:](name%28__ofpath_%29.md): Provides the name the user has entered for the path with the given ID.
- [isPath:open:atTime:error:](ispath%28__open_at_%29.md): Tells whether the path is opened or closed.
- [isPath:inverted:atTime:error:](ispath%28__inverted_at_%29.md): Tells whether the path is inverted or not.
- [style:ofPath:error:](style%28__ofpath_%29.md): Provides the style of the path — linear, bezier, or b-spline.
- [length:ofPath:atTime:error:](length%28__ofpath_at_%29.md): Provides you the length of the entire path.
- [length:ofSegment:ofPath:atTime:error:](length%28__ofsegment_ofpath_at_%29.md): Provides the length of one segment of the entire path.
- [numberOfVertices:inPath:atTime:error:](number%28ofvertices_inpath_at_%29.md): Provides the number of vertices in the given path at the given time.
- [vertex:atIndex:ofPath:atTime:error:](vertex%28__at_ofpath_at_%29.md): Provides information about a single vertex on the path at the given time.
- [point:atPercentageOfDistance:alongPath:atTime:error:](point%28__atpercentageofdistance_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s length equal to the value of `percentDist`.
- [point:atPercentageOfParameter:alongPath:atTime:error:](point%28__atpercentageofparameter_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.
- [blendMode:ofPath:error:](blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo:forPath:atTime:error:](pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.
