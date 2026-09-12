> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolygonrenderer/strokestart](https://developer.apple.com/documentation/mapkit/mkpolygonrenderer/strokestart)

# strokeStart (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The unit distance along the polygon where the stroke starts.

## Declaration

```swift
var strokeStart: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property and [strokeEnd](strokeend.md) to render a portion of the polygon. Use [location(atPointIndex:)](../mkmultipoint/location%28atpointindex_%29.md) to get unit distance locations for point indices along the polygon.

## See Also

### Accessing the stroke

- [strokeEnd](strokeend.md): The unit distance along the polygon where the stroke ends.

# strokeStart (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The unit distance along the polygon where the stroke starts.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat strokeStart;
```

<a id="Discussion"></a>

## Discussion

Use this property and [strokeEnd](strokeend.md) to render a portion of the polygon. Use [locationAtPointIndex:](../mkmultipoint/location%28atpointindex_%29.md) to get unit distance locations for point indices along the polygon.

## See Also

### Accessing the stroke

- [strokeEnd](strokeend.md): The unit distance along the polygon where the stroke ends.
