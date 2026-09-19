> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssplitviewitem/automaticallyadjustssafeareainsets

# automaticallyAdjustsSafeAreaInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

When YES, other items such as sidebars or inspectors may appear overlaid on top of this item’s `viewController` and this item’s `safeAreaInsets` will be adjusted with respect to overlaid content. Defaults to `NO`.

## Declaration

```swift
var automaticallyAdjustsSafeAreaInsets: Bool { get set }
```

## See Also

### Getting Auto Layout behaviors

- [holdingPriority](holdingpriority.md): The priority for a split view item to hold its size.

# automaticallyAdjustsSafeAreaInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

When YES, other items such as sidebars or inspectors may appear overlaid on top of this item’s `viewController` and this item’s `safeAreaInsets` will be adjusted with respect to overlaid content. Defaults to `NO`.

## Declaration

```objectivec
@property BOOL automaticallyAdjustsSafeAreaInsets;
```

## See Also

### Getting Auto Layout behaviors

- [holdingPriority](holdingpriority.md): The priority for a split view item to hold its size.
