> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewitem/holdingpriority](https://developer.apple.com/documentation/appkit/nssplitviewitem/holdingpriority)

# holdingPriority (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The priority for a split view item to hold its size.

## Declaration

```swift
var holdingPriority: NSLayoutConstraint.Priority { get set }
```

<a id="Discussion"></a>

## Discussion

This priority affects the split view item’s width (for a vertical split view) or height (for a horizontal split view).

The view with the lowest priority is the first to gain additional width if the split view grows or shrinks. The default of this property is [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md).

## See Also

### Getting Auto Layout behaviors

- [automaticallyAdjustsSafeAreaInsets](automaticallyadjustssafeareainsets.md): When YES, other items such as sidebars or inspectors may appear overlaid on top of this item’s `viewController` and this item’s `safeAreaInsets` will be adjusted with respect to overlaid content. Defaults to `NO`.

# holdingPriority (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The priority for a split view item to hold its size.

## Declaration

```objectivec
@property NSLayoutPriority holdingPriority;
```

<a id="Discussion"></a>

## Discussion

This priority affects the split view item’s width (for a vertical split view) or height (for a horizontal split view).

The view with the lowest priority is the first to gain additional width if the split view grows or shrinks. The default of this property is [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md).

## See Also

### Getting Auto Layout behaviors

- [automaticallyAdjustsSafeAreaInsets](automaticallyadjustssafeareainsets.md): When YES, other items such as sidebars or inspectors may appear overlaid on top of this item’s `viewController` and this item’s `safeAreaInsets` will be adjusted with respect to overlaid content. Defaults to `NO`.
