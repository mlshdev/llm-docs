> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/endediting(for:)](https://developer.apple.com/documentation/appkit/nswindow/endediting(for:))

# endEditing(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forces the field editor to give up its first responder status and prepares it for its next assignment.

## Declaration

```swift
func endEditing(for object: Any?)
```

## Parameters

- `object`: The object that is using the window’s field editor.

<a id="Discussion"></a>

## Discussion

If the field editor is the first responder, it’s made to resign that status even if its [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md) method returns [false](https://developer.apple.com/documentation/swift/false). This registration forces the field editor to send a [textDidEndEditing(\_:)](../nstextdelegate/textdidendediting%28__%29.md) message to its delegate. The field editor is then removed from the view hierarchy, its delegate is set to `nil`, and it’s emptied of any text it may contain.

This method is typically invoked by the object using the field editor when it’s finished. Other objects normally change the first responder by simply using [makeFirstResponder(\_:)](makefirstresponder%28__%29.md), which allows a field editor or other object to retain its first responder status if, for example, the user has entered an invalid value. The [endEditing(for:)](endediting%28for_%29.md) method should be used only as a last resort if the field editor refuses to resign first responder status. Even in this case, you should always allow the field editor a chance to validate its text and take whatever other action it needs first. You can do this by first trying to make the `NSWindow` object the first responder:

```objc
if ([myWindow makeFirstResponder:myWindow]) {
    /* All fields are now valid; it’s safe to use fieldEditor:forObject:
        to claim the field editor. */
}
else {
    /* Force first responder to resign. */
    [myWindow endEditingFor:nil];
}
```

## See Also

### Related Documentation

- [windowWillReturnFieldEditor(\_:to:)](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md): Tells the delegate that the field editor for a text-displaying object has been requested.

### Managing Field Editors

- [fieldEditor(\_:for:)](fieldeditor%28__for_%29.md): Returns the window’s field editor, creating it if requested.

# endEditingFor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Forces the field editor to give up its first responder status and prepares it for its next assignment.

## Declaration

```objectivec
- (void) endEditingFor:(id) object;
```

## Parameters

- `object`: The object that is using the window’s field editor.

<a id="Discussion"></a>

## Discussion

If the field editor is the first responder, it’s made to resign that status even if its [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md) method returns [false](https://developer.apple.com/documentation/swift/false). This registration forces the field editor to send a [textDidEndEditing:](../nstextdelegate/textdidendediting%28__%29.md) message to its delegate. The field editor is then removed from the view hierarchy, its delegate is set to `nil`, and it’s emptied of any text it may contain.

This method is typically invoked by the object using the field editor when it’s finished. Other objects normally change the first responder by simply using [makeFirstResponder:](makefirstresponder%28__%29.md), which allows a field editor or other object to retain its first responder status if, for example, the user has entered an invalid value. The [endEditingFor:](endediting%28for_%29.md) method should be used only as a last resort if the field editor refuses to resign first responder status. Even in this case, you should always allow the field editor a chance to validate its text and take whatever other action it needs first. You can do this by first trying to make the `NSWindow` object the first responder:

```objc
if ([myWindow makeFirstResponder:myWindow]) {
    /* All fields are now valid; it’s safe to use fieldEditor:forObject:
        to claim the field editor. */
}
else {
    /* Force first responder to resign. */
    [myWindow endEditingFor:nil];
}
```

## See Also

### Related Documentation

- [windowWillReturnFieldEditor:toObject:](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md): Tells the delegate that the field editor for a text-displaying object has been requested.

### Managing Field Editors

- [fieldEditor:forObject:](fieldeditor%28__for_%29.md): Returns the window’s field editor, creating it if requested.
