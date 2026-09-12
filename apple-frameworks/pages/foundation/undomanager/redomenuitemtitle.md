> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/redomenuitemtitle](https://developer.apple.com/documentation/foundation/undomanager/redomenuitemtitle)

# redoMenuItemTitle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The title of the Redo menu command, such as Redo Paste.

## Declaration

```swift
var redoMenuItemTitle: String { get }
```

<a id="Discussion"></a>

## Discussion

Returns “Redo” if no action name has been assigned or `nil` if there is nothing to redo.

## See Also

### Getting and localizing the menu item title

- [undoMenuItemTitle](undomenuitemtitle.md): The title of the Undo menu command, such as Undo Paste.
- [undoMenuTitle(forUndoActionName:)](undomenutitle%28forundoactionname_%29.md): Returns the localized title of the Undo menu command for the identified action.
- [redoMenuTitle(forUndoActionName:)](redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.

# redoMenuItemTitle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The title of the Redo menu command, such as Redo Paste.

## Declaration

```objectivec
@property (copy, readonly) NSString * redoMenuItemTitle;
```

<a id="Discussion"></a>

## Discussion

Returns “Redo” if no action name has been assigned or `nil` if there is nothing to redo.

## See Also

### Getting and localizing the menu item title

- [undoMenuItemTitle](undomenuitemtitle.md): The title of the Undo menu command, such as Undo Paste.
- [undoMenuTitleForUndoActionName:](undomenutitle%28forundoactionname_%29.md): Returns the localized title of the Undo menu command for the identified action.
- [redoMenuTitleForUndoActionName:](redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.
