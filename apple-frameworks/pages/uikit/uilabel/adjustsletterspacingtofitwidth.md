> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/adjustsletterspacingtofitwidth](https://developer.apple.com/documentation/uikit/uilabel/adjustsletterspacingtofitwidth)

# adjustsLetterSpacingToFitWidth

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the label adjusts spacing between letters to fit the string within the label’s bounds rectangle.

> Hand tune instead by using [NSKernAttributeName](../nskernattributename.md) to affect tracking.

## Declaration

```objectivec
@property (nonatomic) BOOL adjustsLetterSpacingToFitWidth;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the label may alter the letter spacing of the text to make that text fit better within the label’s bounds. The label applies letter spacing to the text regardless of the current line break mode. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), the label to ignore values value returned by the [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation) method of any [NSParagraphStyle](../nsparagraphstyle.md) objects associated with the label text.

> **Important**

>  If this property’s value is [true](https://developer.apple.com/documentation/swift/true), it’s a programmer error to set the [lineBreakMode](linebreakmode.md) property to a value that causes text to wrap to another line.

## See Also

### Sizing the label’s text

- [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md): A Boolean value that determines whether the label reduces the text’s font size to fit the title string into the label’s bounding rectangle.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that determines whether the label tightens text before truncating.
- [baselineAdjustment](baselineadjustment.md): An option that controls whether the text’s baseline remains fixed when text needs to shrink to fit in the label.
- [minimumScaleFactor](minimumscalefactor.md): The minimum scale factor for the label’s text.
- [numberOfLines](numberoflines.md): The maximum number of lines for rendering text.
- [sizingRule](../uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [minimumFontSize](minimumfontsize.md): Deprecated. The size of the smallest permissible font when drawing the label’s text.
