> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/scale](https://developer.apple.com/documentation/quartzcore/caemittercell/scale)

# scale (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the scale factor applied to the cell. Animatable.

## Declaration

```swift
var scale: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The scale of the cell will vary by a random amount within the range specified by [scaleRange](scalerange.md). The [scaleSpeed](scalespeed.md) property determines the rate of change.

The default value of this property is `1.0`.

## See Also

### Related Documentation

- [scaleSpeed](scalespeed.md): The speed at which the scale changes over the lifetime of the cell. Animatable.

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
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.
- [contentsScale](contentsscale.md): The scale factor of the cell contents.

# scale (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the scale factor applied to the cell. Animatable.

## Declaration

```objectivec
@property CGFloat scale;
```

<a id="Discussion"></a>

## Discussion

The scale of the cell will vary by a random amount within the range specified by [scaleRange](scalerange.md). The [scaleSpeed](scalespeed.md) property determines the rate of change.

The default value of this property is `1.0`.

## See Also

### Related Documentation

- [scaleSpeed](scalespeed.md): The speed at which the scale changes over the lifetime of the cell. Animatable.

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
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.
- [contentsScale](contentsscale.md): The scale factor of the cell contents.
