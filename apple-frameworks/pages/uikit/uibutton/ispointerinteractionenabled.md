> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/ispointerinteractionenabled](https://developer.apple.com/documentation/uikit/uibutton/ispointerinteractionenabled)

# isPointerInteractionEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A Boolean that enables pointer interaction.

## Declaration

```swift
var isPointerInteractionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting pointer interactions

- [isHovered](ishovered.md): A Boolean value that indicates whether a pointer effect is active.
- [pointerStyleProvider](pointerstyleprovider-y4eb.md): A closure that returns the pointer style to use when the pointer hovers over the button.
- [UIButton.PointerStyleProvider](pointerstyleprovider-swift.typealias.md): A type alias defining a closure that returns a pointer style to apply to a button.
- [UIButtonPointerStyleProvider](../uibuttonpointerstyleprovider.md): A type alias defining a block that returns a pointer style to apply to a button.

# pointerInteractionEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A Boolean that enables pointer interaction.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite, getter=isPointerInteractionEnabled) BOOL pointerInteractionEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting pointer interactions

- [hovered](ishovered.md): A Boolean value that indicates whether a pointer effect is active.
- [pointerStyleProvider](pointerstyleprovider-1d4d2.md): A block that returns the pointer style to use when the pointer hovers over the button.
- [UIButtonPointerStyleProvider](../uibuttonpointerstyleprovider.md): A type alias defining a block that returns a pointer style to apply to a button.
