> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonpointerstyleprovider](https://developer.apple.com/documentation/uikit/uibuttonpointerstyleprovider)

# UIButtonPointerStyleProvider (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A type alias defining a block that returns a pointer style to apply to a button.

## Declaration

```swift
typealias UIButtonPointerStyleProvider = (UIButton, __UIPointerEffect, __UIPointerShape) -> UIPointerStyle?
```

## Parameters

- `button`: The button requesting the pointer style.
- `proposedEffect`: The content effect that the system suggests.
- `proposedShape`: The shape of the pointer that the system suggests.

<a id="return-value"></a>

## Return Value

The pointer style to apply to the button when the pointer hovers over it. Return `nil` when you don’t want to apply a pointer style to the button.

<a id="Discussion"></a>

## Discussion

To change the appearance of the pointer when it hovers over the button, create a pointer style provider block and assign it to the button’s [pointerStyleProvider](uibutton/pointerstyleprovider-1d4d2.md) property.

## See Also

### Supporting pointer interactions

- [isPointerInteractionEnabled](uibutton/ispointerinteractionenabled.md): A Boolean that enables pointer interaction.
- [isHovered](uibutton/ishovered.md): A Boolean value that indicates whether a pointer effect is active.
- [pointerStyleProvider](uibutton/pointerstyleprovider-y4eb.md): A closure that returns the pointer style to use when the pointer hovers over the button.
- [UIButton.PointerStyleProvider](uibutton/pointerstyleprovider-swift.typealias.md): A type alias defining a closure that returns a pointer style to apply to a button.

# UIButtonPointerStyleProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A type alias defining a block that returns a pointer style to apply to a button.

## Declaration

```objectivec
typedef UIPointerStyle *(^)(UIButton *, UIPointerEffect *, UIPointerShape *) UIButtonPointerStyleProvider;
```

## Parameters

- `button`: The button requesting the pointer style.
- `proposedEffect`: The content effect that the system suggests.
- `proposedShape`: The shape of the pointer that the system suggests.

<a id="return-value"></a>

## Return Value

The pointer style to apply to the button when the pointer hovers over it. Return `nil` when you don’t want to apply a pointer style to the button.

<a id="Discussion"></a>

## Discussion

To change the appearance of the pointer when it hovers over the button, create a pointer style provider block and assign it to the button’s [pointerStyleProvider](uibutton/pointerstyleprovider-1d4d2.md) property.

## See Also

### Supporting pointer interactions

- [pointerInteractionEnabled](uibutton/ispointerinteractionenabled.md): A Boolean that enables pointer interaction.
- [hovered](uibutton/ishovered.md): A Boolean value that indicates whether a pointer effect is active.
- [pointerStyleProvider](uibutton/pointerstyleprovider-1d4d2.md): A block that returns the pointer style to use when the pointer hovers over the button.
