> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/scaledvalue(for:compatiblewith:)](https://developer.apple.com/documentation/uikit/uifontmetrics/scaledvalue(for:compatiblewith:))

# scaledValue(for:compatibleWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Scales an arbitrary layout value based on the current Dynamic Type settings and the specified traits.

## Declaration

```swift
func scaledValue(for value: CGFloat, compatibleWith traitCollection: UITraitCollection?) -> CGFloat
```

## Parameters

- `value`: The height value that you want to scale. Specify the height of the object that contains the text (at the standard Dynamic Type size) that you want to display.
- `traitCollection`: The trait collection to use when determining compatibility. The returned value is appropriate for use in an interface that adopts the specified traits.

<a id="return-value"></a>

## Return Value

A layout height that is scaled appropriately to accommodate the text that you want to display.

<a id="Discussion"></a>

## Discussion

Use this method to scale the height of visual elements containing text. For example, if you define a button with text that can scale based on Dynamic Type, you would use this method to obtain an appropriately scaled height for your button’s background content.

## See Also

### Scaling Layout Values

- [scaledValue(for:)](scaledvalue%28for_%29.md): Scales an arbitrary layout value based on the current Dynamic Type settings.

# scaledValueForValue:compatibleWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Scales an arbitrary layout value based on the current Dynamic Type settings and the specified traits.

## Declaration

```objectivec
- (CGFloat) scaledValueForValue:(CGFloat) value compatibleWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `value`: The height value that you want to scale. Specify the height of the object that contains the text (at the standard Dynamic Type size) that you want to display.
- `traitCollection`: The trait collection to use when determining compatibility. The returned value is appropriate for use in an interface that adopts the specified traits.

<a id="return-value"></a>

## Return Value

A layout height that is scaled appropriately to accommodate the text that you want to display.

<a id="Discussion"></a>

## Discussion

Use this method to scale the height of visual elements containing text. For example, if you define a button with text that can scale based on Dynamic Type, you would use this method to obtain an appropriately scaled height for your button’s background content.

## See Also

### Scaling Layout Values

- [scaledValueForValue:](scaledvalue%28for_%29.md): Scales an arbitrary layout value based on the current Dynamic Type settings.
