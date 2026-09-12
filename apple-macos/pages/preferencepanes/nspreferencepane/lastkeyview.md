> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/lastkeyview](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/lastkeyview)

# lastKeyView (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The last view in the keyboard focus chain.

## Declaration

```swift
var lastKeyView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The last view can be set in the nib file by connecting a view to the receiver’s `_lastKeyView` outlet.

## See Also

### Handling keyboard focus

- [firstKeyView](firstkeyview.md): The first view in the keyboard focus chain.
- [initialKeyView](initialkeyview.md): The view that should have keyboard focus when the pane is selected.
- [autoSaveTextFields](autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.

# lastKeyView (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The last view in the keyboard focus chain.

## Declaration

```objectivec
@property (strong, nullable) NSView * lastKeyView;
```

<a id="Discussion"></a>

## Discussion

The last view can be set in the nib file by connecting a view to the receiver’s `_lastKeyView` outlet.

## See Also

### Handling keyboard focus

- [firstKeyView](firstkeyview.md): The first view in the keyboard focus chain.
- [initialKeyView](initialkeyview.md): The view that should have keyboard focus when the pane is selected.
- [autoSaveTextFields](autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.
