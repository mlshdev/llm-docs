> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/lastkeyview()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/lastkeyview())

# lastKeyView() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the last view in the keyboard loop of the view.

## Declaration

```swift
func lastKeyView() -> NSView!
```

<a id="Discussion"></a>

## Discussion

The default return value of this method is `nil`. When the authorization plug-in calls this method, your subclass should return the last view in the keyboard loop of your custom [NSView](../../appkit/nsview.md) object.

## See Also

### Setting Up the Keyboard Loop

- [firstKeyView()](firstkeyview%28%29.md): Returns the first view in the keyboard loop of the view.
- [firstResponder()](firstresponder%28%29.md): Returns the view that should get focus for keyboard events.

# lastKeyView (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the last view in the keyboard loop of the view.

## Declaration

```objectivec
- (NSView *) lastKeyView;
```

<a id="Discussion"></a>

## Discussion

The default return value of this method is `nil`. When the authorization plug-in calls this method, your subclass should return the last view in the keyboard loop of your custom [NSView](../../appkit/nsview.md) object.

## See Also

### Setting Up the Keyboard Loop

- [firstKeyView](firstkeyview%28%29.md): Returns the first view in the keyboard loop of the view.
- [firstResponder](firstresponder%28%29.md): Returns the view that should get focus for keyboard events.
