> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/show(_:)](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/show(_:))

# show(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Shows the candidates window.

## Declaration

```swift
func show(_ locationHint: IMKCandidatesLocationHint)
```

## Parameters

- `locationHint`: A [IMKCandidatesLocationHint](../imkcandidateslocationhint.md) constant that specifies the desired position of the candidates window. The Input Method Kit uses the hint to place the candidates window in a location that is in the vicinity of the hint location  and ensures that the candidates window is fully visible.

<a id="Discussion"></a>

## Discussion

Your input method  calls this method when it is appropriate during text conversion to display a list of candidates.

## See Also

### Managing Window Visibility and Behavior

- [hide()](hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible()](isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [setDismissesAutomatically(\_:)](setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically()](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [update()](update%28%29.md): Updates the candidates that are displayed in the candidates window.

# show: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Shows the candidates window.

## Declaration

```objectivec
- (void) show:(IMKCandidatesLocationHint) locationHint;
```

## Parameters

- `locationHint`: A [IMKCandidatesLocationHint](../imkcandidateslocationhint.md) constant that specifies the desired position of the candidates window. The Input Method Kit uses the hint to place the candidates window in a location that is in the vicinity of the hint location  and ensures that the candidates window is fully visible.

<a id="Discussion"></a>

## Discussion

Your input method  calls this method when it is appropriate during text conversion to display a list of candidates.

## See Also

### Managing Window Visibility and Behavior

- [hide](hide%28%29.md): Hides a candidates window, if it is visible.
- [isVisible](isvisible%28%29.md): Returns whether or not the candidates window is visible.
- [setDismissesAutomatically:](setdismissesautomatically%28__%29.md): Sets the state of the flag that determines whether the candidates window dismisses automatically.
- [dismissesAutomatically](dismissesautomatically%28%29.md): Returns the state of the flag that determines whether the candidates window dismisses automatically.
- [updateCandidates](update%28%29.md): Updates the candidates that are displayed in the candidates window.
