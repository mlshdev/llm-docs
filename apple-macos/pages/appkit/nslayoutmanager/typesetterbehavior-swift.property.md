> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/typesetterbehavior-swift.property](https://developer.apple.com/documentation/appkit/nslayoutmanager/typesetterbehavior-swift.property)

# typesetterBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The default typesetter behavior.

## Declaration

```swift
var typesetterBehavior: NSLayoutManager.TypesetterBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

The typesetter behavior affects glyph spacing and line height.

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [NSLayoutManager.TypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeight(for:)](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffset(for:)](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

# typesetterBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The default typesetter behavior.

## Declaration

```objectivec
@property NSTypesetterBehavior typesetterBehavior;
```

<a id="Discussion"></a>

## Discussion

The typesetter behavior affects glyph spacing and line height.

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [NSTypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeightForFont:](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffsetForFont:](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.
