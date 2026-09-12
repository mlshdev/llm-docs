> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager-layoutoptions](https://developer.apple.com/documentation/uikit/nslayoutmanager-layoutoptions)

# layoutOptions

**Interface languages:** Swift, Objective-C

**Framework:** UIKit  
**Kind:** Article

The layout manager’s current layout options.

<a id="overview"></a>

## Overview

**Swift**

```swift
var layoutOptions: Int { get }
```

**Objective-C**

```objc
@property(readonly) NSUInteger layoutOptions
```

This property is part of the `NSGlyphStorage` protocol, for use by the glyph generator. It enables the glyph generator to ask which options the layout manager requests.

## See Also

### Properties

- [hyphenationFactor](nslayoutmanager/hyphenationfactor.md): Deprecated. The threshold controlling when hyphenation is done.
- [attributedString](nslayoutmanager-attributedstring.md): The text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.
- [usesScreenFonts](https://developer.apple.com/documentation/appkit/nslayoutmanager/usesscreenfonts): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.
