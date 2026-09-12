> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/firstkeyview](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/firstkeyview)

# firstKeyView (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The first view in the keyboard focus chain.

## Declaration

```swift
var firstKeyView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The first key view can be set in the nib file by connecting a view to the receiver’s `_firstKeyView` outlet.

## See Also

### Handling keyboard focus

- [initialKeyView](initialkeyview.md): The view that should have keyboard focus when the pane is selected.
- [lastKeyView](lastkeyview.md): The last view in the keyboard focus chain.
- [autoSaveTextFields](autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.

# firstKeyView (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The first view in the keyboard focus chain.

## Declaration

```objectivec
@property (strong, nullable) NSView * firstKeyView;
```

<a id="Discussion"></a>

## Discussion

The first key view can be set in the nib file by connecting a view to the receiver’s `_firstKeyView` outlet.

## See Also

### Handling keyboard focus

- [initialKeyView](initialkeyview.md): The view that should have keyboard focus when the pane is selected.
- [lastKeyView](lastkeyview.md): The last view in the keyboard focus chain.
- [autoSaveTextFields](autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.
