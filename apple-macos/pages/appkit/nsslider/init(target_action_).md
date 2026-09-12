> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/init(target:action:)](https://developer.apple.com/documentation/appkit/nsslider/init(target:action:))

# init(target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a continuous horizontal slider whose values range from `0.0` to `1.0`.

## Declaration

```swift
convenience init(target: Any?, action: Selector?)
```

## Parameters

- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized slider control.

## See Also

### Related Documentation

- [Slider Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Slider/Slider.html#//apple_ref/doc/uid/10000025i)

### Creating sliders

- [init(value:minValue:maxValue:target:action:)](init%28value_minvalue_maxvalue_target_action_%29.md): Creates a continuous horizontal slider that represents values over the specified range.

# sliderWithTarget:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a continuous horizontal slider whose values range from `0.0` to `1.0`.

## Declaration

```objectivec
+ (instancetype) sliderWithTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized slider control.

## See Also

### Related Documentation

- [Slider Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Slider/Slider.html#//apple_ref/doc/uid/10000025i)

### Creating sliders

- [sliderWithValue:minValue:maxValue:target:action:](init%28value_minvalue_maxvalue_target_action_%29.md): Creates a continuous horizontal slider that represents values over the specified range.
