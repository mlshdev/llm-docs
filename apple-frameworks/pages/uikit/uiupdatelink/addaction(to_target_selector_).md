> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/addaction(to:target:selector:)](https://developer.apple.com/documentation/uikit/uiupdatelink/addaction(to:target:selector:))

# addAction(to:target:selector:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Adds an action with the specified target and selector to the UI update link for a particular UI update phase.

## Declaration

```swift
func addAction(to phase: UIUpdateActionPhase, target: Any, selector: Selector)
```

## See Also

### Adding actions

- [addAction(handler:)](addaction%28handler_%29.md): Adds an action with the specified handler to the UI update link.
- [addAction(to:handler:)](addaction%28to_handler_%29.md): Adds an action with the specified handler to the UI update link for a particular UI update phase.
- [addAction(target:selector:)](addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [UIUpdateActionPhase](../uiupdateactionphase.md): An object that defines specific phases of the UI update process.

# addActionToPhase:target:selector: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

Adds an action with the specified target and selector to the UI update link for a particular UI update phase.

## Declaration

```objectivec
- (void) addActionToPhase:(UIUpdateActionPhase *) phase target:(id) target selector:(SEL) selector;
```

## See Also

### Adding actions

- [addActionWithHandler:](addaction%28handler_%29.md): Adds an action with the specified handler to the UI update link.
- [addActionToPhase:handler:](addaction%28to_handler_%29.md): Adds an action with the specified handler to the UI update link for a particular UI update phase.
- [addActionWithTarget:selector:](addaction%28target_selector_%29.md): Adds an action with the specified target and selector to the UI update link.
- [UIUpdateActionPhase](../uiupdateactionphase.md): An object that defines specific phases of the UI update process.
