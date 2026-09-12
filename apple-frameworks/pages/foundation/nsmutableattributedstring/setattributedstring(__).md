> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/setattributedstring(_:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/setattributedstring(_:))

# setAttributedString(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.

## Declaration

```swift
func setAttributedString(_ attrString: NSAttributedString)
```

## Parameters

- `attrString`: The attributed string whose characters and attributes replace those in the receiver.

## See Also

### Changing Characters and Attributes

- [append(\_:)](append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.

# setAttributedString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.

## Declaration

```objectivec
- (void) setAttributedString:(NSAttributedString *) attrString;
```

## Parameters

- `attrString`: The attributed string whose characters and attributes replace those in the receiver.

## See Also

### Changing Characters and Attributes

- [appendAttributedString:](append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [appendLocalizedFormat:](appendlocalizedformat_.md): Formats the specified string and arguments with the current locale, then appends the result to the receiver.
- [insertAttributedString:atIndex:](insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [replaceCharactersInRange:withAttributedString:](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
