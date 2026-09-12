> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/firstkeyview()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/firstkeyview())

# firstKeyView() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the first view in the keyboard loop of the view.

## Declaration

```swift
func firstKeyView() -> NSView!
```

<a id="Discussion"></a>

## Discussion

The default return value of this method is `nil`. When the authorization plug-in calls this method, your subclass should return the first view in the keyboard loop of your custom [NSView](../../appkit/nsview.md) object.

## See Also

### Setting Up the Keyboard Loop

- [firstResponder()](firstresponder%28%29.md): Returns the view that should get focus for keyboard events.
- [lastKeyView()](lastkeyview%28%29.md): Returns the last view in the keyboard loop of the view.

# firstKeyView (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the first view in the keyboard loop of the view.

## Declaration

```objectivec
- (NSView *) firstKeyView;
```

<a id="Discussion"></a>

## Discussion

The default return value of this method is `nil`. When the authorization plug-in calls this method, your subclass should return the first view in the keyboard loop of your custom [NSView](../../appkit/nsview.md) object.

## See Also

### Setting Up the Keyboard Loop

- [firstResponder](firstresponder%28%29.md): Returns the view that should get focus for keyboard events.
- [lastKeyView](lastkeyview%28%29.md): Returns the last view in the keyboard loop of the view.
