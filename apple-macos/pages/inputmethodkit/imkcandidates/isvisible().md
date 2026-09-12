> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/isvisible()](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/isvisible())

# isVisible() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether or not the candidates window is visible.

## Declaration

```swift
func isVisible() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the candidates window is visible; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Window Visibility and Behavior

- [show(\_:)](show%28__%29.md): Shows the candidates window.
- [hide()](hide%28%29.md): Hides a candidates window, if it is visible.
- [setDismissesAutomatically(\_:)](setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically()](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [update()](update%28%29.md): Updates the candidates that are displayed in the candidates window.

# isVisible (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether or not the candidates window is visible.

## Declaration

```objectivec
- (BOOL) isVisible;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the candidates window is visible; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Window Visibility and Behavior

- [show:](show%28__%29.md): Shows the candidates window.
- [hide](hide%28%29.md): Hides a candidates window, if it is visible.
- [setDismissesAutomatically:](setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [updateCandidates](update%28%29.md): Updates the candidates that are displayed in the candidates window.
