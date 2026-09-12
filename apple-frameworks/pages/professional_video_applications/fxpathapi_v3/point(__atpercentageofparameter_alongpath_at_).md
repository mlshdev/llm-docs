> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxpathapi_v3/point(_:atpercentageofparameter:alongpath:at:)](https://developer.apple.com/documentation/professional_video_applications/fxpathapi_v3/point(_:atpercentageofparameter:alongpath:at:))

# point(\_:atPercentageOfParameter:alongPath:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.

## Declaration

```swift
func point(_ point: UnsafeMutablePointer<FxPoint2D>!, atPercentageOfParameter percentParameter: Double, alongPath pathID: FxPathID!, at time: CMTime) throws
```

## Parameters

- `point`: Upon return, contains the point that is th desired percentage of the parameter value along the path.
- `percentParameter`: The percentage of the parameter along the path where you wish to find a point.
- `pathID`: The ID of the path you want to query.
- `time`: The time at which you wish to query the path.

## See Also

### Getting Path Information

- [numberOfPaths(at:)](numberofpaths%28at_%29.md): Provides the number of paths on the object to which your filter is applied, or on your generator.
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
- [blendMode(\_:ofPath:)](blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo(\_:forPath:at:)](pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.

# point:atPercentageOfParameter:alongPath:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.

## Declaration

```objectivec
- (BOOL) point:(FxPoint2D *) point atPercentageOfParameter:(double) percentParameter alongPath:(FxPathID) pathID atTime:(CMTime) time error:(NSError * *) err;
```

## Parameters

- `point`: Upon return, contains the point that is th desired percentage of the parameter value along the path.
- `percentParameter`: The percentage of the parameter along the path where you wish to find a point.
- `pathID`: The ID of the path you want to query.
- `time`: The time at which you wish to query the path.
- `err`: If this is not `nil`, then any errors that occur in trying to retrieve the path ID will be returned in this variable.

<a id="return-value"></a>

## Return Value

Returns `YES` if retrieving the percentage was successful, `NO` otherwise. If it returns `NO` and `err` was not `nil`, then `*err` will point to an `NSError` object containing information about what went wrong.

## See Also

### Getting Path Information

- [numberOfPathsAtTime:](numberofpaths%28at_%29.md): Provides the number of paths on the object to which your filter is applied, or on your generator.
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
- [blendMode:ofPath:error:](blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo:forPath:atTime:error:](pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.
