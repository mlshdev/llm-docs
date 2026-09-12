> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/typesetter](https://developer.apple.com/documentation/appkit/nslayoutmanager/typesetter)

# typesetter (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The current typesetter.

## Declaration

```swift
var typesetter: NSTypesetter { get set }
```

## See Also

### Managing the typesetter

- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSLayoutManager.TypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeight(for:)](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffset(for:)](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

# typesetter (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The current typesetter.

## Declaration

```objectivec
@property (strong) NSTypesetter * typesetter;
```

## See Also

### Managing the typesetter

- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSTypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeightForFont:](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffsetForFont:](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.
