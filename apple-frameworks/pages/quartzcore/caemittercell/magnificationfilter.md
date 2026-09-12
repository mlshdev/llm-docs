> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/magnificationfilter](https://developer.apple.com/documentation/quartzcore/caemittercell/magnificationfilter)

# magnificationFilter (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The filter used when increasing the size of the content.

## Declaration

```swift
var magnificationFilter: String { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in Scaling Filters. The default value is [linear](../calayercontentsfilter/linear.md).

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
- [minificationFilter](minificationfilter.md): The filter used when reducing the size of the content.
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [scale](scale.md): Specifies the scale factor applied to the cell. Animatable.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.
- [contentsScale](contentsscale.md): The scale factor of the cell contents.

# magnificationFilter (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The filter used when increasing the size of the content.

## Declaration

```objectivec
@property (copy) NSString * magnificationFilter;
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in Scaling Filters. The default value is [kCAFilterLinear](../calayercontentsfilter/linear.md).

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
- [minificationFilter](minificationfilter.md): The filter used when reducing the size of the content.
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [scale](scale.md): Specifies the scale factor applied to the cell. Animatable.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.
- [contentsScale](contentsscale.md): The scale factor of the cell contents.
