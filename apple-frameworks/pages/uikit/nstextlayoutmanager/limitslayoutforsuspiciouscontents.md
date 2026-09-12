> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/limitslayoutforsuspiciouscontents](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/limitslayoutforsuspiciouscontents)

# limitsLayoutForSuspiciousContents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.

## Declaration

```swift
var limitsLayoutForSuspiciousContents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By enabling this functionality, it’s possible that certain text — such as a very long paragraph — might result in an unexpected layout. Defaults to `false`.

## See Also

### Configuring global layout manager options

- [layoutQueue](layoutqueue.md): The queue that the framework dispatches layout operations on.
- [renderingAttributesValidator](renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.

# limitsLayoutForSuspiciousContents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.

## Declaration

```objectivec
@property BOOL limitsLayoutForSuspiciousContents;
```

<a id="Discussion"></a>

## Discussion

By enabling this functionality, it’s possible that certain text — such as a very long paragraph — might result in an unexpected layout. Defaults to `false`.

## See Also

### Configuring global layout manager options

- [layoutQueue](layoutqueue.md): The queue that the framework dispatches layout operations on.
- [renderingAttributesValidator](renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.
