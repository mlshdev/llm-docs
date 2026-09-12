> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotation/setcoordinate:](https://developer.apple.com/documentation/mapkit/mkannotation/setcoordinate:)

# setCoordinate:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the new center point of the annotation.

## Declaration

```objectivec
- (void) setCoordinate:(CLLocationCoordinate2D) newCoordinate;
```

## Parameters

- `newCoordinate`: The new center point for the annotation.

<a id="Discussion"></a>

## Discussion

Annotations that support dragging should implement this method to update the position of the annotation.

If you implement this method, you must update the value of the coordinate in a key-value observing (KVO) compliant way. For more information on how to implement support for KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Position attributes

- [coordinate](coordinate.md): The center point (specified as a map coordinate) of the annotation.
