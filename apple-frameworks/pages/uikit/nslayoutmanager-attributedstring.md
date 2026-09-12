> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager-attributedstring](https://developer.apple.com/documentation/uikit/nslayoutmanager-attributedstring)

# attributedString

**Interface languages:** Swift, Objective-C

**Framework:** UIKit  
**Kind:** Article

The text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.

<a id="overview"></a>

## Overview

**Swift**

```swift
var attributedString: NSAttributedString? { get }
```

**Objective-C**

```objc
@property(readonly, strong) NSAttributedString *attributedString
```

This property is part of the `NSGlyphStorage` protocol, for use by the glyph generator. For `NSLayoutManager` the attributed string is equivalent to the text storage.

## See Also

### Properties

- [hyphenationFactor](nslayoutmanager/hyphenationfactor.md): Deprecated. The threshold controlling when hyphenation is done.
- [layoutOptions](nslayoutmanager-layoutoptions.md): The layout manager’s current layout options.
- [usesScreenFonts](https://developer.apple.com/documentation/appkit/nslayoutmanager/usesscreenfonts): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.
