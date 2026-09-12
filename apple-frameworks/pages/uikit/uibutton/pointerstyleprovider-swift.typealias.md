> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/pointerstyleprovider-swift.typealias](https://developer.apple.com/documentation/uikit/uibutton/pointerstyleprovider-swift.typealias)

# UIButton.PointerStyleProvider

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS

A type alias defining a closure that returns a pointer style to apply to a button.

## Declaration

```swift
typealias PointerStyleProvider = (UIButton, UIPointerEffect, UIPointerShape) -> UIPointerStyle?
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

To change the appearance of the pointer when it hovers over the button, create a pointer style provider closure and assign it to the button’s [pointerStyleProvider](pointerstyleprovider-y4eb.md) property. For instance, the following code listing increases the size of the pointer, while keeping the proposed content effect, to provide better highlighting of the button when the pointer hovers over it.

```swift
straightLineModeButton?.pointerStyleProvider = { button, proposedEffect, proposedShape -> UIPointerStyle? in
    var rect = button.bounds.insetBy(dx: -12.0, dy: -14.0)
    rect = button.convert(rect, to: proposedEffect.preview.target.container)
    return UIPointerStyle(effect: proposedEffect, shape: .roundedRect(rect))
}
```

## See Also

### Supporting pointer interactions

- [isPointerInteractionEnabled](ispointerinteractionenabled.md): A Boolean that enables pointer interaction.
- [isHovered](ishovered.md): A Boolean value that indicates whether a pointer effect is active.
- [pointerStyleProvider](pointerstyleprovider-y4eb.md): A closure that returns the pointer style to use when the pointer hovers over the button.
- [UIButtonPointerStyleProvider](../uibuttonpointerstyleprovider.md): A type alias defining a block that returns a pointer style to apply to a button.
