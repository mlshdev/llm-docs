> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsgesturerecognizer/iscancellablebyscrollgesture

# isCancellableByScrollGesture (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Causes the receiver to be cancelled when its enclosing scroll view’s gesture recognizer begins.

## Declaration

```swift
var isCancellableByScrollGesture: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `false`.

## See Also

### Getting additional recognizer information

- [allowedTouchTypes](allowedtouchtypes.md)
- [modifierFlags](modifierflags.md): The keyboard modifier flags in effect while the receiver last processed an event.
- [name](name.md)

# cancellableByScrollGesture (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Causes the receiver to be cancelled when its enclosing scroll view’s gesture recognizer begins.

## Declaration

```objectivec
@property (getter=isCancellableByScrollGesture) BOOL cancellableByScrollGesture;
```

<a id="discussion"></a>

## Discussion

Defaults to `false`.

## See Also

### Getting additional recognizer information

- [allowedTouchTypes](allowedtouchtypes.md)
- [modifierFlags](modifierflags.md): The keyboard modifier flags in effect while the receiver last processed an event.
- [name](name.md)
