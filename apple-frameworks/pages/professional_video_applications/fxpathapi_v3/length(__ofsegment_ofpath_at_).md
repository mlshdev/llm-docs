> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxpathapi_v3/length(_:ofsegment:ofpath:at:)](https://developer.apple.com/documentation/professional_video_applications/fxpathapi_v3/length(_:ofsegment:ofpath:at:))

# length(\_:ofSegment:ofPath:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides the length of one segment of the entire path.

## Declaration

```swift
func length(_ length: UnsafeMutablePointer<Double>!, ofSegment segmentIndex: Int, ofPath pathID: FxPathID!, at time: CMTime) throws
```

## Parameters

- `length`: Upon return, contains the length (in pixels) of the desired segment.
- `segmentIndex`: Which segment of the path you wish to evaluate the length of.
- `pathID`: The ID of the path whose segment you wish to evaluate.
- `time`: The time at which to evaluate the length of a segment of a path.

## See Also

### Getting Path Information

- [numberOfPaths(at:)](numberofpaths%28at_%29.md): Provides the number of paths on the object to which your filter is applied, or on your generator.
- [pathID(\_:for:)](pathid%28__for_%29.md): Gets the unique ID of the path at the index requested.
- [name(\_:ofPath:)](name%28__ofpath_%29.md): Provides the name the user has entered for the path with the given ID.
- [isPath(\_:open:at:)](ispath%28__open_at_%29.md): Tells whether the path is opened or closed.
- [isPath(\_:inverted:at:)](ispath%28__inverted_at_%29.md): Tells whether the path is inverted or not.
- [style(\_:ofPath:)](style%28__ofpath_%29.md): Provides the style of the path — linear, bezier, or b-spline.
- [length(\_:ofPath:at:)](length%28__ofpath_at_%29.md): Provides you the length of the entire path.
- [number(ofVertices:inPath:at:)](number%28ofvertices_inpath_at_%29.md): Provides the number of vertices in the given path at the given time.
- [vertex(\_:at:ofPath:at:)](vertex%28__at_ofpath_at_%29.md): Provides information about a single vertex on the path at the given time.
- [point(\_:atPercentageOfDistance:alongPath:at:)](point%28__atpercentageofdistance_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s length equal to the value of `percentDist`.
- [point(\_:atPercentageOfParameter:alongPath:at:)](point%28__atpercentageofparameter_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.
- [blendMode(\_:ofPath:)](blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo(\_:forPath:at:)](pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.

# length:ofSegment:ofPath:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the length of one segment of the entire path.

## Declaration

```objectivec
- (BOOL) length:(double *) length ofSegment:(NSUInteger) segmentIndex ofPath:(FxPathID) pathID atTime:(CMTime) time error:(NSError * *) err;
```

## Parameters

- `length`: Upon return, contains the length (in pixels) of the desired segment.
- `segmentIndex`: Which segment of the path you wish to evaluate the length of.
- `pathID`: The ID of the path whose segment you wish to evaluate.
- `time`: The time at which to evaluate the length of a segment of a path.
- `err`: If this is not `nil`, then any errors which occur when evaluating the length of a segment of the path.

<a id="return-value"></a>

## Return Value

Returns `YES` if retrieving the length of the segment was successful, `NO` otherwise. If it returns `NO` and `err` was not `nil`, then `*err` will point to an `NSError` object containing information about what went wrong.

## See Also

### Getting Path Information

- [numberOfPathsAtTime:](numberofpaths%28at_%29.md): Provides the number of paths on the object to which your filter is applied, or on your generator.
- [pathID:forIndex:error:](pathid%28__for_%29.md): Gets the unique ID of the path at the index requested.
- [name:ofPath:error:](name%28__ofpath_%29.md): Provides the name the user has entered for the path with the given ID.
- [isPath:open:atTime:error:](ispath%28__open_at_%29.md): Tells whether the path is opened or closed.
- [isPath:inverted:atTime:error:](ispath%28__inverted_at_%29.md): Tells whether the path is inverted or not.
- [style:ofPath:error:](style%28__ofpath_%29.md): Provides the style of the path — linear, bezier, or b-spline.
- [length:ofPath:atTime:error:](length%28__ofpath_at_%29.md): Provides you the length of the entire path.
- [numberOfVertices:inPath:atTime:error:](number%28ofvertices_inpath_at_%29.md): Provides the number of vertices in the given path at the given time.
- [vertex:atIndex:ofPath:atTime:error:](vertex%28__at_ofpath_at_%29.md): Provides information about a single vertex on the path at the given time.
- [point:atPercentageOfDistance:alongPath:atTime:error:](point%28__atpercentageofdistance_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s length equal to the value of `percentDist`.
- [point:atPercentageOfParameter:alongPath:atTime:error:](point%28__atpercentageofparameter_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.
- [blendMode:ofPath:error:](blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo:forPath:atTime:error:](pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.
