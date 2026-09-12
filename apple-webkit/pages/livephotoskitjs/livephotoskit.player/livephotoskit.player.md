> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/livephotoskitjs/livephotoskit.player/livephotoskit.player](https://developer.apple.com/documentation/livephotoskitjs/livephotoskit.player/livephotoskit.player)

# LivePhotosKit.Player

**Interface language:** Data

**Framework:** LivePhotosKit JS  
**Kind:** Initializer  
**Availability:** LivePhotosKit JS 1.0+

Creates `LivePhotosKit.Player` objects.

## Declaration

```
new targetElement(
	HTMLElement targetElement,
	Object options
);
```

## Parameters

- `targetElement`: The target DOM element to be decorated with additional properties and methods that allow it to act as the Player of Live Photos. If a target element is not passed, a `HTMLDivElement` will be created and used instead.
- `options`: An object containing keys and values for any subset of the public writable properties of Player. If provided, the values provided in this object will be used instead of the default values for those Player properties.

<a id="return-value"></a>

## Return Value

The target element passed in, modified with additional properties and methods to allow it to act as a Live Photo player. If no target element was provided, then a new `HTMLDivElement` will be created and returned with Live Photo player functionality.
