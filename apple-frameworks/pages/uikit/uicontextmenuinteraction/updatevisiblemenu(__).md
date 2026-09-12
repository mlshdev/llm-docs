> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteraction/updatevisiblemenu(_:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction/updatevisiblemenu(_:))

# updateVisibleMenu(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Updates the currently visible menu.

## Declaration

```swift
func updateVisibleMenu(_ block: (UIMenu) -> UIMenu)
```

## Parameters

- `block`: A mutable copy of the menu.

## See Also

### Managing menu interactions

- [dismissMenu()](dismissmenu%28%29.md): Dismisses the context menu.

# updateVisibleMenuWithBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 1.0+

Updates the currently visible menu.

## Declaration

```objectivec
- (void) updateVisibleMenuWithBlock:(UIMenu * (^)(UIMenu *visibleMenu)) block;
```

## Parameters

- `block`: A mutable copy of the menu.

## See Also

### Managing menu interactions

- [dismissMenu](dismissmenu%28%29.md): Dismisses the context menu.
