> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextstorage/paragraphs

# paragraphs (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text storage contents as an array of paragraphs.

## Declaration

```swift
var paragraphs: [NSTextStorage] { get set }
```

<a id="Discussion"></a>

## Discussion

Unless you’re dealing with scriptability, you shouldn’t use or modify this property directly.

## See Also

### Accessing scriptable properties

- [attributeRuns](attributeruns.md): The text storage contents as an array of attribute runs.
- [words](words.md): The text storage contents as an array of words.
- [characters](characters.md): The text storage contents as an array of characters.
- [font](font.md): The font for the text storage.
- [foregroundColor](foregroundcolor.md): The color for the text.

# paragraphs (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text storage contents as an array of paragraphs.

## Declaration

```objectivec
@property (copy) NSArray<NSTextStorage *> * paragraphs;
```

<a id="Discussion"></a>

## Discussion

Unless you’re dealing with scriptability, you shouldn’t use or modify this property directly.

## See Also

### Accessing scriptable properties

- [attributeRuns](attributeruns.md): The text storage contents as an array of attribute runs.
- [words](words.md): The text storage contents as an array of words.
- [characters](characters.md): The text storage contents as an array of characters.
- [font](font.md): The font for the text storage.
- [foregroundColor](foregroundcolor.md): The color for the text.
