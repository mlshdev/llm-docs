> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/convert(_:to:)-tly5](https://developer.apple.com/documentation/quartzcore/calayer/convert(_:to:)-tly5)

# convert(\_:to:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.

## Declaration

```swift
func convert(_ r: CGRect, to l: CALayer?) -> CGRect
```

## Parameters

- `r`: A point specifying a location in the coordinate system of `l`.
- `l`: The layer into whose coordinate system `r` is to be converted. The receiver and `l` and must share a common parent layer. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The rectangle converted to the coordinate system of `l`.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `l` parameter, this method returns the original rect with an origin added to the layer’s frame’s origin.

The following example shows code that creates two layers, `redLayer` and `yellowLayer`. `yellowLayer` is scaled so that it is half of its original size.

```swift
let layerFrame = CGRect(x: 0, y: 0, width: 640, height: 480)
     
let redLayer = CALayer()
redLayer.frame = layerFrame
redLayer.backgroundColor = UIColor.red.cgColor
     
let yellowLayer = CALayer()
yellowLayer.frame = layerFrame
yellowLayer.backgroundColor = UIColor.yellow.cgColor
yellowLayer.transform = CATransform3DMakeScale(0.5, 0.5, 1)
```

The following figure shows the two layers and an overlaid rectangle with a frame of `(50, 50, 200, 200)` in the red layer’s coordinate system.

![Layers with different coordinate systems](https://developer.apple.com/images/com.apple.quartzcore/media-2850323@2x.png)

The following code shows how you can find the coordinates of that rectangle in the yellow layer’s coordinate system.

```swift
let rect = CGRect(x: 50, y: 50, width: 200, height: 200)
print(redLayer.convert(rect, to: yellowLayer)) // prints (-220.0, -140.0, 400.0, 400.0)
```

## See Also

### Mapping between coordinate and time spaces

- [convert(\_:from:)](convert%28__from_%29-8kl76.md): Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convert(\_:to:)](convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convert(\_:from:)](convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertTime(\_:from:)](converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.
- [convertTime(\_:to:)](converttime%28__to_%29.md): Converts the time interval from the receiver’s time space to the specified layer’s time space

# convertRect:toLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.

## Declaration

```objectivec
- (CGRect) convertRect:(CGRect) r toLayer:(CALayer *) l;
```

## Parameters

- `r`: A point specifying a location in the coordinate system of `l`.
- `l`: The layer into whose coordinate system `r` is to be converted. The receiver and `l` and must share a common parent layer. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The rectangle converted to the coordinate system of `l`.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `l` parameter, this method returns the original rect with an origin added to the layer’s frame’s origin.

The following example shows code that creates two layers, `redLayer` and `yellowLayer`. `yellowLayer` is scaled so that it is half of its original size.

```swift
let layerFrame = CGRect(x: 0, y: 0, width: 640, height: 480)
     
let redLayer = CALayer()
redLayer.frame = layerFrame
redLayer.backgroundColor = UIColor.red.cgColor
     
let yellowLayer = CALayer()
yellowLayer.frame = layerFrame
yellowLayer.backgroundColor = UIColor.yellow.cgColor
yellowLayer.transform = CATransform3DMakeScale(0.5, 0.5, 1)
```

The following figure shows the two layers and an overlaid rectangle with a frame of `(50, 50, 200, 200)` in the red layer’s coordinate system.

![Layers with different coordinate systems](https://developer.apple.com/images/com.apple.quartzcore/media-2850323@2x.png)

The following code shows how you can find the coordinates of that rectangle in the yellow layer’s coordinate system.

```swift
let rect = CGRect(x: 50, y: 50, width: 200, height: 200)
print(redLayer.convert(rect, to: yellowLayer)) // prints (-220.0, -140.0, 400.0, 400.0)
```

## See Also

### Mapping between coordinate and time spaces

- [convertPoint:fromLayer:](convert%28__from_%29-8kl76.md): Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertPoint:toLayer:](convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertRect:fromLayer:](convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertTime:fromLayer:](converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.
- [convertTime:toLayer:](converttime%28__to_%29.md): Converts the time interval from the receiver’s time space to the specified layer’s time space
