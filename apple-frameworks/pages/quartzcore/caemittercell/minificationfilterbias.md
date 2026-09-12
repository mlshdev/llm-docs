> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/minificationfilterbias](https://developer.apple.com/documentation/quartzcore/caemittercell/minificationfilterbias)

# minificationFilterBias (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The bias factor used by the minification filter to determine the levels of detail.

## Declaration

```swift
var minificationFilterBias: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This value is used by the [minificationFilter](minificationfilter.md) property when it is set to `kCAFilterTrilinear`.

The default value of this property to `0`.

## See Also

### Setting Emitter Cell Visual Attributes

- [isEnabled](isenabled.md): A Boolean value indicating whether or not cells from this emitter are rendered.
- [color](color.md): The color of each emitted object. Animatable.
- [redRange](redrange.md): The amount by which the red color component of the cell can vary. Animatable.
- [greenRange](greenrange.md): The amount by which the green color component of the cell can vary. Animatable.
- [blueRange](bluerange.md): The amount by which the blue color component of the cell can vary. Animatable.
- [alphaRange](alpharange.md): The amount by which the alpha component of the cell can vary. Animatable.
- [redSpeed](redspeed.md): The speed, in seconds, at which the red color component changes over the lifetime of the cell. Animatable.
- [greenSpeed](greenspeed.md): The speed, in seconds, at which the green color component changes over the lifetime of the cell. Animatable.
- [blueSpeed](bluespeed.md): The speed, in seconds, at which the blue color component changes over the lifetime of the cell. Animatable.
- [alphaSpeed](alphaspeed.md): The speed, in seconds, at which the alpha component changes over the lifetime of the cell. Animatable.
- [magnificationFilter](magnificationfilter.md): The filter used when increasing the size of the content.
- [minificationFilter](minificationfilter.md): The filter used when reducing the size of the content.
- [scale](scale.md): Specifies the scale factor applied to the cell. Animatable.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.
- [contentsScale](contentsscale.md): The scale factor of the cell contents.

# minificationFilterBias (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The bias factor used by the minification filter to determine the levels of detail.

## Declaration

```objectivec
@property float minificationFilterBias;
```

<a id="Discussion"></a>

## Discussion

This value is used by the [minificationFilter](minificationfilter.md) property when it is set to `kCAFilterTrilinear`.

The default value of this property to `0`.

## See Also

### Setting Emitter Cell Visual Attributes

- [enabled](isenabled.md): A Boolean value indicating whether or not cells from this emitter are rendered.
- [color](color.md): The color of each emitted object. Animatable.
- [redRange](redrange.md): The amount by which the red color component of the cell can vary. Animatable.
- [greenRange](greenrange.md): The amount by which the green color component of the cell can vary. Animatable.
- [blueRange](bluerange.md): The amount by which the blue color component of the cell can vary. Animatable.
- [alphaRange](alpharange.md): The amount by which the alpha component of the cell can vary. Animatable.
- [redSpeed](redspeed.md): The speed, in seconds, at which the red color component changes over the lifetime of the cell. Animatable.
- [greenSpeed](greenspeed.md): The speed, in seconds, at which the green color component changes over the lifetime of the cell. Animatable.
- [blueSpeed](bluespeed.md): The speed, in seconds, at which the blue color component changes over the lifetime of the cell. Animatable.
- [alphaSpeed](alphaspeed.md): The speed, in seconds, at which the alpha component changes over the lifetime of the cell. Animatable.
- [magnificationFilter](magnificationfilter.md): The filter used when increasing the size of the content.
- [minificationFilter](minificationfilter.md): The filter used when reducing the size of the content.
- [scale](scale.md): Specifies the scale factor applied to the cell. Animatable.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.
- [contentsScale](contentsscale.md): The scale factor of the cell contents.
