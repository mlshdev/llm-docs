> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/insertaction(_:at:)](https://developer.apple.com/documentation/automator/amworkflow/insertaction(_:at:))

# insertAction(\_:at:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Inserts the specified action at the specified position of the receiving workflow.

## Declaration

```swift
func insertAction(_ action: AMAction, at index: Int)
```

## Parameters

- `action`: The action to insert.
- `index`: The position in the receiver at which to insert the action. If the position is invalid, this method does nothing.

<a id="Discussion"></a>

## Discussion

The workflow retains the action but does not copy it.

## See Also

### Manipulating the Workflow’s Actions

- [addAction(\_:)](addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [moveAction(at:to:)](moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.
- [removeAction(\_:)](removeaction%28__%29.md): Removes the specified action from the workflow.

# insertAction:atIndex: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Inserts the specified action at the specified position of the receiving workflow.

## Declaration

```objectivec
- (void) insertAction:(AMAction *) action atIndex:(NSUInteger) index;
```

## Parameters

- `action`: The action to insert.
- `index`: The position in the receiver at which to insert the action. If the position is invalid, this method does nothing.

<a id="Discussion"></a>

## Discussion

The workflow retains the action but does not copy it.

## See Also

### Manipulating the Workflow’s Actions

- [addAction:](addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [moveActionAtIndex:toIndex:](moveaction%28at_to_%29.md): Moves the action from the specified start position to the specified end position in the receiving workflow.
- [removeAction:](removeaction%28__%29.md): Removes the specified action from the workflow.
