> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/useshyphenation](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/useshyphenation)

# usesHyphenation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.

## Declaration

```swift
var usesHyphenation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `true`.

## See Also

### Configuring global layout manager options

- [layoutQueue](layoutqueue.md): The queue that the framework dispatches layout operations on.
- [renderingAttributesValidator](renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.

# usesHyphenation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.

## Declaration

```objectivec
@property BOOL usesHyphenation;
```

<a id="Discussion"></a>

## Discussion

Defaults to `true`.

## See Also

### Configuring global layout manager options

- [layoutQueue](layoutqueue.md): The queue that the framework dispatches layout operations on.
- [renderingAttributesValidator](renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.
