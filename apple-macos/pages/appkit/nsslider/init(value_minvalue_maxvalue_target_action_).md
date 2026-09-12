> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/init(value:minvalue:maxvalue:target:action:)](https://developer.apple.com/documentation/appkit/nsslider/init(value:minvalue:maxvalue:target:action:))

# init(value:minValue:maxValue:target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a continuous horizontal slider that represents values over the specified range.

## Declaration

```swift
convenience init(value: Double, minValue: Double, maxValue: Double, target: Any?, action: Selector?)
```

## Parameters

- `value`: The initial value displayed by the control.
- `minValue`: The minimum value that the control can represent.
- `maxValue`: The maximum value that the control can represent.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized slider control.

## See Also

### Creating sliders

- [init(target:action:)](init%28target_action_%29.md): Creates a continuous horizontal slider whose values range from `0.0` to `1.0`.

# sliderWithValue:minValue:maxValue:target:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a continuous horizontal slider that represents values over the specified range.

## Declaration

```objectivec
+ (instancetype) sliderWithValue:(double) value minValue:(double) minValue maxValue:(double) maxValue target:(id) target action:(SEL) action;
```

## Parameters

- `value`: The initial value displayed by the control.
- `minValue`: The minimum value that the control can represent.
- `maxValue`: The maximum value that the control can represent.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized slider control.

## See Also

### Creating sliders

- [sliderWithTarget:action:](init%28target_action_%29.md): Creates a continuous horizontal slider whose values range from `0.0` to `1.0`.
