> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/undomenuitemtitle](https://developer.apple.com/documentation/foundation/undomanager/undomenuitemtitle)

# undoMenuItemTitle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The title of the Undo menu command, such as Undo Paste.

## Declaration

```swift
var undoMenuItemTitle: String { get }
```

<a id="Discussion"></a>

## Discussion

Returns “Undo” if no action name has been assigned or `nil` if there is nothing to undo.

## See Also

### Getting and localizing the menu item title

- [redoMenuItemTitle](redomenuitemtitle.md): The title of the Redo menu command, such as Redo Paste.
- [undoMenuTitle(forUndoActionName:)](undomenutitle%28forundoactionname_%29.md): Returns the localized title of the Undo menu command for the identified action.
- [redoMenuTitle(forUndoActionName:)](redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.

# undoMenuItemTitle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The title of the Undo menu command, such as Undo Paste.

## Declaration

```objectivec
@property (copy, readonly) NSString * undoMenuItemTitle;
```

<a id="Discussion"></a>

## Discussion

Returns “Undo” if no action name has been assigned or `nil` if there is nothing to undo.

## See Also

### Getting and localizing the menu item title

- [redoMenuItemTitle](redomenuitemtitle.md): The title of the Redo menu command, such as Redo Paste.
- [undoMenuTitleForUndoActionName:](undomenutitle%28forundoactionname_%29.md): Returns the localized title of the Undo menu command for the identified action.
- [redoMenuTitleForUndoActionName:](redomenutitle%28forundoactionname_%29.md): Returns the localized title of the Redo menu command for the identified action.
