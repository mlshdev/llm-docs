> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxvertex](https://developer.apple.com/documentation/professional_video_applications/fxvertex)

# FxVertex (Swift)

**Framework:** Professional Video Applications  
**Kind:** Structure  
**Availability:** FxPlug 3.1+

The properties of one vertex in a path.

## Declaration

```swift
struct FxVertex
```

## Topics

### Instance Properties

- [location](fxvertex/location.md): The location of the point in the 2D image.
- [inTangent](fxvertex/intangent.md): The x and y vectors of the incoming tangent.
- [interpStyle](fxvertex/interpstyle.md): The style of interpolation at this vertex.
- [location](fxvertex/location.md): The location of the point in the 2D image.
- [outTangent](fxvertex/outtangent.md): The x and y vectors of the outgoing tangent.
- [xSplineWeight](fxvertex/xsplineweight.md): The weight of the x-spline at this point.
- [interpStyle](fxvertex/interpstyle.md): The style of interpolation at this vertex.

### Initializers

- [init()](fxvertex/init%28%29.md)
- [init(location:inTangent:outTangent:xSplineWeight:interpStyle:)](fxvertex/init%28location_intangent_outtangent_xsplineweight_interpstyle_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structuring Path Information

- [FxPathGeometryInfo](fxpathgeometryinfo.md): A structure that defines the geometry information of the path.

# FxVertex (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Structure

The properties of one vertex in a path.

## Declaration

```objectivec
typedef struct FxVertex { ... } FxVertex;
```

## Topics

### Instance Properties

- [location](fxvertex/location.md): The location of the point in the 2D image.
- [inTangent](fxvertex/intangent.md): The x and y vectors of the incoming tangent.
- [interpStyle](fxvertex/interpstyle.md): The style of interpolation at this vertex.
- [location](fxvertex/location.md): The location of the point in the 2D image.
- [outTangent](fxvertex/outtangent.md): The x and y vectors of the outgoing tangent.
- [xSplineWeight](fxvertex/xsplineweight.md): The weight of the x-spline at this point.
- [interpStyle](fxvertex/interpstyle.md): The style of interpolation at this vertex.

## See Also

### Structuring Path Information

- [FxPathGeometryInfo](fxpathgeometryinfo.md): A structure that defines the geometry information of the path.
