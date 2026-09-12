> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/candidateselectionchanged(_:)](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/candidateselectionchanged(_:))

# candidateSelectionChanged(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs an input controller that the current candidate selection in the candidate window has changed.

## Declaration

```swift
func candidateSelectionChanged(_ candidateString: NSAttributedString!)
```

## Parameters

- `candidateString`: The changed candidate string.

<a id="Discussion"></a>

## Discussion

Note this method is called to indicate user activity in the candidate window. The candidate object might not be the user’s final selection.

## See Also

### Tracking Selections

- [annotationSelected(\_:forCandidate:)](annotationselected%28__forcandidate_%29.md): Sends the selected candidate string and annotation string to the input controller.
- [candidateSelected(\_:)](candidateselected%28__%29.md): Informs an input controller that a new candidate is selected.

# candidateSelectionChanged: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs an input controller that the current candidate selection in the candidate window has changed.

## Declaration

```objectivec
- (void) candidateSelectionChanged:(NSAttributedString *) candidateString;
```

## Parameters

- `candidateString`: The changed candidate string.

<a id="Discussion"></a>

## Discussion

Note this method is called to indicate user activity in the candidate window. The candidate object might not be the user’s final selection.

## See Also

### Tracking Selections

- [annotationSelected:forCandidate:](annotationselected%28__forcandidate_%29.md): Sends the selected candidate string and annotation string to the input controller.
- [candidateSelected:](candidateselected%28__%29.md): Informs an input controller that a new candidate is selected.
