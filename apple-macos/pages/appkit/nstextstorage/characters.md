> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/characters](https://developer.apple.com/documentation/appkit/nstextstorage/characters)

# characters (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text storage contents as an array of characters.

## Declaration

```swift
var characters: [NSTextStorage] { get set }
```

<a id="Discussion"></a>

## Discussion

Unless you’re dealing with scriptability, you shouldn’t use or modify this property directly. For indexed access to characters, use `NSAttributedString`’s [length](https://developer.apple.com/documentation/foundation/nsattributedstring/length) method to access the string, and `NSString`’s [character(at:)](https://developer.apple.com/documentation/foundation/nsstring/character%28at:%29) method to access the individual characters.

## See Also

### Accessing scriptable properties

- [attributeRuns](attributeruns.md): The text storage contents as an array of attribute runs.
- [paragraphs](paragraphs.md): The text storage contents as an array of paragraphs.
- [words](words.md): The text storage contents as an array of words.
- [font](font.md): The font for the text storage.
- [foregroundColor](foregroundcolor.md): The color for the text.

# characters (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text storage contents as an array of characters.

## Declaration

```objectivec
@property (copy) NSArray<NSTextStorage *> * characters;
```

<a id="Discussion"></a>

## Discussion

Unless you’re dealing with scriptability, you shouldn’t use or modify this property directly. For indexed access to characters, use `NSAttributedString`’s [length](https://developer.apple.com/documentation/foundation/nsattributedstring/length) method to access the string, and `NSString`’s [characterAtIndex:](https://developer.apple.com/documentation/foundation/nsstring/character%28at:%29) method to access the individual characters.

## See Also

### Accessing scriptable properties

- [attributeRuns](attributeruns.md): The text storage contents as an array of attribute runs.
- [paragraphs](paragraphs.md): The text storage contents as an array of paragraphs.
- [words](words.md): The text storage contents as an array of words.
- [font](font.md): The font for the text storage.
- [foregroundColor](foregroundcolor.md): The color for the text.
