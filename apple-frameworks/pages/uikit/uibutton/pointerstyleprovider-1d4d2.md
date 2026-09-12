> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/pointerstyleprovider-1d4d2](https://developer.apple.com/documentation/uikit/uibutton/pointerstyleprovider-1d4d2)

# pointerStyleProvider

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A block that returns the pointer style to use when the pointer hovers over the button.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIButtonPointerStyleProvider pointerStyleProvider;
```

<a id="Discussion"></a>

## Discussion

To change the appearance of the pointer when it hovers over the button, create a [UIButtonPointerStyleProvider](../uibuttonpointerstyleprovider.md) block that returns a [UIPointerStyle](../uipointerstyle.md) describing the pointer shape and content effect. Then assign the closure to [pointerStyleProvider](pointerstyleprovider-1d4d2.md). For more information, see [Enhancing your iPad app with pointer interactions](../enhancing-your-ipad-app-with-pointer-interactions.md).

## See Also

### Supporting pointer interactions

- [pointerInteractionEnabled](ispointerinteractionenabled.md): A Boolean that enables pointer interaction.
- [hovered](ishovered.md): A Boolean value that indicates whether a pointer effect is active.
- [UIButtonPointerStyleProvider](../uibuttonpointerstyleprovider.md): A type alias defining a block that returns a pointer style to apply to a button.
