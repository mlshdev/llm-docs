> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/addaction(to:handler:)](https://developer.apple.com/documentation/uikit/uiupdatelink/addaction(to:handler:))

# addAction(to:handler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Adds an action with the specified handler to the UI update link for a particular UI update phase.

## Declaration

```swift
func addAction(to phase: UIUpdateActionPhase, handler: @escaping (UIUpdateLink, UIUpdateInfo) -> Void)
```

## See Also

### Adding actions

- [addAction(handler:)](addaction%28handler_%29.md): Adds an action with the specified handler to the UI update link.
- [addAction(target:selector:)](addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [addAction(to:target:selector:)](addaction%28to_target_selector_%29.md): Adds an action with the specified target and selector to the UI update link for a particular UI update phase.
- [UIUpdateActionPhase](../uiupdateactionphase.md): An object that defines specific phases of the UI update process.

# addActionToPhase:handler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

Adds an action with the specified handler to the UI update link for a particular UI update phase.

## Declaration

```objectivec
- (void) addActionToPhase:(UIUpdateActionPhase *) phase handler:(void (^)(UIUpdateLink *updateLink, UIUpdateInfo *updateInfo)) handler;
```

## See Also

### Adding actions

- [addActionWithHandler:](addaction%28handler_%29.md): Adds an action with the specified handler to the UI update link.
- [addActionWithTarget:selector:](addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [addActionToPhase:target:selector:](addaction%28to_target_selector_%29.md): Adds an action with the specified target and selector to the UI update link for a particular UI update phase.
- [UIUpdateActionPhase](../uiupdateactionphase.md): An object that defines specific phases of the UI update process.
