> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableconfiguration-c.class/attributedtext](https://developer.apple.com/documentation/uikit/uicontentunavailableconfiguration-c.class/attributedtext)

# attributedText

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

An attributed variant of the primary text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedText;
```

<a id="Discussion"></a>

## Discussion

Setting this property supersedes [text](text.md) and some properties of [textProperties](../uicontentunavailableconfiguration-swift.struct/textproperties-swift.property.md).
