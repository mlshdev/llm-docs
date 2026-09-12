> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/replacecharacters(in:with:)](https://developer.apple.com/documentation/appkit/nstextfinderclient/replacecharacters(in:with:))

# replaceCharacters(in:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the text in the specified range with the new string.

## Declaration

```swift
optional func replaceCharacters(in range: NSRange, with string: String)
```

## Parameters

- `range`: The specified range of the text to replace.
- `string`: The replacement string.

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for a complete description.

## See Also

### Replacing Text

- [shouldReplaceCharacters(inRanges:with:)](shouldreplacecharacters%28inranges_with_%29.md): Returns whether the specified strings should be replaced.
- [didReplaceCharacters()](didreplacecharacters%28%29.md): Specifies whether text characters were replaced.

# replaceCharactersInRange:withString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the text in the specified range with the new string.

## Declaration

```objectivec
- (void) replaceCharactersInRange:(NSRange) range withString:(NSString *) string;
```

## Parameters

- `range`: The specified range of the text to replace.
- `string`: The replacement string.

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for a complete description.

## See Also

### Replacing Text

- [shouldReplaceCharactersInRanges:withStrings:](shouldreplacecharacters%28inranges_with_%29.md): Returns whether the specified strings should be replaced.
- [didReplaceCharacters](didreplacecharacters%28%29.md): Specifies whether text characters were replaced.
