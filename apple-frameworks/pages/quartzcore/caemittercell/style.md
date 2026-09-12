> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/style](https://developer.apple.com/documentation/quartzcore/caemittercell/style)

# style (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

An optional dictionary containing additional style values that are not explicitly defined by the receiver.

## Declaration

```swift
var style: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

This dictionary may in turn have a `style` key, forming a hierarchy of default values. In the case of hierarchical style dictionaries the shallowest value for a property is used. For example, the value for “style.someValue” takes precedence over “style.style.someValue”.

If the style dictionary doesn’t define a value for an attribute, the cell’s [defaultValue(forKey:)](defaultvalue%28forkey_%29.md) class method is called.

The style dictionary is not consulted for the following keys: `bounds`, `frame`.

The default value of this property is `nil`.

> **Warning**

>  If the style dictionary or any of its ancestors are modified, the values of the cell’s properties are undefined until the `style` property is reset.

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
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [scale](scale.md): Specifies the scale factor applied to the cell. Animatable.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.

# style (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

An optional dictionary containing additional style values that are not explicitly defined by the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary * style;
```

<a id="Discussion"></a>

## Discussion

This dictionary may in turn have a `style` key, forming a hierarchy of default values. In the case of hierarchical style dictionaries the shallowest value for a property is used. For example, the value for “style.someValue” takes precedence over “style.style.someValue”.

If the style dictionary doesn’t define a value for an attribute, the cell’s [defaultValueForKey:](defaultvalue%28forkey_%29.md) class method is called.

The style dictionary is not consulted for the following keys: `bounds`, `frame`.

The default value of this property is `nil`.

> **Warning**

>  If the style dictionary or any of its ancestors are modified, the values of the cell’s properties are undefined until the `style` property is reset.

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
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [scale](scale.md): Specifies the scale factor applied to the cell. Animatable.
- [scaleRange](scalerange.md): Specifies the range over which the scale value can vary. Animatable.
