> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/replacecharacters(in:with:)-1uaw7](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/replacecharacters(in:with:)-1uaw7)

# replaceCharacters(in:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.

## Declaration

```swift
func replaceCharacters(in range: NSRange, with attrString: NSAttributedString)
```

## Parameters

- `range`: The range of characters and attributes replaced.
- `attrString`: The attributed string whose characters and attributes replace those in the specified range.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Characters and Attributes

- [append(\_:)](append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [setAttributedString(\_:)](setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.

# replaceCharactersInRange:withAttributedString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.

## Declaration

```objectivec
- (void) replaceCharactersInRange:(NSRange) range withAttributedString:(NSAttributedString *) attrString;
```

## Parameters

- `range`: The range of characters and attributes replaced.
- `attrString`: The attributed string whose characters and attributes replace those in the specified range.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Characters and Attributes

- [appendAttributedString:](append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [appendLocalizedFormat:](appendlocalizedformat_.md): Formats the specified string and arguments with the current locale, then appends the result to the receiver.
- [insertAttributedString:atIndex:](insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [setAttributedString:](setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.
