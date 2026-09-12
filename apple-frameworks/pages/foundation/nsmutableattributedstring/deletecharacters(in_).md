> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/deletecharacters(in:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/deletecharacters(in:))

# deleteCharacters(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes the characters in the given range along with their associated attributes.

## Declaration

```swift
func deleteCharacters(in range: NSRange)
```

## Parameters

- `range`: A range specifying the characters to delete.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Related Documentation

- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.

### Changing Characters

- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29-6oq9r.md): Replaces the characters in the given range with the characters of the given string.

# deleteCharactersInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes the characters in the given range along with their associated attributes.

## Declaration

```objectivec
- (void) deleteCharactersInRange:(NSRange) range;
```

## Parameters

- `range`: A range specifying the characters to delete.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Related Documentation

- [replaceCharactersInRange:withAttributedString:](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.

### Changing Characters

- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29-6oq9r.md): Replaces the characters in the given range with the characters of the given string.
