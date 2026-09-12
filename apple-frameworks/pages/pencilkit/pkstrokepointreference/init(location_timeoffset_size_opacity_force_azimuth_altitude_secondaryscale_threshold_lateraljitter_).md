> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepointreference/init(location:timeoffset:size:opacity:force:azimuth:altitude:secondaryscale:threshold:lateraljitter:)](https://developer.apple.com/documentation/pencilkit/pkstrokepointreference/init(location:timeoffset:size:opacity:force:azimuth:altitude:secondaryscale:threshold:lateraljitter:))

# init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:lateralJitter:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a stroke point with the specified properties, including lateral jitter.

## Declaration

```swift
init(location: CGPoint, timeOffset: TimeInterval, size: CGSize, opacity: CGFloat, force: CGFloat, azimuth: CGFloat, altitude: CGFloat, secondaryScale: CGFloat, threshold: CGFloat, lateralJitter: CGFloat)
```

# initWithLocation:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:lateralJitter: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a stroke point with the specified properties, including lateral jitter.

## Declaration

```objectivec
- (instancetype) initWithLocation:(CGPoint) location timeOffset:(NSTimeInterval) timeOffset size:(CGSize) size opacity:(CGFloat) opacity force:(CGFloat) force azimuth:(CGFloat) azimuth altitude:(CGFloat) altitude secondaryScale:(CGFloat) secondaryScale threshold:(CGFloat) threshold lateralJitter:(CGFloat) lateralJitter;
```
