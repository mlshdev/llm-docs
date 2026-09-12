> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/annotationselected(_:forcandidate:)](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/annotationselected(_:forcandidate:))

# annotationSelected(\_:forCandidate:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sends the selected candidate string and annotation string to the input controller.

## Declaration

```swift
func annotationSelected(_ annotationString: NSAttributedString!, forCandidate candidateString: NSAttributedString!)
```

## Parameters

- `annotationString`: The annotation string associated with the candidate.
- `candidateString`: The candidate string that the user moved to.

<a id="Discussion"></a>

## Discussion

This method is called when the user moves to a candidate.

## See Also

### Tracking Selections

- [candidateSelectionChanged(\_:)](candidateselectionchanged%28__%29.md): Informs an input controller that the current candidate selection in the candidate window has changed.
- [candidateSelected(\_:)](candidateselected%28__%29.md): Informs an input controller that a new candidate is selected.

# annotationSelected:forCandidate: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sends the selected candidate string and annotation string to the input controller.

## Declaration

```objectivec
- (void) annotationSelected:(NSAttributedString *) annotationString forCandidate:(NSAttributedString *) candidateString;
```

## Parameters

- `annotationString`: The annotation string associated with the candidate.
- `candidateString`: The candidate string that the user moved to.

<a id="Discussion"></a>

## Discussion

This method is called when the user moves to a candidate.

## See Also

### Tracking Selections

- [candidateSelectionChanged:](candidateselectionchanged%28__%29.md): Informs an input controller that the current candidate selection in the candidate window has changed.
- [candidateSelected:](candidateselected%28__%29.md): Informs an input controller that a new candidate is selected.
