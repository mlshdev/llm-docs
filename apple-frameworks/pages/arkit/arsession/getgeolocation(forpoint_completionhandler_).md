> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/getgeolocation(forpoint:completionhandler:)](https://developer.apple.com/documentation/arkit/arsession/getgeolocation(forpoint:completionhandler:))

# getGeoLocation(forPoint:completionHandler:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Converts a position in the framework’s local coordinate system to latitude, longitude and altitude.

## Declaration

```swift
func getGeoLocation(forPoint position: simd_float3, completionHandler: @escaping @Sendable (CLLocationCoordinate2D, CLLocationDistance, (any Error)?) -> Void)
```

```swift
func geoLocation(forPoint position: simd_float3) async throws -> (CLLocationCoordinate2D, CLLocationDistance)
```

## Parameters

- `position`: Position in local coordinates to convert.
- `completionHandler`: Code that control will execute when this function returns. The session runs this code on its delegate queue. The parameters are:

  - **coordinate**: Location coordinates (latitude, longitude).
  - **altitude**: The altitude.
  - **error**: The reason, if conversion fails.

<a id="Discussion"></a>

## Discussion

ARKit refers to its local coordinate space as “world” coordinate space, but this is different from geographic coordinates. For more information on ARKit’s coordinate space, see [setWorldOrigin(relativeTransform:)](setworldorigin%28relativetransform_%29.md).

To succeed, this function requires an [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md) session with state equal to [ARGeoTrackingStatus.State.localized](../argeotrackingstatus/state-swift.enum/localized.md).

# getGeoLocationForPoint:completionHandler: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Converts a position in the framework’s local coordinate system to latitude, longitude and altitude.

## Declaration

```objectivec
- (void) getGeoLocationForPoint:(simd_float3) position completionHandler:(void (^)(CLLocationCoordinate2D coordinate, CLLocationDistance altitude, NSError *error)) completionHandler;
```

## Parameters

- `position`: Position in local coordinates to convert.
- `completionHandler`: Code that control will execute when this function returns. The session runs this code on its delegate queue. The parameters are:

  - **coordinate**: Location coordinates (latitude, longitude).
  - **altitude**: The altitude.
  - **error**: The reason, if conversion fails.

<a id="Discussion"></a>

## Discussion

ARKit refers to its local coordinate space as “world” coordinate space, but this is different from geographic coordinates. For more information on ARKit’s coordinate space, see [setWorldOrigin:](setworldorigin%28relativetransform_%29.md).

To succeed, this function requires an [ARGeoTrackingConfiguration](../argeotrackingconfiguration.md) session with state equal to [ARGeoTrackingStateLocalized](../argeotrackingstatus/state-swift.enum/localized.md).
