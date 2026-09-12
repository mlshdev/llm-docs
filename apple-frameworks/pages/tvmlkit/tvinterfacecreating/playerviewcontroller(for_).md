> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacecreating/playerviewcontroller(for:)](https://developer.apple.com/documentation/tvmlkit/tvinterfacecreating/playerviewcontroller(for:))

# playerViewController(for:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Returns the custom player user interface for a custom player.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func playerViewController(for player: TVPlayer) -> UIViewController?
```

## Parameters

- `player`: The player requesting a view controller.

<a id="return-value"></a>

## Return Value

The new view controller associated with the view element. If the app doesn’t handle this event, you must return nil.

## See Also

### Updating View Information

- [makeViewController(element:existingViewController:)](makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [makeView(element:existingView:)](makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [collectionViewCellClass(for:)](collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.

# playerViewControllerForPlayer: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 12.0+ (deprecated in 18.0)

Returns the custom player user interface for a custom player.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (UIViewController *) playerViewControllerForPlayer:(TVPlayer *) player;
```

## Parameters

- `player`: The player requesting a view controller.

<a id="return-value"></a>

## Return Value

The new view controller associated with the view element. If the app doesn’t handle this event, you must return nil.

## See Also

### Updating View Information

- [viewControllerForElement:existingViewController:](makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [viewForElement:existingView:](makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [collectionViewCellClassForElement:](collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.
