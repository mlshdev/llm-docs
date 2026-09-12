> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolylineview/initwithpolyline:](https://developer.apple.com/documentation/mapkit/mkpolylineview/initwithpolyline:)

# initWithPolyline:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a new overlay view using the specified polyline overlay object

> Use an [MKPolylineRenderer](../mkpolylinerenderer.md) object instead.

## Declaration

```objectivec
- (instancetype) initWithPolyline:(MKPolyline *) polyline;
```

## Parameters

- `polyline`: The polyline overlay object containing the information about the path to be stroked. This object must have at least two points defined in order for this view to draw the corresponding path.

<a id="return-value"></a>

## Return Value

A new polyline overlay view.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)
