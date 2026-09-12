> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationpluginview/firstresponder()](https://developer.apple.com/documentation/securityinterface/sfauthorizationpluginview/firstresponder())

# firstResponder() (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the view that should get focus for keyboard events.

## Declaration

```swift
func firstResponder() -> NSResponder!
```

<a id="Discussion"></a>

## Discussion

The default return value of this method is `nil`. When the authorization plug-in calls this method, your subclass should return the view that should get the focus for keyboard events.

## See Also

### Setting Up the Keyboard Loop

- [firstKeyView()](firstkeyview%28%29.md): Returns the first view in the keyboard loop of the view.
- [lastKeyView()](lastkeyview%28%29.md): Returns the last view in the keyboard loop of the view.

# firstResponder (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the view that should get focus for keyboard events.

## Declaration

```objectivec
- (NSResponder *) firstResponder;
```

<a id="Discussion"></a>

## Discussion

The default return value of this method is `nil`. When the authorization plug-in calls this method, your subclass should return the view that should get the focus for keyboard events.

## See Also

### Setting Up the Keyboard Loop

- [firstKeyView](firstkeyview%28%29.md): Returns the first view in the keyboard loop of the view.
- [lastKeyView](lastkeyview%28%29.md): Returns the last view in the keyboard loop of the view.
