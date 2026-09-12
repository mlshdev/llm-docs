> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/projectpoint:orientation:viewportsize:](https://developer.apple.com/documentation/arkit/arcamera/projectpoint:orientation:viewportsize:)

# projectPoint:orientation:viewportSize:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0)

Project a 3D point in world coordinate system into 2D viewport space.

## Declaration

```objectivec
- (CGPoint) projectPoint:(simd_float3) point orientation:(UIInterfaceOrientation) orientation viewportSize:(CGSize) viewportSize;
```

## Parameters

- `point`: 3D point in world coordinate system.
- `orientation`: Viewport orientation.
- `viewportSize`: Viewport (or image) size.

<a id="return-value"></a>

## Return Value

2D point in viewport coordinate system with origin at top-left.
