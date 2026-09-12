> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/additionaloverflowitems](https://developer.apple.com/documentation/uikit/uinavigationitem/additionaloverflowitems)

# additionalOverflowItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Additional items to present in the overflow menu.

## Declaration

```swift
var additionalOverflowItems: UIDeferredMenuElement? { get set }
```

<a id="Discussion"></a>

## Discussion

When you assign a non-`nil` value to this property, the overflow menu button appears on the trailing edge of the navigation bar. This button appears regardless of whether you provide menu elements in the callback for the [UIDeferredMenuElement](../uideferredmenuelement.md).

The system presents any menu elements you return in the callback for [UIDeferredMenuElement](../uideferredmenuelement.md) in the overflow menu. The system also populates the overflow menu with any items that can’t fit in the navigation bar due to layout space constraints.

## See Also

### Working with the overflow menu

- [overflowPresentationSource](overflowpresentationsource.md): The item you can use as an anchor to present a custom UI from the overflow menu button.

# additionalOverflowItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Additional items to present in the overflow menu.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIDeferredMenuElement * additionalOverflowItems;
```

<a id="Discussion"></a>

## Discussion

When you assign a non-`nil` value to this property, the overflow menu button appears on the trailing edge of the navigation bar. This button appears regardless of whether you provide menu elements in the callback for the [UIDeferredMenuElement](../uideferredmenuelement.md).

The system presents any menu elements you return in the callback for [UIDeferredMenuElement](../uideferredmenuelement.md) in the overflow menu. The system also populates the overflow menu with any items that can’t fit in the navigation bar due to layout space constraints.

## See Also

### Working with the overflow menu

- [overflowPresentationSource](overflowpresentationsource.md): The item you can use as an anchor to present a custom UI from the overflow menu button.
