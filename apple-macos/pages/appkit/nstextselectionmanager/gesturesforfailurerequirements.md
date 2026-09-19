> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextselectionmanager/gesturesforfailurerequirements

# gesturesForFailureRequirements (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The gesture recognizers managed by the selection manager.

## Declaration

```swift
var gesturesForFailureRequirements: [NSGestureRecognizer] { get }
```

<a id="discussion"></a>

## Discussion

Other gesture recognizers in the view hierarchy can declare dependencies on these gestures using `requireGestureRecognizerToFail:` to ensure proper gesture recognition precedence.

# gesturesForFailureRequirements (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The gesture recognizers managed by the selection manager.

## Declaration

```objectivec
@property (readonly) NSArray<NSGestureRecognizer *> * gesturesForFailureRequirements;
```

<a id="discussion"></a>

## Discussion

Other gesture recognizers in the view hierarchy can declare dependencies on these gestures using `requireGestureRecognizerToFail:` to ensure proper gesture recognition precedence.
