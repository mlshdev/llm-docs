> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/ishovered](https://developer.apple.com/documentation/uikit/uibutton/ishovered)

# isHovered (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether a pointer effect is active.

## Declaration

```swift
var isHovered: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If you enable pointer interaction by setting [isPointerInteractionEnabled](ispointerinteractionenabled.md), this property indicates the button has an active pointer effect.

## See Also

### Related Documentation

- [Pointer interactions](../pointer-interactions.md): Support pointer interactions in your custom controls and views.

### Supporting pointer interactions

- [isPointerInteractionEnabled](ispointerinteractionenabled.md): A Boolean that enables pointer interaction.
- [pointerStyleProvider](pointerstyleprovider-y4eb.md): A closure that returns the pointer style to use when the pointer hovers over the button.
- [UIButton.PointerStyleProvider](pointerstyleprovider-swift.typealias.md): A type alias defining a closure that returns a pointer style to apply to a button.
- [UIButtonPointerStyleProvider](../uibuttonpointerstyleprovider.md): A type alias defining a block that returns a pointer style to apply to a button.

# hovered (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether a pointer effect is active.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isHovered) BOOL hovered;
```

<a id="Discussion"></a>

## Discussion

If you enable pointer interaction by setting [pointerInteractionEnabled](ispointerinteractionenabled.md), this property indicates the button has an active pointer effect.

## See Also

### Related Documentation

- [Pointer interactions](../pointer-interactions.md): Support pointer interactions in your custom controls and views.

### Supporting pointer interactions

- [pointerInteractionEnabled](ispointerinteractionenabled.md): A Boolean that enables pointer interaction.
- [pointerStyleProvider](pointerstyleprovider-1d4d2.md): A block that returns the pointer style to use when the pointer hovers over the button.
- [UIButtonPointerStyleProvider](../uibuttonpointerstyleprovider.md): A type alias defining a block that returns a pointer style to apply to a button.
