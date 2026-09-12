> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiregion/init(radius:)](https://developer.apple.com/documentation/uikit/uiregion/init(radius:))

# init(radius:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a region with a circular shape of the specified radius.

## Declaration

```swift
init(radius: CGFloat)
```

## Parameters

- `radius`: The radius of the circular area, specified in points.

<a id="return-value"></a>

## Return Value

A circular region with the specified radius.

<a id="Discussion"></a>

## Discussion

The center of the circle is the origin of the region’s coordinate system.

## See Also

### Creating and initializing regions

- [infinite](infinite.md): Returns the region that encloses all points.
- [init(size:)](init%28size_%29.md): Initializes and returns a rectangular region of the specified size.

# initWithRadius: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a region with a circular shape of the specified radius.

## Declaration

```objectivec
- (instancetype) initWithRadius:(CGFloat) radius;
```

## Parameters

- `radius`: The radius of the circular area, specified in points.

<a id="return-value"></a>

## Return Value

A circular region with the specified radius.

<a id="Discussion"></a>

## Discussion

The center of the circle is the origin of the region’s coordinate system.

## See Also

### Creating and initializing regions

- [infiniteRegion](infinite.md): Returns the region that encloses all points.
- [initWithSize:](init%28size_%29.md): Initializes and returns a rectangular region of the specified size.
