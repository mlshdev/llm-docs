> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygonview/initwithpolygon:](https://developer.apple.com/documentation/mapkit/mkpolygonview/initwithpolygon:)

# initWithPolygon:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a new overlay view using the specified polygon overlay object.

> Use an [MKPolygonRenderer](../mkpolygonrenderer.md) object instead.

## Declaration

```objectivec
- (instancetype) initWithPolygon:(MKPolygon *) polygon;
```

## Parameters

- `polygon`: The polygon overlay containing the information about the area to be drawn. This object must have at least three points defining the polygon in order for this view to draw the corresponding path.

<a id="return-value"></a>

## Return Value

A new polygon overlay view.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)
