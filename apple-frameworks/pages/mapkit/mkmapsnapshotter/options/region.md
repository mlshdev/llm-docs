> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/region](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/region)

# region (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The area of the map that you want to capture.

## Declaration

```swift
var region: MKCoordinateRegion { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the map using geographical coordinates. If you assign a value for this property, the snapshotter updates the value in the [mapRect](maprect.md) property to match the corresponding area as closely as possible.

The snapshotter sets the default value of this property to an area that encompasses the user’s country or region, based on the current locale information.

## See Also

### Configuring the snapshot region

- [mapRect](maprect.md): The map rectangle that you want to capture.
- [camera](camera.md): The camera to use when taking the map snapshot.

# region (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The area of the map that you want to capture.

## Declaration

```objectivec
@property (nonatomic, assign) MKCoordinateRegion region;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the map using geographical coordinates. If you assign a value for this property, the snapshotter updates the value in the [mapRect](maprect.md) property to match the corresponding area as closely as possible.

The snapshotter sets the default value of this property to an area that encompasses the user’s country or region, based on the current locale information.

## See Also

### Configuring the snapshot region

- [mapRect](maprect.md): The map rectangle that you want to capture.
- [camera](camera.md): The camera to use when taking the map snapshot.
