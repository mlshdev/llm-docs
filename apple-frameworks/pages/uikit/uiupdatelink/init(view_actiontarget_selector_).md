> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/init(view:actiontarget:selector:)](https://developer.apple.com/documentation/uikit/uiupdatelink/init(view:actiontarget:selector:))

# init(view:actionTarget:selector:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · tvOS · visionOS

Creates a UI update link for the specified view using the specified target and action.

## Declaration

```swift
init(view: UIView, actionTarget target: Any, selector: Selector)
```

<a id="Discussion"></a>

## Discussion

This initializer adds the action to the [beforeCADisplayLinkDispatch](../uiupdateactionphase/beforecadisplaylinkdispatch.md) phase. To specify a different phase, use [addAction(to:handler:)](addaction%28to_handler_%29.md) or [addAction(to:target:selector:)](addaction%28to_target_selector_%29.md) instead.

## See Also

### Creating a UI update link

- [init(view:)](init%28view_%29.md): Creates a UI update link for the specified view.
- [init(view:actionHandler:)](init%28view_actionhandler_%29.md): Creates a UI update link for the specified view using the specified action handler.
- [init(windowScene:)](init%28windowscene_%29.md): Creates a UI update link for the specified window.
- [init(windowScene:actionHandler:)](init%28windowscene_actionhandler_%29.md): Creates a UI update link for the specified window using the specified action handler.
- [init(windowScene:actionTarget:selector:)](init%28windowscene_actiontarget_selector_%29.md): Creates a UI update link for the specified window using the specified target and action.

# updateLinkForView:actionTarget:selector: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Creates a UI update link for the specified view using the specified target and action.

## Declaration

```objectivec
+ (UIUpdateLink *) updateLinkForView:(UIView *) view actionTarget:(id) target selector:(SEL) selector;
```

<a id="Discussion"></a>

## Discussion

This initializer adds the action to the [beforeCADisplayLinkDispatch](../uiupdateactionphase/beforecadisplaylinkdispatch.md) phase. To specify a different phase, use [addActionToPhase:handler:](addaction%28to_handler_%29.md) or [addActionToPhase:target:selector:](addaction%28to_target_selector_%29.md) instead.

## See Also

### Creating a UI update link

- [updateLinkForView:](init%28view_%29.md): Creates a UI update link for the specified view.
- [updateLinkForView:actionHandler:](init%28view_actionhandler_%29.md): Creates a UI update link for the specified view using the specified action handler.
- [updateLinkForWindowScene:](init%28windowscene_%29.md): Creates a UI update link for the specified window.
- [updateLinkForWindowScene:actionHandler:](init%28windowscene_actionhandler_%29.md): Creates a UI update link for the specified window using the specified action handler.
- [updateLinkForWindowScene:actionTarget:selector:](init%28windowscene_actiontarget_selector_%29.md): Creates a UI update link for the specified window using the specified target and action.
