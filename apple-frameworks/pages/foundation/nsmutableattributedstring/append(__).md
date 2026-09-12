> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/append(_:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/append(_:))

# append(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the characters and attributes of a given attributed string to the end of the receiver.

## Declaration

```swift
func append(_ attrString: NSAttributedString)
```

## Parameters

- `attrString`: The string whose characters and attributes are added.

## See Also

### Changing Characters and Attributes

- [insert(\_:at:)](insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
- [setAttributedString(\_:)](setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.

# appendAttributedString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the characters and attributes of a given attributed string to the end of the receiver.

## Declaration

```objectivec
- (void) appendAttributedString:(NSAttributedString *) attrString;
```

## Parameters

- `attrString`: The string whose characters and attributes are added.

## See Also

### Changing Characters and Attributes

- [appendLocalizedFormat:](appendlocalizedformat_.md): Formats the specified string and arguments with the current locale, then appends the result to the receiver.
- [insertAttributedString:atIndex:](insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [replaceCharactersInRange:withAttributedString:](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
- [setAttributedString:](setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.
