> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/insert(_:replacementrange:)](https://developer.apple.com/documentation/appkit/nstextinputclient/insert(_:replacementrange:))

# insert(\_:replacementRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Inserts an adaptive image into the text at the specifed location.

## Declaration

```swift
optional func insert(_ adaptiveImageGlyph: NSAdaptiveImageGlyph, replacementRange: NSRange)
```

## Parameters

- `adaptiveImageGlyph`: The adaptive image to add to the text.
- `replacementRange`: The text range at which to insert the image.

## See Also

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.

# insertAdaptiveImageGlyph:replacementRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Inserts an adaptive image into the text at the specifed location.

## Declaration

```objectivec
- (void) insertAdaptiveImageGlyph:(NSAdaptiveImageGlyph *) adaptiveImageGlyph replacementRange:(NSRange) replacementRange;
```

## Parameters

- `adaptiveImageGlyph`: The adaptive image to add to the text.
- `replacementRange`: The text range at which to insert the image.

## See Also

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.
