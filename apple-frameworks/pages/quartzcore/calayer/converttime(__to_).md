> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/converttime(_:to:)](https://developer.apple.com/documentation/quartzcore/calayer/converttime(_:to:))

# convertTime(\_:to:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the time interval from the receiver’s time space to the specified layer’s time space

## Declaration

```swift
func convertTime(_ t: CFTimeInterval, to l: CALayer?) -> CFTimeInterval
```

## Parameters

- `t`: A point specifying a location in the coordinate system of `l`.
- `l`: The layer into whose time space `t` is to be converted. The receiver and `l` and must share a common parent layer.

<a id="return-value"></a>

## Return Value

The time interval converted to the time space of `layer`.

<a id="Discussion"></a>

## Discussion

The following code shows the creation of two layers, `layer` and `offsetSlowMoLayer`. `offsetSlowMoLayer` has an offset time of 1 second and its [speed](../camediatiming/speed.md) is set to `0.5`.  The last line converts and prints a time interval of 0.5 seconds converted from the time space of `layer` to the time space of `offsetSlowMoLayer`.

```swift
let layer = CALayer()
let offsetSlowMoLayer = CALayer()
     
offsetSlowMoLayer.timeOffset = CFTimeInterval(1)
offsetSlowMoLayer.speed = 0.5
     
print(layer.convertTime(CFTimeInterval(0.5), to: offsetSlowMoLayer)) // prints 1.25
```

## See Also

### Mapping between coordinate and time spaces

- [convert(\_:from:)](convert%28__from_%29-8kl76.md): Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convert(\_:to:)](convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convert(\_:from:)](convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convert(\_:to:)](convert%28__to_%29-tly5.md): Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertTime(\_:from:)](converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.

# convertTime:toLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Converts the time interval from the receiver’s time space to the specified layer’s time space

## Declaration

```objectivec
- (CFTimeInterval) convertTime:(CFTimeInterval) t toLayer:(CALayer *) l;
```

## Parameters

- `t`: A point specifying a location in the coordinate system of `l`.
- `l`: The layer into whose time space `t` is to be converted. The receiver and `l` and must share a common parent layer.

<a id="return-value"></a>

## Return Value

The time interval converted to the time space of `layer`.

<a id="Discussion"></a>

## Discussion

The following code shows the creation of two layers, `layer` and `offsetSlowMoLayer`. `offsetSlowMoLayer` has an offset time of 1 second and its [speed](../camediatiming/speed.md) is set to `0.5`.  The last line converts and prints a time interval of 0.5 seconds converted from the time space of `layer` to the time space of `offsetSlowMoLayer`.

```swift
let layer = CALayer()
let offsetSlowMoLayer = CALayer()
     
offsetSlowMoLayer.timeOffset = CFTimeInterval(1)
offsetSlowMoLayer.speed = 0.5
     
print(layer.convertTime(CFTimeInterval(0.5), to: offsetSlowMoLayer)) // prints 1.25
```

## See Also

### Mapping between coordinate and time spaces

- [convertPoint:fromLayer:](convert%28__from_%29-8kl76.md): Converts the point from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertPoint:toLayer:](convert%28__to_%29-7dcke.md): Converts the point from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertRect:fromLayer:](convert%28__from_%29-4kx9l.md): Converts the rectangle from the specified layer’s coordinate system to the receiver’s coordinate system.
- [convertRect:toLayer:](convert%28__to_%29-tly5.md): Converts the rectangle from the receiver’s coordinate system to the specified layer’s coordinate system.
- [convertTime:fromLayer:](converttime%28__from_%29.md): Converts the time interval from the specified layer’s time space to the receiver’s time space.
