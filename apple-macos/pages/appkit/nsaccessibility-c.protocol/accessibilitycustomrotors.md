> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitycustomrotors

# accessibilityCustomRotors

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The custom rotors of the current accessibility element.

## Declaration

```objectivec
@property (copy) NSArray<NSAccessibilityCustomRotor *> * accessibilityCustomRotors;
```

<a id="Discussion"></a>

## Discussion

Custom rotors are lists of items of a specific category. For example, a “headings” rotor returns a list of headings a given document.

## See Also

### Assigning rotors

- [NSAccessibilityCustomRotor](../nsaccessibilitycustomrotor.md): A context-sensitive function that helps VoiceOver users find the next instance of a related accessibility element.
