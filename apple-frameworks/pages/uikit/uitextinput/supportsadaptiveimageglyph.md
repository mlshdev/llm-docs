> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/supportsadaptiveimageglyph](https://developer.apple.com/documentation/uikit/uitextinput/supportsadaptiveimageglyph)

# supportsAdaptiveImageGlyph (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the document supports adaptive images in the input.

## Declaration

```swift
optional var supportsAdaptiveImageGlyph: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the input system doesn’t allow the text input to contain adaptive images. Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) only if your document supports adaptive images and handles them properly. For more information, see [NSAdaptiveImageGlyph](../nsadaptiveimageglyph.md)

## See Also

### Supporting adaptive images

- [insert(\_:replacementRange:)](insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.

# supportsAdaptiveImageGlyph (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the document supports adaptive images in the input.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsAdaptiveImageGlyph;
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the input system doesn’t allow the text input to contain adaptive images. Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) only if your document supports adaptive images and handles them properly. For more information, see [NSAdaptiveImageGlyph](../nsadaptiveimageglyph.md)

## See Also

### Supporting adaptive images

- [insertAdaptiveImageGlyph:replacementRange:](insert%28__replacementrange_%29.md): Inserts an adaptive image into the text at the specifed location.
