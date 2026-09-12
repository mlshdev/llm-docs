> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/init(type:)](https://developer.apple.com/documentation/uikit/uibutton/init(type:))

# init(type:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a new button of the specified type.

## Declaration

```swift
convenience init(type buttonType: UIButton.ButtonType)
```

## Parameters

- `buttonType`: The button type. See [UIButton.ButtonType](buttontype-swift.enum.md) for the possible values.

<a id="return-value"></a>

## Return Value

A newly created button.

<a id="Discussion"></a>

## Discussion

This method is a convenience constructor for creating button objects with specific configurations.

When creating a custom button — a button with the type [UIButton.ButtonType.custom](buttontype-swift.enum/custom.md) — the frame of the button is set to (`0`, `0`, `0`, `0`) initially. Before adding the button to your interface, you should update the frame to a more appropriate value.

## See Also

### Related Documentation

- [UIKit Catalog: Creating and customizing views and controls](../uikit-catalog-creating-and-customizing-views-and-controls.md): Customize your app’s user interface with views and controls.

### Creating buttons of a specific type

- [init(type:primaryAction:)](init%28type_primaryaction_%29.md): Creates a new button with the specified type, registers the primary action event, and sets the title and image to the action’s title and image.
- [UIButton.ButtonType](buttontype-swift.enum.md): Specifies the style of a button.

# buttonWithType: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a new button of the specified type.

## Declaration

```objectivec
+ (instancetype) buttonWithType:(UIButtonType) buttonType;
```

## Parameters

- `buttonType`: The button type. See [UIButtonType](buttontype-swift.enum.md) for the possible values.

<a id="return-value"></a>

## Return Value

A newly created button.

<a id="Discussion"></a>

## Discussion

This method is a convenience constructor for creating button objects with specific configurations.

When creating a custom button — a button with the type [UIButtonTypeCustom](buttontype-swift.enum/custom.md) — the frame of the button is set to (`0`, `0`, `0`, `0`) initially. Before adding the button to your interface, you should update the frame to a more appropriate value.

## See Also

### Related Documentation

- [UIKit Catalog: Creating and customizing views and controls](../uikit-catalog-creating-and-customizing-views-and-controls.md): Customize your app’s user interface with views and controls.

### Creating buttons of a specific type

- [buttonWithType:primaryAction:](buttonwithtype_primaryaction_.md): Creates a new button with the specified type, registers the primary action event, and sets the title and image to the action’s title and image.
- [UIButtonType](buttontype-swift.enum.md): Specifies the style of a button.
