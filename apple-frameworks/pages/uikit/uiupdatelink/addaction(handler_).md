> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/addaction(handler:)](https://developer.apple.com/documentation/uikit/uiupdatelink/addaction(handler:))

# addAction(handler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · tvOS · visionOS

Adds an action with the specified handler to the UI update link.

## Declaration

```swift
func addAction(handler: @escaping (UIUpdateLink, UIUpdateInfo) -> Void)
```

<a id="Discussion"></a>

## Discussion

This method adds the action to the [beforeCADisplayLinkDispatch](../uiupdateactionphase/beforecadisplaylinkdispatch.md) phase. To specify a different phase, use [addAction(to:handler:)](addaction%28to_handler_%29.md) instead.

## See Also

### Adding actions

- [addAction(to:handler:)](addaction%28to_handler_%29.md): Adds an action with the specified handler to the UI update link for a particular UI update phase.
- [addAction(target:selector:)](addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [addAction(to:target:selector:)](addaction%28to_target_selector_%29.md): Adds an action with the specified target and selector to the UI update link for a particular UI update phase.
- [UIUpdateActionPhase](../uiupdateactionphase.md): An object that defines specific phases of the UI update process.

# addActionWithHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Adds an action with the specified handler to the UI update link.

## Declaration

```objectivec
- (void) addActionWithHandler:(void (^)(UIUpdateLink *updateLink, UIUpdateInfo *updateInfo)) handler;
```

<a id="Discussion"></a>

## Discussion

This method adds the action to the [beforeCADisplayLinkDispatch](../uiupdateactionphase/beforecadisplaylinkdispatch.md) phase. To specify a different phase, use [addActionToPhase:handler:](addaction%28to_handler_%29.md) instead.

## See Also

### Adding actions

- [addActionToPhase:handler:](addaction%28to_handler_%29.md): Adds an action with the specified handler to the UI update link for a particular UI update phase.
- [addActionWithTarget:selector:](addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [addActionToPhase:target:selector:](addaction%28to_target_selector_%29.md): Adds an action with the specified target and selector to the UI update link for a particular UI update phase.
- [UIUpdateActionPhase](../uiupdateactionphase.md): An object that defines specific phases of the UI update process.
