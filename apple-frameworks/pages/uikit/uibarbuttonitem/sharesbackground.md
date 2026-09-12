> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/sharesbackground](https://developer.apple.com/documentation/uikit/uibarbuttonitem/sharesbackground)

# sharesBackground (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A boolean value indicating whether this bar button item can share a background with other items in a navigation bar or a toolbar.

## Declaration

```swift
var sharesBackground: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When `NO`, This item will not be visually grouped with any other items.

This property is ignored if the item is in a `UIBarButtonItemGroup` with more than one item. The default value is `YES`.

## See Also

### Customizing placement in a toolbar

- [hidesSharedBackground](hidessharedbackground.md): A boolean value indicating whether the background this item may share with other items in the bar should be hidden.

# sharesBackground (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A boolean value indicating whether this bar button item can share a background with other items in a navigation bar or a toolbar.

## Declaration

```objectivec
@property (nonatomic) BOOL sharesBackground;
```

<a id="discussion"></a>

## Discussion

When `NO`, This item will not be visually grouped with any other items.

This property is ignored if the item is in a `UIBarButtonItemGroup` with more than one item. The default value is `YES`.

## See Also

### Customizing placement in a toolbar

- [hidesSharedBackground](hidessharedbackground.md): A boolean value indicating whether the background this item may share with other items in the bar should be hidden.
