> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringdrawingoptions/truncateslastvisibleline](https://developer.apple.com/documentation/uikit/nsstringdrawingoptions/truncateslastvisibleline)

# truncatesLastVisibleLine (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Truncates and adds the ellipsis character to the last visible line if the text doesn’t fit into the specified bounds.

## Declaration

```swift
static var truncatesLastVisibleLine: NSStringDrawingOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option is ignored if `NSStringDrawingUsesLineFragmentOrigin` is not also set. In addition, the line break mode must be either `NSLineBreakByWordWrapping` or `NSLineBreakByCharWrapping` for this option to take effect. The line break mode can be specified in a paragraph style passed in the attributes dictionary argument of the drawing methods.

## See Also

### Constants

- [usesLineFragmentOrigin](useslinefragmentorigin.md): Uses the line fragment origin instead of the baseline origin.
- [usesFontLeading](usesfontleading.md): Uses the font leading for calculating line heights.
- [usesDeviceMetrics](usesdevicemetrics.md): Uses image glyph bounds instead of typographic bounds.

# NSStringDrawingTruncatesLastVisibleLine (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Truncates and adds the ellipsis character to the last visible line if the text doesn’t fit into the specified bounds.

## Declaration

```objectivec
NSStringDrawingTruncatesLastVisibleLine
```

<a id="Discussion"></a>

## Discussion

This option is ignored if `NSStringDrawingUsesLineFragmentOrigin` is not also set. In addition, the line break mode must be either `NSLineBreakByWordWrapping` or `NSLineBreakByCharWrapping` for this option to take effect. The line break mode can be specified in a paragraph style passed in the attributes dictionary argument of the drawing methods.

## See Also

### Constants

- [NSStringDrawingUsesLineFragmentOrigin](useslinefragmentorigin.md): Uses the line fragment origin instead of the baseline origin.
- [NSStringDrawingUsesFontLeading](usesfontleading.md): Uses the font leading for calculating line heights.
- [NSStringDrawingUsesDeviceMetrics](usesdevicemetrics.md): Uses image glyph bounds instead of typographic bounds.
