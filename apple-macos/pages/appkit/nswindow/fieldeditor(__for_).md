> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/fieldeditor(_:for:)](https://developer.apple.com/documentation/appkit/nswindow/fieldeditor(_:for:))

# fieldEditor(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window’s field editor, creating it if requested.

## Declaration

```swift
func fieldEditor(_ createFlag: Bool, for object: Any?) -> NSText?
```

## Parameters

- `createFlag`: If [true](https://developer.apple.com/documentation/swift/true), creates a field editor if one doesn’t exist; if [false](https://developer.apple.com/documentation/swift/false), does not create a field editor.

  A freshly created `NSWindow` object doesn’t have a field editor. After a field editor has been created for a window, the `createFlag` argument is ignored. By passing [false](https://developer.apple.com/documentation/swift/false) for `createFlag` and testing the return value, however, you can predicate an action on the existence of the field editor.
- `object`: A text-displaying object for which the delegate (in [windowWillReturnFieldEditor(\_:to:)](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md)) assigns a custom field editor. Pass `nil` to get the default field editor, which can be the `NSWindow` field editor or a custom field editor returned by the delegate.

<a id="return-value"></a>

## Return Value

Returns the field editor for the designated object (`object`) or, if `object` is `nil`, the default field editor. Returns `nil` if `createFlag` is [false](https://developer.apple.com/documentation/swift/false) and if the field editor doesn’t exist.

<a id="Discussion"></a>

## Discussion

The field editor is a single [NSTextView](../nstextview.md) object that is shared among all the controls in a window for light text-editing needs. It is automatically instantiated when needed, and it can be used however your application sees fit. Typically, the field editor is used by simple text-bearing objects—for example, an [NSTextField](../nstextfield.md) object uses its window’s field editor to display and manipulate text. The field editor can be shared by any number of objects, and so its state may be constantly changing. Therefore, it shouldn’t be used to display text that demands sophisticated layout (for this you should create a dedicated `NSTextView` object).

The field editor may be in use by some view object, so be sure to properly dissociate it from that object before actually using it yourself (the appropriate way to do this is illustrated in the description of [endEditing(for:)](endediting%28for_%29.md)). Once you retrieve the field editor, you can insert it in the view hierarchy, set a delegate to interpret text events, and have it perform whatever editing is needed. Then, when it sends a [textDidEndEditing(\_:)](../nstextdelegate/textdidendediting%28__%29.md) message to the delegate, you can get its text to display or store and remove the field editor using [endEditing(for:)](endediting%28for_%29.md).

The window’s delegate can substitute a custom field editor in place of the window’s field editor by implementing [windowWillReturnFieldEditor(\_:to:)](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md). The custom field editor can become the default editor (common to all text-displaying objects) or specific to a particular text-displaying object (`object`). The window sends this message to its delegate with itself and `object` as the arguments; if the delegate returns a non-`nil` value, the window returns that object instead of its field editor in [fieldEditor(\_:for:)](fieldeditor%28__for_%29.md). However, note the following:

- If the window’s delegate is identical to `object`, [windowWillReturnFieldEditor(\_:to:)](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md) isn’t sent to the delegate.
- The object returned by the delegate method, though it may become first responder, does not become the window’s default field editor.  Other objects continue to use the window’s default field editor.

## See Also

### Managing Field Editors

- [endEditing(for:)](endediting%28for_%29.md): Forces the field editor to give up its first responder status and prepares it for its next assignment.

# fieldEditor:forObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window’s field editor, creating it if requested.

## Declaration

```objectivec
- (NSText *) fieldEditor:(BOOL) createFlag forObject:(id) object;
```

## Parameters

- `createFlag`: If [true](https://developer.apple.com/documentation/swift/true), creates a field editor if one doesn’t exist; if [false](https://developer.apple.com/documentation/swift/false), does not create a field editor.

  A freshly created `NSWindow` object doesn’t have a field editor. After a field editor has been created for a window, the `createFlag` argument is ignored. By passing [false](https://developer.apple.com/documentation/swift/false) for `createFlag` and testing the return value, however, you can predicate an action on the existence of the field editor.
- `object`: A text-displaying object for which the delegate (in [windowWillReturnFieldEditor:toObject:](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md)) assigns a custom field editor. Pass `nil` to get the default field editor, which can be the `NSWindow` field editor or a custom field editor returned by the delegate.

<a id="return-value"></a>

## Return Value

Returns the field editor for the designated object (`object`) or, if `object` is `nil`, the default field editor. Returns `nil` if `createFlag` is [false](https://developer.apple.com/documentation/swift/false) and if the field editor doesn’t exist.

<a id="Discussion"></a>

## Discussion

The field editor is a single [NSTextView](../nstextview.md) object that is shared among all the controls in a window for light text-editing needs. It is automatically instantiated when needed, and it can be used however your application sees fit. Typically, the field editor is used by simple text-bearing objects—for example, an [NSTextField](../nstextfield.md) object uses its window’s field editor to display and manipulate text. The field editor can be shared by any number of objects, and so its state may be constantly changing. Therefore, it shouldn’t be used to display text that demands sophisticated layout (for this you should create a dedicated `NSTextView` object).

The field editor may be in use by some view object, so be sure to properly dissociate it from that object before actually using it yourself (the appropriate way to do this is illustrated in the description of [endEditingFor:](endediting%28for_%29.md)). Once you retrieve the field editor, you can insert it in the view hierarchy, set a delegate to interpret text events, and have it perform whatever editing is needed. Then, when it sends a [textDidEndEditing:](../nstextdelegate/textdidendediting%28__%29.md) message to the delegate, you can get its text to display or store and remove the field editor using [endEditingFor:](endediting%28for_%29.md).

The window’s delegate can substitute a custom field editor in place of the window’s field editor by implementing [windowWillReturnFieldEditor:toObject:](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md). The custom field editor can become the default editor (common to all text-displaying objects) or specific to a particular text-displaying object (`object`). The window sends this message to its delegate with itself and `object` as the arguments; if the delegate returns a non-`nil` value, the window returns that object instead of its field editor in [fieldEditor:forObject:](fieldeditor%28__for_%29.md). However, note the following:

- If the window’s delegate is identical to `object`, [windowWillReturnFieldEditor:toObject:](../nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md) isn’t sent to the delegate.
- The object returned by the delegate method, though it may become first responder, does not become the window’s default field editor.  Other objects continue to use the window’s default field editor.

## See Also

### Managing Field Editors

- [endEditingFor:](endediting%28for_%29.md): Forces the field editor to give up its first responder status and prepares it for its next assignment.
