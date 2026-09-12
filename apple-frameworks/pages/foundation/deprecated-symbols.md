> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/deprecated-symbols](https://developer.apple.com/documentation/foundation/deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Migrate your code away from using these symbols.

## Topics

### Deprecated Initializers

- [init(path:documentAttributes:)](nsattributedstring/init%28path_documentattributes_%29.md): Deprecated. Initializes a new attribute string object from RTF or RTFD data in the file at the specified path.
- [init(URL:documentAttributes:)](nsattributedstring/init%28url_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.
- [init(fileURL:options:documentAttributes:)](nsattributedstring/init%28fileurl_options_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.

### Deprecated Properties

- [containsAttachments](nsattributedstring/containsattachments.md): Deprecated. A Boolean value that indicates whether the attribute string contains any attachment attributes.

### Deprecated Enumerations

- [NSTextWritingDirection](../uikit/nstextwritingdirection.md): Deprecated. Options for specifying text-writing direction.

### Deprecated Instance Methods

- [url(at:effectiveRange:)](nsattributedstring/url%28at_effectiverange_%29.md): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.
- [draw(with:options:)](nsattributedstring/draw%28with_options_%29.md): Deprecated. Draws the attributed string with the specified options within the specified rectangle in the current graphics context.
- [boundingRect(with:options:)](nsattributedstring/boundingrect%28with_options_%29.md): Deprecated. Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.

# Deprecated Symbols (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Migrate your code away from using these symbols.

## Topics

### Deprecated Initializers

- [initWithPath:documentAttributes:](nsattributedstring/init%28path_documentattributes_%29.md): Deprecated. Initializes a new attribute string object from RTF or RTFD data in the file at the specified path.
- [initWithURL:documentAttributes:](nsattributedstring/init%28url_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.
- [initWithFileURL:options:documentAttributes:error:](nsattributedstring/init%28fileurl_options_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.

### Deprecated Properties

- [textFileTypes](nsattributedstring/textfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as text.
- [textUnfilteredFileTypes](nsattributedstring/textunfilteredfiletypes.md): Deprecated. Returns an array of strings that represent file types that can be loaded as a text.
- [textPasteboardTypes](nsattributedstring/textpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [textUnfilteredPasteboardTypes](nsattributedstring/textunfilteredpasteboardtypes.md): Deprecated. Returns an array of pasteboard types that can be loaded as text.
- [containsAttachments](nsattributedstring/containsattachments.md): Deprecated. A Boolean value that indicates whether the attribute string contains any attachment attributes.

### Deprecated Enumerations

- [NSTextWritingDirection](../uikit/nstextwritingdirection.md): Deprecated. Options for specifying text-writing direction.

### Deprecated Constants

- [NSUnderlineByWordMask](https://developer.apple.com/documentation/appkit/nsunderlinebywordmask): Deprecated. Draw the underline only underneath words, not underneath whitespace.
- [NSUnderlineStrikethroughMask](https://developer.apple.com/documentation/appkit/nsunderlinestrikethroughmask): Deprecated.

### Deprecated Instance Methods

- [URLAtIndex:effectiveRange:](nsattributedstring/url%28at_effectiverange_%29.md): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.
- [drawWithRect:options:](nsattributedstring/draw%28with_options_%29.md): Deprecated. Draws the attributed string with the specified options within the specified rectangle in the current graphics context.
- [boundingRectWithSize:options:](nsattributedstring/boundingrect%28with_options_%29.md): Deprecated. Calculates and returns a bounding rectangle for the attributed string using the options specified within the specified rectangle in the current graphics context.
