> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/undomenutitle(forundoactionname:)](https://developer.apple.com/documentation/foundation/undomanager/undomenutitle(forundoactionname:))

# undoMenuTitle(forUndoActionName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized title of the Undo menu command for the identified action.

## Declaration

```swift
func undoMenuTitle(forUndoActionName actionName: String) -> String
```

## Parameters

- `actionName`: The name of the undo action.

<a id="return-value"></a>

## Return Value

The localized title of the undo menu item.

<a id="Discussion"></a>

## Discussion

Override this method if you want to customize the localization behavior. This method is invoked by [undoMenuItemTitle](undomenuitemtitle.md).

## See Also

### Getting and localizing the menu item title

- [undoMenuItemTitle](undomenuitemtitle.md): The title of the Undo menu command, such as Undo Paste.
- [redoMenuItemTitle](redomenuitemtitle.md): The title of the Redo menu command, such as Redo Paste.
- [redoMenuTitle(forUndoActionName:)](redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.

# undoMenuTitleForUndoActionName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the localized title of the Undo menu command for the identified action.

## Declaration

```objectivec
- (NSString *) undoMenuTitleForUndoActionName:(NSString *) actionName;
```

## Parameters

- `actionName`: The name of the undo action.

<a id="return-value"></a>

## Return Value

The localized title of the undo menu item.

<a id="Discussion"></a>

## Discussion

Override this method if you want to customize the localization behavior. This method is invoked by [undoMenuItemTitle](undomenuitemtitle.md).

## See Also

### Getting and localizing the menu item title

- [undoMenuItemTitle](undomenuitemtitle.md): The title of the Undo menu command, such as Undo Paste.
- [redoMenuItemTitle](redomenuitemtitle.md): The title of the Redo menu command, such as Redo Paste.
- [redoMenuTitleForUndoActionName:](redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.
