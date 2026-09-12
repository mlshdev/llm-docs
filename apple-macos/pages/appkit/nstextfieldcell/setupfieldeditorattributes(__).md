> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell/setupfieldeditorattributes(_:)](https://developer.apple.com/documentation/appkit/nstextfieldcell/setupfieldeditorattributes(_:))

# setUpFieldEditorAttributes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the cell to set up the field editor’s attributes before editing begins.

## Declaration

```swift
func setUpFieldEditorAttributes(_ textObj: NSText) -> NSText
```

## Parameters

- `textObj`: A text object configured as a field editor.

<a id="return-value"></a>

## Return Value

A text object with customized attributes suitable for editing the text field cell’s content.

<a id="Discussion"></a>

## Discussion

You never invoke this method directly; by overriding it, however, you can customize the field editor. When you override this method, you should generally invoke the implementation of `super` and return the `textObj` argument. For information on field editors, see [Using the Window’s Field Editor](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Tasks/UsingWindowFieldEditor.html#//apple_ref/doc/uid/20000238).

## See Also

### Managing the Field Editor

- [setWantsNotificationForMarkedText(\_:)](setwantsnotificationformarkedtext%28__%29.md): Directs the cell’s associated field editor to post text change notifications.

# setUpFieldEditorAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the cell to set up the field editor’s attributes before editing begins.

## Declaration

```objectivec
- (NSText *) setUpFieldEditorAttributes:(NSText *) textObj;
```

## Parameters

- `textObj`: A text object configured as a field editor.

<a id="return-value"></a>

## Return Value

A text object with customized attributes suitable for editing the text field cell’s content.

<a id="Discussion"></a>

## Discussion

You never invoke this method directly; by overriding it, however, you can customize the field editor. When you override this method, you should generally invoke the implementation of `super` and return the `textObj` argument. For information on field editors, see [Using the Window’s Field Editor](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Tasks/UsingWindowFieldEditor.html#//apple_ref/doc/uid/20000238).

## See Also

### Managing the Field Editor

- [setWantsNotificationForMarkedText:](setwantsnotificationformarkedtext%28__%29.md): Directs the cell’s associated field editor to post text change notifications.
