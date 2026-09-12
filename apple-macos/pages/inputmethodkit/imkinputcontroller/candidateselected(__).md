> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/candidateselected(_:)](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/candidateselected(_:))

# candidateSelected(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs an input controller that a new candidate is selected.

## Declaration

```swift
func candidateSelected(_ candidateString: NSAttributedString!)
```

## Parameters

- `candidateString`: The changed candidate string.

<a id="Discussion"></a>

## Discussion

The candidate object is the user’s final choice from the candidate window. The candidate window is closed before this method is called.

## See Also

### Tracking Selections

- [annotationSelected(\_:forCandidate:)](annotationselected%28__forcandidate_%29.md): Sends the selected candidate string and annotation string to the input controller.
- [candidateSelectionChanged(\_:)](candidateselectionchanged%28__%29.md): Informs an input controller that the current candidate selection in the candidate window has changed.

# candidateSelected: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs an input controller that a new candidate is selected.

## Declaration

```objectivec
- (void) candidateSelected:(NSAttributedString *) candidateString;
```

## Parameters

- `candidateString`: The changed candidate string.

<a id="Discussion"></a>

## Discussion

The candidate object is the user’s final choice from the candidate window. The candidate window is closed before this method is called.

## See Also

### Tracking Selections

- [annotationSelected:forCandidate:](annotationselected%28__forcandidate_%29.md): Sends the selected candidate string and annotation string to the input controller.
- [candidateSelectionChanged:](candidateselectionchanged%28__%29.md): Informs an input controller that the current candidate selection in the candidate window has changed.
