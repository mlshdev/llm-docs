> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplate/tintcolor](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplate/tintcolor)

# tintColor (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The tint color to apply to elements of the template.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var tintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The color in this property is the default color applied to images and highlighted text in the template. This color is applied only on clock faces that support multiple colors and only when the text or image provider doesn’t provide a custom color. If the value in this property is `nil`, ClockKit uses white for the default color.

# tintColor (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The tint color to apply to elements of the template.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * tintColor;
```

<a id="Discussion"></a>

## Discussion

The color in this property is the default color applied to images and highlighted text in the template. This color is applied only on clock faces that support multiple colors and only when the text or image provider doesn’t provide a custom color. If the value in this property is `nil`, ClockKit uses white for the default color.
