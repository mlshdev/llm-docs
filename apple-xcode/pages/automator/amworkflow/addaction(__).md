> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/addaction(_:)](https://developer.apple.com/documentation/automator/amworkflow/addaction(_:))

# addAction(\_:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Adds the specified action at the end of the receiving workflow.

## Declaration

```swift
func addAction(_ action: AMAction)
```

## Parameters

- `action`: The action to add.

<a id="Discussion"></a>

## Discussion

The workflow retains the action but does not copy it.

## See Also

### Manipulating the Workflow’s Actions

- [insertAction(\_:at:)](insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [moveAction(at:to:)](moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.
- [removeAction(\_:)](removeaction%28__%29.md): Removes the specified action from the workflow.

# addAction: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Adds the specified action at the end of the receiving workflow.

## Declaration

```objectivec
- (void) addAction:(AMAction *) action;
```

## Parameters

- `action`: The action to add.

<a id="Discussion"></a>

## Discussion

The workflow retains the action but does not copy it.

## See Also

### Manipulating the Workflow’s Actions

- [insertAction:atIndex:](insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [moveActionAtIndex:toIndex:](moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.
- [removeAction:](removeaction%28__%29.md): Removes the specified action from the workflow.
