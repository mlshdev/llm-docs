> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiregion/init(size:)](https://developer.apple.com/documentation/uikit/uiregion/init(size:))

# init(size:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a rectangular region of the specified size.

## Declaration

```swift
init(size: CGSize)
```

## Parameters

- `size`: The size of the region, specified in points.

<a id="return-value"></a>

## Return Value

A rectangular region of the specified size.

<a id="Discussion"></a>

## Discussion

The center of the rectangle is the origin of the region’s coordinate system.

## See Also

### Creating and initializing regions

- [infinite](infinite.md): Returns the region that encloses all points.
- [init(radius:)](init%28radius_%29.md): Initializes and returns a region with a circular shape of the specified radius.

# initWithSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a rectangular region of the specified size.

## Declaration

```objectivec
- (instancetype) initWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of the region, specified in points.

<a id="return-value"></a>

## Return Value

A rectangular region of the specified size.

<a id="Discussion"></a>

## Discussion

The center of the rectangle is the origin of the region’s coordinate system.

## See Also

### Creating and initializing regions

- [infiniteRegion](infinite.md): Returns the region that encloses all points.
- [initWithRadius:](init%28radius_%29.md): Initializes and returns a region with a circular shape of the specified radius.
