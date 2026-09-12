> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/appendlocalizedformat:](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/appendlocalizedformat:)

# appendLocalizedFormat:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats the specified string and arguments with the current locale, then appends the result to the receiver.

## Declaration

```objectivec
- (void) appendLocalizedFormat:(NSAttributedString *) format;
```

## See Also

### Changing Characters and Attributes

- [appendAttributedString:](append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [insertAttributedString:atIndex:](insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [replaceCharactersInRange:withAttributedString:](replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
- [setAttributedString:](setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.
