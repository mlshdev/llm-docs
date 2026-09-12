> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/addcharacters(in:)-4ppyw](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/addcharacters(in:)-4ppyw)

# addCharacters(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds to the receiver the characters whose Unicode values are in a given range.

## Declaration

```swift
func addCharacters(in aRange: NSRange)
```

## Parameters

- `aRange`: The range of characters to add. `aRange.location` is the value of the first character to add; `aRange.location + aRange.length – 1` is the value of the last. If `aRange.length` is `0`, this method has no effect.

<a id="Discussion"></a>

## Discussion

This code excerpt adds to a character set the lowercase English alphabetic characters:

```objc
NSMutableCharacterSet *aCharacterSet = [[NSMutableCharacterSet alloc] init];
NSRange lcEnglishRange;
 
lcEnglishRange.location = (unsigned int)'a';
lcEnglishRange.length = 26;
[aCharacterSet addCharactersInRange:lcEnglishRange];
```

## See Also

### Related Documentation

- [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i)

### Adding and Removing Characters

- [removeCharacters(in:)](removecharacters%28in_%29-70nqp.md): Removes from the receiver the characters whose Unicode values are in a given range.
- [addCharacters(in:)](addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.
- [removeCharacters(in:)](removecharacters%28in_%29-762gt.md): Removes from the receiver the characters in a given string.

# addCharactersInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds to the receiver the characters whose Unicode values are in a given range.

## Declaration

```objectivec
- (void) addCharactersInRange:(NSRange) aRange;
```

## Parameters

- `aRange`: The range of characters to add. `aRange.location` is the value of the first character to add; `aRange.location + aRange.length – 1` is the value of the last. If `aRange.length` is `0`, this method has no effect.

<a id="Discussion"></a>

## Discussion

This code excerpt adds to a character set the lowercase English alphabetic characters:

```objc
NSMutableCharacterSet *aCharacterSet = [[NSMutableCharacterSet alloc] init];
NSRange lcEnglishRange;
 
lcEnglishRange.location = (unsigned int)'a';
lcEnglishRange.length = 26;
[aCharacterSet addCharactersInRange:lcEnglishRange];
```

## See Also

### Related Documentation

- [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i)

### Adding and Removing Characters

- [removeCharactersInRange:](removecharacters%28in_%29-70nqp.md): Removes from the receiver the characters whose Unicode values are in a given range.
- [addCharactersInString:](addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.
- [removeCharactersInString:](removecharacters%28in_%29-762gt.md): Removes from the receiver the characters in a given string.
