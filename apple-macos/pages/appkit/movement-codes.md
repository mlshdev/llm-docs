> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/movement-codes](https://developer.apple.com/documentation/appkit/movement-codes)

# Movement Codes (Swift)

**Framework:** AppKit  
**Kind:** API Collection

The reason for a change of editing focus among text fields.

<a id="overview"></a>

## Overview

These constants are the possible values for the `NSTextMovement` key of the [didEndEditingNotification](nstext/didendeditingnotification.md) `userInfo` dictionary. The field editor makes sure that these are the values sent when the user presses the Tab, Backtab, or Return key while editing, in essence describing why the user is leaving the field. The control then uses this information to decide where to send focus next.

## Topics

### Constants

- [NSIllegalTextMovement](nsillegaltextmovement.md): Deprecated. Currently unused.
- [NSReturnTextMovement](nsreturntextmovement.md): Deprecated. The Return key was pressed.
- [NSTabTextMovement](nstabtextmovement.md): Deprecated. The Tab key was pressed.
- [NSBacktabTextMovement](nsbacktabtextmovement.md): Deprecated. The Backtab (Shift-Tab) key was pressed.
- [NSLeftTextMovement](nslefttextmovement.md): Deprecated. The left arrow key was pressed.
- [NSRightTextMovement](nsrighttextmovement.md): Deprecated. The right arrow key was pressed.
- [NSUpTextMovement](nsuptextmovement.md): Deprecated. The up arrow key was pressed.
- [NSDownTextMovement](nsdowntextmovement.md): Deprecated. The down arrow key was pressed.
- [NSCancelTextMovement](nscanceltextmovement.md): Deprecated. The user cancelled the completion.
- [NSOtherTextMovement](nsothertextmovement.md): Deprecated. The user performed some undefined action.

## See Also

### Constants

- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.
- [NSWritingDirection](nswritingdirection.md): Constants that specify the writing direction.
- [Common Unicode Characters](common-unicode-characters.md)

# Movement Codes (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

The reason for a change of editing focus among text fields.

<a id="overview"></a>

## Overview

These constants are the possible values for the `NSTextMovement` key of the [NSTextDidEndEditingNotification](nstext/didendeditingnotification.md) `userInfo` dictionary. The field editor makes sure that these are the values sent when the user presses the Tab, Backtab, or Return key while editing, in essence describing why the user is leaving the field. The control then uses this information to decide where to send focus next.

## Topics

### Constants

- [NSIllegalTextMovement](nsillegaltextmovement.md): Deprecated. Currently unused.
- [NSReturnTextMovement](nsreturntextmovement.md): Deprecated. The Return key was pressed.
- [NSTabTextMovement](nstabtextmovement.md): Deprecated. The Tab key was pressed.
- [NSBacktabTextMovement](nsbacktabtextmovement.md): Deprecated. The Backtab (Shift-Tab) key was pressed.
- [NSLeftTextMovement](nslefttextmovement.md): Deprecated. The left arrow key was pressed.
- [NSRightTextMovement](nsrighttextmovement.md): Deprecated. The right arrow key was pressed.
- [NSUpTextMovement](nsuptextmovement.md): Deprecated. The up arrow key was pressed.
- [NSDownTextMovement](nsdowntextmovement.md): Deprecated. The down arrow key was pressed.
- [NSCancelTextMovement](nscanceltextmovement.md): Deprecated. The user cancelled the completion.
- [NSOtherTextMovement](nsothertextmovement.md): Deprecated. The user performed some undefined action.

## See Also

### Constants

- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.
- [NSWritingDirection](nswritingdirection.md): Constants that specify the writing direction.
- [Common Unicode Characters](common-unicode-characters.md)
