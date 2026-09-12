> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amworkflow/moveaction(at:to:)](https://developer.apple.com/documentation/automator/amworkflow/moveaction(at:to:))

# moveAction(at:to:) (Swift)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Moves the action from the specified start position to the specified end position in the receiving workflow.

## Declaration

```swift
func moveAction(at startIndex: Int, to endIndex: Int)
```

## Parameters

- `startIndex`: The start position of the action to move.
- `endIndex`: The end position for the action that is moved.

<a id="Discussion"></a>

## Discussion

If either index is invalid, this method does nothing.

## See Also

### Manipulating the Workflow’s Actions

- [addAction(\_:)](addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [insertAction(\_:at:)](insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [removeAction(\_:)](removeaction%28__%29.md): Removes the specified action from the workflow.

# moveActionAtIndex:toIndex: (Objective-C)

**Framework:** Automator  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Moves the action from the specified start position to the specified end position in the receiving workflow.

## Declaration

```objectivec
- (void) moveActionAtIndex:(NSUInteger) startIndex toIndex:(NSUInteger) endIndex;
```

## Parameters

- `startIndex`: The start position of the action to move.
- `endIndex`: The end position for the action that is moved.

<a id="Discussion"></a>

## Discussion

If either index is invalid, this method does nothing.

## See Also

### Manipulating the Workflow’s Actions

- [addAction:](addaction%28__%29.md): Adds the specified action at the end of the receiving workflow.
- [insertAction:atIndex:](insertaction%28__at_%29.md): Inserts the specified action at the specified position of the receiving workflow.
- [removeAction:](removeaction%28__%29.md): Removes the specified action from the workflow.
