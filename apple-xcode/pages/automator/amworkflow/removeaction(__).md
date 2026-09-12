> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/removeaction(_:)](https://developer.apple.com/documentation/automator/amworkflow/removeaction(_:))

# removeAction(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Removes the specified action from the workflow.

## Declaration

```swift
func removeAction(_ action: AMAction)
```

## Parameters

- `action`: The action to be removed.

<a id="Discussion"></a>

## Discussion

The action receives an `AMAction closed` message before being released.

## See Also

### Manipulating the Workflow’s Actions

- [addAction(\_:)](addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [insertAction(\_:at:)](insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [moveAction(at:to:)](moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.

# removeAction: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Removes the specified action from the workflow.

## Declaration

```objectivec
- (void) removeAction:(AMAction *) action;
```

## Parameters

- `action`: The action to be removed.

<a id="Discussion"></a>

## Discussion

The action receives an `AMAction closed` message before being released.

## See Also

### Manipulating the Workflow’s Actions

- [addAction:](addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [insertAction:atIndex:](insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [moveActionAtIndex:toIndex:](moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.
