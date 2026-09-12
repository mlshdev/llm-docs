> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepointreference/init(location:timeoffset:size:opacity:force:azimuth:altitude:)](https://developer.apple.com/documentation/pencilkit/pkstrokepointreference/init(location:timeoffset:size:opacity:force:azimuth:altitude:))

# init(location:timeOffset:size:opacity:force:azimuth:altitude:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new point with the provided properties.

## Declaration

```swift
init(location: CGPoint, timeOffset: TimeInterval, size: CGSize, opacity: CGFloat, force: CGFloat, azimuth: CGFloat, altitude: CGFloat)
```

## Parameters

- `location`: The location of this point.
- `timeOffset`: The time offset since the start of this stoke path in seconds.
- `size`: The size of this point.
- `opacity`: The opacity of this point, ranging from `0` to `2`.
- `force`: The amount of force used to create this point.
- `azimuth`: The azimuth of this point in radians.
- `altitude`: The altitude of this point in radians.

## See Also

### Creating a stroke point object

- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:)](init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_%29.md)

# initWithLocation:timeOffset:size:opacity:force:azimuth:altitude: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new point with the provided properties.

## Declaration

```objectivec
- (instancetype) initWithLocation:(CGPoint) location timeOffset:(NSTimeInterval) timeOffset size:(CGSize) size opacity:(CGFloat) opacity force:(CGFloat) force azimuth:(CGFloat) azimuth altitude:(CGFloat) altitude;
```

## Parameters

- `location`: The location of this point.
- `timeOffset`: The time offset since the start of this stoke path in seconds.
- `size`: The size of this point.
- `opacity`: The opacity of this point, ranging from `0` to `2`.
- `force`: The amount of force used to create this point.
- `azimuth`: The azimuth of this point in radians.
- `altitude`: The altitude of this point in radians.

## See Also

### Creating a stroke point object

- [initWithLocation:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:](init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_%29.md)
