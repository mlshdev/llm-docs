> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/insert(_:at:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/insert(_:at:))

# insert(\_:at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the characters and attributes of the given attributed string into the receiver at the given index.

## Declaration

```swift
func insert(_ attrString: NSAttributedString, at loc: Int)
```

## Parameters

- `attrString`: The string whose characters and attributes are inserted.
- `loc`: The index at which the characters and attributes are inserted.

<a id="Discussion"></a>

## Discussion

The new characters and attributes begin at the given index and the existing characters and attributes from the index to the end of the receiver are shifted by the length of the attributed string. Raises an [rangeException](../nsexceptionname/rangeexception.md) if `loc` lies beyond the end of the receiver’s characters.

## See Also

### Changing Characters and Attributes

- [append(\_:)](append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
- [setAttributedString(\_:)](setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.

# insertAttributedString:atIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the characters and attributes of the given attributed string into the receiver at the given index.

## Declaration

```objectivec
- (void) insertAttributedString:(NSAttributedString *) attrString atIndex:(NSUInteger) loc;
```

## Parameters

- `attrString`: The string whose characters and attributes are inserted.
- `loc`: The index at which the characters and attributes are inserted.

<a id="Discussion"></a>

## Discussion

The new characters and attributes begin at the given index and the existing characters and attributes from the index to the end of the receiver are shifted by the length of the attributed string. Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `loc` lies beyond the end of the receiver’s characters.

## See Also

### Changing Characters and Attributes

- [appendAttributedString:](append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [appendLocalizedFormat:](appendlocalizedformat_.md): Formats the specified string and arguments with the current locale, then appends the result to the receiver.
- [replaceCharactersInRange:withAttributedString:](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
- [setAttributedString:](setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.
