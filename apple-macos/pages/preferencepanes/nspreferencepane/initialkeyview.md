> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/initialkeyview](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/initialkeyview)

# initialKeyView (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The view that should have keyboard focus when the pane is selected.

## Declaration

```swift
var initialKeyView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The initial view can be set in the nib file by connecting a view to the receiver’s `_initialKeyView` outlet.

## See Also

### Handling keyboard focus

- [firstKeyView](firstkeyview.md): The first view in the keyboard focus chain.
- [lastKeyView](lastkeyview.md): The last view in the keyboard focus chain.
- [autoSaveTextFields](autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.

# initialKeyView (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

The view that should have keyboard focus when the pane is selected.

## Declaration

```objectivec
@property (strong, nullable) NSView * initialKeyView;
```

<a id="Discussion"></a>

## Discussion

The initial view can be set in the nib file by connecting a view to the receiver’s `_initialKeyView` outlet.

## See Also

### Handling keyboard focus

- [firstKeyView](firstkeyview.md): The first view in the keyboard focus chain.
- [lastKeyView](lastkeyview.md): The last view in the keyboard focus chain.
- [autoSaveTextFields](autosavetextfields.md): A Boolean value that indicates whether text fields save their values before changing preference panes.
