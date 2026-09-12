> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/removecharacters(in:)-762gt](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/removecharacters(in:)-762gt)

# removeCharacters(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiver the characters in a given string.

## Declaration

```swift
func removeCharacters(in aString: String)
```

## Parameters

- `aString`: The characters to remove from the receiver.

<a id="Discussion"></a>

## Discussion

This method has no effect if `aString` is empty.

## See Also

### Adding and Removing Characters

- [addCharacters(in:)](addcharacters%28in_%29-4ppyw.md): Adds to the receiver the characters whose Unicode values are in a given range.
- [removeCharacters(in:)](removecharacters%28in_%29-70nqp.md): Removes from the receiver the characters whose Unicode values are in a given range.
- [addCharacters(in:)](addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.

# removeCharactersInString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiver the characters in a given string.

## Declaration

```objectivec
- (void) removeCharactersInString:(NSString *) aString;
```

## Parameters

- `aString`: The characters to remove from the receiver.

<a id="Discussion"></a>

## Discussion

This method has no effect if `aString` is empty.

## See Also

### Adding and Removing Characters

- [addCharactersInRange:](addcharacters%28in_%29-4ppyw.md): Adds to the receiver the characters whose Unicode values are in a given range.
- [removeCharactersInRange:](removecharacters%28in_%29-70nqp.md): Removes from the receiver the characters whose Unicode values are in a given range.
- [addCharactersInString:](addcharacters%28in_%29-7q02.md): Adds to the receiver the characters in a given string.
