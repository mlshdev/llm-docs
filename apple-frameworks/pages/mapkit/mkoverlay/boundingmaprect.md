> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlay/boundingmaprect](https://developer.apple.com/documentation/mapkit/mkoverlay/boundingmaprect)

# boundingMapRect (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The projected rectangle that encompasses the overlay.

## Declaration

```swift
var boundingMapRect: MKMapRect { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the smallest rectangle that completely encompasses the overlay. Implementers of this protocol need to set this area when implementing their overlay class, and after setting it, not change it. Specify the rectangle using projected coordinates — that is, coordinates you obtain by projecting the globe onto a two-dimensional surface.

## See Also

### Describing the overlay geometry

- [coordinate](coordinate.md): The approximate center point of the overlay area.

# boundingMapRect (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The projected rectangle that encompasses the overlay.

## Declaration

```objectivec
@property (nonatomic, readonly) MKMapRect boundingMapRect;
```

<a id="Discussion"></a>

## Discussion

This property contains the smallest rectangle that completely encompasses the overlay. Implementers of this protocol need to set this area when implementing their overlay class, and after setting it, not change it. Specify the rectangle using projected coordinates — that is, coordinates you obtain by projecting the globe onto a two-dimensional surface.

## See Also

### Describing the overlay geometry

- [coordinate](coordinate.md): The approximate center point of the overlay area.
