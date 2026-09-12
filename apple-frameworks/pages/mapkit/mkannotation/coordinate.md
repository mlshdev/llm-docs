> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotation/coordinate](https://developer.apple.com/documentation/mapkit/mkannotation/coordinate)

# coordinate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The center point (specified as a map coordinate) of the annotation.

## Declaration

```swift
var coordinate: CLLocationCoordinate2D { get }
```

<a id="Discussion"></a>

## Discussion

Your implementation of this property must be key-value observing (KVO) compliant. For more information on how to implement support for KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

# coordinate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The center point (specified as a map coordinate) of the annotation.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationCoordinate2D coordinate;
```

<a id="Discussion"></a>

## Discussion

Your implementation of this property must be key-value observing (KVO) compliant. For more information on how to implement support for KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Position attributes

- [setCoordinate:](setcoordinate_.md): Sets the new center point of the annotation.
