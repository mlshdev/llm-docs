> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/camera](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/camera)

# camera (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The camera to use when taking the map snapshot.

## Declaration

```swift
@NSCopying var camera: MKMapCamera { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a camera object if you want to change the pitch, altitude, or heading information applied to the map.

## See Also

### Configuring the snapshot region

- [region](region.md): The area of the map that you want to capture.
- [mapRect](maprect.md): The map rectangle that you want to capture.

# camera (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The camera to use when taking the map snapshot.

## Declaration

```objectivec
@property (nonatomic, copy) MKMapCamera * camera;
```

<a id="Discussion"></a>

## Discussion

Specify a camera object if you want to change the pitch, altitude, or heading information applied to the map.

## See Also

### Configuring the snapshot region

- [region](region.md): The area of the map that you want to capture.
- [mapRect](maprect.md): The map rectangle that you want to capture.
