> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextinputmode/currentinputmode

# currentInputMode

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ (deprecated in 7.0) · iPadOS 4.2+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns an instance representing the current text-input mode.

## Declaration

```objectivec
+ (UITextInputMode *) currentInputMode;
```

<a id="return-value"></a>

## Return Value

An object representing the current input mode or `nil` if this object is not set by the text input system.

## See Also

### Getting the current and active text-input modes

- [activeInputModes](activeinputmodes.md): The active text-input modes.
