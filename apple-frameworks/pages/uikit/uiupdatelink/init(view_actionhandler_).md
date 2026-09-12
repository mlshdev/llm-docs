> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/init(view:actionhandler:)](https://developer.apple.com/documentation/uikit/uiupdatelink/init(view:actionhandler:))

# init(view:actionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · tvOS · visionOS

Creates a UI update link for the specified view using the specified action handler.

## Declaration

```swift
init(view: UIView, actionHandler handler: @escaping (UIUpdateLink, UIUpdateInfo) -> Void)
```

<a id="Discussion"></a>

## Discussion

This initializer adds the action to the [beforeCADisplayLinkDispatch](../uiupdateactionphase/beforecadisplaylinkdispatch.md) phase. To specify a different phase, use [addAction(to:handler:)](addaction%28to_handler_%29.md) or [addAction(to:target:selector:)](addaction%28to_target_selector_%29.md) instead.

## See Also

### Creating a UI update link

- [init(view:)](init%28view_%29.md): Creates a UI update link for the specified view.
- [init(view:actionTarget:selector:)](init%28view_actiontarget_selector_%29.md): Creates a UI update link for the specified view using the specified target and action.
- [init(windowScene:)](init%28windowscene_%29.md): Creates a UI update link for the specified window.
- [init(windowScene:actionHandler:)](init%28windowscene_actionhandler_%29.md): Creates a UI update link for the specified window using the specified action handler.
- [init(windowScene:actionTarget:selector:)](init%28windowscene_actiontarget_selector_%29.md): Creates a UI update link for the specified window using the specified target and action.

# updateLinkForView:actionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Creates a UI update link for the specified view using the specified action handler.

## Declaration

```objectivec
+ (UIUpdateLink *) updateLinkForView:(UIView *) view actionHandler:(void (^)(UIUpdateLink *updateLink, UIUpdateInfo *updateInfo)) handler;
```

<a id="Discussion"></a>

## Discussion

This initializer adds the action to the [beforeCADisplayLinkDispatch](../uiupdateactionphase/beforecadisplaylinkdispatch.md) phase. To specify a different phase, use [addActionToPhase:handler:](addaction%28to_handler_%29.md) or [addActionToPhase:target:selector:](addaction%28to_target_selector_%29.md) instead.

## See Also

### Creating a UI update link

- [updateLinkForView:](init%28view_%29.md): Creates a UI update link for the specified view.
- [updateLinkForView:actionTarget:selector:](init%28view_actiontarget_selector_%29.md): Creates a UI update link for the specified view using the specified target and action.
- [updateLinkForWindowScene:](init%28windowscene_%29.md): Creates a UI update link for the specified window.
- [updateLinkForWindowScene:actionHandler:](init%28windowscene_actionhandler_%29.md): Creates a UI update link for the specified window using the specified action handler.
- [updateLinkForWindowScene:actionTarget:selector:](init%28windowscene_actiontarget_selector_%29.md): Creates a UI update link for the specified window using the specified target and action.
