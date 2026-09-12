> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/renderingattributesvalidator](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/renderingattributesvalidator)

# renderingAttributesValidator (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.

## Declaration

```swift
var renderingAttributesValidator: ((NSTextLayoutManager, NSTextLayoutFragment) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The validator uses [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md) to fill the rendering attributes appropriate for the range inside `textLayoutFragment`.

## See Also

### Configuring global layout manager options

- [layoutQueue](layoutqueue.md): The queue that the framework dispatches layout operations on.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.

# renderingAttributesValidator (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.

## Declaration

```objectivec
@property (copy, nullable) void (^renderingAttributesValidator)(NSTextLayoutManager *textLayoutManager, NSTextLayoutFragment *textLayoutFragment);
```

<a id="Discussion"></a>

## Discussion

The validator uses [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md) to fill the rendering attributes appropriate for the range inside `textLayoutFragment`.

## See Also

### Configuring global layout manager options

- [layoutQueue](layoutqueue.md): The queue that the framework dispatches layout operations on.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.
