> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/replacecharacters(in:with:)-6oq9r](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/replacecharacters(in:with:)-6oq9r)

# replaceCharacters(in:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the characters in the given range with the characters of the given string.

## Declaration

```swift
func replaceCharacters(in range: NSRange, with str: String)
```

## Parameters

- `range`: A range specifying the characters to replace.
- `str`: A string specifying the characters to replace those in `range`.

<a id="Discussion"></a>

## Discussion

The new characters inherit the attributes of the first replaced character from `range`. Where the length of `range` is 0, the new characters inherit the attributes of the character preceding `range` if it has any, otherwise of the character following `range`.

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Characters

- [deleteCharacters(in:)](deletecharacters%28in_%29.md): Deletes the characters in the given range along with their associated attributes.

# replaceCharactersInRange:withString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the characters in the given range with the characters of the given string.

## Declaration

```objectivec
- (void) replaceCharactersInRange:(NSRange) range withString:(NSString *) str;
```

## Parameters

- `range`: A range specifying the characters to replace.
- `str`: A string specifying the characters to replace those in `range`.

<a id="Discussion"></a>

## Discussion

The new characters inherit the attributes of the first replaced character from `range`. Where the length of `range` is 0, the new characters inherit the attributes of the character preceding `range` if it has any, otherwise of the character following `range`.

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Changing Characters

- [deleteCharactersInRange:](deletecharacters%28in_%29.md): Deletes the characters in the given range along with their associated attributes.
