> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/shouldreplacecharacters(inranges:with:)](https://developer.apple.com/documentation/appkit/nstextfinderclient/shouldreplacecharacters(inranges:with:))

# shouldReplaceCharacters(inRanges:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the specified strings should be replaced.

## Declaration

```swift
optional func shouldReplaceCharacters(inRanges ranges: [NSValue], with strings: [String]) -> Bool
```

## Parameters

- `ranges`: The ranges of the strings to replace.
- `strings`: The replacement strings.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the replacement should occur; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for a complete description.

## See Also

### Replacing Text

- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29.md): Replaces the text in the specified range with the new string.
- [didReplaceCharacters()](didreplacecharacters%28%29.md): Specifies whether text characters were replaced.

# shouldReplaceCharactersInRanges:withStrings: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the specified strings should be replaced.

## Declaration

```objectivec
- (BOOL) shouldReplaceCharactersInRanges:(NSArray<NSValue *> *) ranges withStrings:(NSArray<NSString *> *) strings;
```

## Parameters

- `ranges`: The ranges of the strings to replace.
- `strings`: The replacement strings.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the replacement should occur; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for a complete description.

## See Also

### Replacing Text

- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29.md): Replaces the text in the specified range with the new string.
- [didReplaceCharacters](didreplacecharacters%28%29.md): Specifies whether text characters were replaced.
