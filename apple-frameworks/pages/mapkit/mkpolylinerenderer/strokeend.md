> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpolylinerenderer/strokeend](https://developer.apple.com/documentation/mapkit/mkpolylinerenderer/strokeend)

# strokeEnd (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The unit distance along the line where the stroke ends.

## Declaration

```swift
var strokeEnd: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property and [strokeStart](strokestart.md) to render a portion of the line. Use [location(atPointIndex:)](../mkmultipoint/location%28atpointindex_%29.md) to get unit distance locations for point indices along the line.

## See Also

### Accessing the stroke

- [strokeStart](strokestart.md): The unit distance along the line where the stroke starts.

# strokeEnd (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The unit distance along the line where the stroke ends.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat strokeEnd;
```

<a id="Discussion"></a>

## Discussion

Use this property and [strokeStart](strokestart.md) to render a portion of the line. Use [locationAtPointIndex:](../mkmultipoint/location%28atpointindex_%29.md) to get unit distance locations for point indices along the line.

## See Also

### Accessing the stroke

- [strokeStart](strokestart.md): The unit distance along the line where the stroke starts.
