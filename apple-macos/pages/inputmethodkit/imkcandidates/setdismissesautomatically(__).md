> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/setdismissesautomatically(_:)](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/setdismissesautomatically(_:))

# setDismissesAutomatically(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the state of the flag that determines whether the candidates window dismisses automatically.

## Declaration

```swift
func setDismissesAutomatically(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to have the candidates window dismiss automatically; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

By default, if the user presses the Return or Enter keys, the candidates are dismissed and a `candidateSelected:` message is sent to the input controller. You can call the `setDismissesAutomatically:` method, passing [false](https://developer.apple.com/documentation/swift/false) as the `flag` parameter to change the default dismissal behavior. The input controller still receives a `candidatesSelected:` message.

When you set the flag to [false](https://developer.apple.com/documentation/swift/false), an input method processes text input while dynamically updating the content of the candidates as the user inputs text. When a session deactivates, candidate window is hidden regardless of the state of the flag.

## See Also

### Managing Window Visibility and Behavior

- [show(\_:)](show%28__%29.md): Shows the candidates window.
- [hide()](hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible()](isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [dismissesAutomatically()](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [update()](update%28%29.md): Updates the candidates that are displayed in the candidates window.

# setDismissesAutomatically: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the state of the flag that determines whether the candidates window dismisses automatically.

## Declaration

```objectivec
- (void) setDismissesAutomatically:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) to have the candidates window dismiss automatically; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

By default, if the user presses the Return or Enter keys, the candidates are dismissed and a `candidateSelected:` message is sent to the input controller. You can call the `setDismissesAutomatically:` method, passing [false](https://developer.apple.com/documentation/swift/false) as the `flag` parameter to change the default dismissal behavior. The input controller still receives a `candidatesSelected:` message.

When you set the flag to [false](https://developer.apple.com/documentation/swift/false), an input method processes text input while dynamically updating the content of the candidates as the user inputs text. When a session deactivates, candidate window is hidden regardless of the state of the flag.

## See Also

### Managing Window Visibility and Behavior

- [show:](show%28__%29.md): Shows the candidates window.
- [hide](hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible](isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [dismissesAutomatically](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [updateCandidates](update%28%29.md): Updates the candidates that are displayed in the candidates window.
