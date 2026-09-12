> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/layoutqueue](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/layoutqueue)

# layoutQueue (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The queue that the framework dispatches layout operations on.

## Declaration

```swift
var layoutQueue: OperationQueue? { get set }
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, it performs layout in the specified queue until `estimatedUsageBounds` becomes `false`.

## See Also

### Configuring global layout manager options

- [renderingAttributesValidator](renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.

# layoutQueue (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The queue that the framework dispatches layout operations on.

## Declaration

```objectivec
@property (strong, nullable) NSOperationQueue * layoutQueue;
```

<a id="Discussion"></a>

## Discussion

If non-`nil`, it performs layout in the specified queue until `estimatedUsageBounds` becomes `false`.

## See Also

### Configuring global layout manager options

- [renderingAttributesValidator](renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.
- [limitsLayoutForSuspiciousContents](limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.
