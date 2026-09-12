> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/removecharacters(in:)-70nqp](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/removecharacters(in:)-70nqp)

# removeCharacters(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiver the characters whose Unicode values are in a given range.

## Declaration

```swift
func removeCharacters(in aRange: NSRange)
```

## Parameters

- `aRange`: The range of characters to remove. `aRange.location` is the value of the first character to remove; `aRange.location + aRange.length – 1` is the value of the last. If `aRange.length` is `0`, this method has no effect.

## See Also

### Adding and Removing Characters

- [addCharacters(in:)](addcharacters%28in_%29-4ppyw.md): Adds to the receiver the characters whose Unicode values are in a given range.
- [addCharacters(in:)](addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.
- [removeCharacters(in:)](removecharacters%28in_%29-762gt.md): Removes from the receiver the characters in a given string.

# removeCharactersInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiver the characters whose Unicode values are in a given range.

## Declaration

```objectivec
- (void) removeCharactersInRange:(NSRange) aRange;
```

## Parameters

- `aRange`: The range of characters to remove. `aRange.location` is the value of the first character to remove; `aRange.location + aRange.length – 1` is the value of the last. If `aRange.length` is `0`, this method has no effect.

## See Also

### Adding and Removing Characters

- [addCharactersInRange:](addcharacters%28in_%29-4ppyw.md): Adds to the receiver the characters whose Unicode values are in a given range.
- [addCharactersInString:](addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.
- [removeCharactersInString:](removecharacters%28in_%29-762gt.md): Removes from the receiver the characters in a given string.
