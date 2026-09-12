> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsuiviewtoolbaritem/init(itemidentifier:uiview:)](https://developer.apple.com/documentation/uikit/nsuiviewtoolbaritem/init(itemidentifier:uiview:))

# init(itemIdentifier:uiView:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** Mac Catalyst 16.0+

Creates a toolbar item with the identifier and underlying UIKit view you specify.

## Declaration

```swift
init(itemIdentifier identifier: NSToolbarItem.Identifier, uiView: UIView)
```

## Parameters

- `identifier`: The identifier for the toolbar item. You use this value to identify the item within your app, so you don’t need to localize it. For example, your toolbar delegate uses this value to identify the specific toolbar item.
- `uiView`: The UIKit view for the toolbar item.

# initWithItemIdentifier:uiView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+

Creates a toolbar item with the identifier and underlying UIKit view you specify.

## Declaration

```objectivec
- (instancetype) initWithItemIdentifier:(NSToolbarItemIdentifier) identifier uiView:(UIView *) uiView;
```

## Parameters

- `identifier`: The identifier for the toolbar item. You use this value to identify the item within your app, so you don’t need to localize it. For example, your toolbar delegate uses this value to identify the specific toolbar item.
- `uiView`: The UIKit view for the toolbar item.
