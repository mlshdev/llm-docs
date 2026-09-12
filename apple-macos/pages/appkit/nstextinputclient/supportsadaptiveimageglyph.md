> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/supportsadaptiveimageglyph](https://developer.apple.com/documentation/appkit/nstextinputclient/supportsadaptiveimageglyph)

# supportsAdaptiveImageGlyph (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A Boolean value that indicates whether the document supports adaptive images in the input.

## Declaration

```swift
optional var supportsAdaptiveImageGlyph: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the input system doesn’t allow the text input to contain adaptive images. Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) only if your document supports adaptive images and handles them properly. For more information, see [NSAdaptiveImageGlyph](../nsadaptiveimageglyph.md).

## See Also

### Supporting adaptive images

- [insert(\_:replacementRange:)](insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.

# supportsAdaptiveImageGlyph (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A Boolean value that indicates whether the document supports adaptive images in the input.

## Declaration

```objectivec
@property (readonly) BOOL supportsAdaptiveImageGlyph;
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the input system doesn’t allow the text input to contain adaptive images. Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) only if your document supports adaptive images and handles them properly. For more information, see [NSAdaptiveImageGlyph](../nsadaptiveimageglyph.md).

## See Also

### Supporting adaptive images

- [insertAdaptiveImageGlyph:replacementRange:](insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.
