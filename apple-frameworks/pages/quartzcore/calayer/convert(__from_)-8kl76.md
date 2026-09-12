> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/convert(_:from:)-8kl76](https://developer.apple.com/documentation/quartzcore/calayer/convert(_:from:)-8kl76)

# convert(\_:from:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.

## Declaration

```swift
func convert(_ p: CGPoint, from l: CALayer?) -> CGPoint
```

## Parameters

- `p`: A point specifying a location in the coordinate system of `l`.
- `l`: The layer with `p` in its coordinate system. The receiver and `l` and must share a common parent layer. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The point converted to the receiver’s coordinate system.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `l` parameter, this method returns the original point subtracted from the layer’s frame’s origin.

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

The following figure shows the two layers and an overlaid point (rendered as a blue cross) with a position of `(50.0, 50.0)` in the red layer’s coordinate system.

![Layers with different coordinate systems](https://developer.apple.com/images/com.apple.quartzcore/media-2850329@2x.png)

The following code shows how you can find the coordinates of that point in the yellow layer’s coordinate system.

```swift
let position = CGPoint(x: 50, y: 50)
print(yellowLayer.convert(position, from: redLayer)) // prints (-220.0, -140.0)
```

## See Also

### Mapping between coordinate and time spaces

- [convert(\_:to:)](convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convert(\_:from:)](convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convert(\_:to:)](convert%28__to_%29-tly5.md): Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertTime(\_:from:)](converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.
- [convertTime(\_:to:)](converttime%28__to_%29.md): Converts the time interval from the receiver’s time space to the specified layer’s time space

# convertPoint:fromLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) p fromLayer:(CALayer *) l;
```

## Parameters

- `p`: A point specifying a location in the coordinate system of `l`.
- `l`: The layer with `p` in its coordinate system. The receiver and `l` and must share a common parent layer. This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The point converted to the receiver’s coordinate system.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for the `l` parameter, this method returns the original point subtracted from the layer’s frame’s origin.

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

The following figure shows the two layers and an overlaid point (rendered as a blue cross) with a position of `(50.0, 50.0)` in the red layer’s coordinate system.

![Layers with different coordinate systems](https://developer.apple.com/images/com.apple.quartzcore/media-2850329@2x.png)

The following code shows how you can find the coordinates of that point in the yellow layer’s coordinate system.

```swift
let position = CGPoint(x: 50, y: 50)
print(yellowLayer.convert(position, from: redLayer)) // prints (-220.0, -140.0)
```

## See Also

### Mapping between coordinate and time spaces

- [convertPoint:toLayer:](convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertRect:fromLayer:](convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertRect:toLayer:](convert%28__to_%29-tly5.md): Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertTime:fromLayer:](converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.
- [convertTime:toLayer:](converttime%28__to_%29.md): Converts the time interval from the receiver’s time space to the specified layer’s time space
