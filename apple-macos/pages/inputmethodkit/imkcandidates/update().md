> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/update()](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/update())

# update() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Updates the candidates that are displayed in the candidates window.

## Declaration

```swift
func update()
```

<a id="Discussion"></a>

## Discussion

When you call this method, the Input Method Kit  calls the candidates method of the [IMKInputController](../imkinputcontroller.md) class. Note that the candidates list is updated, but the visible state of the window does not change. In other words, if the window is hidden, it remains hidden. If the window is visible, it remains visible.

## See Also

### Managing Window Visibility and Behavior

- [show(\_:)](show%28__%29.md): Shows the candidates window.
- [hide()](hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible()](isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [setDismissesAutomatically(\_:)](setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically()](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.

# updateCandidates (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Updates the candidates that are displayed in the candidates window.

## Declaration

```objectivec
- (void) updateCandidates;
```

<a id="Discussion"></a>

## Discussion

When you call this method, the Input Method Kit  calls the candidates method of the [IMKInputController](../imkinputcontroller.md) class. Note that the candidates list is updated, but the visible state of the window does not change. In other words, if the window is hidden, it remains hidden. If the window is visible, it remains visible.

## See Also

### Managing Window Visibility and Behavior

- [show:](show%28__%29.md): Shows the candidates window.
- [hide](hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible](isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [setDismissesAutomatically:](setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
