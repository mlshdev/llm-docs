> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/showannotation(_:)](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/showannotation(_:))

# showAnnotation(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays an annotation string in an annotation window.

## Declaration

```swift
func showAnnotation(_ annotationString: NSAttributedString!)
```

## Parameters

- `annotationString`: The string to display.

<a id="Discussion"></a>

## Discussion

An annotation string explains or comments on the candidate string in the candidates window. An annotation window is a small, borderless window that is aligned with the current candidates window. An input method calls `showAnnotation:` when the `candidateSelectionChanged:` method of the [IMKInputController](../imkinputcontroller.md) class is called, and the candidate string has annotations.

# showAnnotation: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Displays an annotation string in an annotation window.

## Declaration

```objectivec
- (void) showAnnotation:(NSAttributedString *) annotationString;
```

## Parameters

- `annotationString`: The string to display.

<a id="Discussion"></a>

## Discussion

An annotation string explains or comments on the candidate string in the candidates window. An annotation window is a small, borderless window that is aligned with the current candidates window. An input method calls `showAnnotation:` when the `candidateSelectionChanged:` method of the [IMKInputController](../imkinputcontroller.md) class is called, and the candidate string has annotations.
