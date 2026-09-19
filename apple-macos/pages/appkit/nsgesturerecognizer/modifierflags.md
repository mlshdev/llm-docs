> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsgesturerecognizer/modifierflags

# modifierFlags (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The keyboard modifier flags in effect while the receiver last processed an event.

## Declaration

```swift
var modifierFlags: NSEvent.ModifierFlags { get }
```

<a id="discussion"></a>

## Discussion

Use this property from an action method or delegate callback to determine which modifier keys, such as Shift or Command, were held down as part of the gesture.

## See Also

### Getting additional recognizer information

- [allowedTouchTypes](allowedtouchtypes.md)
- [isCancellableByScrollGesture](iscancellablebyscrollgesture.md): Causes the receiver to be cancelled when its enclosing scroll view’s gesture recognizer begins.
- [name](name.md)

# modifierFlags (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The keyboard modifier flags in effect while the receiver last processed an event.

## Declaration

```objectivec
@property (readonly) NSEventModifierFlags modifierFlags;
```

<a id="discussion"></a>

## Discussion

Use this property from an action method or delegate callback to determine which modifier keys, such as Shift or Command, were held down as part of the gesture.

## See Also

### Getting additional recognizer information

- [allowedTouchTypes](allowedtouchtypes.md)
- [cancellableByScrollGesture](iscancellablebyscrollgesture.md): Causes the receiver to be cancelled when its enclosing scroll view’s gesture recognizer begins.
- [name](name.md)
