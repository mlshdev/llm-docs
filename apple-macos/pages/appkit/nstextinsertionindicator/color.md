> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextinsertionindicator/color

# color (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The color of this indicator.

## Declaration

```swift
@NSCopying var color: NSColor! { get set }
```

<a id="Discussion"></a>

## Discussion

If set to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), returns [textInsertionPointColor](../nscolor/textinsertionpointcolor.md). Defaults to [textInsertionPointColor](../nscolor/textinsertionpointcolor.md).

## See Also

### Configuring indicators

- [effectsViewInserter](effectsviewinserter.md): An optional closure the system calls during dictation.

# color (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The color of this indicator.

## Declaration

```objectivec
@property (copy, null_resettable) NSColor * color;
```

<a id="Discussion"></a>

## Discussion

If set to [nil](https://developer.apple.com/documentation/objectivec/nil-227m0), returns [textInsertionPointColor](../nscolor/textinsertionpointcolor.md). Defaults to [textInsertionPointColor](../nscolor/textinsertionpointcolor.md).

## See Also

### Configuring indicators

- [effectsViewInserter](effectsviewinserter.md): An optional closure the system calls during dictation.
