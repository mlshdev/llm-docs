> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/basewritingdirection](https://developer.apple.com/documentation/appkit/nsparagraphstyle/basewritingdirection)

# baseWritingDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The base writing direction for the paragraph.

## Declaration

```swift
var baseWritingDirection: NSWritingDirection { get }
```

<a id="Discussion"></a>

## Discussion

If you the value of this property is [NSWritingDirection.natural](../nswritingdirection/natural.md), the receiver resolves the writing direction to either [NSWritingDirection.leftToRight](../nswritingdirection/lefttoright.md) or [NSWritingDirection.rightToLeft](../nswritingdirection/righttoleft.md), depending on the direction for the user’s language preference setting.

## See Also

### Determining writing direction

- [defaultWritingDirection(forLanguage:)](defaultwritingdirection%28forlanguage_%29.md): Returns the default writing direction for the specified language.
- [NSWritingDirection](../nswritingdirection.md): Constants that specify the writing direction.

# baseWritingDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The base writing direction for the paragraph.

## Declaration

```objectivec
@property (readonly) NSWritingDirection baseWritingDirection;
```

<a id="Discussion"></a>

## Discussion

If you the value of this property is [NSWritingDirectionNatural](../nswritingdirection/natural.md), the receiver resolves the writing direction to either [NSWritingDirectionLeftToRight](../nswritingdirection/lefttoright.md) or [NSWritingDirectionRightToLeft](../nswritingdirection/righttoleft.md), depending on the direction for the user’s language preference setting.

## See Also

### Determining writing direction

- [defaultWritingDirectionForLanguage:](defaultwritingdirection%28forlanguage_%29.md): Returns the default writing direction for the specified language.
- [NSWritingDirection](../nswritingdirection.md): Constants that specify the writing direction.
